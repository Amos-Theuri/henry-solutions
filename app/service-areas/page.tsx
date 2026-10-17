import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Globe2,
  Truck,
  Phone,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONTACT_INFO, SERVICE_AREAS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Areas | All 47 Counties in Kenya & East Africa",
  description:
    "Henry Solutions provides low-voltage, CCTV, DSTV, and electric fence technician services based in Nairobi, covering all 47 counties in Kenya and open to regional projects across East Africa.",
};

export default function ServiceAreasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-950/70 border border-sky-800 px-3 py-1 text-xs text-sky-300 font-semibold">
            <Globe2 className="size-3.5 text-emerald-400" />
            <span>Nairobi Base &bull; Nationwide Coverage &bull; Regional Capability</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Operational Coverage &amp; Technician Mobilization
          </h1>
          <p className="max-w-3xl text-slate-300 text-base sm:text-lg leading-relaxed">
            While based in Nairobi for rapid same-day diagnostics, Henry Solutions regularly deploys across all 47 counties in Kenya and undertakes cross-border commercial and institutional projects throughout East Africa.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Button asChild variant="whatsapp" size="sm">
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="size-4" />
                <span>Check Availability for Your Location</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="border-slate-700 text-slate-200 hover:bg-slate-800">
              <a href={CONTACT_INFO.phoneTel}>
                <Phone className="size-4" />
                <span>Call {CONTACT_INFO.phone}</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Zones */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Zone 1: Nairobi Core */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="bg-sky-600">
                    Primary Operations Base
                  </Badge>
                  <span className="text-xs font-semibold text-muted-foreground">
                    Same-Day &amp; Emergency Dispatch
                  </span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mt-1">
                  Nairobi Metropolitan Area
                </h2>
              </div>
              <Button asChild size="sm" variant="default" className="bg-sky-600 hover:bg-sky-500">
                <a href={CONTACT_INFO.phoneTel}>
                  <Phone className="size-4" />
                  Nairobi Dispatch: {CONTACT_INFO.phone}
                </a>
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Our mobile technician units operate across all Nairobi suburbs, commercial nodes, and residential gated communities. Standard turnaround for site surveys, dish realignment, and fault triage in Nairobi is within 2 to 4 hours.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {SERVICE_AREAS.nairobi.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-border/60"
                >
                  <MapPin className="size-3.5 text-sky-600 shrink-0" />
                  <span className="font-medium text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Zone 2: All 47 Counties in Kenya */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
                    Nationwide Kenyan Reach
                  </Badge>
                  <span className="text-xs font-semibold text-muted-foreground">
                    Scheduled Mobilization
                  </span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mt-1">
                  All 47 Counties in Kenya
                </h2>
              </div>
              <Button asChild size="sm" variant="whatsapp">
                <a
                  href={`https://wa.me/254712867832?text=Hello%20Henry%20Solutions,%20I%20have%20an%20upcountry%20project%20in%20Kenya.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="size-4" />
                  Request Upcountry Quote
                </a>
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Need low-voltage electrical, electric fence, or commercial CCTV installed in Nakuru, Mombasa, Kisumu, Nanyuki, Eldoret, or remote agricultural compounds? We assemble the verified bill of materials in Nairobi and dispatch directly with complete rigging gear.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-border space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                Representative Counties Regularly Visited:
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {SERVICE_AREAS.counties.map((county, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-2.5 py-1 rounded-md bg-card border border-border font-medium text-foreground"
                  >
                    {county}
                  </span>
                ))}
              </div>
            </div>

            {/* Upcountry Mobilization Protocol */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg border border-border bg-card space-y-1.5">
                <div className="size-7 rounded bg-sky-50 dark:bg-slate-800 text-sky-600 flex items-center justify-center font-bold text-xs">
                  1
                </div>
                <h4 className="text-xs font-bold text-foreground">Remote Scope &amp; Bill of Materials</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  We review site blueprints, photos, or boundary coordinates to establish equipment counts and exact cabling requirements before departure.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card space-y-1.5">
                <div className="size-7 rounded bg-sky-50 dark:bg-slate-800 text-sky-600 flex items-center justify-center font-bold text-xs">
                  2
                </div>
                <h4 className="text-xs font-bold text-foreground">Hardware Procurement &amp; Pre-Testing</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  All energizers, NVRs, and brackets are bench-tested in Nairobi to ensure zero defective parts arrive at the remote job site.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card space-y-1.5">
                <div className="size-7 rounded bg-sky-50 dark:bg-slate-800 text-sky-600 flex items-center justify-center font-bold text-xs">
                  3
                </div>
                <h4 className="text-xs font-bold text-foreground">Dedicated On-Site Execution</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  The technician remains on-site through installation, tensioning, signal calibration, and final handover with the facility manager.
                </p>
              </div>
            </div>
          </div>

          {/* Zone 3: East Africa Cross-Border */}
          <div className="rounded-2xl border border-sky-900/50 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-amber-400 text-amber-400 bg-amber-950/40">
                    Cross-Border Capability
                  </Badge>
                  <span className="text-xs font-semibold text-slate-300">
                    Regional Contracts &amp; Multi-Country Sites
                  </span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
                  East Africa Regional Deployments
                </h2>
              </div>
              <Button asChild size="sm" variant="default" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold">
                <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="size-4" />
                  Inquire Regional Project
                </a>
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Henry Solutions is open to cross-border low-voltage contracting across East Africa. We undertake perimeter electric fencing, multi-dwelling satellite distribution, and surveillance system engineering for lodges, commercial plants, and NGO premises in neighboring member states.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SERVICE_AREAS.eastAfrica.map((ea, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <Globe2 className="size-4 text-emerald-400" />
                    <strong className="text-white text-sm font-bold">{ea.country}</strong>
                  </div>
                  <p className="text-xs text-slate-400">{ea.notes}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-sky-950/60 border border-sky-800/40 text-xs text-slate-300 flex items-start gap-3">
              <Truck className="size-4 text-sky-400 shrink-0 mt-0.5" />
              <span>
                <strong>Cross-border logistics:</strong> Regional projects include full customs clearance documentation for specialized tools and test equipment, coordinated mobilization timelines, and direct client milestone reviews.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Callout Prompt */}
      <section className="bg-slate-100 dark:bg-slate-900/60 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            Have a project outside Nairobi or across the border?
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            Contact us with your location and technical requirements. We will estimate logistics, schedule dates, and prepare equipment.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Button asChild variant="default" className="bg-sky-600 hover:bg-sky-500">
              <Link href="/contact">
                Submit Location Details
                <ArrowRight className="size-4 ml-1.5" />
              </Link>
            </Button>
            <Button asChild variant="whatsapp">
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="size-4" />
                Quick WhatsApp Chat
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
