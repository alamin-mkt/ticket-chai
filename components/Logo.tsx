import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "white" | "icon-only";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showLink?: boolean;
}

export function Logo({
  variant = "default",
  className = "",
  size = "md",
  showLink = false,
}: LogoProps) {
  // Brand color mappings
  const isWhite = variant === "white";
  const ticketColor = isWhite ? "#FFFFFF" : "#0F3E2C";
  const chaiColor = isWhite ? "#E2E8F0" : "#13131B";
  const leafColor = isWhite ? "#34D399" : "#0F3E2C";

  // Size scalings
  const dimensions = {
    sm: { width: 130, height: 34, iconSize: 28 },
    md: { width: 165, height: 42, iconSize: 34 },
    lg: { width: 200, height: 50, iconSize: 42 },
    xl: { width: 240, height: 60, iconSize: 50 },
  }[size];

  if (variant === "icon-only") {
    const iconSvg = (
      <svg
        width={dimensions.iconSize}
        height={dimensions.iconSize}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
        aria-label="Ticketchai logo mark"
      >
        <rect
          width="44"
          height="44"
          rx="12"
          fill={isWhite ? "rgba(255,255,255,0.12)" : "#F0F7F3"}
          stroke={isWhite ? "rgba(255,255,255,0.2)" : "#B8DBC7"}
          strokeWidth="1.5"
        />
        {/* Leaf */}
        <path
          d="M26 10C26 10 32 11 33 17C33 22 28 24 23 23C23 23 23 16 26 10Z"
          fill={leafColor}
        />
        <path
          d="M24 22C26.5 18 29.5 14 32 12"
          stroke={isWhite ? "#13131B" : "#F0F7F3"}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* 't' mark */}
        <path
          d="M17 17V31C17 33 18.5 34 20.5 34C22 34 23 33.5 23.5 33"
          stroke={ticketColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 22H21"
          stroke={ticketColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    );

    if (showLink) {
      return (
        <Link href="/" className="inline-flex items-center focus:outline-none">
          {iconSvg}
        </Link>
      );
    }
    return iconSvg;
  }

  // Full wordmark SVG: "ticket" + leaf dot over "i" + "chai"
  const logoSvg = (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 210 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="ticketchai logo"
      role="img"
    >
      <g id="ticketchai-wordmark">
        {/* Stylized organic leaf replacing dot of first 'i' in ticket */}
        <g id="leaf-dot" transform="translate(42, 7)">
          {/* Leaf body */}
          <path
            d="M 2 11 C 1 6 5.5 0.5 13 0 C 13.5 5 10 11.5 4 12 Z"
            fill={leafColor}
          />
          {/* Central delicate stem/vein */}
          <path
            d="M 3.2 11.5 Q 6.5 6.5 11.5 1.5"
            stroke={isWhite ? "#13131B" : "#F0F7F3"}
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.85"
          />
        </g>

        {/* Text wordmark using Plus Jakarta Sans bold rendered layout */}
        <text
          x="4"
          y="38"
          fontFamily="var(--font-plus-jakarta), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="36"
          fontWeight="800"
          letterSpacing="-0.035em"
        >
          {/* "t" */}
          <tspan fill={ticketColor}>t</tspan>
          {/* "ı" (dotless i) so the leaf is the true dot */}
          <tspan fill={ticketColor} dx="-0.5">ı</tspan>
          {/* "cket" */}
          <tspan fill={ticketColor} dx="-0.5">cket</tspan>
          {/* "chai" */}
          <tspan fill={chaiColor} dx="0">chai</tspan>
        </text>
      </g>
    </svg>
  );

  if (showLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F3E2C] rounded-lg"
        aria-label="Ticketchai Home"
      >
        {logoSvg}
      </Link>
    );
  }

  return logoSvg;
}

export default Logo;
