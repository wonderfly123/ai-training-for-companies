import { MonoLabel } from "./mono-label";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede?: string;
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  as = "h2",
  className = "",
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <div className={`max-w-3xl ${className}`}>
      <MonoLabel>{eyebrow}</MonoLabel>
      <Tag
        className={`mt-3 font-sans font-medium leading-[1.05] tracking-[-0.02em] text-ink ${
          as === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl"
        }`}
      >
        {title}
      </Tag>
      {lede && <p className="mt-5 text-lg leading-relaxed text-ink-muted">{lede}</p>}
    </div>
  );
}
