'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Building2, CalendarDays, Check, CheckCircle2, Circle, CircleDashed, CircleDot, Diamond, Funnel, LayoutGrid, List, Plus, Search, Settings2 } from 'lucide-react';
import { members, pages, recordOwner } from '@/lib/crm';
import { useCRM } from './provider';
import type { CRMRecord } from '@/types/crm';
import './records-table.css';
import './opportunities-board.css';

const stages=['Qualification','Discovery','Proposal','Negotiation','Won','Lost'];
const stageIcons=[CircleDashed,Circle,CircleDot,CircleDot,CheckCircle2,Circle];
const money=(amount:string|number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(Number(amount)||0);
const closeDate=(record:CRMRecord)=>record.fields.closeDate?new Date(`${record.fields.closeDate}T12:00:00`).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}):record.text.match(/Close date\n([^\n]+)/)?.[1]||'—';
const ownerName=(record:CRMRecord)=>members.includes(record.fields.owner)?record.fields.owner:record.fields.owner==='6c7138af-bc42-4530-bc96-ff7255759a65'?members[0]:record.fields.owner==='76aed3b8-9e82-43e8-9191-87814628d1ad'?members[1]:recordOwner(record);
export function OpportunitiesBoard({path='/opportunities'}:{path?:string}) {
  const {records,updateRecord,openCreate}=useCRM();
  const [query,setQuery]=useState('');
  const [searchOpen,setSearchOpen]=useState(false);
  const [popup,setPopup]=useState('');
  const [owner,setOwner]=useState('');
  const [stageFilter,setStageFilter]=useState('');
  const [view,setView]=useState('board');
  const [dragging,setDragging]=useState('');
  const [dragOver,setDragOver]=useState('');
  const sourceText=pages[path]?.text||pages['/opportunities']?.text||'';
  const opportunities=records.filter(r=>r.type==='opportunities'&&(!path.startsWith('/lists/')||sourceText.includes(r.name))).filter(r=>(!owner||ownerName(r)===owner)&&(!stageFilter||r.fields.stage===stageFilter)&&`${r.fields.name||r.name} ${r.links[0]?.text||''}`.toLowerCase().includes(query.toLowerCase())).sort((a,b)=>{
    const ai=sourceText.indexOf(a.name),bi=sourceText.indexOf(b.name);
    return (ai<0?Infinity:ai)-(bi<0?Infinity:bi);
  });
  function card(record:CRMRecord){
    const name=record.fields.name||record.name;
    const account=records.find(r=>r.id===record.fields.accountId)?.fields.name||record.links.find(l=>l.href.startsWith('/accounts/'))?.text||'—';
    const person=ownerName(record);
    return <Link href={record.path} key={record.id} className={`opportunity-card${dragging===record.id?' opportunity-dragging':''}`} draggable onDragStart={e=>{setDragging(record.id);e.dataTransfer.setData('text/plain',record.id);e.dataTransfer.effectAllowed='move';}} onDragEnd={()=>{setDragging('');setDragOver('');}}><span className="opportunity-card-title">{name}</span><span className="opportunity-card-field"><Building2 size={14}/><span>{account}</span></span><span className="opportunity-card-field opportunity-card-amount"><Diamond size={14}/><span>{money(record.fields.amount)}</span></span><span className="opportunity-card-field"><CalendarDays size={14}/><span>{closeDate(record)}</span></span><span className="opportunity-card-field opportunity-card-owner"><span className="opportunity-owner-avatar">{person.split(' ').map(s=>s[0]).join('')}</span><span>{person}</span></span></Link>;
  }
  return <div className="opportunities-view"><div className="records-toolbar crm-toolbar"><div className="records-tools"><div className="records-popover-anchor"><button className="records-button" onClick={()=>setPopup(v=>v==='filter'?'':'filter')}><Funnel size={16}/>Filter{(owner||stageFilter)&&<span className="records-filter-dot"/>}</button>{popup==='filter'&&<div className="records-popover crm-popover"><span className="records-popover-title">Owner</span><button onClick={()=>setOwner('')}>All owners{!owner&&<Check size={14}/>}</button>{members.map(m=><button key={m} onClick={()=>setOwner(m)}>{m}{owner===m&&<Check size={14}/>}</button>)}<span className="records-popover-title">Stage</span><button onClick={()=>setStageFilter('')}>All stages{!stageFilter&&<Check size={14}/>}</button>{stages.map(s=><button key={s} onClick={()=>setStageFilter(s.toLowerCase())}>{s}{stageFilter===s.toLowerCase()&&<Check size={14}/>}</button>)}<button onClick={()=>{setOwner('');setStageFilter('');setPopup('');}}>Reset filters</button></div>}</div><button className="records-search-button" aria-label="Search opportunities" onClick={()=>setSearchOpen(v=>!v)}><Search size={17}/></button>{searchOpen&&<input autoFocus className="records-search" placeholder="Search opportunities…" value={query} onChange={e=>setQuery(e.target.value)}/>}</div><div className="records-popover-anchor"><button className="records-button" onClick={()=>setPopup(v=>v==='display'?'':'display')}><Settings2 size={16}/>Display</button>{popup==='display'&&<div className="records-popover records-display crm-popover"><span className="records-popover-title">Layout</span><button onClick={()=>{setView('board');setPopup('');}}><LayoutGrid size={14}/>Board{view==='board'&&<Check size={14}/>}</button><button onClick={()=>{setView('table');setPopup('');}}><List size={14}/>Table{view==='table'&&<Check size={14}/>}</button><button onClick={()=>{setView('board');setOwner('');setStageFilter('');setQuery('');setPopup('');}}>Reset display</button></div>}</div></div>
    {view==='board'?<div className="opportunities-scroll"><div className="opportunities-columns">{stages.map((stage,index)=>{
      const stageRecords=opportunities.filter(r=>r.fields.stage?.toLowerCase()===stage.toLowerCase());
      const Icon=stageIcons[index];
      return <section key={stage} className={`opportunity-column opportunity-stage-${stage.toLowerCase()}${dragOver===stage?' opportunity-drop-target':''}`} onDragOver={e=>{e.preventDefault();setDragOver(stage);}} onDragLeave={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))setDragOver('');}} onDrop={e=>{e.preventDefault();const id=e.dataTransfer.getData('text/plain');if(id)updateRecord(id,{stage:stage.toLowerCase()});setDragging('');setDragOver('');}}><div className="opportunity-stage-header"><Icon className="opportunity-stage-icon" size={13}/><span>{stage}</span><span className="opportunity-stage-count">{stageRecords.length}</span><button aria-label={`Create opportunity in ${stage}`} onClick={()=>openCreate('opportunities')}><Plus size={16}/></button></div><div className="opportunity-stage-cards">{stageRecords.map(card)}<button className="opportunity-create" onClick={()=>openCreate('opportunities')}><Plus size={14}/>Create opportunity</button></div><div className="opportunity-stage-total"><Diamond size={14}/>{money(stageRecords.reduce((sum,r)=>sum+Number(r.fields.amount||0),0))}</div></section>;
    })}</div></div>:<div className="records-scroll"><table className="records-table opportunity-table"><thead><tr>{['Name','Account','Stage','Amount','Close date','Owner'].map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{opportunities.map(r=><tr key={r.id}><td><Link href={r.path}>{r.fields.name||r.name}</Link></td><td>{r.links.find(l=>l.href.startsWith('/accounts/'))?.text||'—'}</td><td>{stages.find(s=>s.toLowerCase()===r.fields.stage)||r.fields.stage}</td><td>{money(r.fields.amount)}</td><td>{closeDate(r)}</td><td>{ownerName(r)}</td></tr>)}</tbody></table></div>}
  </div>;
}
