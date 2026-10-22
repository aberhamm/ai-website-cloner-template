"use client";

import { useEffect, useState } from "react";
import type { StudioDialog } from "@/types/forma";

const sectionClass = "mx-auto w-full max-w-[1600px] px-gutter flex flex-col gap-10 py-section max-mobile:gap-8";
const arrowClass = "inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] text-foreground not-disabled:hover:bg-control-hover not-disabled:focus-visible:bg-control-hover size-9 p-2 bg-muted";
const filterClass = "rounded-full border-0 bg-muted px-3 py-2 text-[13px] text-foreground outline-none transition-colors duration-200 not-disabled:hover:bg-control-hover not-disabled:focus-visible:bg-control-hover not-disabled:data-[state=open]:bg-control-hover aria-invalid:border aria-invalid:border-[#b42318] [&>svg]:transition-transform [&>svg]:duration-200 data-[state=open]:[&>svg]:rotate-180 flex w-fit items-center justify-between gap-2 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 max-w-[230px] max-tablet:max-w-none max-mobile:min-h-11 max-mobile:w-[calc(50%-4px)] max-mobile:text-xs";
const dayClass = "flex min-w-0 items-center justify-center gap-2 rounded-xl border-0 bg-transparent px-2.5 py-[22px] transition-colors duration-200 hover:not-aria-pressed:bg-[#e8ecdf] max-mobile:flex-col max-mobile:gap-1 max-mobile:px-2 max-mobile:py-3.5";
const rowClass = "grid min-h-[68px] grid-cols-[112px_minmax(160px,1fr)_160px_64px_112px_136px] items-center gap-8 border-b border-border py-4 text-[15px]/6 last:border-b-0 max-compact:grid-cols-[90px_minmax(130px,1fr)_140px_54px_94px_136px] max-compact:gap-4 max-tablet:grid-cols-[75px_minmax(120px,1fr)_120px_52px_80px_128px] max-tablet:gap-3 max-tablet:text-[13px] max-mobile:grid-cols-[1fr_auto] max-mobile:gap-x-4 max-mobile:gap-y-1 max-mobile:py-6 max-mobile:text-[15px]";
const availabilityClass = "text-[13px] text-muted-foreground data-[available=true]:text-foreground data-[available=true]:before:mr-2 data-[available=true]:before:inline-block data-[available=true]:before:size-1 data-[available=true]:before:rounded-full data-[available=true]:before:bg-[#729755] data-[available=true]:before:align-middle max-mobile:col-start-2 max-mobile:row-start-1 max-mobile:text-right";
const bookingClass = "inline-flex shrink-0 items-center rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-primary text-primary-foreground not-disabled:hover:bg-[#343b30] not-disabled:focus-visible:bg-[#343b30] min-h-[34px] px-3 py-2 w-full justify-between gap-2 whitespace-nowrap max-mobile:col-start-2 max-mobile:row-start-4 max-mobile:w-auto max-mobile:min-w-[136px] max-mobile:self-center max-mobile:text-[13px]";
const headerClass = "grid grid-cols-[112px_minmax(160px,1fr)_160px_64px_112px_136px] items-center gap-8 border-b border-border py-4 text-[13px]/5 text-muted-foreground max-compact:grid-cols-[90px_minmax(130px,1fr)_140px_54px_94px_136px] max-compact:gap-4 max-tablet:grid-cols-[75px_minmax(120px,1fr)_120px_52px_80px_128px] max-tablet:gap-3 max-mobile:hidden";

const classOptions = ["All classes", "Reformer Foundations", "Reformer Flow", "Reformer Sculpt"];
const instructorOptions = ["All instructors", "Maya Bennett", "Sofia Martinez", "Chloe Nguyen"];
const sessions = [
  { time: "06:30", label: "6:30 AM", name: "Reformer Flow", instructor: "Maya Bennett", spots: 3 },
  { time: "09:00", label: "9:00 AM", name: "Reformer Foundations", instructor: "Sofia Martinez", spots: 5 },
  { time: "12:00", label: "12:00 PM", name: "Reformer Flow", instructor: "Chloe Nguyen", spots: 2 },
  { time: "17:30", label: "5:30 PM", name: "Reformer Sculpt", instructor: "Chloe Nguyen", spots: 1 },
  { time: "18:45", label: "6:45 PM", name: "Reformer Flow", instructor: "Maya Bennett", spots: 0 },
];

function addDays(date: Date, amount: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + amount);
  return result;
}

function dateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {direction === "right" ? <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></> : <><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></>}
  </svg>;
}

function Filter({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return <label data-size="default" data-slot="select-trigger" className={`${filterClass} relative focus-within:bg-control-hover`}>
    <span data-slot="select-value">{value}</span>
    <select aria-label={label} value={value} onChange={(event) => onChange(event.target.value)} className="absolute inset-0 h-full w-full cursor-pointer opacity-0">
      {options.map((option) => <option key={option}>{option}</option>)}
    </select>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
  </label>;
}

export function Schedule() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(timer);
  }, []);
  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const [classFilter, setClassFilter] = useState("All classes");
  const [instructorFilter, setInstructorFilter] = useState("All instructors");
  const weekStart = addDays(selectedDate, -((selectedDate.getDay() + 6) % 7));
  const weekEnd = addDays(weekStart, 6);
  const month = weekStart.toLocaleDateString("en-US", { month: "short" });
  const weekLabel = weekStart.getMonth() === weekEnd.getMonth()
    ? `${month} ${weekStart.getDate()}–${weekEnd.getDate()}`
    : `${month} ${weekStart.getDate()}–${weekEnd.toLocaleDateString("en-US", { month: "short" })} ${weekEnd.getDate()}`;
  const weekend = selectedDate.getDay() === 0 || selectedDate.getDay() === 6;
  const visibleSessions = sessions.filter((session) => (!weekend || session.time === "09:00" || session.time === "12:00")
    && (classFilter === "All classes" || classFilter === session.name)
    && (instructorFilter === "All instructors" || instructorFilter === session.instructor));

  return (
    <section id="schedule" className={sectionClass}>
      <h2>Upcoming classes</h2>
      <div className="flex flex-col gap-6" aria-busy="false">
        <div className="flex items-center justify-between gap-6 max-tablet:flex-col max-tablet:items-start max-mobile:gap-5">
          <div className="flex items-center gap-6 max-mobile:w-full max-mobile:flex-wrap max-mobile:justify-between max-mobile:gap-3">
            <h3 className="whitespace-nowrap max-mobile:text-[23px]/8 max-[361px]:text-[21px]">{weekLabel}</h3>
            <div className="flex shrink-0 gap-2 max-mobile:gap-1">
              <button type="button" className={arrowClass} aria-label="Previous week" onClick={() => setSelectedDate(addDays(selectedDate, -7))}><Arrow direction="left" /></button>
              <button type="button" className={arrowClass} aria-label="Next week" onClick={() => setSelectedDate(addDays(selectedDate, 7))}><Arrow /></button>
            </div>
          </div>
          <div className="flex gap-4 max-tablet:w-full max-mobile:gap-2">
            <Filter label="Filter by class" value={classFilter} options={classOptions} onChange={setClassFilter} />
            <Filter label="Filter by instructor" value={instructorFilter} options={instructorOptions} onChange={setInstructorFilter} />
          </div>
        </div>
        <div className="min-w-0 max-mobile:overflow-x-auto max-mobile:overscroll-x-contain max-mobile:[scrollbar-width:none] max-mobile:[mask-image:linear-gradient(to_right,#000_0%,#000_calc(100%-24px),transparent_100%)] max-mobile:[&::-webkit-scrollbar]:hidden">
          <fieldset className="relative isolate grid grid-cols-7 rounded-2xl bg-muted max-mobile:w-max max-mobile:grid-cols-[repeat(7,72px)] max-mobile:rounded-xl" aria-label="Choose a class date">
            {Array.from({ length: 7 }, (_, index) => {
              const date = addDays(weekStart, index);
              const key = dateKey(date);
              const selected = key === dateKey(selectedDate);
              const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
              return <button key={key} type="button" className={`${dayClass} aria-pressed:bg-sage`} data-date={key} aria-pressed={selected} aria-label={`${weekday}, ${key}`} onClick={() => setSelectedDate(date)}>
                <span className="relative z-2 text-[13px]/5 max-mobile:text-[11px]/4">{weekday}</span>
                <span className="relative z-2 text-[28px]/9 tracking-[-0.03em] max-mobile:text-2xl/7">{date.getDate()}</span>
              </button>;
            })}
          </fieldset>
        </div>
        <div className="mt-4 overflow-hidden max-mobile:mt-1" aria-live="polite">
          <div>
            <div className={headerClass} aria-hidden="true"><span>Time</span><span>Class</span><span>Instructor</span><span>Length</span><span>Availability</span><span /></div>
            {visibleSessions.map((session) => {
              const dateTime = `${dateKey(selectedDate)}T${session.time}`;
              const started = new Date(dateTime).getTime() <= now;
              const waitlist = session.spots === 0;
              function book() {
                const detail: StudioDialog = {
                  title: waitlist ? "Join waitlist" : `Book ${session.name}`,
                  subtitle: `${session.label} · ${selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric" })} · 50 min with ${session.instructor}`,
                  description: "Contact the studio to reserve your place.",
                  action: "Contact the studio",
                };
                window.dispatchEvent(new CustomEvent<StudioDialog>("forma:dialog", { detail }));
              }
              return <article key={session.time} className={rowClass}>
                <time className="max-mobile:col-start-1 max-mobile:text-[13px]/5 max-mobile:text-muted-foreground" dateTime={dateTime}>{session.label}</time>
                <h4 className="text-inherit font-normal max-mobile:col-start-1 max-mobile:row-start-2 max-mobile:text-xl/7 max-mobile:tracking-[-0.025em] max-[361px]:text-lg">{session.name}</h4>
                <span className="max-mobile:col-start-1 max-mobile:row-start-3 max-mobile:-mt-1 max-mobile:text-[13px] max-mobile:text-muted-foreground"><span className="hidden max-mobile:inline">with </span>{session.instructor}</span>
                <span className="text-[13px] text-muted-foreground max-mobile:col-start-1 max-mobile:row-start-4 max-mobile:self-center">50 min</span>
                <span data-available={!started && !waitlist} data-slot="schedule-availability" className={availabilityClass}>{started ? "" : waitlist ? "Waitlist" : `${session.spots} ${session.spots === 1 ? "spot left" : session.spots <= 3 ? "spots left" : "spots"}`}</span>
                <button type="button" data-slot="dialog-trigger" className={waitlist && !started ? bookingClass.replace("bg-primary text-primary-foreground not-disabled:hover:bg-[#343b30] not-disabled:focus-visible:bg-[#343b30]", "bg-control text-foreground not-disabled:hover:bg-control-hover not-disabled:focus-visible:bg-control-hover") : bookingClass} disabled={started} aria-haspopup="dialog" onClick={book}>{started ? "Started" : waitlist ? "Join waitlist" : "Book"}{!started && <Arrow />}</button>
              </article>;
            })}
            {visibleSessions.length === 0 && <p className="py-8 text-[15px] text-muted-foreground">No classes match these filters. Try another class or instructor.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
