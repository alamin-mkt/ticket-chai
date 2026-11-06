"use client";

import React from "react";
import Link from "next/link";
import {
  Building,
  Wallet,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { siteContent } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Building,
  Wallet,
  Zap,
};

export function AboutSection() {
  const { about } = siteContent;

  return (
    <section className="py-16 sm:py-24 bg-[#F4F8F6] relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#0F3E2C] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F3E2C]">
                {about.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#13131B] tracking-tight leading-[1.18] mb-6">
              <span>{about.headingPrefix} </span>
              <span className="font-light text-[#13131B]/70 block mt-1">
                {about.headingSuffix}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#13131B]/75 leading-relaxed mb-4">
              {about.paragraph1}
            </p>

            <p className="text-base text-[#13131B]/70 leading-relaxed mb-8">
              {about.paragraph2}
            </p>

            <Link
              href={about.learnMoreHref}
              className="inline-flex items-center gap-3 text-base font-bold text-[#0F3E2C] hover:text-[#0A2A1E] transition-all group py-2"
            >
              <span>{about.learnMoreText}</span>
              <span className="w-8 h-8 rounded-full bg-[#DCEDE3] text-[#0F3E2C] flex items-center justify-center group-hover:bg-[#0F3E2C] group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Right Column: Dark Feature Card with Glass Subcards */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-brand-gradient text-white p-7 sm:p-9 shadow-[0_20px_50px_-10px_rgba(15,62,44,0.4)] border border-[rgba(255,255,255,0.12)]">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#34D399] block mb-1">
                    {about.panel.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {about.panel.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#F2A93B]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* 3 Glass Subcards */}
              <div className="space-y-4">
                {about.panel.items.map((item, idx) => {
                  const Icon = iconMap[item.iconName] || Zap;

                  return (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xs transition-all duration-200 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 text-[#34D399] flex items-center justify-center shrink-0 group-hover:bg-[#0F3E2C] group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#DCEDE3]/80 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status Dot at Bottom */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#DCEDE3]/75">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34D399]" />
                  </span>
                  <span className="font-semibold text-white">
                    {about.panel.statusDot}
                  </span>
                </div>
                <span className="text-[11px] text-[#DCEDE3]/60">99.9% Uptime Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
