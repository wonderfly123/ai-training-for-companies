import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";

const links = [
  { href: "/program", label: "Program" },
  { href: "/work", label: "Work" },
  { href: "/people", label: "People" },
  { href: "/deck", label: "Deck" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="border-b border-rule">
      <Container className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 py-5">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-sans text-base font-semibold tracking-[-0.01em] text-ink">
            {site.name}
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
