export const TEAM_SIZES = ["Under 50", "50 to 200", "200 to 500", "Over 500"] as const;
export type TeamSize = (typeof TEAM_SIZES)[number] | "";

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  role: string;
  teamSize: TeamSize;
  message: string;
  /** True when the hidden `website` field was filled, which only bots do. */
  honeypot: boolean;
}

export type ContactValidation =
  | { ok: true; data: ContactPayload }
  | { ok: false; errors: Record<string, string> };

const MAX_FIELD_LENGTH = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(input: Record<string, unknown>, key: string): string {
  const v = input[key];
  return typeof v === "string" ? v.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

/** Validates an untrusted contact form body. Never throws. */
export function validateContact(input: unknown): ContactValidation {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return { ok: false, errors: { body: "Expected a JSON object" } };
  }
  const body = input as Record<string, unknown>;
  const name = str(body, "name");
  const email = str(body, "email");
  const company = str(body, "company");
  const role = str(body, "role");
  const rawTeamSize = str(body, "teamSize");
  const message = str(body, "message");
  const honeypot = str(body, "website").length > 0;

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address";
  if (!message) errors.message = "Tell me a little about the workflow";
  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const teamSize: TeamSize = (TEAM_SIZES as readonly string[]).includes(rawTeamSize)
    ? (rawTeamSize as TeamSize)
    : "";

  return {
    ok: true,
    data: { name, email, company, role, teamSize, message, honeypot },
  };
}
