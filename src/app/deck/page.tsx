import type { Metadata } from "next";
import { site } from "@/content/site";
import { Deck } from "@/components/deck/deck";

export const metadata: Metadata = {
  title: "Deck",
  description: `${site.name}: a fourteen-slide pitch for training your team to build AI in-house.`,
  robots: { index: false, follow: false },
};

export default function DeckPage() {
  return <Deck />;
}
