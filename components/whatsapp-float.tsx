"use client";

import { MessageSquare, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";

export function QuickContactFloat() {
  return (
    <aside aria-label="Quick Contact Actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Phone call pill */}
      <a
        href={CONTACT_INFO.phoneTel}
        className="flex items-center gap-2 rounded-full bg-slate-900 border border-slate-700 text-white px-3.5 py-2 text-xs font-semibold shadow-lg hover:bg-slate-800 transition-all hover:scale-105"
        aria-label="Direct call to Henry Solutions technician"
      >
        <span className="flex size-6 items-center justify-center rounded-full bg-amber-500 text-slate-950">
          <Phone className="size-3.5" />
        </span>
        <span className="hidden sm:inline">Call: {CONTACT_INFO.phone}</span>
        <span className="sm:hidden">Call</span>
      </a>

      {/* WhatsApp chat pill */}
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2.5 text-xs font-semibold shadow-xl hover:bg-[#20ba59] transition-all hover:scale-105"
        aria-label="Chat with Henry Solutions on WhatsApp"
      >
        <MessageSquare className="size-4 fill-white" />
        <span className="font-bold">WhatsApp Us</span>
      </a>
    </aside>
  );
}
