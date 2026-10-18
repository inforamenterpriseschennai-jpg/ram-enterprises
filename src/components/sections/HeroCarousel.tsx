"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronLeft, ChevronRight, Phone, MessageSquare, Award, ArrowRight, CheckCircle2 } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  highlight: string;
  subtitle: string;
  image: string;
  altText: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "High-Rise Balcony Protection &",
    highlight: "SS316 Invisible Grills",
    subtitle: "Protect your family with high-tensile safety netting and aircraft-grade stainless wire barriers engineered specifically for Chennai high-rise apartments.",
    image: "/images/main-images/Balcony-Grills.webp",
    altText: "Ram Enterprises marine-grade SS316 invisible wire grills installed on an upscale Chennai high-rise balcony",
    ctaText: "Explore Invisible Grills",
    ctaLink: "/services/balcony-invisible-grills",
    badge: "10+ Years Guarantee | SS316 Marine Stainless",
  },
  {
    id: 2,
    title: "Certified Fall Containment &",
    highlight: "Childproof Safety Nets",
    subtitle: "Heavy-gauge, 100% virgin UV-stabilized copolymer netting with tight anchor pitch, preventing accidental slips on balconies and window ledges.",
    image: "/images/main-images/balcony-safetynets.webp",
    altText: "Ram Enterprises Chennai - High-tensile childproof balcony safety netting overlooking residential apartments",
    ctaText: "Explore Safety Nets",
    ctaLink: "/services/balcony-safety-nets",
    badge: "Tested 140kg+ Knot Breaking Strength",
  },
  {
    id: 3,
    title: "Discreet Bird Deterrence &",
    highlight: "Anti-Pigeon Solutions",
    subtitle: "Eliminate foul droppings and disease-carrying bird roosting from AC outdoor compressors, duct shafts, and utility balconies with translucent mesh.",
    image: "/images/main-images/building-duct-pigeon-netting.webp",
    altText: "Ram Enterprises Chennai - Discreet translucent anti-pigeon netting installed on a Chennai apartment balcony",
    ctaText: "Pigeon Net Solutions",
    ctaLink: "/services/pigeon-safety-nets",
    badge: "100% Humane & Translucent Barrier",
  },
  {
    id: 4,
    title: "Building Shaft Enclosures &",
    highlight: "Duct Area Safety Nets",
    subtitle: "Seal high-rise vertical ventilation shafts, plumbing voids, and utility courtyards against pest birds and falling debris across Chennai housing societies.",
    image: "/images/main-images/Duct-Area-3.webp",
    altText: "Ram Enterprises vertical duct area and building shaft safety netting installation in Chennai",
    ctaText: "Explore Duct Area Nets",
    ctaLink: "/services/duct-area-safety-nets",
    badge: "Certified Multi-Story Rope Access",
  },
  {
    id: 5,
    title: "Space-Maximizing Pulley Systems &",
    highlight: "Ceiling Cloth Hangers",
    subtitle: "Dual-pulley rustproof SS304 drying systems that hoist heavy wet laundry to the ceiling, reclaiming 100% of your valuable balcony floor space.",
    image: "/images/main-images/cloth-Hangers3.jpg",
    altText: "Ram Enterprises ceiling-mounted dual-pulley stainless steel cloth drying system in Chennai",
    ctaText: "View Ceiling Hangers",
    ctaLink: "/services/ceiling-cloth-hangers",
    badge: "Reclaim 100% Balcony Floor Space",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[620px] sm:h-[680px] lg:h-[720px] bg-[#06101C] overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].altText}
            fill
            priority={true}
            sizes="100vw"
            className="object-cover object-center opacity-90 filter brightness-105 contrast-105"
          />
          {/* Subtle directional gradient for crisp text readability while leaving images vivid and clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06101C]/90 via-[#06101C]/50 sm:via-[#06101C]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06101C]/80 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4 sm:gap-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#B87333]/20 border border-[#B87333]/40 text-[#FDE047] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider self-start shadow-xs">
                <Award className="w-4 h-4 text-[#FDE047]" aria-hidden="true" />
                <span>{slides[current].badge}</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                {slides[current].title}{" "}
                <span className="text-[#B87333] block mt-1">{slides[current].highlight}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                {slides[current].subtitle}
              </p>

              {/* Quick Perks */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-semibold pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" aria-hidden="true" />
                  <span>Free Doorstep Laser Measurement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" aria-hidden="true" />
                  <span>5-Year Replacement Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" aria-hidden="true" />
                  <span>Same-Day Installation in Chennai</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" aria-hidden="true" />
                  <span>Marine SS316 100% Rust-Proof Wire</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={slides[current].ctaLink}
                  aria-label={slides[current].ctaText}
                  className="bg-[#B87333] hover:bg-[#D08A52] text-white px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm tracking-wide uppercase transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <span>{slides[current].ctaText}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <a
                  href="tel:+919030505683"
                  aria-label="Call +91 90305 05683 for Free Consultation"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B87333]" aria-hidden="true" />
                  <span>Call +91 90305 05683</span>
                </a>

                <a
                  href="https://wa.me/919030505683?text=Hi%20Ram%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp with Ram Enterprises"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-[#B87333] text-white hover:text-white transition-all cursor-pointer backdrop-blur-xs hidden sm:flex"
      >
        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-[#B87333] text-white hover:text-white transition-all cursor-pointer backdrop-blur-xs hidden sm:flex"
      >
        <ChevronRight className="w-5 h-5" aria-hidden="true" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5" role="tablist" aria-label="Hero carousel slide selectors">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setIsAutoPlay(false);
              setCurrent(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === idx ? "w-8 bg-[#B87333]" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
