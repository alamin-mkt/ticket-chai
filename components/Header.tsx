"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, LogIn, Code2 } from "lucide-react";
import Logo from "./Logo";
import { siteContent } from "@/data/content";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = siteContent.header.navLinks;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "header-glass border-b border-[rgba(15,62,44,0.08)] shadow-[0_4px_20px_-4px_rgba(15,62,44,0.06)] py-3"
          : "bg-[#F4F8F6]/90 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-8">
            <Logo variant="default" size="md" showLink />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-150 relative py-1 ${
                      isActive
                        ? "text-[#0F3E2C] font-semibold"
                        : "text-[#13131B]/75 hover:text-[#0F3E2C]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F3E2C] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Ghost API Button */}
            <Link
              href="#api"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-[#13131B]/80 hover:text-[#0F3E2C] hover:bg-[#F0F7F3] rounded-xl transition-all"
            >
              <Code2 className="w-4 h-4 text-[#0F3E2C]" />
              <span>{siteContent.header.apiText}</span>
            </Link>

            {/* Sign Up Outline Button */}
            <Link
              href={siteContent.header.signUpHref}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#0F3E2C] border-1.5 border-[#0F3E2C] hover:bg-[#F0F7F3] rounded-xl transition-all duration-150"
            >
              <span>{siteContent.header.signUpText}</span>
            </Link>

            {/* Login Solid Button */}
            <Link
              href={siteContent.header.loginHref}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#0F3E2C] hover:bg-[#0A2A1E] rounded-xl shadow-sm hover:shadow-md transition-all duration-150 active:scale-[0.98]"
            >
              <LogIn className="w-4 h-4" />
              <span>{siteContent.header.loginText}</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/login"
              className="inline-flex items-center justify-center p-2 text-[#0F3E2C] bg-[#F0F7F3] rounded-lg"
              aria-label="Agent Login"
            >
              <LogIn className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#13131B] hover:text-[#0F3E2C] hover:bg-[#F0F7F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F3E2C]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[rgba(15,62,44,0.1)] bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#13131B] hover:bg-[#F0F7F3] hover:text-[#0F3E2C] rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-[rgba(15,62,44,0.08)] flex flex-col space-y-2">
              <Link
                href="#api"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-[#13131B] hover:bg-[#F0F7F3] rounded-lg"
              >
                <span className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#0F3E2C]" />
                  B2B Flight & Hotel API
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 bg-[#DCEDE3] text-[#0F3E2C] rounded-full">v2.4</span>
              </Link>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center py-2.5 px-3 text-sm font-semibold text-[#0F3E2C] border border-[#0F3E2C] rounded-xl hover:bg-[#F0F7F3] text-center"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-sm font-semibold text-white bg-[#0F3E2C] rounded-xl hover:bg-[#0A2A1E] text-center"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
