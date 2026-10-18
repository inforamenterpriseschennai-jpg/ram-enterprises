"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are your on-site measurement consultations free throughout Chennai?",
      answer:
        "Yes! Our technicians visit your doorstep anywhere in Chennai free of charge with laser measurement devices and physical wire/mesh samples. You receive a transparent, itemized quotation with zero obligation.",
    },
    {
      question: "What is the difference between invisible grills and traditional balcony grills?",
      answer:
        "Invisible grills utilize slim, high-tensile SS316 marine stainless steel cables wrapped in protective transparent nylon. They withstand over 400kg of load while delivering an unobstructed 180-degree scenic view, whereas iron bars block light, rust easily in Chennai's coastal moisture, and create a cage-like feeling.",
    },
    {
      question: "How long does a standard balcony safety net installation take?",
      answer:
        "Most residential balcony safety net or invisible grill installations are completed in 2 to 4 hours. Our technicians use low-vibration diamond core bits and vacuum dust extractors to leave your home completely clean.",
    },
    {
      question: "Can children or household pets push through or chew the safety barriers?",
      answer:
        "No. Our child safety nets feature 25mm tight mesh apertures with 150kg+ breaking limits, and our pet invisible grills use chew-proof SS316 marine cables spaced at 2 inches, completely eliminating slip-through risks.",
    },
    {
      question: "What warranty coverage is included with Ram Enterprises installations?",
      answer:
        "We issue an official 3 to 5 Year Service & Replacement Warranty Card covering material strength, tension retention, and anti-corrosion performance under Chennai's outdoor climate.",
    },
    {
      question: "Do you install anti-bird pigeon nets and spikes for apartments and AC ledges?",
      answer:
        "Yes, we specialize in humane pigeon netting and stainless steel blunt-tip bird spikes that permanently prevent birds from nesting on AC outdoor units, light wells, and balconies without harming them.",
    },
    {
      question: "How do ceiling cloth drying hangers save balcony space?",
      answer:
        "Our ceiling cloth drying systems use dual-pulley mechanisms with individual SS304 stainless rods that lower to chest height for easy clothes hanging and hoist to the ceiling, keeping 100% of your balcony floor open.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] scroll-mt-12" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F2137]/10 text-[#0F2137] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#B87333]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2137] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Everything you need to know about our materials, installation process, warranties, and pricing in Chennai.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#B87333] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`w-5 h-5 text-[#B87333] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Box */}
        <div className="mt-12 p-8 rounded-3xl bg-[#0F2137] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold">Have a unique requirement or custom layout?</h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">
              Speak directly with our chief safety engineer for advice and instant quotations.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919030505683"
              className="bg-[#B87333] hover:bg-[#D08A52] text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>+91 90305 05683</span>
            </a>
            <a
              href="https://wa.me/919030505683"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
