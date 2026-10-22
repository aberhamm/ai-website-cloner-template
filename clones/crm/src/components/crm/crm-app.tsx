"use client";

import { useEffect, useRef, useState, startTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  Check,
  CheckSquare2,
  ChevronDown,
  ChevronRight,
  ChevronsLeft,
  Clock3,
  Diamond,
  Funnel,
  Handshake,
  Link2,
  List,
  ListTodo,
  LogOut,
  MessageSquare,
  MoreHorizontal,
  PanelLeft,
  Plus,
  Search,
  Settings,
  SlidersHorizontal,
  Square,
  UserRound,
  Users,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  records as initialRecords,
  members,
  listLinks,
  singular,
  tables,
  recordOwner,
} from "@/lib/crm";
import type { CRMRecord } from "@/types/crm";
import { CRMContext, useCRM } from "./provider";
import { RecordsTable } from "./records-table";
import { OpportunitiesBoard } from "./opportunities-board";
import { RecordDetail } from "./record-detail";
import { Dashboard, Chat } from "./dashboard-chat";
import "./crm-app.css";

const icons: Record<string, LucideIcon> = {
  home: Clock3,
  tasks: ListTodo,
  accounts: Building2,
  contacts: Users,
  opportunities: Handshake,
  chat: MessageSquare,
  lists: List,
  profile: UserRound,
  company: Building2,
  team: Users,
};
const statusOptions = [
  { value: "open", label: "Todo" },
  { value: "in_progress", label: "In progress" },
  { value: "done", label: "Done" },
  { value: "canceled", label: "Canceled" },
];
type SavedList = { name: string; path: string; type: string };
export function Avatar({
  name,
  small = false,
}: {
  name: string;
  small?: boolean;
}) {
  return (
    <span className={`crm-avatar${small ? " small" : ""}`} aria-hidden="true">
      {name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")}
    </span>
  );
}
export function StatusIcon({ status }: { status: string }) {
  return status === "done" || status === "completed" ? (
    <CheckSquare2 size={16} />
  ) : status === "in_progress" ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" />
      <rect x="5" y="4" width="3" height="8" fill="currentColor" />
    </svg>
  ) : status === "canceled" ? (
    <X size={16} />
  ) : (
    <Square size={16} color="#8a8a8a" />
  );
}
export function CRMApp() {
  const path = usePathname();
  const router = useRouter();
  const [records, setRecords] = useState<CRMRecord[]>(initialRecords);
  const [savedLists, setSavedLists] = useState<SavedList[]>(listLinks);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [groups, setGroups] = useState<Record<string, boolean>>({
    Chats: true,
    Records: true,
    Lists: true,
  });
  const [menu, setMenu] = useState("");
  const [createType, setCreateType] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const [profile, setProfile] = useState({
    name: "Alex Morgan",
    email: "alex@northwind.co",
    company: "Northwind",
  });
  const [listName, setListName] = useState("");
  const [listType, setListType] = useState("contacts");
  useEffect(() => {
    try {
      const stored = localStorage.getItem("crm-clone-v1");
      if (stored) {
        const s = JSON.parse(stored);
        startTransition(() => {
          if (s.records) setRecords(s.records);
          if (s.lists) setSavedLists(s.lists);
          if (s.profile) setProfile(s.profile);
        });
      }
    } catch {}
  }, []);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((s) => !s);
      }
      if (e.key === "Escape") {
        setMenu("");
        setSearchOpen(false);
        setCreateType("");
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, []);
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2400);
    return () => clearTimeout(timer);
  }, [toast]);
  const persist = (
    next: CRMRecord[] = records,
    lists = savedLists,
    nextProfile = profile,
  ) => {
    localStorage.setItem(
      "crm-clone-v1",
      JSON.stringify({ records: next, lists, profile: nextProfile }),
    );
  };
  const updateRecord = (id: string, fields: Record<string, string>) => {
    setRecords((prev) => {
      const next = prev.map((r) =>
        r.id === id
          ? {
              ...r,
              fields: { ...r.fields, ...fields },
              name: fields.name || fields.title || r.name,
            }
          : r,
      );
      persist(next);
      return next;
    });
  };
  const updateNotes = (id: string, notes: string[]) => {
    setRecords((prev) => {
      const next = prev.map((r) => (r.id === id ? { ...r, notes } : r));
      persist(next);
      return next;
    });
  };
  const deleteRecord = (id: string) => {
    setRecords((prev) => {
      const next = prev.filter((r) => r.id !== id);
      persist(next);
      return next;
    });
    setToast("Record deleted");
  };
  const record = records.find((r) => r.path === path);
  const section = path.split("/")[1] || "tasks";
  const list = savedLists.find((l) => l.path === path);
  const isSettings = section === "settings";
  const title = record
    ? record.name
    : list
      ? list.name
      : isSettings
        ? (path.split("/")[2] || "profile").replace(/^./, (c) =>
            c.toUpperCase(),
          )
        : section === "home"
          ? "Up next"
          : section === "chat"
            ? path.endsWith("/new")
              ? "New chat"
              : "Q4 late-stage pipeline review"
            : section.replace(/^./, (c) => c.toUpperCase());
  const Icon = icons[section] || List;
  const showCreate =
    !record &&
    ["tasks", "accounts", "contacts", "opportunities", "lists"].includes(
      section,
    );
  const creationType = list?.type || section;
  const navigate = () => {
    setMobileOpen(false);
    setMenu("");
  };
  const nav = (label: string, href: string, NavIcon: LucideIcon) => (
    <Link
      key={href}
      className={`crm-nav-link ${path === href ? "active" : ""}`}
      href={href}
      onClick={navigate}
      title={label}
    >
      <NavIcon size={16} />
      <span>{label}</span>
    </Link>
  );
  const openCreate = (type: string) => {
    setCreateType(type);
    setMenu("");
  };
  const create = (fields: Record<string, string>) => {
    const id = crypto.randomUUID();
    const type = createType;
    const name = fields.name || fields.title;
    const related = records.find(
      (r) => r.id === fields.relatedRecords || r.id === fields.accountId,
    );
    const newRecord: CRMRecord = {
      id,
      type,
      name,
      path: `/${type}/${id}`,
      fields,
      notes: [],
      links: related ? [{ text: related.name, href: related.path }] : [],
      text: `${name}\n${type === "tasks" ? "Assignee" : "Owner"}\n${fields.assignee || fields.owner || "Alex Morgan"}\nActivity\nAlex Morgan created ${name}. just now`,
    };
    const next = [...records, newRecord];
    setRecords(next);
    persist(next);
    setCreateType("");
    setToast(`${singular(type).replace(/^./, (c) => c.toUpperCase())} created`);
  };
  return (
    <CRMContext.Provider
      value={{ records, updateRecord, updateNotes, deleteRecord, openCreate }}
    >
      <div
        className={`crm-layout ${collapsed ? "sidebar-collapsed" : ""} ${mobileOpen ? "mobile-sidebar-open" : ""}`}
      >
        <a href="#main-content" className="crm-skip">
          Skip to content
        </a>
        {mobileOpen && (
          <button
            className="crm-drawer-shade"
            aria-label="Close sidebar"
            onClick={() => setMobileOpen(false)}
          />
        )}
        <aside
          className="crm-sidebar"
          aria-label={isSettings ? "Settings" : "Sidebar"}
        >
          <div className="crm-sidebar-top">
            {isSettings ? (
              <Link className="crm-back" href="/tasks">
                <ArrowLeft size={16} />
                <span>Settings</span>
              </Link>
            ) : (
              <button
                className="crm-account"
                aria-label={`Account menu for ${profile.name}`}
                aria-expanded={menu === "account"}
                onClick={() => setMenu(menu === "account" ? "" : "account")}
              >
                <Avatar name={profile.name} small />
                <span>{profile.name}</span>
                <ChevronDown size={12} className="crm-muted" />
              </button>
            )}
            {!isSettings && (
              <button
                className="crm-icon-btn sidebar-search"
                aria-label="Search"
                title="Search (⌘K / Ctrl+K)"
                onClick={() => setSearchOpen(true)}
              >
                <Search size={16} />
              </button>
            )}
            <button
              className="crm-icon-btn"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              onClick={() => setCollapsed(!collapsed)}
            >
              <ChevronsLeft size={16} />
            </button>
            {menu === "account" && (
              <>
                <button
                  className="crm-menu-dismiss"
                  aria-label="Close menu"
                  onClick={() => setMenu("")}
                />
                <div className="crm-popover account-menu">
                  <Link href="/settings/profile" onClick={navigate}>
                    <Settings size={15} />
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      setMenu("");
                      setToast("You are using the CRM demo.");
                    }}
                  >
                    <LogOut size={15} />
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="crm-sidebar-content">
            {isSettings ? (
              <section className="crm-nav-section">
                {nav("Profile", "/settings/profile", UserRound)}
                {nav("Company", "/settings/company", Building2)}
                {nav("Team", "/settings/team", Users)}
              </section>
            ) : (
              <>
                <section className="crm-nav-section">
                  {nav("Up next", "/home", Clock3)}
                  {nav("Tasks", "/tasks", ListTodo)}
                </section>
                {["Chats", "Records", "Lists"].map((group) => (
                  <section key={group} className="crm-nav-section">
                    <button
                      className="crm-nav-label"
                      aria-expanded={groups[group]}
                      onClick={() =>
                        setGroups({ ...groups, [group]: !groups[group] })
                      }
                    >
                      <span>{group}</span>
                      <ChevronRight
                        size={12}
                        className={groups[group] ? "rotate" : ""}
                      />
                    </button>
                    {groups[group] && (
                      <nav aria-label={group}>
                        {group === "Chats" ? (
                          <>
                            {nav("New chat", "/chat/new", Plus)}
                            <div className="crm-nav-item">
                              {nav(
                                "Q4 late-stage pipeline review",
                                "/chat/652d1706-5a30-42d4-aea8-208df9c6f266",
                                MessageSquare,
                              )}
                              <button
                                className="crm-nav-more"
                                aria-label="Chat options for Q4 late-stage pipeline review"
                                onClick={() =>
                                  setMenu(menu === "chat" ? "" : "chat")
                                }
                              >
                                <MoreHorizontal size={14} />
                              </button>
                              {menu === "chat" && (
                                <div className="crm-popover">
                                  <button
                                    onClick={() => {
                                      router.push("/chat/new");
                                      setMenu("");
                                    }}
                                  >
                                    New chat
                                  </button>
                                  <button
                                    onClick={() => {
                                      setToast("Chat link copied");
                                      navigator.clipboard?.writeText(
                                        location.origin +
                                          "/chat/652d1706-5a30-42d4-aea8-208df9c6f266",
                                      );
                                      setMenu("");
                                    }}
                                  >
                                    Copy link
                                  </button>
                                </div>
                              )}
                            </div>
                          </>
                        ) : group === "Records" ? (
                          <>
                            {nav("Accounts", "/accounts", Building2)}
                            {nav("Contacts", "/contacts", Users)}
                            {nav("Opportunities", "/opportunities", Handshake)}
                          </>
                        ) : (
                          <>
                            <button
                              className="crm-nav-link"
                              onClick={() => {
                                setListName("");
                                openCreate("list");
                              }}
                            >
                              <Plus size={16} />
                              <span>New list</span>
                            </button>
                            {savedLists.map((l) =>
                              nav(
                                l.name,
                                l.path,
                                l.type === "accounts"
                                  ? Building2
                                  : l.type === "opportunities"
                                    ? Diamond
                                    : UserRound,
                              ),
                            )}
                          </>
                        )}
                      </nav>
                    )}
                  </section>
                ))}
              </>
            )}
          </div>
        </aside>
        <main id="main-content" className="crm-main">
          <header className="crm-header">
            <button
              className="crm-icon-btn mobile-toggle"
              aria-label="Toggle Sidebar"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <PanelLeft size={16} />
            </button>
            <Icon size={16} className="crm-muted header-icon" />
            {record ? (
              <>
                <Link href={`/${record.type}`} className="crm-muted">
                  {record.type.replace(/^./, (c) => c.toUpperCase())}
                </Link>
                <ChevronRight size={13} className="crm-muted" />
                <h1>{title}</h1>
              </>
            ) : (
              <h1>{title}</h1>
            )}
            {list && (
              <>
                <span className="crm-list-type crm-muted">
                  {list.type.replace(/^./, (c) => c.toUpperCase())}
                </span>
                <div className="crm-header-list-menu">
                  <button
                    className="crm-icon-btn"
                    aria-label="List options"
                    onClick={() => setMenu(menu === "list" ? "" : "list")}
                  >
                    <MoreHorizontal size={16} />
                  </button>
                  {menu === "list" && (
                    <div className="crm-popover">
                      <button
                        onClick={() => {
                          setListName(list.name);
                          setListType(list.type);
                          openCreate("rename-list");
                        }}
                      >
                        Rename list
                      </button>
                      <button
                        onClick={() => {
                          const next = savedLists.filter(
                            (l) => l.path !== path,
                          );
                          setSavedLists(next);
                          persist(records, next);
                          router.push("/tasks");
                          setMenu("");
                        }}
                      >
                        Delete list
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
            <div className="crm-header-actions">
              {record ? (
                <button
                  className="crm-btn"
                  onClick={() => {
                    navigator.clipboard?.writeText(location.href);
                    setToast("Link copied");
                  }}
                >
                  <Link2 size={16} />
                  Copy link
                </button>
              ) : showCreate ? (
                <button
                  className="crm-btn"
                  onClick={() => openCreate(creationType)}
                >
                  <Plus size={16} />
                  Create {singular(creationType)}
                </button>
              ) : section === "chat" ? (
                <Link className="crm-btn" href="/chat/new">
                  <Plus size={16} />
                  New chat
                </Link>
              ) : null}
            </div>
          </header>
          <div className="crm-page-content" key={path}>
            {record ? (
              <RecordDetail record={record} />
            ) : section === "tasks" ? (
              <Tasks />
            ) : section === "home" ? (
              <Dashboard />
            ) : section === "chat" ? (
              <Chat path={path} />
            ) : section === "settings" ? (
              <SettingsPage
                page={path.split("/")[2]}
                profile={profile}
                onSave={(p) => {
                  setProfile(p);
                  persist(records, savedLists, p);
                  setToast("Changes saved");
                }}
              />
            ) : section === "opportunities" ? (
              <OpportunitiesBoard />
            ) : list && list.type === "opportunities" ? (
              <OpportunitiesBoard path={path} />
            ) : section === "accounts" || section === "contacts" || list ? (
              <RecordsTable
                path={tables[path] ? path : `/${list?.type || section}`}
              />
            ) : (
              <div className="crm-empty">
                Record not found. <Link href="/tasks">Return to tasks</Link>
              </div>
            )}
          </div>
        </main>
        {createType &&
        (createType === "list" || createType === "rename-list") ? (
          <Modal
            title={createType === "list" ? "Create list" : "Rename list"}
            description={
              createType === "list"
                ? "Create a list to organize your records."
                : undefined
            }
            onClose={() => setCreateType("")}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const next =
                  createType === "rename-list"
                    ? savedLists.map((l) =>
                        l.path === path ? { ...l, name: listName } : l,
                      )
                    : [
                        ...savedLists,
                        {
                          name: listName,
                          path: "/lists/" + crypto.randomUUID(),
                          type: listType,
                        },
                      ];
                setSavedLists(next);
                persist(records, next);
                setCreateType("");
                if (createType === "list")
                  router.push(next[next.length - 1].path);
              }}
            >
              <label className="crm-form-field">
                Name *
                <input
                  className="crm-input"
                  required
                  autoFocus
                  value={listName}
                  onChange={(e) => setListName(e.target.value)}
                />
              </label>
              {createType === "list" && (
                <label className="crm-form-field">
                  Object
                  <select
                    className="crm-input"
                    value={listType}
                    onChange={(e) => setListType(e.target.value)}
                  >
                    <option value="contacts">Contacts</option>
                    <option value="accounts">Accounts</option>
                    <option value="opportunities">Opportunities</option>
                  </select>
                </label>
              )}
              <div className="crm-modal-footer">
                <button
                  type="button"
                  className="crm-btn"
                  onClick={() => setCreateType("")}
                >
                  Cancel
                </button>
                <button className="crm-btn">
                  {createType === "list" ? "Create list" : "Save changes"}
                </button>
              </div>
            </form>
          </Modal>
        ) : createType ? (
          <CreateRecord
            type={createType}
            records={records}
            onClose={() => setCreateType("")}
            onCreate={create}
          />
        ) : null}
        {searchOpen && (
          <Modal title="Search" onClose={() => setSearchOpen(false)}>
            <div className="crm-global-search">
              <Search size={18} />
              <input
                autoFocus
                placeholder="Search records and tasks…"
                aria-label="Search records and tasks"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <kbd>Esc</kbd>
            </div>
            <div className="crm-search-results">
              {records
                .filter(
                  (r) =>
                    !search ||
                    r.name.toLowerCase().includes(search.toLowerCase()),
                )
                .slice(0, 30)
                .map((r) => {
                  const RIcon = icons[r.type];
                  return (
                    <Link
                      key={r.id}
                      href={r.path}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearch("");
                      }}
                    >
                      <RIcon size={16} />
                      <span>{r.name}</span>
                      <small>{singular(r.type)}</small>
                    </Link>
                  );
                })}
            </div>
          </Modal>
        )}
        {toast && (
          <div className="crm-toast" role="status">
            <Check size={16} />
            {toast}
          </div>
        )}
      </div>
    </CRMContext.Provider>
  );
}
function Modal({
  title,
  description,
  children,
  onClose,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const old = document.activeElement;
    const node = ref.current;
    const first = node?.querySelector<HTMLElement>(
      "input,button,select,textarea",
    );
    first?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        const items = node?.querySelectorAll<HTMLElement>(
          "button,input,select,textarea,a[href]",
        );
        if (!items?.length) return;
        const first = items[0],
          last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", trap);
    return () => {
      document.removeEventListener("keydown", trap);
      if (old instanceof HTMLElement) old.focus();
    };
  }, []);
  return (
    <div
      className="crm-modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="crm-modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        ref={ref}
      >
        <h2>{title}</h2>
        {description && <p className="crm-modal-description">{description}</p>}
        {children}
      </div>
    </div>
  );
}
function CreateRecord({
  type,
  records,
  onClose,
  onCreate,
}: {
  type: string;
  records: CRMRecord[];
  onClose: () => void;
  onCreate: (fields: Record<string, string>) => void;
}) {
  const [fields, setFields] = useState<Record<string, string>>({
    status: "open",
    stage: "qualification",
    assignee: "",
    owner: "Alex Morgan",
  });
  const object = singular(type);
  const change = (key: string, value: string) =>
    setFields({ ...fields, [key]: value });
  const input = (
    key: string,
    label: string,
    inputType = "text",
    required = false,
  ) => (
    <label key={key} className="crm-form-field">
      {label}
      {required ? " *" : ""}
      <input
        className="crm-input"
        autoFocus={required}
        type={inputType}
        required={required}
        value={fields[key] || ""}
        onChange={(e) => change(key, e.target.value)}
      />
    </label>
  );
  const select = (
    key: string,
    label: string,
    options: { value: string; label: string }[],
  ) => (
    <label key={key} className="crm-form-field">
      {label}
      <select
        className="crm-input"
        value={fields[key] || ""}
        onChange={(e) => change(key, e.target.value)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
  return (
    <Modal
      title={`Create ${object}`}
      description={`Enter the details for your ${object}.`}
      onClose={onClose}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onCreate(fields);
        }}
      >
        {input(
          type === "tasks" ? "title" : "name",
          type === "tasks" ? "Title" : "Name",
          "text",
          true,
        )}
        {type === "tasks" ? (
          <>
            {select("status", "Status", statusOptions)}
            {input("dueDate", "Due date", "date")}
            {select("relatedRecords", "Related records", [
              { value: "", label: "Select related records…" },
              ...records
                .filter((r) => r.type !== "tasks")
                .map((r) => ({ value: r.id, label: r.name })),
            ])}
            {select("assignee", "Assignee", [
              { value: "", label: "Unassigned" },
              ...members.map((m) => ({ value: m, label: m })),
            ])}
          </>
        ) : type === "accounts" ? (
          <>
            {input("website", "Website", "url")}
            {input("industry", "Industry")}
            {input("revenue", "Annual revenue (USD)", "number")}
            {input("headcount", "Headcount", "number")}
            {input("location", "Location")}
            {select(
              "owner",
              "Owner",
              members.map((m) => ({ value: m, label: m })),
            )}
          </>
        ) : type === "contacts" ? (
          <>
            {input("email", "Email", "email")}
            {input("phone", "Phone", "tel")}
            {input("role", "Role")}
            {select("accountId", "Account", [
              { value: "", label: "Select account…" },
              ...records
                .filter((r) => r.type === "accounts")
                .map((r) => ({ value: r.id, label: r.name })),
            ])}
            {select(
              "owner",
              "Owner",
              members.map((m) => ({ value: m, label: m })),
            )}
          </>
        ) : (
          <>
            {select("accountId", "Account", [
              { value: "", label: "Select account…" },
              ...records
                .filter((r) => r.type === "accounts")
                .map((r) => ({ value: r.id, label: r.name })),
            ])}
            {select(
              "stage",
              "Stage",
              [
                "Qualification",
                "Discovery",
                "Proposal",
                "Negotiation",
                "Won",
                "Lost",
              ].map((s) => ({ value: s.toLowerCase(), label: s })),
            )}
            {input("amount", "Amount (USD)", "number")}
            {input("closeDate", "Close date", "date")}
            {select(
              "owner",
              "Owner",
              members.map((m) => ({ value: m, label: m })),
            )}
          </>
        )}
        <div className="crm-modal-footer">
          <button className="crm-btn" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="crm-btn" type="submit">
            Create {object}
          </button>
        </div>
      </form>
    </Modal>
  );
}
function Tasks() {
  const { records, updateRecord } = useCRM();
  const [query, setQuery] = useState("");
  const [find, setFind] = useState(false);
  const [menu, setMenu] = useState("");
  const [submenu, setSubmenu] = useState("");
  const [filter, setFilter] = useState<Record<string, string>>({});
  const [hidden, setHidden] = useState<string[]>([]);
  const [sort, setSort] = useState("");
  const source = tables["/tasks"];
  const all = records.filter((r) => r.type === "tasks");
  const taskData = all.map((r) => {
    const sourceRow = source.rows.find((row) => row.links[0]?.href === r.path);
    const date =
      r.fields.dueDate || r.text.match(/Due date\n([^\n]+)/)?.[1] || "";
    const day = date ? new Date(date + "T00:00:00").getDate() : 0;
    const dateText = date
      ? new Date(
          date.includes("T")
            ? date
            : date.length === 10
              ? date + "T00:00:00"
              : date,
        ).toLocaleDateString("en-US", { month: "short", day: "numeric" })
      : sourceRow?.cells[2] || "No date";
    const owner = members.includes(r.fields.assignee)
      ? r.fields.assignee
      : sourceRow?.cells[1]?.slice(2) || recordOwner(r);
    return {
      record: r,
      date: dateText,
      owner,
      related: sourceRow?.links[1],
      group:
        day && day < 22
          ? "Overdue"
          : day === 22
            ? "Today"
            : day === 23
              ? "Tomorrow"
              : sourceRow
                ? source.rows
                    .slice(0, source.rows.indexOf(sourceRow))
                    .filter((row) => row.cells.length === 1)
                    .at(-1)?.cells[0] || "Upcoming"
                : "Upcoming",
    };
  });
  let filtered = taskData.filter(
    (t) =>
      t.record.name.toLowerCase().includes(query.toLowerCase()) &&
      (!filter.status || t.record.fields.status === filter.status) &&
      (!filter.assignee || t.owner === filter.assignee) &&
      (!filter.due || t.group === filter.due),
  );
  if (sort)
    filtered = [...filtered].sort((a, b) =>
      sort.includes("date")
        ? a.date.localeCompare(b.date) * (sort.startsWith("-") ? -1 : 1)
        : a.record.name.localeCompare(b.record.name) *
          (sort.startsWith("-") ? -1 : 1),
    );
  const columns = [
    { name: "Task", icon: ListTodo },
    { name: "Assignee", icon: UserRound },
    { name: "Due date", icon: CalendarDays },
    { name: "Related records", icon: Link2 },
  ];
  return (
    <>
      <div className="crm-toolbar">
        <div className="crm-relative">
          <button
            className="crm-btn"
            aria-expanded={menu === "filter"}
            onClick={() => {
              setMenu(menu === "filter" ? "" : "filter");
              setSubmenu("");
            }}
          >
            <Funnel size={16} />
            Filter
          </button>
          {menu === "filter" && (
            <div className="crm-popover">
              {[
                { key: "status", label: "Status" },
                { key: "assignee", label: "Assignee" },
                { key: "due", label: "Due date" },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setSubmenu(submenu === f.key ? "" : f.key)}
                >
                  {f.label}
                  <ChevronRight size={12} />
                </button>
              ))}
              {submenu && (
                <div className="crm-submenu">
                  {(submenu === "status"
                    ? statusOptions
                    : submenu === "assignee"
                      ? members.map((m) => ({ value: m, label: m }))
                      : ["Overdue", "Today", "Tomorrow", "Upcoming"].map(
                          (m) => ({ value: m, label: m }),
                        )
                  ).map((o) => (
                    <button
                      key={o.value}
                      onClick={() => {
                        setFilter({ ...filter, [submenu]: o.value });
                        setMenu("");
                      }}
                    >
                      {filter[submenu] === o.value ? (
                        <Check size={14} />
                      ) : (
                        <span className="crm-check-spacer" />
                      )}
                      {o.label}
                    </button>
                  ))}
                </div>
              )}
              {Object.keys(filter).length > 0 && (
                <button
                  onClick={() => {
                    setFilter({});
                    setMenu("");
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>
        <button
          className="crm-icon-btn"
          aria-label="Find tasks"
          onClick={() => setFind(!find)}
        >
          <Search size={16} />
        </button>
        {find && (
          <input
            autoFocus
            className="crm-task-search"
            aria-label="Find tasks"
            placeholder="Find tasks…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}{" "}
        {Object.entries(filter).map(([key, value]) => (
          <button
            key={key}
            className="crm-filter-chip"
            onClick={() => {
              const next = { ...filter };
              delete next[key];
              setFilter(next);
            }}
          >
            {statusOptions.find((o) => o.value === value)?.label || value}
            <X size={12} />
          </button>
        ))}
        <div className="crm-relative crm-display-wrap">
          <button
            className="crm-btn"
            aria-expanded={menu === "display"}
            onClick={() => setMenu(menu === "display" ? "" : "display")}
          >
            <SlidersHorizontal size={15} />
            Display
          </button>
          {menu === "display" && (
            <div className="crm-popover crm-right-popover">
              <h2>Display columns</h2>
              {columns.map((c) => (
                <label key={c.name}>
                  <input
                    type="checkbox"
                    checked={!hidden.includes(c.name)}
                    onChange={() =>
                      setHidden(
                        hidden.includes(c.name)
                          ? hidden.filter((n) => n !== c.name)
                          : [...hidden, c.name],
                      )
                    }
                  />
                  {c.name}
                </label>
              ))}
              <button onClick={() => setHidden([])}>Reset display</button>
            </div>
          )}
        </div>
      </div>
      {menu && (
        <button
          className="crm-menu-dismiss"
          aria-label="Close menu"
          onClick={() => setMenu("")}
        />
      )}
      <div className="crm-table-wrap">
        <table className="crm-table crm-tasks-table">
          <thead>
            <tr>
              {columns.map(
                (c, i) =>
                  !hidden.includes(c.name) && (
                    <th key={c.name}>
                      <button
                        className="crm-column-label"
                        onClick={() => {
                          if (i === 0 || i === 2) {
                            const k = i === 2 ? "date" : "title";
                            setSort(sort === k ? "-" + k : k);
                          }
                        }}
                      >
                        <c.icon size={14} />
                        {c.name}
                      </button>
                    </th>
                  ),
              )}
            </tr>
          </thead>
          <tbody>
            {(sort
              ? ["All tasks"]
              : ["Overdue", "Today", "Tomorrow", "Upcoming"]
            ).map((group) => {
              const rows = sort
                ? filtered
                : filtered.filter((t) => t.group === group);
              if (!rows.length) return null;
              return (
                <TaskGroup
                  key={group}
                  name={group}
                  rows={rows}
                  hidden={hidden}
                  menu={menu}
                  setMenu={setMenu}
                  updateRecord={updateRecord}
                />
              );
            })}
          </tbody>
        </table>
        {!filtered.length && <div className="crm-empty">No tasks found</div>}
      </div>
    </>
  );
}
function TaskGroup({
  name,
  rows,
  hidden,
  menu,
  setMenu,
  updateRecord,
}: {
  name: string;
  rows: {
    record: CRMRecord;
    date: string;
    owner: string;
    related?: { text: string; href: string };
  }[];
  hidden: string[];
  menu: string;
  setMenu: (m: string) => void;
  updateRecord: (id: string, fields: Record<string, string>) => void;
}) {
  return (
    <>
      {name !== "All tasks" && (
        <tr className="group-row">
          <td colSpan={Math.max(1, 4 - hidden.length)}>{name}</td>
        </tr>
      )}
      {rows.map((t) => (
        <tr key={t.record.id}>
          {!hidden.includes("Task") && (
            <td>
              <div className="cell-flex">
                <div className="crm-relative">
                  <button
                    className="crm-task-status"
                    aria-label={`Status of ${t.record.name}: ${statusOptions.find((s) => s.value === t.record.fields.status)?.label}`}
                    onClick={() =>
                      setMenu(menu === t.record.id ? "" : t.record.id)
                    }
                  >
                    <StatusIcon status={t.record.fields.status} />
                  </button>
                  {menu === t.record.id && (
                    <div className="crm-popover">
                      {statusOptions.map((s) => (
                        <button
                          key={s.value}
                          onClick={() => {
                            updateRecord(t.record.id, { status: s.value });
                            setMenu("");
                          }}
                        >
                          <StatusIcon status={s.value} />
                          {s.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  className={
                    t.record.fields.status === "done" ? "crm-task-done" : ""
                  }
                  href={t.record.path}
                >
                  {t.record.name}
                </Link>
              </div>
            </td>
          )}
          {!hidden.includes("Assignee") && (
            <td>
              <div className="cell-flex">
                <Avatar name={t.owner} />
                {t.owner}
              </div>
            </td>
          )}
          {!hidden.includes("Due date") && (
            <td>
              <span
                className={`cell-flex crm-muted ${name === "Overdue" ? "crm-overdue" : ""}`}
              >
                <CalendarDays size={14} />
                {t.date}
              </span>
            </td>
          )}
          {!hidden.includes("Related records") && (
            <td className="crm-muted">
              {t.related ? (
                <Link href={t.related.href}>{t.related.text}</Link>
              ) : t.record.links[0] ? (
                <Link href={t.record.links[0].href}>
                  {t.record.links[0].text}
                </Link>
              ) : (
                "—"
              )}
            </td>
          )}
        </tr>
      ))}
    </>
  );
}
function SettingsPage({
  page,
  profile,
  onSave,
}: {
  page: string;
  profile: { name: string; email: string; company: string };
  onSave: (p: { name: string; email: string; company: string }) => void;
}) {
  const [draft, setDraft] = useState(profile);
  const [photo, setPhoto] = useState("");
  const file = useRef<HTMLInputElement>(null);
  const [team, setTeam] = useState(
    members.map((name, i) => ({
      name,
      email: ["alex", "jamie", "sofia"][i] + "@northwind.co",
      role: i === 0 ? "Owner" : "Member",
    })),
  );
  const [search, setSearch] = useState("");
  const [invite, setInvite] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  return (
    <div className="crm-settings">
      <h2>
        {page === "profile"
          ? "Your profile"
          : page === "company"
            ? "Company"
            : "Team"}
      </h2>
      <p className="crm-settings-description">
        {page === "profile"
          ? "Manage how you appear to your teammates."
          : page === "company"
            ? "Manage the company name shown throughout your CRM."
            : `Members of ${profile.company} can own records and follow up on tasks.`}
      </p>
      {page === "team" ? (
        <>
          <button className="crm-btn" onClick={() => setInvite(true)}>
            <Plus size={14} />
            Invite member
          </button>
          <input
            className="crm-input crm-team-search"
            placeholder="Search team members…"
            aria-label="Search team members"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="crm-team">
            {team
              .filter((m) =>
                (m.name + m.email).toLowerCase().includes(search.toLowerCase()),
              )
              .map((m) => (
                <div className="crm-team-row" key={m.email}>
                  <Avatar name={m.name} />
                  <div>
                    <p>
                      {m.name}
                      {m.name === profile.name && (
                        <span className="crm-you">You</span>
                      )}
                    </p>
                    <small>{m.email}</small>
                  </div>
                  <select
                    aria-label={`Role for ${m.name}`}
                    value={m.role}
                    onChange={(e) =>
                      setTeam(
                        team.map((t) =>
                          t.email === m.email
                            ? { ...t, role: e.target.value }
                            : t,
                        ),
                      )
                    }
                  >
                    {["Member", "Admin", "Owner"].map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                  <button
                    className="crm-btn"
                    onClick={() =>
                      setTeam(team.filter((t) => t.email !== m.email))
                    }
                  >
                    Remove
                  </button>
                </div>
              ))}
          </div>
          {invite && (
            <Modal
              title="Invite member"
              description="Add a member to your team."
              onClose={() => setInvite(false)}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setTeam([
                    ...team,
                    {
                      name: inviteEmail.split("@")[0],
                      email: inviteEmail,
                      role: "Member",
                    },
                  ]);
                  setInvite(false);
                  setInviteEmail("");
                }}
              >
                <label className="crm-form-field">
                  Email
                  <input
                    required
                    className="crm-input"
                    type="email"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                  />
                </label>
                <p className="crm-muted">This demo adds a local team member.</p>
                <div className="crm-modal-footer">
                  <button
                    className="crm-btn"
                    type="button"
                    onClick={() => setInvite(false)}
                  >
                    Cancel
                  </button>
                  <button className="crm-btn">Add member</button>
                </div>
              </form>
            </Modal>
          )}
        </>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(draft);
          }}
        >
          {page === "profile" ? (
            <>
              <div className="crm-photo-row">
                {photo ? (
                  <span className="crm-profile-photo">
                    <Image
                      src={photo}
                      alt="Your profile"
                      width={48}
                      height={48}
                      unoptimized
                    />
                  </span>
                ) : (
                  <span className="crm-profile-photo">
                    <Avatar name={draft.name} />
                  </span>
                )}
                <input
                  ref={file}
                  type="file"
                  accept="image/*"
                  className="crm-file"
                  aria-label="Choose profile photo"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) setPhoto(URL.createObjectURL(f));
                  }}
                />
                <button
                  type="button"
                  className="crm-btn"
                  onClick={() => file.current?.click()}
                >
                  Change photo
                </button>
              </div>
              <label className="crm-form-field">
                Display name
                <input
                  className="crm-input"
                  required
                  value={draft.name}
                  onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                />
              </label>
              <label className="crm-form-field">
                Verified email
                <input className="crm-input" readOnly value={draft.email} />
              </label>
            </>
          ) : (
            <label className="crm-form-field">
              Company name
              <input
                className="crm-input"
                required
                value={draft.company}
                onChange={(e) =>
                  setDraft({ ...draft, company: e.target.value })
                }
              />
            </label>
          )}
          <button className="crm-btn crm-primary">Save changes</button>
        </form>
      )}
    </div>
  );
}
