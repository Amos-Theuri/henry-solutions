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
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-950 border border-sky-400/60 px-3.5 py-1 text-xs text-sky-200 font-semibold">
            <Zap className="size-3.5 text-amber-400" />
            <span>Direct Technician Contact &bull; Fast Quote Turnaround</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Contact Henry Solutions
          </h1>
          <p className="max-w-3xl text-slate-100 text-base sm:text-lg leading-relaxed font-medium">
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
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                  Direct Channels
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mt-1">
                  Speak Directly with Technician Henry
                </h2>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 mt-2 leading-relaxed font-medium">
                  No automated answering machines. You communicate directly with the technician who reviews and executes your work.
                </p>
              </div>

              {/* Contact Card 1: Phone */}
              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-card p-5 space-y-3 shadow-md hover:border-amber-500 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300">Telephone Dispatch</h3>
                    <a
                      href={CONTACT_INFO.phoneTel}
                      className="text-lg font-extrabold text-foreground hover:text-amber-600 transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                  Available for voice calls, urgent fault reports, and scheduling.
                </p>
                <Button asChild size="sm" className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold shadow-sm min-h-[44px]">
                  <a href={CONTACT_INFO.phoneTel}>
                    <Phone className="size-4" />
                    Call {CONTACT_INFO.phone} Now
                  </a>
                </Button>
              </div>

              {/* Contact Card 2: WhatsApp */}
              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-card p-5 space-y-3 shadow-md hover:border-emerald-500 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300">WhatsApp Instant Chat</h3>
                    <a
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      {CONTACT_INFO.whatsapp}
                    </a>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                  Send site photos, error codes, pin locations, or architectural drawings directly.
                </p>
                <Button asChild size="sm" variant="whatsapp" className="w-full font-bold shadow-sm min-h-[44px]">
                  <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="size-4" />
                    Open WhatsApp Chat
                  </a>
                </Button>
              </div>

              {/* Contact Card 3: Email */}
              <div className="rounded-xl border border-slate-300 dark:border-slate-800 bg-card p-5 space-y-3 shadow-md hover:border-sky-500 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-sky-500/15 text-sky-700 dark:text-sky-400 flex items-center justify-center">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300">Official Email</h3>
                    <a
                      href={CONTACT_INFO.emailMailto}
                      className="text-sm font-bold text-foreground hover:text-sky-600 transition-colors break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                  Send official tender documents, Bills of Quantities, or corporate inquiries.
                </p>
                <Button asChild size="sm" variant="outline" className="w-full border-slate-400 dark:border-slate-700 font-bold min-h-[44px]">
                  <a href={CONTACT_INFO.emailMailto}>
                    <Mail className="size-4" />
                    Send Email Inquiry
                  </a>
                </Button>
              </div>

              {/* Location badge */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs sm:text-sm space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <MapPin className="size-4 text-sky-600" />
                  <span>Headquarters &amp; Field Dispatch</span>
                </div>
                <p className="text-slate-800 dark:text-slate-200 font-medium">Nairobi, Kenya &bull; Mobilizing across all 47 counties and East Africa.</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                  Hours: Mon – Sat: 7:30 AM – 7:00 PM | Emergency Line: 24/7
                </p>
              </div>
            </div>

            {/* Request a Quote / Inspection Form */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-300 dark:border-slate-800 bg-card p-4 sm:p-8 shadow-md">
              <div className="mb-6 space-y-1">
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  Request an Estimate or Diagnostic Visit
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  Fill in your project details. We will calculate equipment requirements and respond with clear pricing and scheduling options.
                </p>
              </div>

              <Suspense fallback={<div className="p-6 text-sm text-slate-700 dark:text-slate-300">Loading inquiry form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/50 border-t border-slate-300 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl border border-slate-300 dark:border-slate-800 bg-card space-y-2 shadow-sm">
                <h3 className="font-bold text-foreground text-sm sm:text-base flex items-start gap-2">
                  <HelpCircle className="size-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed pl-6 font-medium">
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
