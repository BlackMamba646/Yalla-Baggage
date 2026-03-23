"use client"

import React from "react"
import { RideBookingForm } from "@/components/ui/ride-booking-form"
import { Logos3 } from "@/components/ui/logos3"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { FeatureSteps } from "@/components/ui/feature-section"
import { FaqAccordion } from "@/components/ui/faq-chat-accordion"
import { BlurIn } from "@/components/ui/blur-in"
import { TestimonialsSection } from "@/components/blocks/testimonials"

const faqData = [
  {
    id: 1,
    question: "Where can I leave my bags in Dubai?",
    answer: "With Yalla Baggage, you don't even need to find a location! We pick up your bags directly from any hotel, port, or address in the UAE and handle the storage for you.",
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

      {/* Top Navbar completely removed per user request */}

      {/* Main Hero Container */}
      <section className="relative w-full h-[100vh] min-h-[700px] overflow-hidden bg-black flex items-center">
        {/* Background Image */}
        <img
          src="/hero-bg.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Subtle Dark Gradient Overlay based on mockup (darker on left) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 pointer-events-none z-10" />

        {/* Brand Logo - Top Left */}
        <div className="absolute top-6 left-6 md:top-8 md:left-10 lg:top-10 lg:left-16 z-50 flex items-center gap-3 pointer-events-auto cursor-pointer">
          <img src="/Logo.png" alt="Yalla Baggage Logo" className="h-8 md:h-10 lg:h-12 w-auto object-contain" />
          <span className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter drop-shadow-lg">
            <span className="text-white">Yalla</span><span className="text-orange-500">Baggage</span>
          </span>
        </div>

        {/* Top Centered Animated Headline */}
        <div className="absolute top-12 md:top-16 inset-x-0 z-30 flex flex-col items-center justify-center text-center pointer-events-none">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-2xl tracking-tight leading-[1.1]">
            YALLA.
          </h1>
          <TypingAnimation
            text="WE'LL HANDLE IT."
            duration={120}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-orange-500 drop-shadow-2xl mt-1 tracking-tight leading-[1.1] text-center"
          />
        </div>

        {/* Content Layout */}
        <div className="relative z-20 w-full h-full max-w-[1920px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between pt-40 md:pt-32">

          {/* Left Text Block */}
          <div className="text-white w-full lg:w-[45%] max-w-2xl flex-shrink-0 animate-in fade-in slide-in-from-left-8 duration-1000 mb-12 md:mb-0">
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1 text-orange-400 drop-shadow-md">
              Dubai's Premier Luggage Concierge
            </h3>
            <h4 className="text-base md:text-lg lg:text-xl font-bold mb-4 text-white drop-shadow-md">
              Seamless transport to and from the airport — Stress-free!
            </h4>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-[1.1] drop-shadow-2xl">
              Luggage Storage,<br />
              Pickup & Delivery
            </h1>

            <p className="text-lg md:text-xl font-bold text-gray-100 drop-shadow-md mt-6">
              Your bags handled safely, starting from just AED 29/day
            </p>
          </div>

          {/* Right Form Component */}
          <div className="w-full lg:w-[55%] xl:max-w-4xl mt-4 md:mt-0 animate-in fade-in slide-in-from-right-8 duration-1000 md:ml-8">
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
      <FeatureSteps
        title="How Yalla Baggage Works"
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

      {/* FAQ Section */}
      <div className="w-full bg-white py-16 md:py-24 border-t border-gray-100">
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

      {/* Testimonials Section */}
      <TestimonialsSection />

    </div>
  )
}

export default WebGLHero
