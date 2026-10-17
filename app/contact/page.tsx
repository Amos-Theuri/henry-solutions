import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  HelpCircle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { CONTACT_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Request Quote | Henry Solutions",
  description:
    "Get in touch with technician Henry Solutions in Nairobi Kenya. Call 0712867832, WhatsApp, or email henrysolutions@gmail.com for DSTV, CCTV, electric fence, smart home, and fault inspection quotes.",
};

const FAQS = [
  {
    q: "How fast can a technician arrive for an emergency fault?",
    a: "Within Nairobi and immediate Kiambu/Machakos borders, emergency dispatch is typically between 1 to 3 hours depending on your exact estate. For other counties, we coordinate same-day or next-morning travel.",
  },
  {
    q: "Do you supply the equipment or can I buy my own?",
    a: "We do both. We can procure 100% genuine hardware (DStv decoders, Nemtek energizers, Hikvision cameras, solid copper cabling) with distributor warranties, or install and configure equipment you have already purchased.",
  },
  {
    q: "What warranty do you offer on new installations?",
    a: "All our labor and cabling workmanship carries a 12-month satisfaction guarantee. Procured equipment carries standard manufacturer warranties ranging from 1 to 2 years.",
  },
  {
    q: "How do you handle projects outside Nairobi or in East Africa?",
    a: "We review your site requirements, prepare a comprehensive Bill of Quantities (BOQ), bench-test all electronics in Nairobi, and dispatch the technician with all required tools and rigging supplies.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-950/70 border border-sky-800 px-3 py-1 text-xs text-sky-300 font-semibold">
            <Zap className="size-3.5 text-amber-400" />
            <span>Direct Technician Contact &bull; Fast Quote Turnaround</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact Henry Solutions
          </h1>
          <p className="max-w-3xl text-slate-300 text-base sm:text-lg leading-relaxed">
            Reach out directly for scheduled installations, technical site surveys, equipment procurement, or emergency low-voltage system diagnostics.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Cards & Form */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Direct Contact Options */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  Direct Channels
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mt-1">
                  Speak Directly with Technician Henry
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                  No automated answering machines. You communicate directly with the technician who reviews and executes your work.
                </p>
              </div>

              {/* Contact Card 1: Phone */}
              <div className="rounded-xl border border-border bg-card p-5 space-y-3 shadow-sm hover:border-amber-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase text-muted-foreground">Telephone Dispatch</h3>
                    <a
                      href={CONTACT_INFO.phoneTel}
                      className="text-lg font-extrabold text-foreground hover:text-amber-600 transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Available for voice calls, urgent fault reports, and scheduling.
                </p>
                <Button asChild size="sm" className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold">
                  <a href={CONTACT_INFO.phoneTel}>
                    <Phone className="size-3.5" />
                    Call {CONTACT_INFO.phone} Now
                  </a>
                </Button>
              </div>

              {/* Contact Card 2: WhatsApp */}
              <div className="rounded-xl border border-border bg-card p-5 space-y-3 shadow-sm hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <MessageSquare className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase text-muted-foreground">WhatsApp Instant Chat</h3>
                    <a
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-extrabold text-emerald-600 hover:underline"
                    >
                      {CONTACT_INFO.whatsapp}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Send site photos, error codes, pin locations, or architectural drawings directly.
                </p>
                <Button asChild size="sm" variant="whatsapp" className="w-full font-semibold">
                  <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="size-3.5" />
                    Open WhatsApp Chat
                  </a>
                </Button>
              </div>

              {/* Contact Card 3: Email */}
              <div className="rounded-xl border border-border bg-card p-5 space-y-3 shadow-sm hover:border-sky-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase text-muted-foreground">Official Email</h3>
                    <a
                      href={CONTACT_INFO.emailMailto}
                      className="text-sm font-bold text-foreground hover:text-sky-600 transition-colors break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Send official tender documents, Bills of Quantities, or corporate inquiries.
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <a href={CONTACT_INFO.emailMailto}>
                    <Mail className="size-3.5" />
                    Send Email Inquiry
                  </a>
                </Button>
              </div>

              {/* Location badge */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-border text-xs space-y-1.5 text-muted-foreground">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <MapPin className="size-4 text-sky-600" />
                  <span>Headquarters &amp; Field Dispatch</span>
                </div>
                <p>Nairobi, Kenya &bull; Mobilizing across all 47 counties and East Africa.</p>
                <p className="text-[11px] text-slate-500">
                  Hours: Mon – Sat: 7:30 AM – 7:00 PM | Emergency Line: 24/7
                </p>
              </div>
            </div>

            {/* Request a Quote / Inspection Form */}
            <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <div className="mb-6 space-y-1">
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  Request an Estimate or Diagnostic Visit
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fill in your project details. We will calculate equipment requirements and respond with clear pricing and scheduling options.
                </p>
              </div>

              <Suspense fallback={<div className="p-6 text-xs text-muted-foreground">Loading inquiry form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl border border-border bg-card space-y-2">
                <h3 className="font-bold text-foreground text-sm flex items-start gap-2">
                  <HelpCircle className="size-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
