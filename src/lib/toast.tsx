"use client";

import { AlertCircle, Check } from "lucide-react";
import { createContext, useCallback, useContext, useRef, useState } from "react";

type ToastKind = "success" | "error";
type Toast = { id: number; message: string; kind: ToastKind };

type ToastApi = {
  show: (message: string, kind?: ToastKind) => void;
};

const Ctx = createContext<ToastApi | null>(null);
const DURATION_MS = 4000;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextId = useRef(0);

  const show = useCallback((message: string, kind: ToastKind = "success") => {
    const id = nextId.current++;
    setToasts((prev) => [...prev, { id, message, kind }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, DURATION_MS);
  }, []);

  return (
    <Ctx.Provider value={{ show }}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-5 z-[60] flex flex-col items-center gap-2 px-5"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="alert"
            className={`pointer-events-auto flex items-center gap-2 border px-4 py-3 text-[13px] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] ${
              t.kind === "error" ? "border-clay bg-paper text-ink" : "border-ink bg-ink text-paper"
            }`}
          >
            {t.kind === "error" ? (
              <AlertCircle size={16} className="shrink-0" />
            ) : (
              <Check size={16} className="shrink-0" />
            )}
            {t.message}
          </div>
        ))}
      </div>
    </Ctx.Provider>
  );
}

export function useToast() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useToast must be used inside <ToastProvider>");
  return c;
}
