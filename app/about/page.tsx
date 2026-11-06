import React from "react";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  Zap,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "About Us — The Modern B2B Travel Platform",
  description:
    "Learn about Ticketchai, our mission to modernize travel agencies in Bangladesh through cutting-edge booking technology, wallet credit, and wholesale inventory.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F8F6]">
      <Header />
      <main className="flex-1">
        {/* About Hero */}
        <section className="bg-hero-gradient pt-14 pb-20 border-b border-[rgba(15,62,44,0.06)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCEDE3] text-[#0F3E2C] text-xs font-semibold mb-4">
              <Building2 className="w-3.5 h-3.5" />
              Empowering Travel Agencies Across Bangladesh
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#13131B] tracking-tight mb-5 leading-tight">
              Smarter Travel Technology for{" "}
              <span className="text-[#0F3E2C]">Ambitious Agencies</span>
            </h1>
            <p className="text-base sm:text-lg text-[#13131B]/75 leading-relaxed">
              Ticketchai is the next-generation B2B travel portal purpose-built to give retail
              and corporate travel agents instant access to global flight, hotel, eSIM, and
              insurance inventories with zero operational bottlenecks.
            </p>
          </div>
        </section>

        {/* Stats Row */}
        <section className="py-12 bg-white border-b border-[rgba(15,62,44,0.08)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0F3E2C]">700+</div>
                <div className="text-xs sm:text-sm font-semibold text-[#13131B]/70 mt-1">
                  Global Airline Inventories
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0F3E2C]">1.2M+</div>
                <div className="text-xs sm:text-sm font-semibold text-[#13131B]/70 mt-1">
                  Worldwide Hotels & Resorts
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F2A93B]">1000+</div>
                <div className="text-xs sm:text-sm font-semibold text-[#13131B]/70 mt-1">
                  Verified Travel Partners
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0F3E2C]">99.9%</div>
                <div className="text-xs sm:text-sm font-semibold text-[#13131B]/70 mt-1">
                  API Booking Uptime
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F3E2C] block mb-2">
                OUR PILLARS
              </span>
              <h2 className="text-3xl font-extrabold text-[#13131B] tracking-tight">
                Engineered for Modern Travel Agencies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-brand p-8 bg-white flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#DCEDE3] text-[#0F3E2C] flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#13131B] mb-2.5">
                    Speed & Automation
                  </h3>
                  <p className="text-sm text-[#13131B]/70 leading-relaxed">
                    Say goodbye to slow manual quotation and ticket waiting times. Our platform
                    processes GDS and NDC queries in milliseconds and issues valid PNRs instantly.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[rgba(15,62,44,0.06)] text-xs font-bold text-[#0F3E2C]">
                  Sub-second live searches
                </div>
              </div>

              <div className="card-brand p-8 bg-white flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#DCEDE3] text-[#0F3E2C] flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#13131B] mb-2.5">
                    Financial Empowerment
                  </h3>
                  <p className="text-sm text-[#13131B]/70 leading-relaxed">
                    We offer flexible agency wallet facilities with multiple local deposit channels,
                    approved credit lines, and the highest guaranteed commission rates on sales.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[rgba(15,62,44,0.06)] text-xs font-bold text-[#0F3E2C]">
                  Direct wallet cashbacks
                </div>
              </div>

              <div className="card-brand p-8 bg-white flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#DCEDE3] text-[#0F3E2C] flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#13131B] mb-2.5">
                    24/7 Operations Desk
                  </h3>
                  <p className="text-sm text-[#13131B]/70 leading-relaxed">
                    Flights get cancelled, itineraries change, and travelers need urgent help. Our
                    expert B2B support desk operates 24/7/365 to handle emergency ticket reissues.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[rgba(15,62,44,0.06)] text-xs font-bold text-[#0F3E2C]">
                  Never stranded, 24/7
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-gradient text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join the Fastest-Growing B2B Travel Network
            </h2>
            <p className="text-sm sm:text-base text-[#DCEDE3]/85 mb-8 max-w-xl mx-auto">
              Get your agency verified today to start booking flights, hotels, eSIMs, and insurance with maximum commission.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F3E2C] hover:bg-[#0A2A1E] text-white font-semibold text-sm border border-white/20 shadow-md"
              >
                <span>Become an Agent</span>
                <ArrowRight className="w-4 h-4 text-[#F2A93B]" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20"
              >
                Contact Support Desk
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
