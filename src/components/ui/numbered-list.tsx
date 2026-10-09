interface NumberedListProps {
  items: string[];
  start?: number;
  className?: string;
  dense?: boolean;
}

/** Ordered list with mono two-digit numbers in the margin. */
export function NumberedList({ items, start = 1, className = "", dense = false }: NumberedListProps) {
  return (
    <ol className={`border-t border-ink ${className}`}>
      {items.map((item, i) => (
        <li
          key={i}
          className={`grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-rule ${
            dense ? "py-2.5" : "py-4"
          }`}
        >
          <span className="tabular font-mono text-xs text-ink-muted pt-1">
            {String(start + i).padStart(2, "0")}
          </span>
          <span className={`font-sans leading-relaxed text-ink ${dense ? "text-sm" : "text-base"}`}>
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}
