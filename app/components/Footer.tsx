// app/components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="inline-flex items-center justify-center bg-white rounded-full h-24 w-24">
              <img
                src="/jeevan-shailee-logo.png"
                alt="Jeevan Shailee"
                className="h-20 w-20 object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4 mt-4">
              Pure, natural wood-pressed oils crafted with traditional methods
              for modern families.
            </p>

            {/* ✅ Social Media Icons */}
             <h3 className="font-semibold mb-4 underline text-gray-300 text-base">Follow us on:</h3>


            <div className="flex space-x-4">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a2.974 2.974 0 00-2.09-2.106C19.2 3.6 12 3.6 12 3.6s-7.2 0-9.408.48a2.974 2.974 0 00-2.09 2.106C0 8.4 0 12 0 12s0 3.6.502 5.814a2.974 2.974 0 002.09 2.106C4.8 20.4 12 20.4 12 20.4s7.2 0 9.408-.48a2.974 2.974 0 002.09-2.106C24 15.6 24 12 24 12s0-3.6-.502-5.814zM9.6 15.6V8.4L15.84 12 9.6 15.6z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm9.25 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.5c0-2.46 1.47-3.82 3.72-3.82 1.08 0 2.2.2 2.2.2v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54v1.86H16.9l-.4 2.9h-2.64v7.05A10 10 0 0022 12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-story"
                  className="hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Sign up for updates and special offers
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="px-3 py-2 rounded-lg text-gray-900"
              />
              <Button className="bg-green-600 text-white px-4">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Jeevan Shailee. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
