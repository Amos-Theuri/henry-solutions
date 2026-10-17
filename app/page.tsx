import Link from "next/link";
import {
  ShieldCheck,
  Tv,
  Cctv,
  Zap,
  Home as HomeIcon,
  ShoppingBag,
  Wrench,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CONTACT_INFO, SERVICES } from "@/lib/data";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "dstv-installation-repair": <Tv className="size-6 text-sky-600 dark:text-sky-400" />,
  "satellite-tv": <Tv className="size-6 text-blue-600 dark:text-blue-400" />,
  "cctv-surveillance": <Cctv className="size-6 text-emerald-600 dark:text-emerald-400" />,
  "smart-home": <HomeIcon className="size-6 text-indigo-600 dark:text-indigo-400" />,
  "equipment-procurement": <ShoppingBag className="size-6 text-amber-600 dark:text-amber-400" />,
  "electric-fence": <Zap className="size-6 text-orange-600 dark:text-orange-400" />,
  "fault-inspection": <Wrench className="size-6 text-red-600 dark:text-red-400" />,
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-16 pb-20 sm:pt-24 sm:pb-28">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/60 px-3.5 py-1 text-xs font-semibold text-sky-300">
              <Zap className="size-3.5 fill-amber-400 text-amber-400" />
              <span>Low-Voltage &amp; Perimeter Security Contractor &bull; Nairobi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Precision Satellite, CCTV &amp; Security Engineering.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Henry Solutions installs, repairs, and maintains critical low-voltage infrastructure for homes, commercial compounds, and institutions. Based in Nairobi, deploying nationwide across all 47 counties and East Africa.
            </p>

            {/* Direct Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button asChild size="lg" variant="default" className="bg-sky-600 hover:bg-sky-500 text-white">
                <a href={CONTACT_INFO.phoneTel}>
                  <Phone className="size-4" />
                  <span>Call {CONTACT_INFO.phone}</span>
                </a>
              </Button>

              <Button asChild size="lg" variant="whatsapp">
                <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="size-4" />
                  <span>WhatsApp Diagnosis</span>
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800">
                <Link href="/services">
                  <span>Explore Services</span>
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80 text-xs text-slate-400">
              <div>
                <strong className="block text-white text-base font-bold">47 Counties</strong>
                <span>Direct site mobilization</span>
              </div>
              <div>
                <strong className="block text-white text-base font-bold">East Africa</strong>
                <span>Regional cross-border service</span>
              </div>
              <div>
                <strong className="block text-white text-base font-bold">Pure Copper</strong>
                <span>Zero counterfeit cables</span>
              </div>
              <div>
                <strong className="block text-white text-base font-bold">24/7 Response</strong>
                <span>Urgent fault inspections</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Core Disciplines
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mt-1">
                Engineered Low-Voltage Solutions
              </h2>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                From high-gain satellite alignment to perimeter electric fences and automated entry systems, each installation is executed with professional meters, proper earthing, and clean conduit trunking.
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/services">
                View Full Technical Specifications
                <ArrowRight className="size-4 ml-1.5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Card
                key={service.id}
                className="flex flex-col justify-between border-border/80 hover:border-sky-500/50 hover:shadow-md transition-all duration-200"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2.5 rounded-lg bg-sky-50 dark:bg-slate-900 border border-sky-100 dark:border-slate-800">
                      {SERVICE_ICONS[service.id]}
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-[11px] font-semibold">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-xs line-clamp-3">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 flex-1">
                  <div className="space-y-1.5 text-xs text-muted-foreground">
                    {service.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 border-t border-border/50 flex items-center justify-between gap-2">
                  <Link
                    href={`/services#${service.id}`}
                    className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    Details &amp; Equipment &rarr;
                  </Link>
                  <Button asChild size="sm" variant="ghost" className="h-8 text-xs px-2.5">
                    <a
                      href={`https://wa.me/254712867832?text=Hello%20Henry%20Solutions,%20I%20am%20inquiring%20about%20${encodeURIComponent(
                        service.title
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Inquire on WhatsApp
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Henry Solutions Contractor Standards */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/60 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Contractor Integrity
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mt-1">
              Why Site Owners Rely on Henry Solutions
            </h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Low-voltage failures usually stem from sloppy connections, undersized CCA cables, and improper grounding. We install systems built for durability and continuous uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm space-y-3">
              <div className="size-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                <CheckCircle2 className="size-5" />
              </div>
              <h3 className="font-bold text-foreground text-base">Tested Hardware &amp; Solid Copper</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We refuse Copper-Clad Aluminum (CCA) wiring that deteriorates after months of humidity. Every Cat6 and coaxial run uses 100% solid copper with weatherproof compression terminations.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border shadow-sm space-y-3">
              <div className="size-10 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold">
                <Activity className="size-5" />
              </div>
              <h3 className="font-bold text-foreground text-base">Calibrated Signal Meter Alignment</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                No trial-and-error dish pointing. We measure signal carrier-to-noise ratio (C/N) and Bit Error Rate (BER) on digital spectrum meters to eliminate rain fade and packet drops.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border shadow-sm space-y-3">
              <div className="size-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="font-bold text-foreground text-base">Perimeter Earthing &amp; Safety Compliance</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Electric fences are grounded with deep copper earth rods to guarantee required shock voltages while safeguarding your energizer against seasonal lightning surges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Servicing Banner */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-sky-900 to-slate-900 text-white p-8 sm:p-12 shadow-xl border border-sky-800/40 relative overflow-hidden">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-800/50 px-3 py-1 text-xs text-sky-200">
                <MapPin className="size-3.5 text-amber-400" />
                <span>Nairobi Headquarters &bull; Upcountry &amp; Regional Travel</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Servicing All 47 Counties in Kenya &amp; East Africa
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you need satellite distribution for an apartment block in Westlands, an electric perimeter fence for an estate in Nakuru, or surveillance in Kampala, we mobilize tools and certified equipment directly to your site.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-slate-200">Nairobi</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-slate-200">Kiambu</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-slate-200">Machakos</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-slate-200">Kajiado</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-slate-200">Nakuru</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-slate-200">Mombasa</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-slate-200">Eldoret</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-slate-200">Kisumu</span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30">Uganda &bull; Tanzania &bull; Rwanda</span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Button asChild size="default" variant="default" className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold">
                  <Link href="/service-areas">
                    Review Service Coverage &amp; Logistics
                  </Link>
                </Button>
                <Button asChild size="default" variant="whatsapp">
                  <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="size-4" />
                    Book Technician Dispatch
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact & Quote Prompt */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to Upgrade or Secure Your Premises?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Speak directly with technician Henry today. Get practical advice on hardware selection, installation schedules, and transparent quotes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold">
                <a href={CONTACT_INFO.phoneTel}>
                  <Phone className="size-4" />
                  Call Now: {CONTACT_INFO.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="whatsapp" className="w-full sm:w-auto font-bold">
                <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="size-4" />
                  Start WhatsApp Conversation
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-slate-700 text-white hover:bg-slate-800">
                <Link href="/contact">
                  Fill Quote Request Form
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
