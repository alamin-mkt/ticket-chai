"use client";

import React from "react";
import Link from "next/link";
import { UserCheck, ShieldCheck, Wallet, Plane, ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";

const stepIcons = [UserCheck, ShieldCheck, Wallet, Plane];

export function Onboarding() {
  const { onboarding } = siteContent;

  return (
    <section className="py-16 sm:py-24 bg-[#F4F8F6] relative" id="onboarding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#0F3E2C] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F3E2C]">
              {onboarding.eyebrow}
            </span>
            <span className="w-8 h-0.5 bg-[#0F3E2C] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#13131B] tracking-tight mb-4">
            {onboarding.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#13131B]/70 leading-relaxed">
            {onboarding.subtext}
          </p>
        </div>

        {/* 4 Steps with Connecting Horizontal Line */}
        <div className="relative mb-16 sm:mb-20">
          {/* Desktop Connecting Line (hidden on mobile) */}
          <div
            className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-[#DCEDE3] -translate-y-8 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {onboarding.steps.map((item, index) => {
              const StepIcon = stepIcons[index] || Plane;

              return (
                <div
                  key={item.step}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number Circle with Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#DCEDE3] group-hover:border-[#0F3E2C] group-hover:bg-[#0F3E2C] flex items-center justify-center text-[#0F3E2C] group-hover:text-white transition-all duration-300 shadow-[0_4px_16px_-2px_rgba(15,62,44,0.08)]">
                      <StepIcon className="w-8 h-8 transition-transform group-hover:scale-110" />
                    </div>

                    {/* Step Pill Overlap */}
                    <div className="absolute -top-3 right-0 transform translate-x-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-[#F0F7F3] border border-[#B8DBC7] text-[#0F3E2C] group-hover:bg-[#F2A93B] group-hover:text-[#13131B] transition-colors shadow-2xs">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#1F7A52] uppercase tracking-wider mb-1">
                    {item.badgeText}
                  </span>

                  <h3 className="text-lg font-bold text-[#13131B] group-hover:text-[#0F3E2C] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#13131B]/70 leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Pill Banner Below */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-full bg-[#EAF5EF] border border-[#B8DBC7] p-3 sm:p-4 px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#1F7A52] shrink-0" />
              <p className="text-sm sm:text-base font-medium text-[#13131B]">
                {onboarding.pillBanner.text}
              </p>
            </div>

            <Link
              href={onboarding.pillBanner.ctaHref}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F3E2C] hover:bg-[#0A2A1E] text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all group"
            >
              <span>{onboarding.pillBanner.ctaText}</span>
              <ArrowRight className="w-4 h-4 text-[#F2A93B] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Onboarding;
