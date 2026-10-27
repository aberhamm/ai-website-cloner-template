import fs from 'node:fs';
import ts from 'typescript';
const iconMap = new Map();
const files=fs.readdirSync('src/components/folio').filter(f=>f.endsWith('.tsx'));
for(const file of files){
 const path='src/components/folio/'+file;
 let source=fs.readFileSync(path,'utf8');
 const ast=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 const replacements=[];const used=new Set();
 function walk(n){
  if(ts.isJsxElement(n)&&n.openingElement.tagName.getText(ast)==='svg'){
   const attrs=n.openingElement.attributes.getText(ast);
   const icon=attrs.match(/\blucide-([a-z][a-z0-9-]*)/);
   if(icon){
    const body=source.slice(n.openingElement.end,n.closingElement.pos);
    const key=icon[1]+':'+body.replace(/\s+/g,' ').trim();
    let item=iconMap.get(key);
    if(!item){
     let name=icon[1].split('-').map(s=>s[0].toUpperCase()+s.slice(1)).join('')+'Icon';
     if([...iconMap.values()].some(v=>v.name===name)) name=name.replace(/Icon$/,'VariantIcon');
     item={name,body};iconMap.set(key,item);
    }
    used.add(item.name);replacements.push({start:n.getStart(ast),end:n.end,text:`<${item.name} ${attrs} />`});return;
   }
  }
  ts.forEachChild(n,walk);
 }
 walk(ast);
 if(replacements.length){
  for(const r of replacements.reverse())source=source.slice(0,r.start)+r.text+source.slice(r.end);
  const imports=`import { ${[...used].sort().join(', ')} } from '@/components/icons';\n`;
  const at=source.startsWith('"use client";')?source.indexOf('\n')+1:0;
  source=source.slice(0,at)+imports+source.slice(at);
  fs.writeFileSync(path,source);
 }
}
let icons='import type { SVGProps } from "react";\n\n// Original source SVG paths shared across Folio components.\n';
for(const {name,body} of iconMap.values())icons+=`export function ${name}(props: SVGProps<SVGSVGElement>) {\n  return <svg {...props}>${body}</svg>;\n}\n\n`;
fs.writeFileSync('src/components/icons.tsx',icons);
console.log(`Extracted ${iconMap.size} reusable SVG icons`);
