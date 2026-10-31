import Link from "next/link";
import {
  Phone,
  MessageSquare,
  MapPin,
  Globe2,
  ShieldAlert,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { CONTACT_INFO, SERVICES } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      {/* Emergency Callout Strip */}
      <div className="bg-sky-950 border-b border-sky-800/80 px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-amber-500/25 text-amber-400 shrink-0">
              <ShieldAlert className="size-5" />
            </span>
            <div>
              <p className="font-bold text-white text-sm sm:text-base">
                Urgent System Blackout or Electric Fence Fault?
              </p>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                Rapid technician diagnostic dispatch available across Nairobi and neighboring counties.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
            <a
              href={CONTACT_INFO.phoneTel}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-amber-600 hover:bg-amber-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-colors text-center"
            >
              <Phone className="size-4" />
              Call {CONTACT_INFO.phone}
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-colors text-center"
            >
              <MessageSquare className="size-4" />
              WhatsApp Diagnostic
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-24 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center md:text-left">
          {/* Col 1: About & Contractor Summary */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-white text-lg">
              <span className="flex size-8 items-center justify-center rounded-md bg-sky-600 text-white">
                <Zap className="size-4 fill-amber-300 text-amber-300" />
              </span>
              <span>HENRY SOLUTIONS</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Professional low-voltage systems technician and specialized electrical contractor based in Nairobi, Kenya. We engineer, install, and troubleshoot satellite television, perimeter security, surveillance networks, and automated systems with zero compromise on cable standards and signal stability.
            </p>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <p className="flex items-center justify-center md:justify-start gap-2 text-slate-100 font-medium">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                Pure Copper Cabling &amp; Certified Brackets
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2 text-slate-100 font-medium">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                Pre-installation Site Assessment
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2 text-slate-100 font-medium">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                Workmanship Warranty on All Installs
              </p>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-slate-200 hover:text-sky-300 transition-colors font-medium"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Serviced Regions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Operational Coverage
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-200">
              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-2">
                <MapPin className="size-4 text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-bold">
                    All 47 Counties in Kenya
                  </strong>
                  <span className="text-slate-200 font-normal">
                    Nairobi base with daily mobile field dispatch to Central, Rift Valley, Coast, Western, and Nyanza.
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-2">
                <Globe2 className="size-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-bold">
                    East Africa Regional Projects
                  </strong>
                  <span className="text-slate-200 font-normal">
                    Available for cross-border commercial and residential assignments in Uganda, Tanzania, and Rwanda.
                  </span>
                </div>
              </div>
              <Link
                href="/service-areas"
                className="inline-block text-xs sm:text-sm font-bold text-sky-400 hover:text-sky-300 underline underline-offset-4"
              >
                View Regional Mobilization Terms &rarr;
              </Link>
            </div>
          </div>

          {/* Col 4: Direct Contacts */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-100">
              <li>
                <span className="text-slate-300 block text-xs font-semibold">Primary Phone &amp; Dispatch:</span>
                <a
                  href={CONTACT_INFO.phoneTel}
                  className="font-bold hover:text-amber-400 transition-colors text-base text-white"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <span className="text-slate-300 block text-xs font-semibold">WhatsApp Instant:</span>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  +254 712 867 832
                </a>
              </li>
              <li>
                <span className="text-slate-300 block text-xs font-semibold">Contractor Inquiries:</span>
                <a
                  href={CONTACT_INFO.emailMailto}
                  className="font-semibold hover:text-sky-400 transition-colors break-all text-white"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="pt-2">
                <span className="text-slate-300 block text-xs font-semibold">Operating Hours:</span>
                <span className="text-slate-100 font-medium">Mon - Sat: 7:30 AM - 7:00 PM</span>
                <span className="block text-amber-400 text-xs font-bold">24/7 On-Call for Security Failures</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs sm:text-sm text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 font-medium text-center sm:text-left">
          <p>
            &copy; 2026 Henry Solutions. Low-Voltage &amp; Security Systems Contractor. Nairobi, Kenya.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-6 gap-y-3">
            <Link href="/" className="hover:text-white transition-colors py-1">
              Home
            </Link>
            <Link href="/services" className="hover:text-white transition-colors py-1">
              Services
            </Link>
            <Link href="/service-areas" className="hover:text-white transition-colors py-1">
              Service Areas
            </Link>
            <Link href="/about" className="hover:text-white transition-colors py-1">
              About
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors py-1">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
