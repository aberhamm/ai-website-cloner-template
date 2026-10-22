'use client';
import {createContext,useContext} from 'react';
import type {CRMRecord} from '@/types/crm';
export interface CRMContextValue {records:CRMRecord[];updateRecord:(id:string,fields:Record<string,string>)=>void;updateNotes:(id:string,notes:string[])=>void;deleteRecord:(id:string)=>void;openCreate:(type:string)=>void}
export const CRMContext=createContext<CRMContextValue>({records:[],updateRecord:()=>{},updateNotes:()=>{},deleteRecord:()=>{},openCreate:()=>{}});
export const useCRM=()=>useContext(CRMContext);
