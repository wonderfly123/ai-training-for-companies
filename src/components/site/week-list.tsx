import type { Week } from "@/content/program";

interface WeekListProps {
  weeks: Week[];
}

export function WeekList({ weeks }: WeekListProps) {
  return (
    <ol className="border-t border-ink">
      {weeks.map((w) => (
        <li
          key={w.n}
          className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[5rem_14rem_1fr] sm:gap-6"
        >
          <span className="font-mono text-xs text-ink-muted sm:pt-1">
            WEEK {String(w.n).padStart(2, "0")}
          </span>
          <h3 className="font-sans text-xl font-medium text-ink">{w.title}</h3>
          <p className="text-base leading-relaxed text-ink-muted">{w.body}</p>
        </li>
      ))}
    </ol>
  );
}
