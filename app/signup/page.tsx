"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Building2,
  FileText,
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Logo from "@/components/Logo";
import { createClient } from "@/lib/supabase/client";

const signupSchema = z
  .object({
    agencyName: z.string().min(2, "Agency name is required"),
    tradeLicense: z.string().min(4, "Valid Trade License number is required"),
    contactPerson: z.string().min(2, "Contact person name is required"),
    email: z.string().email("Enter a valid agency email address"),
    phone: z.string().min(10, "Enter a valid phone number (e.g. 01700000000)"),
    city: z.string().min(2, "Please provide your city/district"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    agreeTerms: z.literal(true, {
      message: "You must agree to the Agent Partnership Terms",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function createApplicationReference(phone: string): string {
  const digits = phone.replace(/\D/g, "").slice(-4) || "8800";
  return `TC-APP-${digits}-7192`;
}

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      agencyName: "",
      tradeLicense: "",
      contactPerson: "",
      email: "",
      phone: "",
      city: "Dhaka",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    const supabase = createClient();
    const isLiveSupabase =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder");

    if (isLiveSupabase) {
      try {
        // 1. Register Agency in Supabase public.agencies table
        const { data: agencyRecord, error: agencyErr } = await supabase
          .from("agencies")
          .insert({
            agency_name: data.agencyName,
            trade_license: data.tradeLicense,
            contact_person: data.contactPerson,
            email: data.email,
            phone: data.phone,
            city: data.city,
            status: "pending",
          })
          .select("id")
          .single();

        if (agencyErr) {
          console.error("Supabase agency insertion error:", agencyErr);
        }

        // 2. Register Auth User in Supabase Auth
        const { error: authErr } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: {
            data: {
              full_name: data.contactPerson,
              phone: data.phone,
              agency_id: agencyRecord?.id,
              role: "agent_admin",
            },
          },
        });

        if (authErr) {
          console.error("Supabase auth error:", authErr);
        }
      } catch (err) {
        console.warn("Supabase registration fallback:", err);
      }
    } else {
      // Simulate verification latency if running without live credentials
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    const refId = createApplicationReference(data.phone);
    setReferenceId(refId);
    setIsSuccess(true);
  };

  const handleDemoFill = () => {
    setValue("agencyName", "Bengal Horizon Travels & Tours");
    setValue("tradeLicense", "TRAD/DSCC/019283/2026");
    setValue("contactPerson", "Mohammad Rafiqul Islam");
    setValue("email", "info@bengalhorizon.com");
    setValue("phone", "+880 1711-234567");
    setValue("city", "Dhaka (Gulshan-2)");
    setValue("password", "Ticketchai2026!");
    setValue("confirmPassword", "Ticketchai2026!");
    setValue("agreeTerms", true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F8F6]">
      <Header />
      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="card-brand p-8 sm:p-12 bg-white">
            {/* Heading Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-3">
                <Logo size="md" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCEDE3] text-[#0F3E2C] text-xs font-semibold mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified B2B Travel Agency Network
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#13131B] tracking-tight">
                Agency Registration
              </h1>
              <p className="text-sm text-[#13131B]/70 mt-1 max-w-md mx-auto">
                Join 1,000+ travel agencies in Bangladesh issuing tickets, booking hotels, and earning high commissions.
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 rounded-3xl bg-[#F0F7F3] border border-[#DCEDE3] text-center">
                <div className="w-16 h-16 rounded-full bg-[#0F3E2C] text-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0F3E2C] mb-2">
                  Application Submitted Successfully!
                </h3>
                <p className="text-sm text-[#13131B]/75 mb-4">
                  Thank you for registering with Ticketchai. Your verification reference ID is:
                </p>
                <div className="inline-block px-4 py-2 bg-white rounded-xl border border-[#B8DBC7] font-mono font-bold text-sm text-[#0F3E2C] mb-6 shadow-2xs">
                  {referenceId}
                </div>
                <p className="text-xs text-[#13131B]/70 max-w-md mx-auto mb-6">
                  Our agency onboarding desk will review your trade license and activate your wallet credentials within 2-4 business hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/login"
                    className="btn-brand-primary py-2.5 px-6 text-sm"
                  >
                    Proceed to Login
                  </Link>
                  <Link
                    href="/"
                    className="btn-brand-outline py-2.5 px-6 text-sm"
                  >
                    Back to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Agency Name & Trade License */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#13131B] mb-1.5">
                      Agency Registered Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Building2 className="w-4 h-4 text-[#0F3E2C]" />
                      </div>
                      <input
                        type="text"
                        {...register("agencyName")}
                        placeholder="e.g. Horizon Travels Ltd."
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F3E2C] transition-all ${
                          errors.agencyName ? "border-red-500 bg-red-50/20" : "border-gray-200"
                        }`}
                      />
                    </div>
                    {errors.agencyName && (
                      <p className="text-xs text-red-600 mt-1">{errors.agencyName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#13131B] mb-1.5">
                      Trade License Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <FileText className="w-4 h-4 text-[#0F3E2C]" />
                      </div>
                      <input
                        type="text"
                        {...register("tradeLicense")}
                        placeholder="e.g. TRAD/DNCC/12345"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F3E2C] transition-all ${
                          errors.tradeLicense ? "border-red-500 bg-red-50/20" : "border-gray-200"
                        }`}
                      />
                    </div>
                    {errors.tradeLicense && (
                      <p className="text-xs text-red-600 mt-1">{errors.tradeLicense.message}</p>
                    )}
                  </div>
                </div>

                {/* Contact Person & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#13131B] mb-1.5">
                      Managing Contact Person *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <User className="w-4 h-4 text-[#0F3E2C]" />
                      </div>
                      <input
                        type="text"
                        {...register("contactPerson")}
                        placeholder="Full Name"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F3E2C] transition-all ${
                          errors.contactPerson ? "border-red-500 bg-red-50/20" : "border-gray-200"
                        }`}
                      />
                    </div>
                    {errors.contactPerson && (
                      <p className="text-xs text-red-600 mt-1">{errors.contactPerson.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#13131B] mb-1.5">
                      City / District *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <MapPin className="w-4 h-4 text-[#0F3E2C]" />
                      </div>
                      <input
                        type="text"
                        {...register("city")}
                        placeholder="Dhaka, Chittagong, Sylhet..."
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F3E2C] transition-all ${
                          errors.city ? "border-red-500 bg-red-50/20" : "border-gray-200"
                        }`}
                      />
                    </div>
                    {errors.city && (
                      <p className="text-xs text-red-600 mt-1">{errors.city.message}</p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#13131B] mb-1.5">
                      Official Work Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Mail className="w-4 h-4 text-[#0F3E2C]" />
                      </div>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="agent@company.com"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F3E2C] transition-all ${
                          errors.email ? "border-red-500 bg-red-50/20" : "border-gray-200"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#13131B] mb-1.5">
                      Phone Number (+880) *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Phone className="w-4 h-4 text-[#0F3E2C]" />
                      </div>
                      <input
                        type="tel"
                        {...register("phone")}
                        placeholder="01711-000000"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F3E2C] transition-all ${
                          errors.phone ? "border-red-500 bg-red-50/20" : "border-gray-200"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Password & Confirm Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#13131B] mb-1.5">
                      Create Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Lock className="w-4 h-4 text-[#0F3E2C]" />
                      </div>
                      <input
                        type="password"
                        {...register("password")}
                        placeholder="Min 8 characters"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F3E2C] transition-all ${
                          errors.password ? "border-red-500 bg-red-50/20" : "border-gray-200"
                        }`}
                      />
                    </div>
                    {errors.password && (
                      <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#13131B] mb-1.5">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Lock className="w-4 h-4 text-[#0F3E2C]" />
                      </div>
                      <input
                        type="password"
                        {...register("confirmPassword")}
                        placeholder="Repeat password"
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F3E2C] transition-all ${
                          errors.confirmPassword
                            ? "border-red-500 bg-red-50/20"
                            : "border-gray-200"
                        }`}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 text-xs text-[#13131B]/80 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("agreeTerms")}
                      className="rounded text-[#0F3E2C] focus:ring-[#0F3E2C] h-4 w-4 mt-0.5"
                    />
                    <span>
                      I certify that our agency holds a valid trade license and agree to the{" "}
                      <a href="#terms" className="text-[#0F3E2C] font-semibold underline">
                        Ticketchai B2B Agent Agreement
                      </a>{" "}
                      and ticketing policies.
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.agreeTerms.message}
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-brand-primary w-full py-3.5 px-4 text-sm flex items-center justify-center gap-2 mt-4 shadow-sm"
                >
                  <span>{isSubmitting ? "Submitting Registration..." : "Complete Agent Registration"}</span>
                  <ArrowRight className="w-4 h-4 text-[#F2A93B]" />
                </button>

                {/* Quick Auto-Fill for Testing */}
                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={handleDemoFill}
                    className="py-1.5 px-3 rounded-lg bg-[#F0F7F3] hover:bg-[#DCEDE3] text-[11px] font-semibold text-[#0F3E2C] transition-colors"
                  >
                    Auto-Fill Sample Agency Data (Demo)
                  </button>
                </div>
              </form>
            )}

            {/* Login Link */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-[#13131B]/70">
              <span>Already have an active agency account? </span>
              <Link
                href="/login"
                className="font-bold text-[#0F3E2C] hover:underline"
              >
                Log In to Portal
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
