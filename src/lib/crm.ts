import data from './crm-data.json';
import type { CRMRecord, CRMTable } from '@/types/crm';
export const records: CRMRecord[] = data.records as unknown as CRMRecord[];
export const tables: Record<string,CRMTable> = data.tables;
export const pages: Record<string,{text:string;links:{text:string;href:string}[]}> = data.pages;
export const members = ['Alex Morgan','Jamie Rivera','Sofia Nguyen'];
export const listLinks = [
 {name:'Champions',path:'/lists/752c896a-e1bc-4349-9ddf-b28c6572ae44',type:'contacts'},
 {name:'Q4 commit',path:'/lists/8b76d67a-953f-4f16-a4cb-5d353ac5d5b5',type:'opportunities'},
 {name:'Strategic accounts',path:'/lists/792f0232-5855-4a6d-a067-3e58a109dba4',type:'accounts'},
];
export const singular = (type:string) => ({accounts:'account',contacts:'contact',opportunities:'opportunity',tasks:'task'}[type] || 'record');
export const recordOwner = (r:CRMRecord) => members.find(m=>r.text.includes(m.split(' ')[0] === 'Sofia' ? '\nSN\n'+m : m==='Jamie Rivera'?'\nJR\n'+m:'\nAM\n'+m)) || 'Alex Morgan';
