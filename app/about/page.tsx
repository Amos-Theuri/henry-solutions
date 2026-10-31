import type { Metadata } from "next";
import {
  ShieldCheck,
  Zap,
  Phone,
  MessageSquare,
  HardHat,
  Cpu,
  Gauge,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Contractor | Low-Voltage Engineering Standards",
  description:
    "Learn about Henry Solutions, a dedicated low-voltage systems technician and contractor based in Nairobi Kenya, specializing in satellite TV, CCTV, electric fences, and smart home automation.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-950 border border-sky-400/60 px-3.5 py-1 text-xs text-sky-200 font-semibold">
            <HardHat className="size-3.5 text-amber-400" />
            <span>Technician &amp; Contractor Profile &bull; Nairobi, Kenya</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            About Henry Solutions
          </h1>
          <p className="max-w-3xl text-slate-100 text-base sm:text-lg leading-relaxed font-medium">
            A hands-on low-voltage engineering contractor dedicated to providing reliable physical security, clean signal distribution, and automation infrastructure across Kenya and East Africa.
          </p>
        </div>
      </section>

      {/* Main Contractor Narrative */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                The Hands-On Difference
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Technical Precision Over Quick Shortcuts
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                <p>
                  Henry Solutions was founded on a simple premise: low-voltage infrastructure is the nervous system of modern properties. When CCTV feeds glitch, electric fences sound false alarms in the rain, or satellite signals fail during an important broadcast, the cause is almost never bad luck—it is poor termination, uncalibrated alignment, or counterfeit cabling.
                </p>
                <p>
                  As an independent contractor based in Nairobi, technician Henry personally oversees site surveys, signal carrier measurements, earthing rod tests, and final equipment commissioning. We do not pass off high-stakes security installations to untrained day laborers.
                </p>
                <p>
                  Whether working on a single suburban home in Karen or deploying perimeter security for an industrial facility in Nakuru, our approach combines calibrated digital meters, pure copper conductors, and neat conduit pathways that ensure longevity and serviceability.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button asChild className="w-full sm:w-auto bg-sky-600 hover:bg-sky-500 text-white font-bold min-h-[44px]">
                  <a href={CONTACT_INFO.phoneTel}>
                    <Phone className="size-4" />
                    Call Technician Direct ({CONTACT_INFO.phone})
                  </a>
                </Button>
                <Button asChild variant="whatsapp" className="w-full sm:w-auto font-bold min-h-[44px]">
                  <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="size-4" />
                    WhatsApp Consultation
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Contractor Specs Card */}
            <div className="lg:col-span-5 bg-card border border-slate-300 dark:border-slate-800 p-4 sm:p-8 rounded-2xl shadow-md space-y-6">
              <h3 className="font-bold text-lg text-foreground pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                <ShieldCheck className="size-5 text-sky-600" />
                Contractor Field Standards
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <span className="flex size-7 items-center justify-center rounded-md bg-sky-100 dark:bg-slate-800 text-sky-700 dark:text-sky-300 font-bold shrink-0">
                    1
                  </span>
                  <div>
                    <strong className="text-foreground block text-sm font-bold">Solid Copper Guarantee</strong>
                    <span className="text-slate-700 dark:text-slate-300">
                      We never substitute cheap Copper-Clad Aluminum (CCA). Solid copper prevents voltage drop and brittle wire snapping.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex size-7 items-center justify-center rounded-md bg-sky-100 dark:bg-slate-800 text-sky-700 dark:text-sky-300 font-bold shrink-0">
                    2
                  </span>
                  <div>
                    <strong className="text-foreground block text-sm font-bold">Dedicated Instrument Diagnostics</strong>
                    <span className="text-slate-700 dark:text-slate-300">
                      We carry digital spectrum analyzers, fence voltmeters, and cable continuity certifiers to every job.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex size-7 items-center justify-center rounded-md bg-sky-100 dark:bg-slate-800 text-sky-700 dark:text-sky-300 font-bold shrink-0">
                    3
                  </span>
                  <div>
                    <strong className="text-foreground block text-sm font-bold">Clean Conduit &amp; Cable Trunking</strong>
                    <span className="text-slate-700 dark:text-slate-300">
                      No loose hanging wires or exposed splice points. Every cable run is neatly routed in UV-rated outdoor conduit or indoor trunking.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex size-7 items-center justify-center rounded-md bg-sky-100 dark:bg-slate-800 text-sky-700 dark:text-sky-300 font-bold shrink-0">
                    4
                  </span>
                  <div>
                    <strong className="text-foreground block text-sm font-bold">Genuine Distributor Hardware</strong>
                    <span className="text-slate-700 dark:text-slate-300">
                      Authorized DStv hardware, Nemtek/JVA energizers, and Hikvision/Dahua cameras backed by manufacturer warranties.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values / Workmanship Pillars */}
          <div className="pt-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                Pillars of Execution
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                How Every Job Is Delivered
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-slate-300 dark:border-slate-800 bg-card space-y-3 shadow-sm">
                <div className="size-10 rounded-lg bg-sky-500/15 text-sky-700 dark:text-sky-400 flex items-center justify-center font-bold">
                  <Gauge className="size-5" />
                </div>
                <h3 className="font-bold text-foreground text-base">Accurate Signal Tuning</h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  Satellite antennas are aligned to exact azimuth, elevation, and polarization angles. We optimize for highest carrier-to-noise ratio so heavy rain clouds do not kill your reception.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-300 dark:border-slate-800 bg-card space-y-3 shadow-sm">
                <div className="size-10 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">
                  <Zap className="size-5" />
                </div>
                <h3 className="font-bold text-foreground text-base">Intruder-Deterrent Fencing</h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  Electric fences are engineered with high-tensile wire and multiple earth spikes spaced at proper intervals. Intruders receive a non-lethal yet incapacitating shock, instantly activating alarm sirens.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-300 dark:border-slate-800 bg-card space-y-3 shadow-sm">
                <div className="size-10 rounded-lg bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Cpu className="size-5" />
                </div>
                <h3 className="font-bold text-foreground text-base">Long-Term Service Support</h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  We maintain client records and wiring diagrams for every project. When you need system upgrades, additional cameras, or routine fence clearing, we know your setup from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 text-white py-14 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Consult Directly with Contractor Henry
          </h2>
          <p className="text-slate-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Need advice on an upcoming construction project, an office CCTV overhaul, or electric fence installation? Call or WhatsApp for honest technical recommendations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
            <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold shadow-md">
              <a href={CONTACT_INFO.phoneTel}>
                <Phone className="size-4" />
                Direct Call: {CONTACT_INFO.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="whatsapp" className="font-extrabold shadow-md">
              <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="size-4" />
                WhatsApp Message
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
