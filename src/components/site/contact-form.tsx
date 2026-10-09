"use client";

import { useState, type FormEvent } from "react";
import { TEAM_SIZES } from "@/lib/contact";
import { Button } from "@/components/ui/button";

type Status = "idle" | "pending" | "sent" | "error";

const field =
  "w-full border border-rule bg-paper px-3 py-2.5 font-sans text-base text-ink outline-none focus:border-ink";
const label = "block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted mb-1.5";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("pending");
    setErrors({});
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string; errors?: Record<string, string> };
      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      setErrors(json.errors ?? {});
      setServerError(json.error ?? "Something went wrong");
      setStatus("error");
    } catch {
      setServerError("Network error. Email me directly instead.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-ink p-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Received</p>
        <p className="mt-2 text-lg text-ink">Thanks. I read every one of these myself and reply within two business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
          {errors.name && <p className="mt-1 font-mono text-xs text-accent">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={label}>Work email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
          {errors.email && <p className="mt-1 font-mono text-xs text-accent">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="company" className={label}>Company</label>
          <input id="company" name="company" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="role" className={label}>Your role</label>
          <input id="role" name="role" autoComplete="organization-title" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="teamSize" className={label}>Company size</label>
        <select id="teamSize" name="teamSize" defaultValue="" className={field}>
          <option value="">Choose one</option>
          {TEAM_SIZES.map((s) => (
            <option key={s} value={s}>{s} employees</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={label}>
          The workflow that wastes the most human time
        </label>
        <textarea id="message" name="message" rows={5} required className={field} />
        {errors.message && <p className="mt-1 font-mono text-xs text-accent">{errors.message}</p>}
      </div>
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {serverError && (
        <p className="border border-accent px-3 py-2 font-mono text-xs text-accent">{serverError}</p>
      )}
      <div>
        <Button type="submit" disabled={status === "pending"}>
          {status === "pending" ? "Sending" : "Send"}
        </Button>
      </div>
    </form>
  );
}
