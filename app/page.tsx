import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoCarousel from "@/components/PromoCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import AirlineMarquee from "@/components/AirlineMarquee";
import Solutions from "@/components/Solutions";
import AboutSection from "@/components/AboutSection";
import Onboarding from "@/components/Onboarding";
import CommissionRewards from "@/components/CommissionRewards";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F8F6]">
      <Header />
      <main className="flex-1">
        <Hero />
        <PromoCarousel />
        <WhyChooseUs />
        <AirlineMarquee />
        <Solutions />
        <AboutSection />
        <Onboarding />
        <CommissionRewards />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
