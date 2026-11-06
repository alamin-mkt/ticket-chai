"use client";

import React from "react";
import { Plane, TrendingUp, Award, Headphones, ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Plane,
  TrendingUp,
  Award,
  Headphones,
};

export function WhyChooseUs() {
  const { whyChooseUs } = siteContent;

  return (
    <section className="py-16 sm:py-24 bg-[#F4F8F6] relative" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Eyebrow Line */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#0F3E2C] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F3E2C]">
              {whyChooseUs.eyebrow}
            </span>
            <span className="w-8 h-0.5 bg-[#0F3E2C] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#13131B] tracking-tight mb-4">
            {whyChooseUs.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#13131B]/70 leading-relaxed">
            {whyChooseUs.subtext}
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyChooseUs.cards.map((card) => {
            const Icon = iconMap[card.iconName] || Plane;

            return (
              <div
                key={card.id}
                className="card-brand relative overflow-hidden p-7 flex flex-col justify-between group cursor-default"
              >
                {/* Decorative Green Corner Shape */}
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-bl from-[#DCEDE3] via-[#F0F7F3] to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-300"
                  aria-hidden="true"
                />

                {/* Top Corner Subtle Accent Dot */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#0F3E2C]/20 group-hover:bg-[#0F3E2C] transition-colors" />

                <div>
                  {/* Icon Tile */}
                  <div className="w-14 h-14 rounded-2xl bg-[#F0F7F3] border border-[#DCEDE3] flex items-center justify-center text-[#0F3E2C] mb-6 group-hover:bg-[#0F3E2C] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-7 h-7 transition-colors duration-300" />
                  </div>

                  {/* Title & Metric */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-[#13131B] group-hover:text-[#0F3E2C] transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#13131B]/70 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Card Bottom Metric Pill */}
                <div className="pt-4 border-t border-[rgba(15,62,44,0.06)] flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F0F7F3] text-[#0F3E2C] border border-[#DCEDE3]">
                    {card.metric}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#F0F7F3] flex items-center justify-center text-[#0F3E2C] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
