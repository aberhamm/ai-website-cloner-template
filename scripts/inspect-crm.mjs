import {execFileSync} from 'node:child_process';
import {writeFileSync,mkdirSync} from 'node:fs';
const bin='/Users/matthew/.npm/_npx/89549bd09d0c660d/node_modules/agent-browser/bin/agent-browser-darwin-arm64';
const run=(...args)=>execFileSync(bin,['--session','crm-source',...args],{encoding:'utf8',maxBuffer:20e6});
const evaluate=(fn)=>JSON.parse(JSON.parse(run('eval',fn)));
const routes=['/tasks','/home','/accounts','/contacts','/opportunities','/chat/new','/chat/652d1706-5a30-42d4-aea8-208df9c6f266','/lists/752c896a-e1bc-4349-9ddf-b28c6572ae44','/lists/8b76d67a-953f-4f16-a4cb-5d353ac5d5b5','/lists/792f0232-5855-4a6d-a067-3e58a109dba4'];
const captures={};
for(let i=0;i<routes.length;i++){
 const path=routes[i];run('open','https://21st-crm.vercel.app'+path);
 const data=evaluate(`JSON.stringify({title:document.title,text:document.body.innerText,html:document.querySelector('main')?.outerHTML,links:[...document.querySelectorAll('a[href]')].map(a=>({text:a.textContent.trim(),href:a.getAttribute('href')})),tables:[...document.querySelectorAll('table')].map(t=>({headers:[...t.querySelectorAll('thead th')].map(x=>x.textContent.trim()),rows:[...t.querySelectorAll('tbody tr')].map(tr=>({cells:[...tr.querySelectorAll('td')].map(td=>td.textContent.trim()),links:[...tr.querySelectorAll('a')].map(a=>({text:a.textContent.trim(),href:a.getAttribute('href')}))}))})),styles:[...document.querySelectorAll('h1,header,main,table,th,td,[data-slot="sidebar-container"]')].slice(0,24).map(el=>({tag:el.tagName,text:el.textContent.slice(0,50),rect:{x:el.getBoundingClientRect().x,y:el.getBoundingClientRect().y,width:el.getBoundingClientRect().width,height:el.getBoundingClientRect().height},css:Object.fromEntries(['fontSize','fontWeight','lineHeight','color','backgroundColor','padding','border','gap'].map(k=>[k,getComputedStyle(el)[k]]))})),images:[...document.images].map(i=>({src:i.src,alt:i.alt})),css:[...document.styleSheets].map(s=>s.href)})`);
 captures[path]=data;
 if(i<10){run('screenshot',`docs/design-references/${path.replaceAll('/','_')}.png`,'--full');}
 for(const l of data.links){if(/^\/(accounts|contacts|opportunities|tasks)\/[a-z0-9-]+$/.test(l.href)&&!routes.includes(l.href))routes.push(l.href);}
 writeFileSync('docs/research/captures.json',JSON.stringify(captures,null,2));
 console.log(i+1+'/'+routes.length+' '+path);
}
