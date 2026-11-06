"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteContent } from "@/data/content";

export function WhatsAppButton() {
  const { whatsapp } = siteContent;
  const [showTooltip, setShowTooltip] = useState(false);

  const cleanNumber = whatsapp.phoneNumber.replace(/[^0-9]/g, "");
  const encodedMsg = encodeURIComponent(whatsapp.message);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;

  return (
    <aside
      aria-label="Agent Support WhatsApp Chat"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
    >
      {/* Floating Info Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white text-[#13131B] shadow-[0_8px_24px_-4px_rgba(15,62,44,0.18)] border border-[rgba(15,62,44,0.12)] text-xs font-semibold animate-in fade-in slide-in-from-right-3 duration-200">
          <span>{whatsapp.tooltip}</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Circular Green Button (#25D366) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_-4px_rgba(37,211,102,0.5)] hover:shadow-[0_14px_30px_-4px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with Ticketchai Support on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
}

export default WhatsAppButton;
