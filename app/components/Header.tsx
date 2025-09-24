// app/components/Header.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCartCount, getCartTotal } from "@/app/lib/cart";



function formatRupee(n: number) {
  // simple indian/intl formatting
  try {
    return "₹" + n.toLocaleString("en-IN");
  } catch {
    return "₹" + n;
  }
}

export default function Header() {
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    setCartCount(getCartCount());
    setCartTotal(getCartTotal());

    const handler = (e: any) => {
      const d = e?.detail ?? {};
      setCartCount(typeof d.count === "number" ? d.count : getCartCount());
      setCartTotal(typeof d.total === "number" ? d.total : getCartTotal());
    };

    window.addEventListener("cart-updated", handler as EventListener);
    return () => window.removeEventListener("cart-updated", handler as EventListener);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <img src="/jeevan-shailee-logo.png" alt="Jeevan Shailee" className="h-10 w-auto cursor-pointer" />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-green-600 font-medium">Home</Link>
            <Link href="/ghani" className="text-green-600 font-medium">Ghani</Link>
            <Link href="/wood-pressed" className="text-gray-900 hover:text-green-600 font-medium">Wood Pressed Oils</Link>
            <Link href="/products" className="text-gray-900 hover:text-green-600 font-medium">Products</Link>
            <Link href="/offers" className="text-red-600 hover:text-red-700 font-medium">Offers</Link>
            <Link href="/about" className="text-gray-900 hover:text-green-600 font-medium">About Us</Link>
            <Link href="/our-story" className="text-gray-900 hover:text-green-600 font-medium">Our Story</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/account" className="flex items-center gap-2 text-gray-700">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-700 font-semibold">U</div>
            </Link>

            {/* cart container - relative so badge can be absolute */}
            <button
              onClick={() => (window.location.href = "/cart")}
              className="relative flex items-center gap-2 text-gray-700"
              aria-label="Open cart"
            >
              <div className="relative">
                <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="10" cy="20" r="1" fill="currentColor"/>
                  <circle cx="18" cy="20" r="1" fill="currentColor"/>
                </svg>

                {/* badge positioned on top-right of icon */}
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold rounded-full bg-green-600 text-white">
                  {cartCount}
                </span>
              </div>

              {/* show text + amount */}
              <span className="ml-1 text-sm font-medium hidden sm:inline">Shopping cart:</span>
              <span className="ml-1 font-semibold hidden sm:inline">{formatRupee(cartTotal)}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
