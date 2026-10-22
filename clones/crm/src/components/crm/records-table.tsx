"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlignLeft,
  ArrowDown,
  ArrowUp,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  CircleUserRound,
  DollarSign,
  Ellipsis,
  Funnel,
  Hash,
  Link2,
  Mail,
  MapPin,
  Phone,
  Search,
  Settings2,
  Type,
  Users,
  X,
} from "lucide-react";
import {
  listLinks,
  members,
  records as originalRecords,
  recordOwner,
  tables,
} from "@/lib/crm";
import { useCRM } from "./provider";
import type { CRMRecord } from "@/types/crm";
import "./records-table.css";

const keys: Record<string, string> = {
  Name: "name",
  Website: "website",
  Owner: "owner",
  Industry: "industry",
  "Revenue (USD)": "revenue",
  Headcount: "headcount",
  Location: "location",
  LinkedIn: "linkedin",
  Facebook: "facebook",
  Instagram: "instagram",
  "Twitter / X": "twitter",
  Email: "email",
  Phone: "phone",
  Role: "role",
  Stage: "stage",
  Amount: "amount",
  "Close date": "closeDate",
};
const icons: Record<string, typeof Type> = {
  Name: AlignLeft,
  Website: Link2,
  Owner: CircleUserRound,
  Industry: Building2,
  "Revenue (USD)": DollarSign,
  Headcount: Users,
  Location: MapPin,
  LinkedIn: Link2,
  Facebook: Link2,
  Instagram: Link2,
  "Twitter / X": Link2,
  "Created at": CalendarDays,
  Contacts: Users,
  "Opportunity count": Hash,
  Email: Mail,
  Phone,
  Role: BriefcaseBusiness,
};
const owners: Record<string, string> = {
  "6c7138af-bc42-4530-bc96-ff7255759a65": members[0],
  "76aed3b8-9e82-43e8-9191-87814628d1ad": members[1],
};
export function RecordsTable({ path }: { path: string }) {
  const { records, updateRecord, deleteRecord } = useCRM();
  const type =
    listLinks.find((l) => l.path === path)?.type || path.split("/")[1];
  const table = tables[path] || tables[`/${type}`];
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [popup, setPopup] = useState("");
  const [filter, setFilter] = useState("");
  const [filterField, setFilterField] = useState("Owner");
  const [hidden, setHidden] = useState<string[]>([]);
  const [sort, setSort] = useState<{ index: number; desc: boolean } | null>(
    null,
  );
  const [menu, setMenu] = useState("");
  const [editing, setEditing] = useState<CRMRecord | null>(null);
  const [editName, setEditName] = useState("");
  if (!table) return <div className="records-empty">No records</div>;
  const matched = new Set<string>();
  let rows = table.rows
    .filter((row) => row.cells.length > 1)
    .flatMap((row) => {
      const source = originalRecords.find(
        (r) =>
          r.type === type &&
          (r.name === row.cells[0] || row.links.some((l) => l.href === r.path)),
      );
      const record = source
        ? records.find((r) => r.id === source.id)
        : undefined;
      if (source && !record) return [];
      if (record) matched.add(record.id);
      const cells = row.cells.map((cell, index) => {
        const key = keys[table.headers[index]];
        if (!key || !record || record.fields[key] === source?.fields[key])
          return cell;
        const value = record.fields[key] || "—";
        if (key === "owner")
          return (
            owners[value] || (members.includes(value) ? value : members[2])
          );
        if (key === "revenue")
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(Number(value) || 0);
        return value.replace(/^https?:\/\/(www\.)?/, "");
      });
      return [
        {
          cells,
          record,
          href:
            row.links.find((l) => l.text === row.cells[0])?.href ||
            record?.path ||
            "",
          links: row.links,
        },
      ];
    });
  if (!path.startsWith("/lists/"))
    rows = rows.concat(
      records
        .filter(
          (r) =>
            r.type === type &&
            !matched.has(r.id) &&
            !originalRecords.some((o) => o.id === r.id),
        )
        .map((record) => ({
          record,
          href: record.path,
          links: record.links,
          cells: table.headers.map((h) =>
            h === "Owner" ? recordOwner(record) : record.fields[keys[h]] || "—",
          ),
        })),
    );
  rows = rows.filter(
    (row) =>
      row.cells.join(" ").toLowerCase().includes(query.toLowerCase()) &&
      (!filter || row.cells[table.headers.indexOf(filterField)] === filter),
  );
  if (sort)
    rows.sort(
      (a, b) =>
        a.cells[sort.index].localeCompare(b.cells[sort.index], undefined, {
          numeric: true,
        }) * (sort.desc ? -1 : 1),
    );
  const filterValues = [
    ...new Set(
      table.rows
        .map((r) => r.cells[table.headers.indexOf(filterField)])
        .filter(Boolean),
    ),
  ];
  return (
    <div className="records-view">
      <div className="records-toolbar crm-toolbar">
        <div className="records-tools">
          <div className="records-popover-anchor">
            <button
              className="records-button"
              onClick={() => setPopup((p) => (p === "filter" ? "" : "filter"))}
            >
              <Funnel size={16} />
              Filter{filter && <span className="records-filter-dot" />}
            </button>
            {popup === "filter" && (
              <div className="records-popover crm-popover">
                <div className="records-filter-fields">
                  {["Owner", "Industry", "Role", "Location"]
                    .filter((f) => table.headers.includes(f))
                    .map((f) => (
                      <button
                        key={f}
                        className={filterField === f ? "selected" : ""}
                        onClick={() => {
                          setFilterField(f);
                          setFilter("");
                        }}
                      >
                        {f}
                        <ChevronDown size={12} />
                      </button>
                    ))}
                </div>
                <button
                  onClick={() => {
                    setFilter("");
                    setPopup("");
                  }}
                >
                  All records{!filter && <Check size={14} />}
                </button>
                {filterValues.map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      setFilter(v);
                      setPopup("");
                    }}
                  >
                    {v}
                    {filter === v && <Check size={14} />}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="records-search-button"
            aria-label="Search records"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <Search size={17} />
          </button>
          {searchOpen && (
            <input
              autoFocus
              className="records-search"
              placeholder="Search records…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          )}{" "}
          {filter && (
            <button
              className="records-filter-chip"
              onClick={() => setFilter("")}
            >
              {filter}
              <X size={12} />
            </button>
          )}
        </div>
        <div className="records-popover-anchor">
          <button
            className="records-button"
            onClick={() => setPopup((p) => (p === "display" ? "" : "display"))}
          >
            <Settings2 size={16} />
            Display
          </button>
          {popup === "display" && (
            <div className="records-popover records-display crm-popover">
              <span className="records-popover-title">Visible columns</span>
              {table.headers.map((h) => (
                <button
                  key={h}
                  onClick={() =>
                    setHidden((v) =>
                      v.includes(h) ? v.filter((x) => x !== h) : [...v, h],
                    )
                  }
                >
                  <span className="records-check">
                    {!hidden.includes(h) && <Check size={12} />}
                  </span>
                  {h}
                </button>
              ))}
              <button
                onClick={() => {
                  setHidden([]);
                  setSort(null);
                }}
              >
                Reset display
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="records-scroll">
        <table
          className={`records-table ${type === "accounts" ? "records-accounts" : "records-contacts"}`}
        >
          <thead>
            <tr>
              {table.headers.map((h, i) => {
                const Icon = icons[h] || Type;
                return (
                  !hidden.includes(h) && (
                    <th key={h}>
                      <button
                        onClick={() =>
                          setSort((s) => ({
                            index: i,
                            desc: s?.index === i ? !s.desc : false,
                          }))
                        }
                      >
                        <Icon size={14} />
                        {h}
                        {sort?.index === i &&
                          (sort.desc ? (
                            <ArrowDown size={12} />
                          ) : (
                            <ArrowUp size={12} />
                          ))}
                      </button>
                    </th>
                  )
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.record?.id || i}>
                {row.cells.map(
                  (cell, j) =>
                    !hidden.includes(table.headers[j]) && (
                      <td key={j}>
                        {j === 0 ? (
                          <div className="records-name-cell">
                            <Link href={row.href || "#"}>{cell}</Link>
                            {row.record && (
                              <div className="records-row-actions">
                                <button
                                  aria-label={`Actions for ${cell}`}
                                  onClick={() =>
                                    setMenu((m) =>
                                      m === row.record!.id
                                        ? ""
                                        : row.record!.id,
                                    )
                                  }
                                >
                                  <Ellipsis size={16} />
                                </button>
                                {menu === row.record.id && (
                                  <div className="records-popover records-row-menu">
                                    <button
                                      onClick={() => {
                                        setEditing(row.record!);
                                        setEditName(cell);
                                        setMenu("");
                                      }}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      onClick={() => {
                                        deleteRecord(row.record!.id);
                                        setMenu("");
                                      }}
                                    >
                                      Delete
                                    </button>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ) : (
                          cell
                        )}
                      </td>
                    ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {!rows.length && <div className="records-empty">No records found</div>}
      </div>
      {editing && (
        <div className="records-edit-overlay" onClick={() => setEditing(null)}>
          <form
            className="records-edit-dialog"
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => {
              e.preventDefault();
              updateRecord(editing.id, { name: editName });
              setEditing(null);
            }}
          >
            <h2>Edit {type === "accounts" ? "account" : "contact"}</h2>
            <label>
              Name
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                required
              />
            </label>
            <div>
              <button
                type="button"
                className="records-button"
                onClick={() => setEditing(null)}
              >
                Cancel
              </button>
              <button className="records-button records-save">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
