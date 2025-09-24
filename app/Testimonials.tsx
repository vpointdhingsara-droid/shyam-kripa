// app/Testimonials.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    message:
      "Shakti Chyawanprash ne immunity boost kiya hai. Bacche bhi bina complain kiye khate hain aur unki energy din bhar bani rehti hai.",
  },
  {
    name: "Prachi Srivastava",
    location: "Prayagraj",
    message:
      "Joint Care ne mere mother ko ghutno ke dard me noticeable relief diya. Daily use karne par walking bohot aasaan ho gayi hai.",
  },
  {
    name: "Anita Patel",
    location: "Ahmedabad",
    message:
      "Jeevan Shailee ka ghee ekdum shuddh aur fragrant hai. Taste aur quality dono unmatched hain — maa ke haath ka banaya lagta hai.",
  },
  {
    name: "Rajesh Kumar",
    location: "Lucknow",
    message:
      "Wood-pressed oils ka taste aur health dono perfect hain. Daily cooking ke liye ab sirf Jeevan Shailee use hota hai.",
  },
  {
    name: "Suman Verma",
    location: "Bengaluru",
    message:
      "Piles Relief ne mujhe bohot comfort diya. Natural formula hone se side effects ka dar nahi raha.",
  },
  {
    name: "Amit Singh",
    location: "Gurgaon",
    message:
      "Kidney Care regular lene se mujhe energy aur balance feel hota hai. Overall health improve hui hai.",
  },
  {
    name: "Rajni Devi",
    location: "Jaipur",
    message:
      "Mardana Power ne stamina aur confidence dono improve kiya. Safe aur natural solution hai.",
  },
  {
    name: "Vikas Gupta",
    location: "Patna",
    message:
      "Vain Care use karne se swelling aur discomfort reduce hua. Skin-friendly aur effective product hai.",
  },
  {
    name: "Neha Reddy",
    location: "Hyderabad",
    message:
      "Daily Wellness Oils combo se ghar ka khana aur bhi healthy ho gaya. Sab products ka quality consistent hai.",
  },
  {
    name: "Sunil Kumar",
    location: "Ahmednagar",
    message:
      "Joint Care aur wood-pressed oil dono use karta hoon — knees me relief aur cooking me natural taste. Recommended!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 3, spacing: 24 },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 12 },
      },
    },
    // update current slide when changed
    slideChanged(s) {
      const rel = s.track.details.rel; // current relative index
      setCurrent(rel);
    },
  });

  // autoplay
  useEffect(() => {
    const id = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    return () => clearInterval(id);
  }, [instanceRef]);

  // helpers to show/hide arrows on small screens if needed
  const goPrev = () => instanceRef.current?.prev();
  const goNext = () => instanceRef.current?.next();
  const goTo = (idx: number) => instanceRef.current?.moveToIdx(idx);

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="text-gray-600 mt-2">Real feedback from people who tried our products.</p>
          </div>

          {/* arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              aria-label="Previous testimonials"
              onClick={goPrev}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              aria-label="Next testimonials"
              onClick={goNext}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* slider */}
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, i) => (
            <div key={i} className="keen-slider__slide px-2">
              <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-yellow-400 mb-3" aria-hidden>
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">“{t.message}”</p>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="mt-6 flex items-center justify-center space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-transform ${
                idx === current ? "bg-green-600 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
