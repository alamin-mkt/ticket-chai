import React from "react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#F4F8F6]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-3 border-[#0F3E2C]/20 border-t-[#0F3E2C] rounded-full animate-spin" />
        <span className="text-xs font-semibold text-[#0F3E2C] tracking-wide">
          Loading Ticketchai...
        </span>
      </div>
    </div>
  );
}
