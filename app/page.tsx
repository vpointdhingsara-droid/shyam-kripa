"use client";

import React, { useState } from "react";
import HeroSlider from "./HeroSlider";
import Testimonials from "./Testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { addToCart } from "@/app/lib/cart";




// Helper parsers
function parseCurrency(value: string) {
  if (!value) return 0;
  const digits = value.replace(/[^\d.-]/g, "");
  const n = Number.parseFloat(digits);
  return isNaN(n) ? 0 : n;
}

function calculateDiscount(originalPrice: string, salePrice: string) {
  const original = parseCurrency(originalPrice);
  const sale = parseCurrency(salePrice);
  if (!original || original === 0) return 0;
  return Math.round(((original - sale) / original) * 100);
}

function calculateSavings(originalPrice: string, salePrice: string) {
  const original = parseCurrency(originalPrice);
  const sale = parseCurrency(salePrice);
  return Math.round(Math.max(0, original - sale));
}

export default function Page() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      image: "/wooden-pressed-flaxseed-oil-bottle-with-yellow-oil.png",
      size: "1 LITRE",
      name: "Jeevan Shailee - Pure Home Made Cow Ghee",
      price: "₹1550",
      originalPrice: "₹1950",
    },
    {
      id: 2,
      image: "/Joint-Care.png",
      size: "150 GM",
      name: "Jeevan Shailee - Joint Care",
      price: "₹899",
      originalPrice: "₹1060",
    },
    {
      id: 3,
      image: "/wooden-pressed-almond-oil-bottle-with-golden-oil-a.jpg",
      size: "150 GM",
      name: "Jeevan Shailee - Bye Sugar",
      price: "₹499",
      originalPrice: "₹680",
    },
    {
      id: 4,
      image: "/Mardana-power.png",
      size: "100 GM",
      name: "Jeevan Shailee - Mardana Power",
      price: "₹999",
      originalPrice: "₹1800",
    },
    {
      id: 5,
      image: "/piles-care.png",
      size: "50 GM",
      name: "Jeevan Shailee - Piles Relief",
      price: "₹799",
      originalPrice: "₹1060",
    },
    {
      id: 6,
      image: "/shetal-churan.png",
      size: "150 GM",
      name: "Jeevan Shailee - Shetla Churan",
      price: "₹499",
      originalPrice: "₹680",
    },
    {
      id: 7,
      image: "/vain-care.png",
      size: "100 GM",
      name: "Jeevan Shailee - Vain Care",
      price: "₹499",
      originalPrice: "₹750",
    },
    {
      id: 8,
      image: "/Shakti-Chyawanprash.png",
      size: "1000 GM",
      name: "Jeevan Shailee - Shakti Chyawanprash",
      price: "₹850",
      originalPrice: "₹1250",
    },
  ];

  return (
    <main className="bg-orange-50">
      {/* Hero Section (Split) */}
      <section className="bg-[color:var(--page-bg,#fbf3ea)] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Slider */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <HeroSlider className="h-64 md:h-[420px]" showOverlayText={false} />
            </div>

            {/* Right: Static Text */}
            <div className="px-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚱️🌱🍃</span>
                <h3 className="text-xl md:text-2xl font-bold text-green-700">
                  Pure Ayurveda Herbs<br />Daily-Wellness
                </h3>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Jeevan Shailee — Pure Ayurvedic Solutions for Everyday Wellness
              </h2>
              <p className="text-gray-600 mb-6">
                Crafted with traditional wisdom and modern precision, our oils and herbal blends deliver natural healing without compromise.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-green-600">✔️</span>
                  <span className="text-gray-700 font-medium">100% Natural & Unrefined</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-green-600">✔️</span>
                  <span className="text-gray-700">No Chemicals or Preservatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-green-600">✔️</span>
                  <span className="text-gray-700">Lab-Tested for Quality Assurance</span>
                </li>
              </ul>

              <div>
                <a href="/products" className="inline-block">
                  <Button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow">
                    Explore Products
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Shop Our <span className="text-green-600">New Arrivals</span>
            </h2>
            <p className="text-gray-600 mt-2">Newly arrived healthy and natural products</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-4">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <div
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      className="relative"
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className={`w-full h-64 object-contain transition-transform duration-300 ${
                          hoveredProduct === product.id ? "scale-110" : "scale-100"
                        }`}
                      />
                      {hoveredProduct === product.id && (
                        <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
                          <Button className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
                            Quick View
                          </Button>
                        </div>
                      )}
                    </div>
                    <Badge className="absolute top-2 left-2 bg-red-600 text-white font-bold px-3 py-1 text-sm shadow-lg border-0">
                      {calculateDiscount(product.originalPrice, product.price)}% OFF
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{product.size}</p>
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent hover:bg-green-600 hover:text-white border-green-600 text-green-600 transition-all duration-300"
                      onClick={() => addToCart({ id: product.id, name: product.name, price: product.price })}
                    >
                      Add to Cart
                    </Button>
                    <p className="text-sm text-green-600 font-medium text-center">
                      Save ₹{calculateSavings(product.originalPrice, product.price)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <span className="text-green-600 text-sm">✓</span>
            <span className="text-green-600 font-medium">Purity You Can Trust</span>
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Lab Testing & Quality Assurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🧪</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lab Tested</h3>
              <p className="text-gray-600">Every batch is rigorously tested for purity and quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600">No chemicals, preservatives or artificial additives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Traditional wood pressing methods for maximum nutrition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-600 mt-2">Get in touch with us for any queries</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Enter mobile number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Your message..." />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">Send Message</Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center"><span className="mr-3">📞</span><span className="text-gray-700">+91 92531 77516</span></div>
                <div className="flex items-center"><span className="mr-3">✉️</span><span className="text-gray-700">jeevannshailee@gmail.com</span></div>
                <div className="flex items-start"><span className="mr-3 mt-1">📍</span><span className="text-gray-700">510 Dhingsara, Fatehabad-Haryana, India 125053</span></div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
                <div className="space-y-1 text-gray-600">
                  <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                  <p>Saturday & Sunday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">About Jeevan Shailee</h2>
          <p className="text-green-100 mb-8">
            Powered by Agot Ayurvedic Company in Haryana, Jeevan Shailee is your partner in daily well-being.
            Our mission is to deliver safe, natural remedies inspired by Ayurveda — combining time-tested wisdom
            with modern quality. Every product is crafted to restore health, vitality, and balance, delivered with trust and care.
          </p>
        </div>
      </section>
    </main>
  );
}
