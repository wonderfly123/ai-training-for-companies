import nodemailer from "nodemailer";
import { site } from "@/content/site";
import type { ContactPayload } from "./contact";

export function isEmailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD);
}

export function renderContactEmail(data: ContactPayload): { subject: string; text: string } {
  const lines = [
    `New inquiry from ${site.name}`,
    "",
    `Name:      ${data.name}`,
    `Email:     ${data.email}`,
    `Company:   ${data.company || "(not given)"}`,
    `Role:      ${data.role || "(not given)"}`,
    `Team size: ${data.teamSize || "(not given)"}`,
    "",
    "Message:",
    data.message,
    "",
    `Submitted: ${new Date().toISOString()}`,
  ];
  return {
    subject: `[${site.name}] ${data.name}${data.company ? `, ${data.company}` : ""}`,
    text: lines.join("\n"),
  };
}

/**
 * Sends the contact email over SMTP. The transporter is created here, not at
 * module scope, so importing this file never requires SMTP env at build time.
 */
export async function sendContactEmail(data: ContactPayload): Promise<void> {
  if (!isEmailConfigured()) throw new Error("SMTP is not configured");
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT ?? 587) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
  });
  const { subject, text } = renderContactEmail(data);
  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to: process.env.CONTACT_TO ?? site.contact.email,
    replyTo: data.email,
    subject,
    text,
  });
}
