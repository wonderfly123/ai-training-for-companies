import type { Stat } from "@/content/case-studies";

interface KvTableProps {
  rows: Stat[];
  className?: string;
}

/** Two-column hairline table for label and value pairs. */
export function KvTable({ rows, className = "" }: KvTableProps) {
  return (
    <dl className={`border-t border-ink ${className}`}>
      {rows.map((r) => (
        <div
          key={r.label}
          className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-4 border-b border-rule py-3"
        >
          <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
            {r.label}
          </dt>
          <dd className="tabular font-sans text-sm font-medium text-ink">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
