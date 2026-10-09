import { describe, it, expect } from "vitest";
import { validateContact } from "@/lib/contact";

const valid = {
  name: "A B",
  email: "a@b.co",
  company: "Acme",
  role: "COO",
  teamSize: "50-200",
  message: "We want to train four people.",
  website: "",
};

describe("validateContact", () => {
  it("accepts a valid payload", () => {
    const r = validateContact(valid);
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.data.email).toBe("a@b.co");
      expect(r.data.honeypot).toBe(false);
    }
  });

  it("rejects missing email", () => {
    const r = validateContact({ ...valid, email: "" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors.email).toBeDefined();
  });

  it("rejects malformed email", () => {
    expect(validateContact({ ...valid, email: "nope" }).ok).toBe(false);
  });

  it("rejects missing name and message", () => {
    const r = validateContact({ ...valid, name: "  ", message: "" });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.errors.name).toBeDefined();
      expect(r.errors.message).toBeDefined();
    }
  });

  it("flags honeypot without erroring", () => {
    const r = validateContact({ ...valid, website: "spam" });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.data.honeypot).toBe(true);
  });

  it("truncates long fields", () => {
    const r = validateContact({ ...valid, message: "x".repeat(5000) });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.data.message.length).toBeLessThanOrEqual(2000);
  });

  it("rejects non-object input", () => {
    expect(validateContact(null).ok).toBe(false);
    expect(validateContact("string").ok).toBe(false);
  });

  it("drops unknown team sizes", () => {
    const r = validateContact({ ...valid, teamSize: "<script>" });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.data.teamSize).toBe("");
  });
});
