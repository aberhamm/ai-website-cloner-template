export type RecordType = 'accounts' | 'contacts' | 'opportunities' | 'tasks';
export interface CRMRecord { id: string; type: string; name: string; path: string; fields: Record<string,string>; notes: string[]; links: {text:string;href:string}[]; text: string }
export interface CRMRow {cells:string[];links:{text:string;href:string}[]}
export interface CRMTable {headers:string[];rows:CRMRow[]}
