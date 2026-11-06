import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F8F6]">
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 px-4 text-center">
        <div className="max-w-md">
          <div className="text-6xl font-extrabold text-[#0F3E2C] mb-4">404</div>
          <h1 className="text-2xl font-bold text-[#13131B] mb-2">Page Not Found</h1>
          <p className="text-sm text-[#13131B]/70 mb-6">
            The travel portal page you are looking for does not exist or has been relocated.
          </p>
          <Link
            href="/"
            className="btn-brand-primary px-6 py-3 text-sm inline-block"
          >
            Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
