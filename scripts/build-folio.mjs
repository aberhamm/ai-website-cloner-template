import fs from 'node:fs';
import path from 'node:path';
const base = 'https://folio-topaz-delta.vercel.app';
const research = 'docs/research/folio';
const pages = ['home','pricing','contact','terms','privacy'];
fs.mkdirSync('src/components/folio',{recursive:true});
const styles = new Map();
const assets = new Map();
const localAsset = (value) => {
  if (!value || value.startsWith('data:') || value.startsWith('#')) return value;
  const u = new URL(value, base);
  if (u.pathname === '/_next/image') return localAsset(u.searchParams.get('url'));
  if (u.origin !== base && !/\.(png|jpe?g|webp|svg|woff2?)(\?|$)/.test(u.pathname)) return value;
  const target = '/folio' + (u.origin===base ? u.pathname : '/external/'+u.hostname+u.pathname);
  assets.set(target,u.href);
  return target;
};
const attrsMap={class:'className',for:'htmlFor',tabindex:'tabIndex',readonly:'readOnly',autofocus:'autoFocus',colspan:'colSpan',rowspan:'rowSpan',maxlength:'maxLength',autocomplete:'autoComplete',spellcheck:'spellCheck',crossorigin:'crossOrigin',srcset:'srcSet',fetchpriority:'fetchPriority',viewbox:'viewBox',datetime:'dateTime',novalidate:'noValidate',formaction:'formAction',acceptcharset:'acceptCharset'};
const boolAttrs = new Set(['hidden','disabled','required','checked','multiple','selected','readOnly','autoFocus','noValidate']);
const voidTags = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
export const text = n => typeof n==='string'?n:n.children.map(text).join('');
export function jsx(n, level=0) {
  if(typeof n==='string') return n ? `{${JSON.stringify(n)}}` : '';
  if (['script','style','next-route-announcer'].includes(n.tag)) return '';
  const attrs={...n.attrs};
  if(attrs.style){
    let css=attrs.style;
    // Motion's finished transforms are static presentation; keep source CSS animations.
    if(css.includes('opacity: 0;') && /translateY|translateX/.test(css))css=css.replace(/opacity: 0;/g,'opacity: 1;').replace(/transform:[^;]+;/g,'transform: none;');
    if(!styles.has(css)) styles.set(css,`folio-s${styles.size}`);
    attrs.class=(attrs.class||'')+' '+styles.get(css);delete attrs.style;
  }
  if(n.tag==='img'){
    attrs.src=localAsset(attrs.src);delete attrs.srcset;delete attrs['data-nimg'];
  }
  if(attrs.href?.startsWith(base))attrs.href=attrs.href.slice(base.length)||'/';
  delete attrs['vt-update'];
  const parts=[];
  for(let [key,value] of Object.entries(attrs)){
    if(key.startsWith('on'))continue;
    key=attrsMap[key]||key;
    if(!key.startsWith('aria-')&&!key.startsWith('data-'))key=key.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
    if(boolAttrs.has(key)){if(value!==false)parts.push(key);continue;}
    if(key==='value'&&n.tag==='input')key='defaultValue';
    parts.push(`${key}=${JSON.stringify(value)}`);
  }
  const prefix='  '.repeat(level);
  const tag=({clippath:'clipPath',lineargradient:'linearGradient',radialgradient:'radialGradient',foreignobject:'foreignObject'})[n.tag]||n.tag;
  const open=`<${tag}${parts.length?' '+parts.join(' '):''}`;
  if(voidTags.has(n.tag))return `${prefix}${open} />`;
  const children=n.children.map(c=>jsx(c,level+1)).filter(Boolean);
  return `${prefix}${open}>${children.length?'\n'+children.join('\n')+'\n'+prefix:''}</${tag}>`;
}
const write=(file,str)=>fs.writeFileSync('src/components/folio/'+file+'.tsx',str);
const component=(name,node)=>{write(name,`/* Source DOM and utility styles transcribed from Folio. */\nexport function ${name}() {\n  return (\n${jsx(node,2)}\n  );\n}\n`);};
const home=JSON.parse(fs.readFileSync(research+'/home.json'));
component('FolioHeader',home.tree.children.find(n=>n.tag==='header'));
component('FolioFooter',home.tree.children.find(n=>n.tag==='footer'));
const main=home.tree.children.find(n=>n.tag==='main').children[0];
const names=['HeroSection','LogoCloud','HowItWorks','FeatureGrid','ShowcaseSection','Testimonials','FaqSection'];
main.children.forEach((node,i)=>component(names[i],node));
for(const page of pages.slice(1)){
  const data=JSON.parse(fs.readFileSync(research+'/'+page+'.json'));
  component(page[0].toUpperCase()+page.slice(1)+'Content',data.tree.children.find(n=>n.tag==='main'));
}
// Fetch original CSS, fonts and raster/vector assets, all served locally.
let css=''; const urls=new Set(pages.flatMap(p=>JSON.parse(fs.readFileSync(research+'/'+p+'.json')).styles.map(s=>s.url).filter(Boolean)));
for(const url of urls){const source=await (await fetch(url)).text();css+='\n'+source.replace(/url\(([^)]+)\)/g,(match,raw)=>{const value=raw.replace(/^['"]|['"]$/g,'');if(value.startsWith('data:'))return match;return `url("${localAsset(new URL(value,url).href)}")`;});}
css+='\n'+[...styles].map(([decl,name])=>`.${name}{${decl}}`).join('\n');
fs.writeFileSync('src/app/globals.css',css);
fs.mkdirSync('public/folio',{recursive:true});
assets.set('/folio/favicon.ico',base+'/favicon.ico');
const entries=[...assets];
for(let i=0;i<entries.length;i+=4){await Promise.all(entries.slice(i,i+4).map(async([file,url])=>{const r=await fetch(url);if(!r.ok)throw new Error(`${r.status} ${url}`);fs.mkdirSync(path.dirname('public'+file),{recursive:true});fs.writeFileSync('public'+file,Buffer.from(await r.arrayBuffer()));}));}
fs.writeFileSync(research+'/asset-manifest.json',JSON.stringify(Object.fromEntries(assets),null,2));
fs.writeFileSync('src/app/layout.tsx',`import type { Metadata } from 'next';\nimport './globals.css';\nimport { FolioHeader } from '@/components/folio/FolioHeader';\nimport { FolioFooter } from '@/components/folio/FolioFooter';\nexport const metadata: Metadata = { title: 'Folio', description: 'Making Data Intelligence Accessible', icons: { icon: '/folio/favicon.ico' } };\nexport default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en" className="__variable_246ccd __variable_c29908 antialiased dark" suppressHydrationWarning><body className="relative flex min-h-svh flex-col overflow-x-hidden"><FolioHeader />{children}<FolioFooter /></body></html>; }\n`);
fs.writeFileSync('src/app/page.tsx',names.map(n=>`import { ${n} } from '@/components/folio/${n}';`).join('\n')+`\nexport default function HomePage() { return <main className="flex min-h-screen flex-col"><div className="min-h-screen">${names.map(n=>`<${n} />`).join('')}</div></main>; }\n`);
for(const page of pages.slice(1)){
  fs.mkdirSync('src/app/'+page,{recursive:true});
  const name=page[0].toUpperCase()+page.slice(1)+'Content';
  fs.writeFileSync(`src/app/${page}/page.tsx`,`import { ${name} } from '@/components/folio/${name}';\nexport const metadata={title:${JSON.stringify(JSON.parse(fs.readFileSync(research+'/'+page+'.json')).title)}};\nexport default function Page(){return <${name} />;}\n`);
}
console.log(`Generated ${names.length+6} components and downloaded ${assets.size} assets`);
