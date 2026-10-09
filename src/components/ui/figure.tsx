import Image from "next/image";

interface FigureProps {
  /** Kept for call-site compatibility. Not rendered. */
  n?: number | string;
  /** What the screenshot shows. Rendered inside the placeholder until `src` exists. */
  label: string;
  src?: string;
  caption?: string;
  /** Tailwind aspect class. Defaults to a 4:3 frame. */
  aspect?: string;
  className?: string;
  priority?: boolean;
}

/**
 * A numbered figure. With `src` it renders the real screenshot.
 * Without it, a labeled dashed frame says exactly which screen to drop in.
 */
export function Figure({
  n,
  label,
  src,
  caption,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
}: FigureProps) {
  return (
    <figure className={`w-full ${className}`}>
      <div
        className={`relative w-full overflow-hidden border border-rule bg-paper-deep ${aspect}`}
      >
        {src ? (
          <Image
            src={src}
            alt={label}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
            priority={priority}
          />
        ) : (
          <div className="absolute inset-0 m-3 flex items-center justify-center border border-dashed border-rule p-6 text-center">
            <span className="font-mono text-xs leading-relaxed text-ink-muted">
              [screenshot]
              <br />
              {label}
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 font-mono text-[11px] text-ink-muted">{caption}</figcaption>
      )}
    </figure>
  );
}
