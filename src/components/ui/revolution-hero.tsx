"use client"

import React from "react"
import { RideBookingForm } from "@/components/ui/ride-booking-form"
import { Logos3 } from "@/components/ui/logos3"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { HotelLogoCarousel } from "@/components/ui/hotel-logo-carousel"
import { FeatureSteps } from "@/components/ui/feature-section"
import { FaqAccordion } from "@/components/ui/faq-chat-accordion"
import { BlurIn } from "@/components/ui/blur-in"
import { TestimonialsSection } from "@/components/blocks/testimonials"
import { Home, Briefcase, PhoneCall, HelpCircle } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { TrustStats } from "@/components/ui/trust-stats"
import Link from "next/link"

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'Services', url: '#services', icon: Briefcase },
  { name: 'FAQ', url: '#faq', icon: HelpCircle },
  { name: 'Contact', url: '#footer', icon: PhoneCall }
]

const faqData = [
  {
    id: 1,
    question: "Where can I leave my bags in Dubai?",
    answer: "With Yallah Baggage, you don't even need to find a location! We pick up your bags directly from any hotel, port, or address in the UAE and handle the storage for you.",
  },
  {
    id: 2,
    question: "Do you offer luggage storage at Dubai Airport?",
    answer: "Yes! We provide seamless luggage storage and transit services directly to and from Dubai International Airport (DXB) and Al Maktoum Airport (DWC).",
  },
  {
    id: 3,
    question: "How long can I store my luggage?",
    answer: "You can securely store your luggage with us for as long as you want! Whether you need it held for a few hours between flights or safely stored for several months.",
  },
  {
    id: 4,
    question: "How does luggage delivery work in the UAE?",
    answer: "Simply book online, and our concierge driver will collect your bags. You can then explore hands-free while we deliver them safely to your next destination.",
  },
  {
    id: 5,
    question: "Can I cancel my booking?",
    answer: "Absolutely. We offer 100% free cancellation up to 2 hours before your scheduled pickup time.",
  },
];

export const WebGLHero = () => {
  return (
    <div className="w-full bg-white flex flex-col font-sans overflow-x-hidden">

      {/* Fixed Global Header */}
      <header className="fixed top-0 inset-x-0 w-full z-[100] pt-4 px-4 sm:px-8 lg:px-16 pointer-events-none flex justify-between items-start transition-all duration-300">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto cursor-pointer bg-black/60 border border-white/10 backdrop-blur-xl px-4 py-2 sm:py-2.5 rounded-full shadow-2xl transition-transform hover:scale-105">
          <img src="/Logo.png" alt="Yallah Baggage Logo" className="h-6 sm:h-8 md:h-9 lg:h-10 w-auto object-contain" />
          <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter drop-shadow-md">
            <span className="text-white">Yallah</span><span className="text-orange-500">Baggage</span>
          </span>
        </div>

        {/* Right Side: Tubelight Navbar (Desktop) and Book Now Button */}
        <div className="pointer-events-auto hidden sm:flex items-center gap-4">
          <NavBar items={navItems} />
          <Link href="/book-now" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-full shadow-lg transition-transform hover:scale-105">
            Book Now
          </Link>
        </div>
      </header>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-4 inset-x-0 z-[100] flex justify-center pointer-events-auto sm:hidden w-full px-4">
        <NavBar items={navItems} className="w-full flex justify-center" />
      </div>

      {/* Main Hero Container */}
      <section id="home" className="relative scroll-mt-28 w-full min-h-[100vh] md:h-[100vh] overflow-hidden bg-black flex items-center flex-col md:flex-row justify-center pb-20 md:pb-0">
        {/* Background Image */}
        <img
          src="/hero-bg.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Subtle Dark Gradient Overlay based on mockup (darker on left) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 pointer-events-none z-10" />

        {/* Top Centered Animated Headline */}
        <div className="absolute top-20 md:top-16 inset-x-0 z-30 flex flex-col items-center justify-center text-center pointer-events-none px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-2xl tracking-tight leading-[1.1]">
            YALLAH.
          </h1>
          <TypingAnimation
            text="WE'LL HANDLE IT."
            duration={120}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-orange-500 drop-shadow-2xl mt-1 tracking-tight leading-[1.1] text-center"
          />
        </div>

        {/* Content Layout */}
        <div className="relative z-20 w-full h-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between pt-48 md:pt-32">

          {/* Left Text Block */}
          <div className="text-white w-full lg:w-[45%] max-w-2xl flex-shrink-0 animate-in fade-in slide-in-from-left-8 duration-1000 mb-8 md:mb-0 mt-8 md:mt-0 text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1 text-orange-400 drop-shadow-md text-balance">
              Dubai's Premier Luggage Concierge
            </h3>
            <h4 className="text-base md:text-lg lg:text-xl font-bold mb-4 text-white drop-shadow-md text-balance">
              Seamless transport to and from the airport — Stress-free!
            </h4>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-[1.1] drop-shadow-2xl text-balance">
              Luggage Storage,<br className="hidden sm:block" /> Pickup & Delivery
            </h1>

            <p className="text-lg md:text-xl font-bold text-gray-100 drop-shadow-md mt-2 md:mt-6 text-balance">
              Your bags handled safely, starting from just AED 29/day
            </p>
          </div>

          {/* Right Form Component */}
          <div id="contact" className="scroll-mt-28 w-full lg:w-[55%] xl:max-w-4xl mt-4 md:mt-0 animate-in fade-in slide-in-from-right-8 duration-1000 md:ml-8 pb-10 md:pb-0">
            <RideBookingForm
              imageUrl="/yalla-form-image.png"
              city="Dubai, UAE"
              onSearch={(d: any) => console.log(d)}
            />
          </div>

        </div>
      </section>

      {/* Brand Logos Carousel Strip at the bottom */}
      <div className="w-full bg-white relative z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.15)] -mt-2">
        <Logos3 />
      </div>

      {/* How it Works Section */}
      <div id="services" className="scroll-mt-28">
        <FeatureSteps
          title="How Yallah Baggage Works"
          autoPlayInterval={4000}
          features={[
            {
              step: 'Step 1',
              title: 'Book Your Transfer',
              content: 'Schedule your luggage pickup online in seconds. Select your preferred pickup and drop-off locations.',
              image: '/whatsapp_support.png'
            },
            {
              step: 'Step 2',
              title: 'We Pick It Up',
              content: 'Our concierge driver securely collects your bags right from your doorstep or hotel lobby.',
              image: '/yalla-form-image.png'
            },
            {
              step: 'Step 3',
              title: 'Explore Hands-Free',
              content: 'Enjoy your day completely baggage-free! We will securely deliver your luggage to the airport or your next destination.',
              image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=800'
            },
          ]}
        />
      </div>

      {/* FAQ Section */}
      <div id="faq" className="scroll-mt-28 w-full bg-white py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <BlurIn
            word="Frequently Asked Questions"
            className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 text-center text-gray-900 tracking-tight leading-tight"
          />
          <FaqAccordion
            data={faqData}
            timestamp=""
            questionClassName="bg-white hover:bg-gray-50 text-gray-900 shadow-sm border border-gray-100 mb-3"
            answerClassName="bg-[#FFD100] text-gray-900 font-bold"
          />
        </div>
      </div>

      {/* Trust Statistics Section */}
      <TrustStats />

      {/* 5-Star Hotels Logo Carousel */}
      <HotelLogoCarousel />

      {/* Testimonials Section */}
      <TestimonialsSection />

    </div>
  )
}

export default WebGLHero
