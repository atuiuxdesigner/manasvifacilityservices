import { createServerFn } from "@tanstack/react-start";

// Google Apps Script web app that appends each quote to the Google Sheet "Responses" tab.
const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxNqhooEHJyi6dt-bg4S7tZR9Ci4bE8rH6QMxkvbO-nXCrTxuLTLDixBhjRQciXXfU9/exec";

export type QuoteInput = {
  name: string;
  phone: string;
  email: string;
  service: string;
  propertyType: string;
  location: string;
  frequency: string;
  message: string;
  website: string;
};

const LIMITS: Record<keyof QuoteInput, number> = {
  name: 100, phone: 15, email: 255, service: 100, propertyType: 60,
  location: 150, frequency: 60, message: 1000, website: 200,
};

export function validateQuote(raw: unknown): QuoteInput {
  const src = (raw ?? {}) as Record<string, unknown>;
  const out = {} as QuoteInput;
  for (const key of Object.keys(LIMITS) as (keyof QuoteInput)[]) {
    out[key] = String(src[key] ?? "").trim().slice(0, LIMITS[key]);
  }
  if (!out.name) throw new Error("Please enter your name.");
  if (!/^\d{10}$/.test(out.phone)) throw new Error("Please enter a valid 10-digit mobile number.");
  if (!out.service) throw new Error("Please choose a service.");
  if (out.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(out.email)) throw new Error("Please enter a valid email.");
  return out;
}

export const submitQuoteToSheet = createServerFn({ method: "POST" })
  .inputValidator(validateQuote)
  .handler(async ({ data }) => {
    // Honeypot filled: pretend success, send nothing.
    if (data.website) return { ok: true };
    try {
      const res = await fetch(SHEET_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
        redirect: "follow",
      });
      const text = (await res.text()).trim();
      if (res.ok && text === "OK") return { ok: true };
      console.error("Sheet endpoint unexpected response", res.status, text.slice(0, 200));
      return { ok: false };
    } catch (error) {
      console.error("Sheet endpoint unreachable", error);
      return { ok: false };
    }
  });
