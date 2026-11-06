import React from "react";
import Link from "next/link";
import {
  Award,
  Wallet,
  Users2,
  ArrowRight,
  CreditCard,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Agent Benefits & Commission Tiers",
  description:
    "Explore Ticketchai B2B partner benefits: top-tier flight commission, flexible agency credit lines, instant wallet settlements, and multi-staff accounts.",
};

export default function AgentBenefitsPage() {
  const tiers = [
    {
      name: "Bronze Partner",
      volume: "Up to BDT 1.5M / mo",
      commission: "Up to 4.5%",
      hotelCommission: "8%",
      creditFacility: "Standard Wallet",
      support: "Standard 24/7 Desk",
      badge: "Starter",
      theme: "border-gray-200",
    },
    {
      name: "Silver Partner",
      volume: "BDT 1.5M - 5M / mo",
      commission: "Up to 5.8%",
      hotelCommission: "10%",
      creditFacility: "BDT 200,000 Credit Line",
      support: "Priority Queue",
      badge: "Popular",
      theme: "border-[#B8DBC7]",
    },
    {
      name: "Gold Partner",
      volume: "BDT 5M - 15M / mo",
      commission: "Up to 6.8%",
      hotelCommission: "12%",
      creditFacility: "BDT 500,000 Credit Line",
      support: "Dedicated Key Account Manager",
      badge: "High Growth",
      theme: "border-[#F2A93B]",
    },
    {
      name: "Platinum Elite",
      volume: "BDT 15M+ / mo",
      commission: "Up to 7.5% + Volume Bonus",
      hotelCommission: "14%",
      creditFacility: "Custom Revolving Credit",
      support: "Direct Senior Operations Lead",
      badge: "Enterprise",
      theme: "border-[#0F3E2C]",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F8F6]">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero-gradient pt-14 pb-18 border-b border-[rgba(15,62,44,0.06)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCEDE3] text-[#0F3E2C] text-xs font-semibold mb-4">
              <Award className="w-3.5 h-3.5 text-[#0F3E2C]" />
              Maximize Your Agency Margins
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#13131B] tracking-tight mb-5 leading-tight">
              Competitive Commissions & <br />
              <span className="text-[#0F3E2C]">Unrivaled Agent Benefits</span>
            </h1>
            <p className="text-base sm:text-lg text-[#13131B]/75 leading-relaxed">
              Transparent tier structures, zero deposit locks, and high return on every domestic
              and international ticket issued.
            </p>
          </div>
        </section>

        {/* Commission Tiers */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F3E2C] block mb-2">
                TRANSPARENT REWARDS
              </span>
              <h2 className="text-3xl font-extrabold text-[#13131B] tracking-tight">
                Agency Commission Tiers
              </h2>
              <p className="text-sm text-[#13131B]/70 mt-2">
                Your agency tier automatically upgrades as your monthly booking volume expands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`card-brand p-6 bg-white border-2 ${tier.theme} flex flex-col justify-between relative`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#F0F7F3] text-[#0F3E2C]">
                        {tier.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#13131B] mb-1">
                      {tier.name}
                    </h3>
                    <div className="text-xs text-[#13131B]/60 mb-5">{tier.volume}</div>

                    <div className="space-y-3.5 text-xs text-[#13131B]/80 pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase font-semibold">
                          Flight Commission
                        </span>
                        <span className="text-base font-extrabold text-[#0F3E2C]">
                          {tier.commission}
                        </span>
                      </div>

                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase font-semibold">
                          Hotel Commission
                        </span>
                        <span className="text-sm font-bold text-[#13131B]">
                          {tier.hotelCommission}
                        </span>
                      </div>

                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase font-semibold">
                          Credit Limit
                        </span>
                        <span className="font-semibold text-[#13131B]">
                          {tier.creditFacility}
                        </span>
                      </div>

                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase font-semibold">
                          Dedicated Support
                        </span>
                        <span className="font-semibold text-[#13131B]">
                          {tier.support}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <Link
                      href="/signup"
                      className="btn-brand-primary w-full py-2.5 px-3 text-xs inline-flex items-center justify-center gap-1.5"
                    >
                      <span>Join This Tier</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F2A93B]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="py-16 bg-white border-t border-[rgba(15,62,44,0.08)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-[#F4F8F6] border border-[#DCEDE3]">
                <Wallet className="w-8 h-8 text-[#0F3E2C] mb-4" />
                <h3 className="text-lg font-bold text-[#13131B] mb-2">
                  Flexible Top-Up Channels
                </h3>
                <p className="text-xs sm:text-sm text-[#13131B]/70 leading-relaxed">
                  Deposit via direct bank transfer (City Bank, BRAC Bank, Eastern Bank, Dutch-Bangla),
                  bKash Merchant, Nagad, or approved credit line with zero processing delay.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F8F6] border border-[#DCEDE3]">
                <Users2 className="w-8 h-8 text-[#0F3E2C] mb-4" />
                <h3 className="text-lg font-bold text-[#13131B] mb-2">
                  Multi-Staff Sub-Accounts
                </h3>
                <p className="text-xs sm:text-sm text-[#13131B]/70 leading-relaxed">
                  Create individual logins for each of your agency ticketing officers, set daily
                  issuance limits, and view separate audit trails per team member.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F8F6] border border-[#DCEDE3]">
                <CreditCard className="w-8 h-8 text-[#0F3E2C] mb-4" />
                <h3 className="text-lg font-bold text-[#13131B] mb-2">
                  Transparent Real-Time Ledger
                </h3>
                <p className="text-xs sm:text-sm text-[#13131B]/70 leading-relaxed">
                  Export complete transaction statements in Excel or PDF anytime. Every ticket,
                  void charge, commission rebate, and top-up is logged down to the exact second.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
