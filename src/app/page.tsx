import { Header } from "@/components/yuko/Header";
import { Hero } from "@/components/yuko/Hero";
import { Science } from "@/components/yuko/Science";
import { About } from "@/components/yuko/About";
import { CareNotes } from "@/components/yuko/CareNotes";
import { Routines } from "@/components/yuko/Routines";
import { Faq } from "@/components/yuko/Faq";
import { Footer } from "@/components/yuko/Footer";
export default function Home() { return (<div className="mx-auto flex min-h-svh w-full max-w-[1440px] flex-col px-gutter pt-15 pb-6 md:pt-12 md:pb-4" id="top"><a className="fixed top-3 left-3 z-30 -translate-y-[150%] rounded-3xl bg-foreground px-5 py-3 text-white focus:translate-y-0" href="#main">Skip to content</a><Header /><main id="main" className="mt-16 flex flex-col gap-section md:mt-28"><Hero /><Science /><About /><CareNotes /><Routines /><Faq /></main><Footer /></div>); }
