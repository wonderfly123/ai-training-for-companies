import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { MonoLabel } from "@/components/ui/mono-label";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-ink">
      <Container className="grid gap-10 py-12 sm:grid-cols-3">
        <div>
          <p className="font-sans text-base font-semibold text-ink">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">{site.tagline}</p>
        </div>
        <div>
          <MonoLabel>Contact</MonoLabel>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <a href={`mailto:${site.contact.email}`} className="text-ink hover:text-accent">
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={site.founder.linkedin}
                rel="noopener noreferrer"
                target="_blank"
                className="text-ink hover:text-accent"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <MonoLabel>Pages</MonoLabel>
          <ul className="mt-3 space-y-1.5 text-sm">
            {[
              ["/offerings", "Offerings"],
              ["/work", "Work"],
              ["/people", "People"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-ink hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="flex flex-wrap items-center justify-between gap-3 border-t border-rule py-5">
        <MonoLabel>
          &copy; {year} {site.name}
        </MonoLabel>
      </Container>
    </footer>
  );
}
