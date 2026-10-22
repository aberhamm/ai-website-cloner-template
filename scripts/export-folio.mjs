import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const primary = execFileSync('git', ['worktree', 'list', '--porcelain'], {encoding:'utf8'}).split('\n')[0].slice('worktree '.length);
const destination = path.join(primary, 'output', 'folio');
if (fs.existsSync(destination)) throw new Error(`Refusing to overwrite ${destination}`);
fs.mkdirSync(destination, {recursive:true});
for (const file of ['src','public','next.config.ts','tsconfig.json','postcss.config.mjs','eslint.config.mjs','.gitignore','.nvmrc']) {
  if (fs.existsSync(file)) fs.cpSync(file, path.join(destination,file), {recursive:true});
}
const original = JSON.parse(fs.readFileSync('package.json','utf8'));
const packages = (names) => Object.fromEntries(names.map(name=>[name,JSON.parse(fs.readFileSync(path.join(root,'node_modules',name,'package.json'),'utf8')).version]));
const pkg = {
  name:'folio-clone', version:'1.0.0', private:true,
  description:'A local reconstruction of all five public Folio pages',
  engines:original.engines,
  scripts:{dev:'next dev',build:'next build',start:'next start',lint:'eslint',typecheck:'tsc --noEmit',check:'npm run lint && npm run typecheck && npm run build'},
  dependencies:packages(['next','react','react-dom']),
  devDependencies:packages(['@tailwindcss/postcss','@types/node','@types/react','@types/react-dom','eslint','eslint-config-next','tailwindcss','typescript']),
};
fs.writeFileSync(path.join(destination,'package.json'),JSON.stringify(pkg,null,2)+'\n');
fs.copyFileSync('docs/research/folio/DELIVERY.md',path.join(destination,'README.md'));
console.log(destination);
