import {readFileSync,writeFileSync} from 'node:fs';
const captures=JSON.parse(readFileSync('docs/research/captures.json'));
const decode=s=>s.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#39;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>');
const attrs=s=>Object.fromEntries([...s.matchAll(/([\w-]+)="([^"]*)"/g)].map(m=>[m[1],decode(m[2])]));
const records=Object.entries(captures).filter(([p])=>/^\/(tasks|accounts|contacts|opportunities)\//.test(p)).map(([path,c])=>{
const fields={};for(const m of c.html.matchAll(/<input\b[^>]*>/g)){const a=attrs(m[0]);if(a.id)fields[a.id.replace(/^.*?-([a-zA-Z]+)$/,'$1')]=a.value||'';else if(a.name)fields[a.name]=a.value||'';}
const title=decode(c.html.match(/<h2[^>]*>(.*?)<\/h2>/)?.[1]?.replace(/<[^>]*>/g,'')||'');
return {id:path.split('/')[2],type:path.split('/')[1],name:title,path,fields,notes:[...c.html.matchAll(/<textarea[^>]*>([\s\S]*?)<\/textarea>/g)].map(m=>decode(m[1])),links:c.links.filter(l=>l.href.startsWith('/')&&!['/home','/tasks','/accounts','/contacts','/opportunities'].includes(l.href)&&!l.href.startsWith('/chat/')&&!l.href.startsWith('/lists/')),text:c.text.split('Strategic accounts\n')[1]||c.text};
});
const tables=Object.fromEntries(Object.entries(captures).filter(([,v])=>v.tables.length).map(([k,v])=>[k,v.tables[0]]));
const pages=Object.fromEntries(Object.entries(captures).slice(0,10).map(([k,v])=>[k,{text:v.text,links:v.links}]));
writeFileSync('src/lib/crm-data.json',JSON.stringify({records,tables,pages},null,2));
console.log(records.length+' records; '+Object.keys(tables).length+' tables');
for(const [name,url]of Object.entries({inter:'https://21st-crm.vercel.app/_next/static/immutable/media/83afe278b6a6bb3c-s.p.45535valc9rzk.woff2',icon:'https://21st-crm.vercel.app/icon.svg'})){const res=await fetch(url);writeFileSync('public/crm/'+name+(name==='inter'?'.woff2':'.svg'),Buffer.from(await res.arrayBuffer()));}
