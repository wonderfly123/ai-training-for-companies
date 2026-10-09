import { NextResponse } from "next/server";
import { validateContact } from "@/lib/contact";
import { isEmailConfigured, renderContactEmail, sendContactEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const result = validateContact(body);
  if (!result.ok) {
    return NextResponse.json({ error: "Check the highlighted fields", errors: result.errors }, { status: 400 });
  }

  // Bots fill the hidden field. Pretend it worked and drop it.
  if (result.data.honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!isEmailConfigured()) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("SMTP not configured. Lead logged instead:\n" + renderContactEmail(result.data).text);
    }
    return NextResponse.json({ error: "Contact form is not configured" }, { status: 503 });
  }

  try {
    await sendContactEmail(result.data);
  } catch (err) {
    console.error("contact email failed:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Could not send your message. Email me directly instead." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
