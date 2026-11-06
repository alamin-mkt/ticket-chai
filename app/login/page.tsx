"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { LogIn, Lock, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Logo from "@/components/Logo";
import { createClient } from "@/lib/supabase/client";

const loginSchema = z.object({
  emailOrId: z.string().min(3, "Please enter your valid agency email or Agent ID"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrId: "",
      password: "",
      rememberMe: true,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setAuthError(null);
    const supabase = createClient();
    const isLiveSupabase =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder");

    if (isLiveSupabase && data.emailOrId.includes("@")) {
      try {
        const { error: signInErr } = await supabase.auth.signInWithPassword({
          email: data.emailOrId,
          password: data.password,
        });

        if (signInErr) {
          setAuthError(signInErr.message);
          return;
        }
      } catch (err) {
        console.warn("Supabase login fallback:", err);
      }
    } else {
      // Simulate authentication latency
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    setSubmitted(true);
  };

  const handleDemoFill = () => {
    setValue("emailOrId", "agency@skylink-travels.com");
    setValue("password", "Ticketchai2026!");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F8F6]">
      <Header />
      <main className="flex-1 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="card-brand p-8 sm:p-10 bg-white">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Logo size="md" />
              </div>
              <h1 className="text-2xl font-bold text-[#13131B] tracking-tight">
                Agent Portal Login
              </h1>
              <p className="text-xs sm:text-sm text-[#13131B]/70 mt-1">
                Access your B2B flight, hotel, and wallet dashboard
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#F0F7F3] border border-[#DCEDE3] text-center">
                <div className="w-12 h-12 rounded-full bg-[#0F3E2C] text-white flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#0F3E2C] mb-1">
                  Authentication Successful
                </h3>
                <p className="text-xs text-[#13131B]/75 mb-4">
                  Welcome back! Redirecting you into the agent ticketing dashboard...
                </p>
                <Link
                  href="/"
                  className="btn-brand-primary w-full py-2.5 px-4 text-xs inline-flex items-center justify-center gap-2"
                >
                  Return to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {authError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{authError}</span>
                  </div>
                )}
                {/* Agency Email / Agent ID */}
                <div>
                  <label className="block text-xs font-bold text-[#13131B] mb-1.5">
                    Agency Email or Agent ID
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Mail className="w-4 h-4 text-[#0F3E2C]" />
                    </div>
                    <input
                      type="text"
                      {...register("emailOrId")}
                      placeholder="e.g. agent@travels.com or TC-88921"
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F3E2C] transition-all ${
                        errors.emailOrId
                          ? "border-red-500 bg-red-50/20"
                          : "border-gray-200 bg-white"
                      }`}
                    />
                  </div>
                  {errors.emailOrId && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.emailOrId.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-[#13131B]">
                      Password
                    </label>
                    <a
                      href="#forgot-password"
                      className="text-xs text-[#0F3E2C] font-semibold hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Lock className="w-4 h-4 text-[#0F3E2C]" />
                    </div>
                    <input
                      type="password"
                      {...register("password")}
                      placeholder="••••••••••••"
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#13131B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F3E2C] transition-all ${
                        errors.password
                          ? "border-red-500 bg-red-50/20"
                          : "border-gray-200 bg-white"
                      }`}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 text-xs text-[#13131B]/80 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("rememberMe")}
                      className="rounded text-[#0F3E2C] focus:ring-[#0F3E2C] h-4 w-4"
                    />
                    <span>Remember this workstation</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-brand-primary w-full py-3 px-4 text-sm flex items-center justify-center gap-2 mt-2 shadow-sm"
                >
                  <LogIn className="w-4 h-4" />
                  <span>{isSubmitting ? "Verifying..." : "Login to Dashboard"}</span>
                </button>

                {/* Quick Demo Fill Helper */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleDemoFill}
                    className="w-full py-2 px-3 rounded-lg bg-[#F0F7F3] hover:bg-[#DCEDE3] text-[11px] font-semibold text-[#0F3E2C] transition-colors"
                  >
                    Use Sample Agent Credentials (Demo)
                  </button>
                </div>
              </form>
            )}

            {/* Registration Callout */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-[#13131B]/70">
              <span>Don&apos;t have an agency account yet? </span>
              <Link
                href="/signup"
                className="font-bold text-[#0F3E2C] hover:underline"
              >
                Register as an Agent
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
