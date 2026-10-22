"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowDown,
  Check,
  Command,
  Copy,
  CornerDownLeft,
  ExternalLink,
  Square,
  SquareCheck,
  SquareMinus,
  X,
} from "lucide-react";
import { pages, tables } from "@/lib/crm";
import { useCRM } from "./provider";
import "./dashboard-chat.css";

const notice =
  "AI replies are turned off in this live demo. Connect a model to chat with your CRM.";
const statuses = [
  ["open", "Todo"],
  ["in_progress", "In progress"],
  ["done", "Done"],
  ["canceled", "Canceled"],
];
const chatPath = "/chat/652d1706-5a30-42d4-aea8-208df9c6f266";

function StatusIcon({ status }: { status: string }) {
  if (status === "in_progress") return <SquareMinus size={16} />;
  if (status === "done") return <SquareCheck size={16} />;
  if (status === "canceled") return <X size={16} />;
  return <Square size={16} />;
}

function Composer({
  dashboard = false,
  onSend,
}: {
  dashboard?: boolean;
  onSend?: (message: string) => void;
}) {
  const { records } = useCRM();
  const router = useRouter();
  const [draft, setDraft] = useState("");
  const [mentionsOpen, setMentionsOpen] = useState(false);
  const textarea = useRef<HTMLTextAreaElement>(null);
  function send() {
    const message = draft.trim();
    if (!message) return;
    if (dashboard) {
      sessionStorage.setItem("crm-chat-pending", message);
      router.push("/chat/new");
    } else onSend?.(message);
    setDraft("");
    setMentionsOpen(false);
  }
  const query = draft.split("@").at(-1)?.toLowerCase() || "";
  return (
    <div
      className={`dc-composer-area ${dashboard ? "dc-composer-dashboard" : ""}`}
    >
      {!dashboard && <p className="dc-notice">{notice}</p>}
      <form
        className="dc-composer"
        onSubmit={(event) => {
          event.preventDefault();
          send();
        }}
      >
        {mentionsOpen && (
          <div
            className="dc-mentions crm-popover"
            role="listbox"
            aria-label="Mention a record or task"
          >
            {records
              .filter((record) => record.name.toLowerCase().includes(query))
              .slice(0, 8)
              .map((record) => (
                <button
                  key={record.id}
                  type="button"
                  onClick={() => {
                    setDraft(
                      draft.slice(0, draft.lastIndexOf("@")) +
                        "@" +
                        record.name +
                        " ",
                    );
                    setMentionsOpen(false);
                    textarea.current?.focus();
                  }}
                >
                  <span>{record.name}</span>
                  <small>{record.type}</small>
                </button>
              ))}
            {!records.some((record) =>
              record.name.toLowerCase().includes(query),
            ) && <div className="dc-no-results">No records found</div>}
          </div>
        )}
        <textarea
          ref={textarea}
          aria-label="Message CRM"
          value={draft}
          placeholder="Ask anything, or @mention a record or task…"
          onChange={(event) => {
            setDraft(event.target.value);
            setMentionsOpen(/@[^@\n]*$/.test(event.target.value));
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") setMentionsOpen(false);
            if (event.key === "Enter" && !event.shiftKey && !mentionsOpen) {
              event.preventDefault();
              send();
            }
          }}
        />
        <button
          className="dc-send"
          type="submit"
          aria-label="Send message"
          disabled={!draft.trim()}
        >
          <CornerDownLeft size={16} />
        </button>
      </form>
    </div>
  );
}

export function Dashboard() {
  const { records, updateRecord } = useCRM();
  const [statusFor, setStatusFor] = useState<string | null>(null);
  const dates = [
    "Today",
    "Tomorrow",
    "Mon, Oct 26",
    "Tue, Oct 27",
    "Wed, Oct 28",
    "Thu, Oct 29",
  ];
  const taskLinks = pages["/home"].links.filter((link) =>
    link.href.startsWith("/tasks/"),
  );
  return (
    <div className="dc-dashboard">
      <div className="dc-dashboard-content">
        <h1>Thu, Oct 22</h1>
        <div className="dc-tasks-heading">
          <span>Tasks</span>
          <Link className="dc-overdue" href="/tasks?due=Overdue">
            1 overdue
          </Link>
          <Link href="/tasks">View all</Link>
        </div>
        <div>
          {taskLinks.map((link, index) => {
            const task = records.find((record) => record.path === link.href);
            if (!task) return null;
            return (
              <div className="dc-task" key={task.id}>
                <div className="dc-status-wrap">
                  <button
                    className={`dc-status dc-status-${task.fields.status}`}
                    aria-label={`Change status for ${task.name}`}
                    aria-expanded={statusFor === task.id}
                    onClick={() =>
                      setStatusFor(statusFor === task.id ? null : task.id)
                    }
                  >
                    <StatusIcon status={task.fields.status} />
                  </button>
                  {statusFor === task.id && (
                    <>
                      <button
                        className="dc-dismiss"
                        aria-label="Close status menu"
                        onClick={() => setStatusFor(null)}
                      />
                      <div className="dc-status-menu crm-popover">
                        {statuses.map(([value, label]) => (
                          <button
                            key={value}
                            onClick={() => {
                              updateRecord(task.id, { status: value });
                              setStatusFor(null);
                            }}
                          >
                            <StatusIcon status={value} />
                            <span>{label}</span>
                            {task.fields.status === value && (
                              <Check size={14} />
                            )}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <Link href={task.path} className="dc-task-title">
                  {task.name}
                </Link>
                <Link href={task.path} className="dc-due">
                  {dates[index]}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Composer dashboard />
    </div>
  );
}

function SavedConversation() {
  const table = tables[chatPath];
  const links = pages[chatPath].links.filter((link) =>
    link.text.startsWith("opportunities /"),
  );
  const [copied, setCopied] = useState(false);
  return (
    <>
      <div className="dc-user-message">
        Which late-stage deals close before mid-November, and what&apos;s
        blocking each one? Flag anything risky on{" "}
        <Link
          href="/opportunities/d2276825-243d-487f-ad75-09a8d9263e46"
          className="dc-mention"
        >
          @Cedarstone — Omnichannel suite
        </Link>
      </div>
      <article className="dc-ai-message">
        <div className="dc-ai-label">
          <Command size={16} />
          CRM
        </div>
        <p>
          You have <strong>5 deals</strong> in Proposal or Negotiation closing
          by Nov 14 — <strong>$655,500</strong> in total. Two are in Negotiation
          and account for 55% of that.
        </p>
        <div className="dc-table-wrap">
          <table>
            <thead>
              <tr>
                {table.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, index) => (
                <tr key={index}>
                  {row.cells.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>Cedarstone</strong> is the biggest risk: Tom wants a Q4
          go-live, but Rachel in procurement is holding on net-60 terms and a
          volume tier above 1,500 seats. I&apos;d offer net-45 with a 2-year
          price lock and get the pricing call on the calendar this week.
        </p>
        <p>Deals to push this week:</p>
        <div className="dc-deal-links">
          {links.map((link) => {
            const row = table.rows.find((item) =>
              item.cells[0].startsWith(
                link.href.includes("d227")
                  ? "Cedarstone"
                  : link.href.includes("148ff")
                    ? "Lumenfield"
                    : "Vantage",
              ),
            );
            return (
              <Link key={link.href} href={link.href}>
                {row?.cells[0]}
                <ExternalLink size={13} />
              </Link>
            );
          })}
        </div>
        <button
          className="dc-copy"
          aria-label={copied ? "Copied" : "Copy reply"}
          onClick={() => {
            void navigator.clipboard.writeText(
              "You have 5 deals in Proposal or Negotiation closing by Nov 14 — $655,500 in total.\n" +
                table.rows.map((row) => row.cells.join(" | ")).join("\n"),
            );
            setCopied(true);
          }}
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
        </button>
        <div className="dc-timestamp">Wednesday 19:57</div>
      </article>
    </>
  );
}

export function Chat({ path }: { path: string }) {
  const [messages, setMessages] = useState<string[]>([]);
  const body = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const pending = sessionStorage.getItem("crm-chat-pending");
    if (pending && path === "/chat/new") {
      const timer = setTimeout(() => {
        sessionStorage.removeItem("crm-chat-pending");
        setMessages((previous) => [...previous, pending]);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [path]);
  function scrollToEnd() {
    body.current?.scrollTo({
      top: body.current.scrollHeight,
      behavior: "smooth",
    });
  }
  function send(message: string) {
    setMessages((previous) => [...previous, message]);
    setTimeout(scrollToEnd, 30);
  }
  return (
    <div className="dc-chat">
      <div className="dc-chat-scroll" ref={body}>
        <div className="dc-chat-content">
          {path !== "/chat/new" && <SavedConversation />}
          {messages.map((message, index) => (
            <div className="dc-user-message dc-local-message" key={index}>
              {message}
            </div>
          ))}
        </div>
      </div>
      {path !== "/chat/new" && (
        <button
          className="dc-scroll-end"
          onClick={scrollToEnd}
          aria-label="Scroll to end"
        >
          <ArrowDown size={16} />
        </button>
      )}
      <Composer onSend={send} />
    </div>
  );
}
