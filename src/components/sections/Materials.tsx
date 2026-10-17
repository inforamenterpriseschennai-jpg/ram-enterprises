"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

interface Material {
  id: number;
  name: string;
  specs: string[];
  image: string;
}

const materials: Material[] = [
  {
    id: 1,
    name: "UV-Fortified Copolymer Netting",
    image: "/images/materials/Balconynetwork.jpeg",
    specs: [
      "100% Virgin HDPE Copolymer with UV Inhibitors",
      "Calibrated 25mm to 50mm square aperture",
      "Dynamic impact strength exceeding 140kg per knot",
      "Immune to high humidity and intense coastal sun",
    ],
  },
  {
    id: 2,
    name: "Child & Pet Safety High-Tensile Webbing",
    image: "/images/materials/Materials7.jpeg",
    specs: [
      "Multi-filament braided knot reinforcement",
      "Smooth non-abrasive coating safe for young hands",
      "Translucent design blends with exterior facades",
      "Tight 15cm border anchor pitch prevents gaps",
    ],
  },
  {
    id: 3,
    name: "Anti-Pigeon Monofilament Grid",
    image: "/images/materials/FactoryNets.jpeg",
    specs: [
      "Precision 25mm - 30mm bird exclusion mesh",
      "100% permanent defense against pigeon roosting",
      "Featherweight design with heavy tear resistance",
      "Zero upkeep with 10+ year outdoor resilience",
    ],
  },
  {
    id: 4,
    name: "Impact-Resistant Sports Enclosure Nets",
    image: "/images/materials/BoxCricketnet.jpeg",
    specs: [
      "Heavy 2.5mm - 3.5mm multi-ply braided cords",
      "Absorbs high-velocity leather cricket ball impacts",
      "Reinforced heavy border rope perimeter loops",
      "Engineered for rooftop pitches and turf arenas",
    ],
  },
  {
    id: 5,
    name: "SS316 Marine Stainless Steel Cables",
    image: "/images/materials/materias5.jpeg",
    specs: [
      "Genuine 316 marine-grade molybdenum alloy core",
      "High-clarity transparent DuPont nylon protective sleeve",
      "Calibrated breaking limit exceeding 400kg per line",
      "Ultra-slim 2.0mm to 3.0mm architectural profile",
    ],
  },
  {
    id: 6,
    name: "Certified High-Rise Installation Riggers",
    image: "/images/materials/Materials6.jpeg",
    specs: [
      "Full-body harness & rope-access trained technicians",
      "Industrial low-vibration diamond core drilling",
      "Multi-point hydraulic cable tension verification",
      "HEPA vacuum masonry dust cleanup included",
    ],
  },
  {
    id: 7,
    name: "Structural Anodized Aluminium Tracking",
    image: "/images/materials/Materials7.jpeg",
    specs: [
      "Heavy-gauge extruded T6 structural aluminium channels",
      "Electrostatically powder-coated corrosion barrier",
      "Concealed anti-tamper internal locking studs",
      "Precision miter-cut to match balcony profiles",
    ],
  },
];

export default function Materials() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="materials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F2137] bg-[#FDF6F0] border border-[#E8BA9B] px-3.5 py-1.5 rounded-full inline-block self-center">
            Technical Metallurgy &amp; Material Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2137] tracking-tight leading-tight">
            Engineered for Extreme Durability &amp; Coastal Resilience
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Every safety netting mesh, stainless steel cable, and anchoring bracket used by Ram Enterprises is rigorously tested to withstand tropical coastal heat and monsoon weather across Chennai.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {materials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#F8FAFC] rounded-3xl overflow-hidden border border-slate-200/80 flex flex-col group hover:shadow-xl hover:border-[#B87333]/30 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                <Image
                  src={item.image}
                  alt={`Ram Enterprises - ${item.name} Specification`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Specifications Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-[#0F2137] mb-3 group-hover:text-[#B87333] transition-colors">
                  {item.name}
                </h3>
                <ul className="space-y-2.5 flex-grow">
                  {item.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B87333] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
