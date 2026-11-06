"use client";

import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  CreditCard,
  Receipt,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { siteContent } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  CreditCard,
  Receipt,
};

export function CommissionRewards() {
  const { commission } = siteContent;

  return (
    <section className="py-16 sm:py-24 bg-[#F4F8F6] relative" id="commission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading & Opportunity */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#0F3E2C] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F3E2C]">
                {commission.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
              <span className="text-[#13131B] block">{commission.headingLine1}</span>
              <span className="text-[#F2A93B] block">{commission.headingLine2}</span>
            </h2>

            <p className="text-base sm:text-lg text-[#13131B]/75 leading-relaxed mb-8">
              {commission.subtext}
            </p>

            <Link
              href={commission.ctaHref}
              className="inline-flex items-center gap-3 text-base font-bold text-[#0F3E2C] hover:text-[#0A2A1E] transition-all group py-2"
            >
              <span>{commission.ctaText}</span>
              <span className="w-8 h-8 rounded-full bg-[#DCEDE3] text-[#0F3E2C] flex items-center justify-center group-hover:bg-[#0F3E2C] group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Right Column: Dark Panel with Two Stat Tiles and 3 List Rows */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-brand-gradient text-white p-7 sm:p-9 shadow-[0_20px_50px_-10px_rgba(15,62,44,0.35)] border border-[rgba(255,255,255,0.12)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#F2A93B] block mb-1">
                    {commission.panel.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {commission.panel.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#34D399]">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Two Stat Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="text-sm font-semibold text-[#DCEDE3] mb-1">
                    {commission.panel.stat1.label}
                  </div>
                  <div className="text-lg font-bold text-white">
                    {commission.panel.stat1.sub}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="text-sm font-semibold text-[#DCEDE3] mb-1">
                    {commission.panel.stat2.label}
                  </div>
                  <div className="text-lg font-bold text-white">
                    {commission.panel.stat2.sub}
                  </div>
                </div>
              </div>

              {/* 3 Interactive Rows */}
              <div className="space-y-3">
                {commission.panel.rows.map((row) => {
                  const RowIcon = iconMap[row.iconName] || TrendingUp;

                  return (
                    <div
                      key={row.id}
                      className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between gap-4 transition-all duration-200 group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-white/10 text-[#34D399] flex items-center justify-center shrink-0 group-hover:bg-[#0F3E2C] group-hover:text-white transition-colors">
                          <RowIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-[#DCEDE3] transition-colors">
                            {row.title}
                          </div>
                          <div className="text-xs text-[#DCEDE3]/75 mt-0.5">
                            {row.description}
                          </div>
                        </div>
                      </div>

                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/20 transition-all shrink-0">
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommissionRewards;
