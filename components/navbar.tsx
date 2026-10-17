"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/data";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "About Contractor", href: "/about" },
  { name: "Contact & Quote", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-300 dark:border-slate-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      {/* Top micro-bar for quick contact */}
      <div className="bg-slate-950 text-slate-200 text-xs py-1.5 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-semibold text-slate-100">
              <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
              Nairobi Based &bull; Servicing All 47 Counties in Kenya &amp; East Africa
            </span>
            <span className="text-slate-300 font-medium">
              Emergency &amp; Scheduled Technician Dispatch
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={CONTACT_INFO.phoneTel}
              className="flex items-center gap-1.5 text-slate-100 hover:text-amber-400 transition-colors font-bold"
            >
              <Phone className="size-3.5 text-amber-400" />
              Direct: {CONTACT_INFO.phone}
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
            >
              <MessageSquare className="size-3.5" />
              WhatsApp Available
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-tight text-foreground group"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex size-10 items-center justify-center rounded-lg bg-sky-600 text-white shadow-md group-hover:bg-sky-500 transition-colors">
            <Zap className="size-5 fill-amber-300 text-amber-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white">
              HENRY SOLUTIONS
            </span>
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-sky-700 dark:text-sky-400">
              Low-Voltage &amp; Security Systems
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-semibold"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-sky-100 text-sky-900 dark:bg-sky-950 dark:text-sky-300 font-extrabold border border-sky-300 dark:border-sky-800"
                    : "text-slate-800 dark:text-slate-200 hover:text-sky-700 dark:hover:text-sky-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Direct Call CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          <Button asChild variant="whatsapp" size="sm" className="font-bold shadow-sm">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="size-4" />
              WhatsApp
            </a>
          </Button>

          <Button asChild variant="default" size="sm" className="bg-sky-600 hover:bg-sky-500 font-bold shadow-sm">
            <a href={CONTACT_INFO.phoneTel} aria-label="Call Henry Solutions">
              <Phone className="size-4" />
              <span>Call 0712867832</span>
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <Button asChild variant="whatsapp" size="sm" className="px-2.5 h-8 font-bold">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp quick chat"
            >
              <MessageSquare className="size-4" />
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 p-2 text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-300 dark:border-slate-800 bg-background px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-base font-bold transition-colors ${
                    isActive
                      ? "bg-sky-100 text-sky-900 dark:bg-sky-950 dark:text-sky-300 font-extrabold border border-sky-300 dark:border-sky-800"
                      : "text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-300 dark:border-slate-800 flex flex-col gap-2">
            <Button asChild variant="whatsapp" className="w-full justify-center font-bold">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <MessageSquare className="size-4" />
                WhatsApp: {CONTACT_INFO.whatsapp}
              </a>
            </Button>
            <Button asChild variant="default" className="w-full justify-center bg-sky-600 hover:bg-sky-500 font-bold">
              <a href={CONTACT_INFO.phoneTel} onClick={() => setIsOpen(false)}>
                <Phone className="size-4" />
                Direct Call: {CONTACT_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
