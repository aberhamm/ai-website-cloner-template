import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const inter = localFont({src:'../../public/crm/inter.woff2',variable:'--font-inter',display:'swap',weight:'100 900'});
export const metadata: Metadata = { title:'CRM', description:'Your workspace for accounts, contacts, opportunities and tasks.', icons:{icon:'/crm/icon.svg'} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) { return <html lang="en" className={inter.variable}><body>{children}</body></html>; }
