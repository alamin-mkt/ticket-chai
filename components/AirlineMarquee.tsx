"use client";

import React from "react";
import { CheckCircle2, Plane } from "lucide-react";
import { siteContent } from "@/data/content";

export function AirlineMarquee() {
  const { airlineMarquee } = siteContent;
  const { airlines } = airlineMarquee;

  // Duplicate for seamless infinite marquee loop
  const marqueeList = [...airlines, ...airlines];

  return (
    <section className="py-12 sm:py-16 bg-[#F4F8F6] relative" id="airlines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* White Rounded Main Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[rgba(15,62,44,0.08)] shadow-[0_4px_24px_-4px_rgba(15,62,44,0.05)]">
          {/* Top Info Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10 pb-8 border-b border-[rgba(15,62,44,0.06)]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-0.5 bg-[#0F3E2C] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F3E2C]">
                  {airlineMarquee.eyebrow}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#13131B] tracking-tight mb-3">
                {airlineMarquee.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#13131B]/70 leading-relaxed">
                {airlineMarquee.subtext}
              </p>
            </div>

            {/* Right Stat Chip */}
            <div className="self-start lg:self-auto shrink-0">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#F0F7F3] border border-[#DCEDE3] text-[#0F3E2C] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0F3E2C] text-white flex items-center justify-center font-bold">
                  <Plane className="w-5 h-5 text-[#34D399]" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-[#0F3E2C] leading-none">
                    {airlineMarquee.statChip}
                  </div>
                  <div className="text-xs text-[#1F7A52] font-semibold mt-0.5">
                    Direct Global GDS Feeds
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontally Auto-Scrolling Marquee Container */}
          {/*
            LEGAL NOTICE: Real airline logos require explicit commercial partner licensing.
            In compliance with trademark regulations, we display airline carriers using styled
            editorial text-monograms and partner validation badges.
          */}
          <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex items-center gap-4 sm:gap-6">
              {marqueeList.map((carrier, index) => (
                <div
                  key={`${carrier.id}-${index}`}
                  className="shrink-0 flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-[#F4F8F6] border border-[rgba(15,62,44,0.08)] hover:border-[#0F3E2C] hover:bg-white hover:shadow-md transition-all duration-200 select-none cursor-pointer"
                >
                  {/* Carrier Monogram Avatar Badge */}
                  <div className="w-10 h-10 rounded-xl bg-[#DCEDE3] border border-[#B8DBC7] flex items-center justify-center font-bold text-xs text-[#0F3E2C] tracking-wider">
                    {carrier.code}
                  </div>

                  {/* Name and Region */}
                  <div>
                    <div className="font-bold text-sm text-[#13131B] leading-snug">
                      {carrier.name}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1F7A52]" />
                      <span className="text-[11px] font-medium text-[#1F7A52]">
                        Partner Network
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Container Footer Line */}
          <div className="mt-8 pt-6 border-t border-[rgba(15,62,44,0.06)] text-center">
            <div className="inline-flex items-center flex-wrap justify-center gap-3 text-xs sm:text-sm font-semibold text-[#0F3E2C]">
              <span>Reliable inventory</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2A93B]" />
              <span>Competitive fares</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2A93B]" />
              <span>Instant booking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AirlineMarquee;
