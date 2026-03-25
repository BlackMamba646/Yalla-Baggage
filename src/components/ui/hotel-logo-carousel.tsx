"use client";

import React, { type SVGProps } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { BlurIn } from "@/components/ui/blur-in";

const createTextLogo = (text1: string, text2: string) => {
  return function TextLogo(props: SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="200" height="100" rx="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <text 
          x="100" 
          y="48" 
          fontSize="20" 
          fontWeight="900" 
          fill="#0f172a" 
          textAnchor="middle" 
          fontFamily="system-ui, sans-serif"
          letterSpacing="-0.02em"
        >
          {text1}
        </text>
        <text 
          x="100" 
          y="72" 
          fontSize="14" 
          fontWeight="600" 
          fill="#64748b" 
          textAnchor="middle" 
          fontFamily="system-ui, sans-serif"
        >
          {text2}
        </text>
      </svg>
    )
  }
}

const createSingleLineLogo = (text1: string) => {
  return function SingleLineLogo(props: SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="200" height="100" rx="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <text 
          x="100" 
          y="56" 
          fontSize="24" 
          fontWeight="900" 
          fill="#0f172a" 
          textAnchor="middle" 
          fontFamily="system-ui, sans-serif"
          letterSpacing="-0.02em"
        >
          {text1}
        </text>
      </svg>
    )
  }
}

// 5-Star UAE Hotels Logos generated via Custom SVG
const AtlantisIcon = (props: any) => (
  <img src="/atlantis.png" alt="Atlantis The Palm" className={props.className} />
);
const BurjAlArabIcon = (props: any) => <img src="/burj_al_arab.png" alt="Burj Al Arab" className={props.className} />;
const JumeirahIcon = (props: any) => <img src="/jumeirah.png" alt="Jumeirah" className={props.className} />;
const RitzCarltonIcon = (props: any) => <img src="/ritz.png" alt="Ritz-Carlton" className={props.className} />;
const KempinskiIcon = (props: any) => <img src="/kempinski.png" alt="Kempinski" className={props.className} />;
const WaldorfIcon = (props: any) => <img src="/waldorf.png" alt="Waldorf Astoria" className={props.className} />;
const ArmaniIcon = (props: any) => <img src="/armani.png" alt="Armani Hotel" className={props.className} />;
const AddressIcon = (props: any) => <img src="/address.png" alt="The Address" className={props.className} />;
const BulgariIcon = (props: any) => <img src="/bvlgari.png" alt="Bulgari Resort" className={props.className} />;
const OneAndOnlyIcon = (props: any) => <img src="/one&only.png" alt="One&Only" className={props.className} />;
const StRegisIcon = (props: any) => <img src="/stregis.png" alt="St. Regis" className={props.className} />;
const MandarinIcon = (props: any) => <img src="/mandarin.png" alt="Mandarin Oriental" className={props.className} />;

const allLogos = [
  { name: "Atlantis", id: 1, img: AtlantisIcon },
  { name: "Burj Al Arab", id: 2, img: BurjAlArabIcon },
  { name: "Jumeirah", id: 3, img: JumeirahIcon },
  { name: "Ritz-Carlton", id: 4, img: RitzCarltonIcon },
  { name: "Kempinski", id: 5, img: KempinskiIcon },
  { name: "Waldorf Astoria", id: 6, img: WaldorfIcon },
  { name: "Armani", id: 7, img: ArmaniIcon },
  { name: "The Address", id: 8, img: AddressIcon },
  { name: "Bulgari", id: 9, img: BulgariIcon },
  { name: "One&Only", id: 10, img: OneAndOnlyIcon },
  { name: "St Regis", id: 11, img: StRegisIcon },
  { name: "Mandarin Oriental", id: 12, img: MandarinIcon },
];

export function HotelLogoCarousel() {
  return (
    <div className="w-full bg-white space-y-8 py-16 md:py-24 border-t border-gray-50 flex flex-col items-center">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center space-y-6 md:space-y-8 px-4">
        <div className="text-center flex flex-col items-center gap-2">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-500 mb-0">
            Trusted by guests staying at
          </p>
          <BlurIn 
            word="The Most Prestigious Hotels in the UAE" 
            className="text-3xl sm:text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-t from-neutral-700 to-neutral-800 text-balance leading-tight py-2"
          />
        </div>

        <div className="w-full max-w-5xl px-4 mt-8">
          <LogoCarousel columnCount={4} logos={allLogos} /> 
        </div>
      </div>
    </div>
  );
}
