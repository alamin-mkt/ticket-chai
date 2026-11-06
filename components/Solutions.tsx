"use client";

import React from "react";
import Link from "next/link";
import {
  Plane,
  Building2,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { siteContent } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Plane,
  Building2,
  Smartphone,
  ShieldCheck,
};

export function Solutions() {
  const { solutions } = siteContent;

  return (
    <section className="py-16 sm:py-24 bg-[#F4F8F6] relative" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#0F3E2C] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F3E2C]">
              {solutions.eyebrow}
            </span>
            <span className="w-8 h-0.5 bg-[#0F3E2C] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#13131B] tracking-tight mb-4">
            {solutions.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#13131B]/70 leading-relaxed">
            {solutions.subtext}
          </p>
        </div>

        {/* 4 Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {solutions.cards.map((card) => {
            const Icon = iconMap[card.iconName] || Plane;

            return (
              <div
                key={card.number}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#FFFFFF] via-[#F8FBF9] to-[#F0F7F3] border border-[rgba(15,62,44,0.1)] p-7 flex flex-col justify-between group hover:border-[#0F3E2C] hover:shadow-[0_16px_36px_-6px_rgba(15,62,44,0.12)] transition-all duration-300"
              >
                {/* Top Number & Badge Row */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-3xl font-extrabold text-[#0F3E2C]/20 group-hover:text-[#0F3E2C] transition-colors whitespace-nowrap shrink-0 leading-none">
                      {card.number}
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#DCEDE3] text-[11px] font-semibold text-[#0F3E2C] shrink-0">
                      <Sparkles className="w-3 h-3 text-[#1F7A52]" />
                      {card.badge}
                    </span>
                  </div>

                  {/* Icon Tile */}
                  <div className="w-14 h-14 rounded-2xl bg-[#DCEDE3] text-[#0F3E2C] flex items-center justify-center mb-5 group-hover:bg-[#0F3E2C] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-[#13131B] group-hover:text-[#0F3E2C] transition-colors mb-1">
                    {card.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#1F7A52] mb-3">
                    {card.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#13131B]/70 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Tag & Arrow Action */}
                <div className="pt-4 border-t border-[rgba(15,62,44,0.08)] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F3E2C] bg-white px-3 py-1 rounded-lg border border-[#DCEDE3] shadow-2xs">
                    {card.tag}
                  </span>

                  <Link
                    href={card.href}
                    className="w-9 h-9 rounded-xl bg-white border border-[#DCEDE3] text-[#0F3E2C] flex items-center justify-center group-hover:bg-[#0F3E2C] group-hover:text-white group-hover:border-[#0F3E2C] transition-all shadow-xs"
                    aria-label={`Explore ${card.title}`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
