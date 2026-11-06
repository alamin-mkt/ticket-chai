"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  Building,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { createClient } from "@/lib/supabase/client";

const contactSchema = z.object({
  agencyName: z.string().min(2, "Agency name is required"),
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  subject: z.string().min(1, "Please choose an inquiry topic"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      agencyName: "",
      name: "",
      email: "",
      phone: "",
      subject: "New Agency Registration",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    const supabase = createClient();
    const isLiveSupabase =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder");

    if (isLiveSupabase) {
      try {
        const { error } = await supabase.from("contact_inquiries").insert({
          agency_name: data.agencyName,
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          status: "new",
        });

        if (error) {
          console.error("Supabase contact inquiry error:", error);
        }
      } catch (err) {
        console.warn("Supabase contact fallback:", err);
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    setSubmitted(true);
  };

  const handleDemoFill = () => {
    setValue("agencyName", "Padma Global Travels");
    setValue("name", "Tanvir Ahmed");
    setValue("email", "tanvir@padmaglobal.com");
    setValue("phone", "+880 1819-876543");
    setValue("subject", "API Integration");
    setValue(
      "message",
      "We are interested in connecting our agency booking engine directly with the Ticketchai B2B Flight API. Please provide sandbox credentials and documentation."
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F8F6]">
      <Header />
      <main className="flex-1 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCEDE3] text-[#0F3E2C] text-xs font-semibold mb-3">
              <Phone className="w-3.5 h-3.5" />
              24/7 Agency Operations Desk
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#13131B] tracking-tight mb-4">
              Get in Touch with Our Team
            </h1>
            <p className="text-base sm:text-lg text-[#13131B]/70 leading-relaxed">
              Have questions about agency verification, API integration, or wallet top-ups?
              Our B2B travel specialists are standing by 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="card-brand p-6 sm:p-8 bg-white">
                <h3 className="text-lg font-bold text-[#13131B] mb-6 flex items-center gap-2">
                  <Building className="w-5 h-5 text-[#0F3E2C]" />
                  Ticketchai Headquarters
                </h3>

                <div className="space-y-6 text-sm text-[#13131B]/80">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F0F7F3] text-[#0F3E2C] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-[#13131B]">Corporate Office</div>
                      <p className="text-xs text-[#13131B]/70 mt-0.5 leading-relaxed">
                        Level 8, Concord Tower, Road 11, Block D, Banani / Gulshan-2, Dhaka-1213, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F0F7F3] text-[#0F3E2C] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-[#13131B]">Agent Phone Lines</div>
                      <p className="text-xs text-[#13131B]/70 mt-0.5">
                        Hotline: +880 9610-000000 <br />
                        Emergency Desk: +880 1700-000000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F0F7F3] text-[#0F3E2C] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-[#13131B]">Support Email</div>
                      <p className="text-xs text-[#13131B]/70 mt-0.5">
                        agents@ticketchai.com <br />
                        api-support@ticketchai.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F0F7F3] text-[#0F3E2C] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-[#13131B]">Desk Hours</div>
                      <p className="text-xs text-[#13131B]/70 mt-0.5">
                        Ticket Re-issuance: 24 Hours / 7 Days <br />
                        Agency Onboarding: 9:00 AM – 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href="https://wa.me/8801700000000"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Instant WhatsApp Agency Support</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="card-brand p-8 sm:p-10 bg-white">
                <h3 className="text-xl font-bold text-[#13131B] mb-2">
                  Send an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#13131B]/70 mb-6">
                  Fill out the form below and an agent relationship manager will reply within 30 minutes.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-[#F0F7F3] border border-[#DCEDE3] text-center">
                    <div className="w-14 h-14 rounded-full bg-[#0F3E2C] text-white flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-[#0F3E2C] mb-1">
                      Inquiry Dispatched Successfully!
                    </h4>
                    <p className="text-xs text-[#13131B]/75 mb-6">
                      Our agency relationship lead has received your message and will contact your agency via email/phone shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-brand-primary py-2.5 px-6 text-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#13131B] mb-1">
                          Agency Name *
                        </label>
                        <input
                          type="text"
                          {...register("agencyName")}
                          placeholder="Your Travel Agency"
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] ${
                            errors.agencyName ? "border-red-500 bg-red-50/20" : "border-gray-200"
                          }`}
                        />
                        {errors.agencyName && (
                          <p className="text-xs text-red-600 mt-1">{errors.agencyName.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#13131B] mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          {...register("name")}
                          placeholder="Full Name"
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] ${
                            errors.name ? "border-red-500 bg-red-50/20" : "border-gray-200"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#13131B] mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          {...register("email")}
                          placeholder="agency@domain.com"
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] ${
                            errors.email ? "border-red-500 bg-red-50/20" : "border-gray-200"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#13131B] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register("phone")}
                          placeholder="+880 1711-000000"
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] ${
                            errors.phone ? "border-red-500 bg-red-50/20" : "border-gray-200"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#13131B] mb-1">
                        Inquiry Topic *
                      </label>
                      <select
                        {...register("subject")}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#13131B] bg-white focus:outline-none focus:ring-2 focus:ring-[#0F3E2C]"
                      >
                        <option value="New Agency Registration">New Agency Registration</option>
                        <option value="API Integration">B2B Flight & Hotel API Integration</option>
                        <option value="Wallet & Payment">Wallet & Payment Support</option>
                        <option value="Emergency Reissue">Emergency Flight Reissue / Void</option>
                        <option value="General Inquiry">General Partnership Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#13131B] mb-1">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        {...register("message")}
                        placeholder="Tell us about your agency needs..."
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] ${
                          errors.message ? "border-red-500 bg-red-50/20" : "border-gray-200"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-brand-primary w-full py-3.5 px-4 text-sm flex items-center justify-center gap-2 mt-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
                    </button>

                    <div className="pt-2 text-center">
                      <button
                        type="button"
                        onClick={handleDemoFill}
                        className="py-1 px-3 rounded-lg bg-[#F0F7F3] text-[11px] font-semibold text-[#0F3E2C]"
                      >
                        Auto-Fill Demo Inquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
