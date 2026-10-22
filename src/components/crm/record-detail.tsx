'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AlignLeft, AtSign, BriefcaseBusiness, Building2, CalendarDays, CheckSquare, ChevronsUpDown, Circle, DollarSign, Globe, Hash, Link2, ListTodo, MapPin, Phone, Plus, Square, Trash2, UserRound, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { CRMRecord } from '@/types/crm';
import { members, recordOwner, singular } from '@/lib/crm';
import { useCRM } from './provider';
import './record-detail.css';

const ownerIds = ['6c7138af-bc42-4530-bc96-ff7255759a65', '76aed3b8-9e82-43e8-9191-87814628d1ad', '13c9049c-460f-4183-a03b-ce57b28ef55a'];
const statusOptions = [{ value: 'open', label: 'Todo' }, { value: 'in_progress', label: 'In progress' }, { value: 'done', label: 'Done' }, { value: 'canceled', label: 'Canceled' }];
const stageOptions = ['Qualification', 'Discovery', 'Proposal', 'Negotiation', 'Won', 'Lost'].map(label => ({ value: label.toLowerCase(), label }));
type FieldSpec = { key: string; label: string; icon: LucideIcon; kind?: 'date' | 'owner' | 'status' | 'stage' | 'relations' | 'created'; target?: string };
const fieldSpecs: Record<string, FieldSpec[]> = {
  tasks: [
    { key: 'title', label: 'Title', icon: ListTodo }, { key: 'status', label: 'Status', icon: AlignLeft, kind: 'status' }, { key: 'dueDate', label: 'Due date', icon: CalendarDays, kind: 'date' }, { key: 'relatedRecords', label: 'Related records', icon: Link2, kind: 'relations' }, { key: 'assignee', label: 'Assignee', icon: UserRound, kind: 'owner' },
  ],
  contacts: [
    { key: 'name', label: 'Name', icon: UserRound }, { key: 'email', label: 'Email', icon: AtSign }, { key: 'phone', label: 'Phone', icon: Phone }, { key: 'role', label: 'Role', icon: BriefcaseBusiness }, { key: 'accountId', label: 'Account', icon: Building2, kind: 'relations', target: 'accounts' }, { key: 'owner', label: 'Owner', icon: UserRound, kind: 'owner' },
  ],
  accounts: [
    { key: 'name', label: 'Name', icon: Building2 }, { key: 'website', label: 'Website', icon: Globe }, { key: 'industry', label: 'Industry', icon: BriefcaseBusiness }, { key: 'revenue', label: 'Annual revenue (USD)', icon: DollarSign }, { key: 'headcount', label: 'Headcount', icon: Users }, { key: 'location', label: 'Location', icon: MapPin }, { key: 'linkedin', label: 'LinkedIn', icon: Link2 }, { key: 'facebook', label: 'Facebook', icon: Link2 }, { key: 'instagram', label: 'Instagram', icon: Link2 }, { key: 'twitter', label: 'Twitter / X', icon: Link2 }, { key: 'owner', label: 'Owner', icon: UserRound, kind: 'owner' }, { key: 'created', label: 'Created', icon: CalendarDays, kind: 'created' },
  ],
  opportunities: [
    { key: 'name', label: 'Name', icon: Hash }, { key: 'accountId', label: 'Account', icon: Building2, kind: 'relations', target: 'accounts' }, { key: 'stage', label: 'Stage', icon: AlignLeft, kind: 'stage' }, { key: 'amount', label: 'Amount (USD)', icon: DollarSign }, { key: 'closeDate', label: 'Close date', icon: CalendarDays, kind: 'date' }, { key: 'contactIds', label: 'Related contacts', icon: Users, kind: 'relations', target: 'contacts' }, { key: 'nextStep', label: 'Next step', icon: AlignLeft }, { key: 'owner', label: 'Owner', icon: UserRound, kind: 'owner' },
  ],
};
function originalDate(record: CRMRecord, label: string) {
  const match = record.text.match(new RegExp(`${label}\\n([A-Z][a-z]{2} \\d{1,2}, \\d{4})`));
  if (!match) return '';
  const date = new Date(match[1]);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
function dateLabel(value: string) {
  if (!value) return 'Pick a date';
  const date = new Date(`${value.slice(0, 10)}T12:00:00`);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function RecordDetail({ record: initialRecord }: { record: CRMRecord }) {
  const { records, updateRecord, updateNotes } = useCRM();
  const record = records.find(item => item.id === initialRecord.id) || initialRecord;
  const [recentActivity, setRecentActivity] = useState<string[]>([]);
  const [openRelation, setOpenRelation] = useState<string | null>(null);
  const [relationSearch, setRelationSearch] = useState('');
  const [focusNewNote, setFocusNewNote] = useState(false);
  const isOpportunity = record.type === 'opportunities';
  const noteOffset = isOpportunity ? 1 : 0;
  const notes = record.notes.slice(noteOffset);
  const Icon = record.type === 'tasks' ? ListTodo : record.type === 'accounts' ? Building2 : record.type === 'contacts' ? Users : BriefcaseBusiness;
  const displayName = record.fields.title || record.fields.name || record.name;
  const save = (key: string, value: string) => {
    if (record.fields[key] === value) return;
    updateRecord(record.id, { [key]: value });
    setRecentActivity(previous => [`Alex Morgan updated ${displayName}.`, ...previous]);
  };
  const saveNotes = (nextNotes: string[]) => {
    updateNotes(record.id, [...record.notes.slice(0, noteOffset), ...nextNotes]);
    setRecentActivity(previous => [`Alex Morgan updated a note on ${displayName}.`, ...previous]);
  };
  const originalActivity = record.text.split('Activity\n')[1]?.trim().split(/\n+/).filter(Boolean) || [];
  return (
    <article className="crm-detail" key={record.id}>
      <div className="crm-detail-title"><span className="crm-detail-record-icon"><Icon size={20} /></span><h1>{displayName}</h1></div>
      <div className="crm-detail-properties">
        {(fieldSpecs[record.type] || []).map(field => {
          const FieldIcon = field.icon;
          const value = record.fields[field.key] ?? (field.kind === 'date' || field.kind === 'created' ? originalDate(record, field.label) : field.key === 'nextStep' ? record.notes[0] || '' : '');
          const related = [...new Map(record.links.filter(link => !field.target || link.href.startsWith(`/${field.target}/`)).map(link => [link.href, link])).values()];
          const hasEditedRelations = record.fields[`${field.key}Edited`] === 'true';
          const selectedRecords = records.filter(item => (!field.target || item.type === field.target) && value.split(',').some(id => id === item.id || id === `${item.type}:${item.id}`));
          const relationLinks = hasEditedRelations ? selectedRecords.map(item => ({ href: item.path, text: item.name })) : related;
          const ownerName = members.includes(value) ? value : members[ownerIds.indexOf(value)] || recordOwner(record);
          return <div className="crm-detail-property" key={field.key}>
            <label className="crm-detail-label" htmlFor={`detail-${field.key}`}><FieldIcon size={14} /><span>{field.label}</span></label>
            <div className="crm-detail-value">
              {field.kind === 'owner' || field.kind === 'status' || field.kind === 'stage' ? <div className="crm-detail-select-wrap">
                {field.kind === 'owner' ? <span className="crm-detail-owner-avatar">{ownerName.split(' ').map(part => part[0]).join('')}</span> : field.kind === 'status' ? <Square className="crm-detail-select-icon" size={15} /> : <Circle className="crm-detail-select-icon" size={14} />}
                <select id={`detail-${field.key}`} aria-label={field.label} value={field.kind === 'owner' ? ownerName : value} onChange={event => save(field.key, event.target.value)}>
                  {(field.kind === 'owner' ? members.map(name => ({ label: name, value: name })) : field.kind === 'status' ? statusOptions : stageOptions).map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select><ChevronsUpDown className="crm-detail-chevron" size={12} />
              </div> : field.kind === 'relations' ? <div className="crm-detail-relations">
                <div className="crm-detail-related-links">{relationLinks.map(link => <Link key={link.href} href={link.href}><Users size={14} />{link.text.replace(/ (contact|account|opportunity|task)$/, '')}</Link>)}{!relationLinks.length && <span className="crm-detail-placeholder">Select {field.label.toLowerCase()}</span>}</div>
                <button aria-label={`Choose ${field.label.toLowerCase()}`} className="crm-detail-relation-toggle" onClick={() => { setOpenRelation(openRelation === field.key ? null : field.key); setRelationSearch(''); }}><ChevronsUpDown size={12} /></button>
                {openRelation === field.key && <div className="crm-detail-relation-menu"><input aria-label="Search records" autoFocus placeholder="Search records..." value={relationSearch} onChange={event => setRelationSearch(event.target.value)} /><div className="crm-detail-relation-options">{records.filter(item => item.id !== record.id && (!field.target || item.type === field.target) && item.name.toLowerCase().includes(relationSearch.toLowerCase())).map(item => <button key={item.id} onClick={() => { const multi = field.key !== 'accountId'; const current = relationLinks.map(link => records.find(candidate => candidate.path === link.href)).filter((candidate): candidate is CRMRecord => Boolean(candidate)); const next = multi ? current.some(candidate => candidate.id === item.id) ? current.filter(candidate => candidate.id !== item.id) : [...current, item] : [item]; updateRecord(record.id, { [field.key]: next.map(candidate => field.key === 'relatedRecords' ? `${candidate.type}:${candidate.id}` : candidate.id).join(','), [`${field.key}Edited`]: 'true' }); setOpenRelation(null); }}><span>{item.name}<small>{singular(item.type)}</small></span>{relationLinks.some(link => link.href === item.path) && <CheckSquare size={14} />}</button>)}</div><button className="crm-detail-menu-close" onClick={() => setOpenRelation(null)}>Close</button></div>}
              </div> : field.kind === 'date' ? <div className="crm-detail-date"><CalendarDays size={15} /><span>{dateLabel(value)}</span><input id={`detail-${field.key}`} type="date" aria-label={field.label} value={value.slice(0, 10)} onChange={event => save(field.key, event.target.value)} /></div> : field.kind === 'created' ? <span className="crm-detail-static">{dateLabel(value)}</span> : <input key={`${record.id}-${field.key}-${value}`} id={`detail-${field.key}`} className="crm-detail-input" defaultValue={value} placeholder="Empty" onBlur={event => save(field.key, event.target.value)} onKeyDown={event => { if (event.key === 'Enter') event.currentTarget.blur(); }} />}
            </div>
          </div>;
        })}
      </div>
      <section className="crm-detail-notes"><div className="crm-detail-section-heading"><h2>Notes</h2><button onClick={() => { setFocusNewNote(true); saveNotes([...notes, '']); }}><Plus size={12} />Add note</button></div>
        {notes.map((note, index) => <div className="crm-detail-note" key={`${record.id}-${index}-${note}`}><textarea autoFocus={focusNewNote && index === notes.length - 1} aria-label={`Note ${index + 1}`} placeholder="Write a note..." defaultValue={note} onBlur={event => { if (event.target.value !== note) saveNotes(notes.map((current, noteIndex) => noteIndex === index ? event.target.value : current)); }} /><button className="crm-detail-delete-note" aria-label={`Delete note ${index + 1}`} onClick={() => saveNotes(notes.filter((_, noteIndex) => noteIndex !== index))}><Trash2 size={13} /></button></div>)}
      </section>
      <section className="crm-detail-activity"><h2>Activity</h2>{recentActivity.map((activity, index) => <p key={`recent-${index}`}>{activity}<span>just now</span></p>)}{originalActivity.map((activity, index) => { const match = activity.match(/^(.*?)\s+(\d+\w? (?:ago)|just now)$/); return <p key={index}>{match ? match[1] : activity}<span>{match?.[2]}</span></p>; })}</section>
    </article>
  );
}
