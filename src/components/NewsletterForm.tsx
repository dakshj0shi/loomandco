"use client";

import { useState } from "react";
import { useToast } from "@/lib/toast";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      toast.show("Enter a valid email address.", "error");
      return;
    }

    setPending(true);
    // No newsletter backend exists yet — this simulates the round trip so the
    // success/error UX is real and ready to wire up once one does.
    await new Promise((r) => setTimeout(r, 500));
    setPending(false);
    setEmail("");
    toast.show("You're on the list.");
  };

  return (
    <form onSubmit={submit} noValidate className="mt-6 flex border-b border-paper/40">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        aria-label="Email address"
        disabled={pending}
        className="w-full bg-transparent py-2 text-[13px] text-paper outline-none placeholder:text-paper/50 disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={pending}
        className="shrink-0 py-2 text-[11px] uppercase tracking-[0.16em] disabled:opacity-60"
      >
        {pending ? "Sending…" : "Sign up"}
      </button>
    </form>
  );
}
