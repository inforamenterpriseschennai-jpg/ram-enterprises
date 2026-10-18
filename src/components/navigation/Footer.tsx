import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Logo from "../ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06101C] text-slate-300 pt-16 pb-8 border-t border-[#1A3A5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-5">
            <Logo light={true} />
            <p className="text-[#D1D5DB] text-sm leading-relaxed mt-2">
              Ram Enterprises delivers certified high-tensile balcony safety nets, marine-grade SS316 invisible wire grills, and stainless cloth drying systems across Chennai. Engineered for extreme coastal durability with 5-year replacement guarantees.
            </p>
            <div className="flex flex-col gap-3 mt-1 text-sm text-[#D1D5DB]">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Mon - Sun: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#B87333]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing Approach", href: "/pricing" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Completed Projects", href: "/projects" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "Coverage Areas", href: "/areas" },
                { label: "Latest Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#D1D5DB] hover:text-[#B87333] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#B87333] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick View */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#B87333]">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
                { label: "Children Safety Nets", href: "/services/children-safety-nets" },
                { label: "Pet Safety Nets", href: "/services/pet-safety-nets" },
                { label: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
                { label: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills" },
                { label: "Window Invisible Grills", href: "/services/window-invisible-grills" },
                { label: "Staircase Invisible Grills", href: "/services/staircase-invisible-grills" },
                { label: "Ceiling Cloth Hangers", href: "/services/ceiling-cloth-hangers" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#D1D5DB] hover:text-[#B87333] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#B87333] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#B87333]">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-[#D1D5DB]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B87333] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">Office Locations</span>
                  <span className="block text-sm text-[#D1D5DB] mt-1">
                    Kaaraikudi &amp; Chennai, Tamil Nadu
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B87333] shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white block">Phone</span>
                  <a href="tel:+919030505683" className="hover:text-[#B87333] transition-colors text-white font-semibold flex items-center gap-1.5">
                    <span>+91 90305 05683</span>
                  </a>
                  <a href="tel:+919030905683" className="hover:text-[#B87333] transition-colors text-slate-300 text-xs flex items-center gap-1.5">
                    <span>+91 90309 05683 (Alt)</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#B87333] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">Email</span>
                  <a href="mailto:info.ramenterpriseschennai@gmail.com" className="hover:text-[#B87333] transition-colors">
                    info.ramenterpriseschennai@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Chennai Localities Local SEO Footer Links */}
        <div className="py-6 border-t border-[#1A3A5C] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-white font-bold shrink-0">
            <MapPin className="w-4 h-4 text-[#B87333]" />
            <span>Service Areas Across Chennai:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-[#D1D5DB]">
            {[
              { name: "Adyar", slug: "adyar" },
              { name: "Velachery", slug: "velachery" },
              { name: "Anna Nagar", slug: "anna-nagar" },
              { name: "T. Nagar", slug: "t-nagar" },
              { name: "Tambaram", slug: "tambaram" },
              { name: "Porur", slug: "porur" },
              { name: "Madipakkam", slug: "madipakkam" },
              { name: "Thiruvanmiyur", slug: "thiruvanmiyur" },
              { name: "Mylapore", slug: "mylapore" },
              { name: "Nungambakkam", slug: "nungambakkam" },
              { name: "Sholinganallur", slug: "sholinganallur" },
              { name: "Chromepet", slug: "chromepet" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/areas/${city.slug}`}
                className="hover:text-[#B87333] transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#1A3A5C] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D1D5DB] gap-4">
          <p>© {currentYear} Ram Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#B87333] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#B87333] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
