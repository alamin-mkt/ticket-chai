"use client";

import React from "react";
import Link from "next/link";
import {
  Plane,
  Building2,
  ShieldCheck,
  Ticket,
  ArrowRight,
  Clock,
  CheckCircle2,
  Search,
} from "lucide-react";
import { siteContent } from "@/data/content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative overflow-hidden bg-hero-gradient rounded-b-[36px] sm:rounded-b-[48px] lg:rounded-b-[56px] border-b border-[rgba(15,62,44,0.06)] pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28">
      {/* Decorative Faint Airplane Trail Vector Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35" aria-hidden="true">
        <svg
          className="absolute -top-10 left-1/4 w-[1100px] h-[650px] stroke-[#B8DBC7]"
          viewBox="0 0 1100 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flight Path Arc */}
          <path
            d="M -100 550 C 250 480 380 220 720 180 C 940 155 1060 210 1200 90"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 8"
            className="animate-pulse"
          />
          {/* Subtle Jet Silhouette */}
          <g transform="translate(710, 170) rotate(-18)">
            <path
              d="M 12 0 L 16 10 L 26 12 L 16 14 L 14 22 L 10 15 L 2 13 L 10 11 Z"
              fill="#0F3E2C"
              opacity="0.6"
            />
          </g>
          {/* Soft radiant circles */}
          <circle cx="380" cy="220" r="140" fill="url(#hero-glow-1)" opacity="0.4" />
          <circle cx="850" cy="280" r="220" fill="url(#hero-glow-2)" opacity="0.3" />
          <defs>
            <radialGradient id="hero-glow-1" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#DCEDE3" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hero-glow-2" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Pill Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              {/* Green Airlines Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCEDE3] border border-[#B8DBC7] text-xs font-semibold text-[#0F3E2C] tracking-wide shadow-xs">
                <Plane className="w-3.5 h-3.5 text-[#0F3E2C]" />
                <span>{hero.badges.airlines}</span>
              </div>

              {/* Amber Support Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8EE] border border-[#FDE68A] text-xs font-semibold text-[#B45309] tracking-wide shadow-xs">
                <Clock className="w-3.5 h-3.5 text-[#F2A93B]" />
                <span>{hero.badges.support}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight mb-5 text-[#13131B]">
              <span className="font-normal block text-[#13131B]/90">
                {hero.headlinePrefix}
              </span>
              <span className="font-extrabold uppercase tracking-tight block mt-1">
                <span className="text-[#F2A93B] mr-2">{hero.headlineAccent}</span>
                <span className="text-[#13131B]">{hero.headlineSuffix}</span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#13131B]/75 leading-relaxed max-w-xl mb-8">
              {hero.subtext}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                href={hero.ctaPrimary.href}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#0F3E2C] hover:bg-[#0A2A1E] text-white font-semibold text-base shadow-[0_8px_20px_-4px_rgba(15,62,44,0.35)] hover:shadow-[0_12px_24px_-4px_rgba(15,62,44,0.45)] transition-all duration-200 group active:scale-[0.98]"
              >
                <span>{hero.ctaPrimary.text}</span>
                <ArrowRight className="w-4 h-4 text-[#F2A93B] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={hero.ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#13131B] hover:text-[#0F3E2C] hover:bg-[#F0F7F3] border border-[rgba(15,62,44,0.14)] font-semibold text-base shadow-xs hover:border-[#0F3E2C]/30 transition-all duration-200"
              >
                <span>{hero.ctaSecondary.text}</span>
              </Link>
            </div>

            {/* Live Trust Metrics Micro-Bar */}
            <div className="mt-10 pt-6 border-t border-[rgba(15,62,44,0.08)] flex flex-wrap items-center gap-6 text-xs text-[#13131B]/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F3E2C]" />
                <span className="font-medium">Instant Wallet Credit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F3E2C]" />
                <span className="font-medium">Direct GDS Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F3E2C]" />
                <span className="font-medium">No Deposit Freezes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tilted Dashboard Preview & Floating Icon Chips */}
          <div className="lg:col-span-6 relative mt-12 mb-8 sm:mt-8 sm:mb-0 lg:my-0 flex justify-center items-center">
            {/* Ambient Background Gradient Halo */}
            <div
              className="absolute -inset-4 bg-gradient-to-tr from-[#DCEDE3]/60 via-[#F0F7F3]/40 to-amber-100/30 rounded-3xl blur-2xl -z-10"
              aria-hidden="true"
            />

            {/* Floating Chip: Plane (Top Left) */}
            <div className="absolute -top-7 -left-2 sm:top-2 sm:left-2 z-20 animate-float-1 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 shadow-[0_8px_24px_-4px_rgba(15,62,44,0.12)] border border-[rgba(15,62,44,0.1)] flex items-center gap-2 sm:gap-2.5 scale-90 sm:scale-100 origin-top-left">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F0F7F3] flex items-center justify-center text-[#0F3E2C]">
                <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F3E2C]" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#13131B]">Flights</div>
                <div className="text-[10px] text-[#0F3E2C] font-semibold">700+ Airlines</div>
              </div>
            </div>

            {/* Floating Chip: Hotel (Top Right) */}
            <div className="absolute -top-7 -right-2 sm:top-0 sm:right-0 z-20 animate-float-2 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 shadow-[0_8px_24px_-4px_rgba(15,62,44,0.12)] border border-[rgba(15,62,44,0.1)] flex items-center gap-2 sm:gap-2.5 scale-90 sm:scale-100 origin-top-right">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#FFF8EE] flex items-center justify-center text-[#F2A93B]">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#F2A93B]" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#13131B]">Hotels</div>
                <div className="text-[10px] text-[#F2A93B] font-semibold">1.2M+ Stays</div>
              </div>
            </div>

            {/* Floating Chip: Insurance / Shield (Bottom Left) */}
            <div className="absolute -bottom-7 -left-2 sm:-bottom-4 sm:left-0 z-20 animate-float-3 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 shadow-[0_8px_24px_-4px_rgba(15,62,44,0.12)] border border-[rgba(15,62,44,0.1)] flex items-center gap-2 sm:gap-2.5 scale-90 sm:scale-100 origin-bottom-left">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#DCEDE3] flex items-center justify-center text-[#0F3E2C]">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F3E2C]" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#13131B]">Travel Cover</div>
                <div className="text-[10px] text-[#0F3E2C] font-semibold">Instant Policy</div>
              </div>
            </div>

            {/* Floating Chip: Ticket (Bottom Right) */}
            <div className="absolute -bottom-7 -right-2 sm:-bottom-2 sm:right-2 z-20 animate-float-1 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 shadow-[0_8px_24px_-4px_rgba(15,62,44,0.12)] border border-[rgba(15,62,44,0.1)] flex items-center gap-2 sm:gap-2.5 scale-90 sm:scale-100 origin-bottom-right">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F0F7F3] flex items-center justify-center text-[#0F3E2C]">
                <Ticket className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F3E2C]" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#13131B]">Instant PNR</div>
                <div className="text-[10px] text-[#0F3E2C] font-semibold">Auto-Issued</div>
              </div>
            </div>

            {/* Sleek Tilted HTML/CSS Laptop Mockup */}
            <div className="w-full max-w-[560px] transform lg:-rotate-1 lg:hover:rotate-0 transition-transform duration-500 ease-out">
              {/* Laptop Display Outer Bezel */}
              <div className="relative bg-[#1A1A24] p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-[0_25px_50px_-12px_rgba(15,62,44,0.25),0_10px_20px_-5px_rgba(19,19,27,0.15)] border border-[#2D2D3D]">
                {/* Top Camera Dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#4A4A5A] mx-auto mb-2" />

                {/* Dashboard Screen Content */}
                <div className="bg-white rounded-xl overflow-hidden border border-[#E6EBE8] text-[#13131B] text-xs">
                  {/* Top Bar of Dashboard */}
                  <div className="bg-[#0F3E2C] text-white px-3.5 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-white/15 flex items-center justify-center text-[10px] font-bold">
                        TC
                      </div>
                      <span className="font-semibold text-[11px] tracking-wide">
                        {hero.dashboardPreview.agencyName}
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#DCEDE3]/20 text-[#DCEDE3]">
                        {hero.dashboardPreview.agentId}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-[9px] text-[#DCEDE3]/80">Wallet Balance</div>
                        <div className="text-[11px] font-bold text-white">
                          {hero.dashboardPreview.walletBalance}
                        </div>
                      </div>
                      <div className="px-2 py-1 rounded bg-[#F2A93B] text-[#13131B] font-bold text-[10px] cursor-pointer hover:bg-amber-400">
                        + Top Up
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Tab Bar */}
                  <div className="bg-[#F0F7F3] border-b border-[#DCEDE3] px-3.5 py-1.5 flex items-center gap-4 text-[11px]">
                    <span className="font-semibold text-[#0F3E2C] flex items-center gap-1 border-b-2 border-[#0F3E2C] pb-0.5">
                      <Plane className="w-3 h-3 text-[#0F3E2C]" /> Flights
                    </span>
                    <span className="text-[#13131B]/60 flex items-center gap-1 hover:text-[#0F3E2C]">
                      <Building2 className="w-3 h-3" /> Hotels
                    </span>
                    <span className="text-[#13131B]/60 flex items-center gap-1 hover:text-[#0F3E2C]">
                      <Ticket className="w-3 h-3" /> SIM / eSIM
                    </span>
                    <span className="text-[#13131B]/60 flex items-center gap-1 hover:text-[#0F3E2C]">
                      <ShieldCheck className="w-3 h-3" /> Insurance
                    </span>
                  </div>

                  {/* Search Query Preview Box */}
                  <div className="p-3 bg-white">
                    <div className="bg-[#F4F8F6] border border-[#DCEDE3] rounded-lg p-2.5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-white text-[#0F3E2C] shadow-xs">
                          <Plane className="w-3 h-3" />
                        </div>
                        <div>
                          <div className="font-bold text-[11px] text-[#13131B]">DAC ⇄ DXB</div>
                          <div className="text-[9px] text-[#13131B]/60">Tomorrow • 1 Adult • Economy</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#DCEDE3] text-[#0F3E2C] font-semibold text-[9px]">
                          7 Available Fares
                        </span>
                        <div className="px-2.5 py-1 rounded bg-[#0F3E2C] text-white font-medium text-[10px] flex items-center gap-1">
                          <Search className="w-2.5 h-2.5" /> Search
                        </div>
                      </div>
                    </div>

                    {/* Flight Result Card in Mockup */}
                    <div className="mt-2.5 border border-[#E6EBE8] rounded-lg p-2.5 bg-white hover:border-[#B8DBC7] transition-colors">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#1F7A52]" />
                          <span className="font-bold text-[11px] text-[#13131B]">
                            {hero.dashboardPreview.recentFlight.airline}
                          </span>
                          <span className="text-[9px] text-[#13131B]/50">• Direct (4h 50m)</span>
                        </div>
                        <span className="text-[9px] font-semibold text-[#1F7A52] bg-[#DCEDE3] px-1.5 py-0.5 rounded">
                          {hero.dashboardPreview.recentFlight.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-[#F0F7F3]">
                        <div>
                          <span className="text-[9px] text-[#13131B]/60">Agent Net: </span>
                          <span className="font-bold text-[#13131B] text-[11px]">
                            {hero.dashboardPreview.recentFlight.fare}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-[#0F3E2C]">
                            {hero.dashboardPreview.recentFlight.commission}
                          </span>
                          <div className="px-2 py-1 rounded bg-[#0F3E2C] text-white text-[9px] font-semibold">
                            Issue Ticket
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Agent Mini Metric Footer */}
                    <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#F0F7F3]">
                      <div className="bg-[#F0F7F3]/70 p-1.5 rounded flex items-center justify-between">
                        <span className="text-[9px] text-[#13131B]/70">Active Bookings</span>
                        <span className="font-bold text-[11px] text-[#0F3E2C]">
                          {hero.dashboardPreview.activeBookings} PNRs
                        </span>
                      </div>
                      <div className="bg-[#FFF8EE] p-1.5 rounded flex items-center justify-between">
                        <span className="text-[9px] text-[#B45309]">Month Commission</span>
                        <span className="font-bold text-[11px] text-[#B45309]">
                          {hero.dashboardPreview.totalCommission}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Keyboard Base / Stand */}
              <div className="relative mx-auto w-4/5 h-2.5 bg-[#1F1F2C] rounded-b-xl shadow-lg flex items-center justify-center">
                <div className="w-16 h-1 bg-[#2F2F40] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
