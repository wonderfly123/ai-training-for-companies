interface RuleProps {
  className?: string;
  heavy?: boolean;
}

/** A hairline horizontal rule. `heavy` draws it in ink for section breaks. */
export function Rule({ className = "", heavy = false }: RuleProps) {
  return (
    <hr
      className={`border-0 border-t ${heavy ? "border-ink" : "border-rule"} ${className}`}
    />
  );
}
