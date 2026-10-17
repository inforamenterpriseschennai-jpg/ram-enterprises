import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
  stacked?: boolean;
}

export default function Logo({ className = "", light = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333] rounded-[10px] ${className}`}
      aria-label="Ram Enterprises Chennai - Safety Nets and Invisible Grills"
    >
      {/* 
        Subtle rounded rectangular container (8-12px border radius):
        - White (#FFFFFF) background
        - Thin Copper/Bronze (#B87333) border with Deep Navy (#0F2137) accents
        - Soft subtle copper/navy elevation shadow
        - Balanced padding around the image
        - The image itself uses object-fit: contain, preserving all pigeon imagery,
          safety-net textures, RAM ENTERPRISES typography, and service tagline uncropped.
      */}
      <div
        className={`relative flex items-center justify-center bg-[#FFFFFF] rounded-[10px] px-2.5 py-1.5 sm:px-3 sm:py-1.5 border transition-all duration-300 ease-out ${
          light
            ? "border-[#B87333]/50 shadow-[0_2px_10px_rgba(0,0,0,0.3)] hover:border-[#D08A52] hover:shadow-[0_4px_16px_rgba(184,115,51,0.25)]"
            : "border-[#B87333]/35 shadow-[0_2px_8px_rgba(15,33,55,0.06)] hover:border-[#B87333] hover:shadow-[0_4px_14px_rgba(184,115,51,0.18)]"
        }`}
      >
        <div className="relative w-[118px] h-[38px] xs:w-[130px] xs:h-[42px] sm:w-[145px] sm:h-[46px] md:w-[160px] md:h-[50px] lg:w-[175px] lg:h-[54px] transition-transform duration-300 group-hover:scale-[1.01]">
          <Image
            src="/images/main-images/Ram-Enterprises-logo.webp"
            alt="Ram Enterprises Chennai - Safety Nets and Invisible Grills"
            fill
            priority
            sizes="(max-width: 480px) 130px, (max-width: 768px) 150px, (max-width: 1024px) 160px, 175px"
            className="object-contain"
          />
        </div>
      </div>
    </Link>
  );
}
