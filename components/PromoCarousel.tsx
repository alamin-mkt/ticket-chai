"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Smartphone, Sparkles, Plane, ShieldCheck, Download } from "lucide-react";
import { siteContent } from "@/data/content";

export function PromoCarousel() {
  const { promoCarousel } = siteContent;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 1024px)": { slidesToScroll: 1 },
      },
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    const id = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(id);
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  return (
    <section className="py-12 sm:py-16 bg-[#F4F8F6] relative" aria-label="Promo Banners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Header with Navigation Arrows */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F3E2C] block mb-1">
              EXCLUSIVE PARTNER DEALS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#13131B]">
              Agent Highlights & Special Offers
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              type="button"
              className="p-2.5 rounded-full border border-[rgba(15,62,44,0.15)] bg-white text-[#13131B] hover:bg-[#F0F7F3] hover:text-[#0F3E2C] hover:border-[#0F3E2C] transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0F3E2C]"
              aria-label="Previous promotional card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              type="button"
              className="p-2.5 rounded-full border border-[rgba(15,62,44,0.15)] bg-white text-[#13131B] hover:bg-[#F0F7F3] hover:text-[#0F3E2C] hover:border-[#0F3E2C] transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0F3E2C]"
              aria-label="Next promotional card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Viewport */}
        <div className="overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0" ref={emblaRef}>
          <div className="flex gap-6">
            {promoCarousel.cards.map((card, idx) => (
              <div
                key={card.id}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_calc(33.333%-16px)]"
              >
                <div className="h-full relative overflow-hidden rounded-2xl bg-brand-gradient text-white p-6 sm:p-7 flex flex-col justify-between shadow-[0_10px_30px_-5px_rgba(15,62,44,0.3)] border border-[rgba(255,255,255,0.08)] group hover:shadow-[0_16px_36px_-6px_rgba(15,62,44,0.45)] transition-all duration-300">
                  {/* Decorative Background Accent */}
                  <div
                    className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#34D399]/10 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"
                    aria-hidden="true"
                  />

                  {/* Top Badge & Graphic */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-[11px] font-semibold text-[#DCEDE3] tracking-wide">
                        <Sparkles className="w-3 h-3 text-[#F2A93B]" />
                        {card.badge}
                      </span>
                      {card.hasAppButtons ? (
                        <Smartphone className="w-6 h-6 text-[#F2A93B] opacity-80" />
                      ) : idx === 0 ? (
                        <Plane className="w-6 h-6 text-[#DCEDE3] opacity-80" />
                      ) : (
                        <ShieldCheck className="w-6 h-6 text-[#F2A93B] opacity-80" />
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#DCEDE3]/85 leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Action Area */}
                  <div>
                    {card.hasAppButtons ? (
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        {/* App Store Mock Button */}
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all cursor-pointer">
                          <Download className="w-3.5 h-3.5 text-[#F2A93B]" />
                          <div className="text-left leading-tight">
                            <span className="text-[9px] block text-white/70">Download on</span>
                            <span className="text-[11px] font-bold">App Store</span>
                          </div>
                        </div>

                        {/* Google Play Mock Button */}
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all cursor-pointer">
                          <Download className="w-3.5 h-3.5 text-[#F2A93B]" />
                          <div className="text-left leading-tight">
                            <span className="text-[9px] block text-white/70">Get it on</span>
                            <span className="text-[11px] font-bold">Google Play</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={card.ctaHref}
                        className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#F2A93B] transition-colors group/link"
                      >
                        <span>{card.ctaText}</span>
                        <ArrowRight className="w-4 h-4 text-[#F2A93B] group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                index === selectedIndex
                  ? "w-8 bg-[#0F3E2C]"
                  : "w-2 bg-[rgba(15,62,44,0.2)] hover:bg-[rgba(15,62,44,0.4)]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromoCarousel;
