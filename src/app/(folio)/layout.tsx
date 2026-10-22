import type { Metadata } from 'next';
import './globals.css';
import { FolioHeader } from '@/components/folio/FolioHeader';
import { FolioFooter } from '@/components/folio/FolioFooter';
export const metadata: Metadata = { title: 'Folio', description: 'Making Data Intelligence Accessible', icons: { icon: '/folio/favicon.ico' } };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en" className="__variable_246ccd __variable_c29908 antialiased dark" data-scroll-behavior="smooth" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: 'try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.style.colorScheme=t;}}catch{}' }} /></head><body className="relative flex min-h-svh flex-col overflow-x-hidden"><FolioHeader />{children}<FolioFooter /></body></html>; }
