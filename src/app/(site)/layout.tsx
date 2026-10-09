import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/site/json-ld";
import { organization, person } from "@/lib/json-ld";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={[organization(), person()]} />
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
