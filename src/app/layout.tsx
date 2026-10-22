import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const inter = localFont({src:[{path:"../../../public/readable/nCpxWS6DaPlPe0lHzStXAPCo3lw.woff2",weight:"400"},{path:"../../../public/readable/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2",weight:"500"},{path:"../../../public/readable/dHHUz45rhM2KCQpj9zttNVlibk.woff2",weight:"600"},{path:"../../../public/readable/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2",weight:"700"}],variable:"--font-readable",display:"swap"});
export const metadata: Metadata={title:"Readable - AI Mobile App Showcase",description:"Seamless Article Discovery with AI-Powered Search",icons:{icon:"/readable/aTHWZjlwriiOo8Qpy2DtD6NQD4.png"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className={inter.variable}><body>{children}</body></html>}
