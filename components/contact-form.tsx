"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_INFO, SERVICES } from "@/lib/data";

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [service, setService] = React.useState(preselectedService);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [urgency, setUrgency] = React.useState("Normal");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      alert("Please enter your name, phone number, and a short message.");
      return;
    }
    setSubmitted(true);
  };

  const getWhatsAppForwardUrl = () => {
    const selectedServiceTitle =
      SERVICES.find((s) => s.id === service)?.title || service || "Low-Voltage Service";
    const text = `Hello Henry Solutions,%0A%0AMy name is *${encodeURIComponent(
      name
    )}*%0APhone: *${encodeURIComponent(phone)}*%0ALocation: *${encodeURIComponent(
      location || "Nairobi"
    )}*%0AService: *${encodeURIComponent(
      selectedServiceTitle
    )}*%0AUrgency: *${encodeURIComponent(urgency)}*%0A%0A*Details:* ${encodeURIComponent(
      message
    )}`;
    return `https://wa.me/254712867832?text=${text}`;
  };

  if (submitted) {
    return (
      <div className="rounded-xl border-2 border-emerald-500 bg-emerald-500/15 p-6 sm:p-8 text-foreground space-y-4 text-center">
        <div className="size-14 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 mx-auto flex items-center justify-center font-bold">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="text-xl font-extrabold text-foreground">
          Inquiry Prepared Successfully!
        </h3>
        <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 max-w-md mx-auto leading-relaxed font-medium">
          Thank you, <strong>{name}</strong>. For instant dispatch and faster turnaround, click below to forward your details directly to technician Henry on WhatsApp:
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <Button asChild size="lg" variant="whatsapp" className="w-full sm:w-auto font-extrabold shadow-md">
            <a href={getWhatsAppForwardUrl()} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="size-4" />
              Forward to Technician on WhatsApp
            </a>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="border-slate-400 dark:border-slate-700 font-semibold"
            onClick={() => {
              setSubmitted(false);
              setName("");
              setPhone("");
              setMessage("");
              setLocation("");
            }}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-bold text-slate-900 dark:text-slate-100">
            Full Name or Company <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. John Kamau / Apex Logistics"
            className="border-slate-300 dark:border-slate-700 text-foreground font-medium placeholder:text-slate-500 dark:placeholder:text-slate-400"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-bold text-slate-900 dark:text-slate-100">
            Phone / WhatsApp Number <span className="text-destructive">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 0712 345 678"
            className="border-slate-300 dark:border-slate-700 text-foreground font-medium placeholder:text-slate-500 dark:placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Location */}
        <div className="space-y-1.5">
          <label htmlFor="location" className="text-sm font-bold text-slate-900 dark:text-slate-100">
            Project Location / County <span className="text-destructive">*</span>
          </label>
          <Input
            id="location"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Westlands, Nairobi / Nakuru / Kampala"
            className="border-slate-300 dark:border-slate-700 text-foreground font-medium placeholder:text-slate-500 dark:placeholder:text-slate-400"
          />
        </div>

        {/* Service Type */}
        <div className="space-y-1.5">
          <label htmlFor="service" className="text-sm font-bold text-slate-900 dark:text-slate-100">
            Required Service
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="flex h-10 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-background px-3 py-2 text-sm font-medium text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">-- Select a Service --</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">Other Low-Voltage / Multi-Service Project</option>
          </select>
        </div>
      </div>

      {/* Urgency */}
      <div className="space-y-1.5">
        <label className="text-sm font-bold text-slate-900 dark:text-slate-100 block">
          Response Urgency
        </label>
        <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
          {[
            { label: "Emergency Fault (Today)", value: "Emergency" },
            { label: "Standard (1-2 Days)", value: "Standard" },
            { label: "Scheduled Project", value: "Scheduled" },
          ].map((item) => (
            <button
              type="button"
              key={item.value}
              onClick={() => setUrgency(item.value)}
              className={`py-2 px-2.5 rounded-lg border text-center font-bold transition-colors ${
                urgency === item.value
                  ? "border-sky-600 bg-sky-100 dark:bg-slate-800 text-sky-900 dark:text-sky-300 border-2"
                  : "border-slate-300 dark:border-slate-700 bg-card text-slate-800 dark:text-slate-200 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-bold text-slate-900 dark:text-slate-100">
          Requirement or Fault Description <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your requirements (e.g. DStv Explora installation with ExtraView in two rooms; or electric fence sounding alarm intermittently; or CCTV quote for 8 IP cameras with phone app viewing)."
          className="border-slate-300 dark:border-slate-700 text-foreground font-medium placeholder:text-slate-500 dark:placeholder:text-slate-400"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold h-11 text-base shadow-md"
        size="lg"
      >
        <Send className="size-4" />
        Submit Quote Request
      </Button>

      <p className="text-xs sm:text-sm text-center text-slate-700 dark:text-slate-300 font-medium">
        Need immediate response? Call direct:{" "}
        <a href={CONTACT_INFO.phoneTel} className="font-bold text-sky-700 dark:text-sky-400 hover:underline">
          {CONTACT_INFO.phone}
        </a>{" "}
        or message on WhatsApp.
      </p>
    </form>
  );
}
