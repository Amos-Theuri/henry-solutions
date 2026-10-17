import type { Metadata } from "next";
import Link from "next/link";
import {
  Tv,
  Cctv,
  Zap,
  Home as HomeIcon,
  ShoppingBag,
  Wrench,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Cpu,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONTACT_INFO, SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Low-Voltage Services & Technical Specifications",
  description:
    "Comprehensive low-voltage contractor services in Nairobi, Kenya: DSTV installation & repair, satellite TV tuning, CCTV surveillance, smart home automation, equipment procurement, electric fence construction, and fault inspections.",
};

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "dstv-installation-repair": <Tv className="size-6 text-sky-600 dark:text-sky-400" />,
  "satellite-tv": <Tv className="size-6 text-blue-600 dark:text-blue-400" />,
  "cctv-surveillance": <Cctv className="size-6 text-emerald-600 dark:text-emerald-400" />,
  "smart-home": <HomeIcon className="size-6 text-indigo-600 dark:text-indigo-400" />,
  "equipment-procurement": <ShoppingBag className="size-6 text-amber-600 dark:text-amber-400" />,
  "electric-fence": <Zap className="size-6 text-orange-600 dark:text-orange-400" />,
  "fault-inspection": <Wrench className="size-6 text-red-600 dark:text-red-400" />,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-950/70 border border-sky-800 px-3 py-1 text-xs text-sky-300 font-semibold">
            <Cpu className="size-3.5" />
            <span>Technical Service Catalog &bull; Nairobi &amp; Countrywide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Low-Voltage Systems &amp; Security Services
          </h1>
          <p className="max-w-3xl text-slate-300 text-base sm:text-lg leading-relaxed">
            Every service is planned and installed following rigorous electrical standards. We use genuine components, high-grade copper cables, calibrated signal meters, and verified earthing systems to eliminate downtime.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Button asChild variant="whatsapp" size="sm">
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="size-4" />
                <span>Discuss System Scope on WhatsApp</span>
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

      {/* Services List Detailed Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 sm:p-8 lg:p-10 shadow-sm transition-all hover:border-sky-500/40"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Header & Description */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-sky-50 dark:bg-slate-900 border border-sky-100 dark:border-slate-800">
                      {SERVICE_ICONS[service.id]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                          Service #{index + 1}
                        </span>
                        {service.badge && (
                          <Badge variant="secondary" className="text-[11px]">
                            {service.badge}
                          </Badge>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold tracking-tight text-foreground">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Execution Scope &amp; Deliverables
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-900/40 p-2.5 rounded-lg border border-border/50">
                          <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-slate-800 dark:text-slate-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Specs, Equipment & CTA */}
                <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/60 p-6 rounded-xl border border-border space-y-5">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                      <Boxes className="size-3.5 text-sky-600" />
                      Hardware &amp; Equipment Standards
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.equipment.map((eq, eIdx) => (
                        <span
                          key={eIdx}
                          className="text-xs font-medium px-2.5 py-1 rounded bg-card border border-border text-foreground"
                        >
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Ideal For
                    </h4>
                    <p className="text-xs text-foreground font-medium leading-relaxed">
                      {service.idealFor}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border space-y-2.5">
                    <Button asChild className="w-full bg-sky-600 hover:bg-sky-500 text-white" size="default">
                      <Link href={`/contact?service=${encodeURIComponent(service.id)}`}>
                        Request Quote for This Service
                        <ArrowRight className="size-4 ml-1.5" />
                      </Link>
                    </Button>

                    <Button asChild variant="whatsapp" className="w-full" size="default">
                      <a
                        href={`https://wa.me/254712867832?text=Hello%20Henry%20Solutions,%20I%20need%20assistance%20with%20${encodeURIComponent(
                          service.title
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageSquare className="size-4" />
                        Inquire Directly on WhatsApp
                      </a>
                    </Button>

                    <a
                      href={CONTACT_INFO.phoneTel}
                      className="block text-center text-xs text-muted-foreground hover:text-foreground pt-1"
                    >
                      Or call technician: <strong className="text-foreground">{CONTACT_INFO.phone}</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Dispatch Prompt */}
      <section className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Need a Custom Installation or System Audit?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              We provide on-site technical surveys across Nairobi and schedule nationwide dispatches for new buildings and estates.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button asChild variant="whatsapp">
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="size-4" />
                WhatsApp Technician
              </a>
            </Button>
            <Button asChild variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
              <Link href="/contact">
                Contact Office
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
