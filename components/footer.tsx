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
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Emergency Callout Strip */}
      <div className="bg-sky-950/60 border-b border-sky-900/40 px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
              <ShieldAlert className="size-5" />
            </span>
            <div>
              <p className="font-semibold text-white text-sm">
                Urgent System Blackout or Electric Fence Fault?
              </p>
              <p className="text-xs text-slate-400">
                Rapid technician diagnostic dispatch available across Nairobi and neighboring counties.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={CONTACT_INFO.phoneTel}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-4 py-2 text-xs font-semibold text-white hover:bg-amber-500 transition-colors"
            >
              <Phone className="size-3.5" />
              Call {CONTACT_INFO.phone}
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="size-3.5" />
              WhatsApp Diagnostic
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: About & Contractor Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-white text-lg">
              <span className="flex size-8 items-center justify-center rounded-md bg-sky-600 text-white">
                <Zap className="size-4 fill-amber-300 text-amber-300" />
              </span>
              <span>HENRY SOLUTIONS</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Professional low-voltage systems technician and specialized electrical contractor based in Nairobi, Kenya. We engineer, install, and troubleshoot satellite television, perimeter security, surveillance networks, and automated systems with zero compromise on cable standards and signal stability.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                Pure Copper Cabling &amp; Certified Brackets
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                Pre-installation Site Assessment
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                Workmanship Warranty on All Installs
              </p>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Serviced Regions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
              Operational Coverage
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">
                    All 47 Counties in Kenya
                  </strong>
                  <span>
                    Nairobi base with daily mobile field dispatch to Central, Rift Valley, Coast, Western, and Nyanza.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe2 className="size-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">
                    East Africa Regional Projects
                  </strong>
                  <span>
                    Available for cross-border commercial and residential assignments in Uganda, Tanzania, and Rwanda.
                  </span>
                </div>
              </div>
              <Link
                href="/service-areas"
                className="inline-block text-xs font-semibold text-sky-400 hover:text-sky-300 underline underline-offset-4"
              >
                View Regional Mobilization Terms &rarr;
              </Link>
            </div>
          </div>

          {/* Col 4: Direct Contacts */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li>
                <span className="text-slate-400 block text-[11px]">Primary Phone &amp; Dispatch:</span>
                <a
                  href={CONTACT_INFO.phoneTel}
                  className="font-medium hover:text-amber-400 transition-colors text-sm"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <span className="text-slate-400 block text-[11px]">WhatsApp Instant:</span>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  +254 712 867 832
                </a>
              </li>
              <li>
                <span className="text-slate-400 block text-[11px]">Contractor Inquiries:</span>
                <a
                  href={CONTACT_INFO.emailMailto}
                  className="font-medium hover:text-sky-400 transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="pt-2">
                <span className="text-slate-400 block text-[11px]">Operating Hours:</span>
                <span className="text-slate-300">Mon - Sat: 7:30 AM - 7:00 PM</span>
                <span className="block text-amber-400 text-[11px] font-medium">24/7 On-Call for Security Failures</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; 2026 Henry Solutions. Low-Voltage &amp; Security Systems Contractor. Nairobi, Kenya.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-slate-400">
              Home
            </Link>
            <Link href="/services" className="hover:text-slate-400">
              Services
            </Link>
            <Link href="/service-areas" className="hover:text-slate-400">
              Service Areas
            </Link>
            <Link href="/about" className="hover:text-slate-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-slate-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
