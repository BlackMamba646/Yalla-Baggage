"use client";

import React, { useState } from "react";
import Footer4Col from "@/components/ui/footer-column";
import { Building2, Send } from "lucide-react";

export default function PartnershipsPage() {
  const [formData, setFormData] = useState({
    hotelName: "",
    contactPerson: "",
    jobTitle: "",
    email: "",
    phone: "",
    volume: "",
    comments: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="relative w-full min-h-screen flex flex-col font-sans overflow-x-hidden pt-24">
      {/* Background Image & Overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hotel.png')" }}
      />
      <div className="fixed inset-0 z-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Fixed Global Header (Logo Only) */}
      <header className="fixed top-0 inset-x-0 w-full z-[100] pt-4 px-4 sm:px-8 lg:px-16 flex justify-between items-start transition-all duration-300 pointer-events-none">
        <a href="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer bg-black/60 border border-white/10 backdrop-blur-xl px-4 py-2 sm:py-2.5 rounded-full shadow-2xl transition-transform hover:scale-105 pointer-events-auto filter drop-shadow-md">
          <img src="/Logo.png" alt="Yallah Baggage Logo" className="h-6 sm:h-8 md:h-9 w-auto object-contain brightness-200" />
          <span className="text-xl sm:text-2xl font-black tracking-tighter drop-shadow-md">
            <span className="text-white">Yallah</span><span className="text-orange-500">Baggage</span>
          </span>
        </a>
      </header>

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

        {/* Left Side Content */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold mb-6 shadow-xl">
            <Building2 size={20} className="text-orange-400" />
            B2B Hospitality Partners
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6 drop-shadow-xl">
            Elevate Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Guest Experience</span>
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-lg font-medium drop-shadow-md text-balance">
            Join the UAE's premier luggage concierge network. Offer your guests the ultimate convenience of seamless luggage management directly from your property.
          </p>

          <div className="space-y-6 mb-8 w-full">
            {[
              "Increase guest satisfaction & reviews",
              "Free up valuable bell desk space",
              "Revenue share opportunities",
              "Dedicated VIP concierge support"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 text-white bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 shadow-lg hover:bg-black/50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 shadow-sm flex items-center justify-center text-orange-400 font-black border border-orange-500/30">
                  {i + 1}
                </div>
                <span className="font-bold text-base md:text-lg text-left drop-shadow-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 w-full max-w-md lg:max-w-none relative animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-yellow-500/10 blur-3xl -z-10 rounded-full opacity-50" />
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500" />

            <h2 className="text-2xl font-black text-white mb-6 font-sans tracking-tight">Partnership Inquiry</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-500/30">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-white/70 font-medium">Our partnership team will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-white/80">Hotel / Business Name*</label>
                  <input required name="hotelName" value={formData.hotelName} onChange={handleChange} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold" placeholder="E.g. Grand Plaza Hotel" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-white/80">Contact Person*</label>
                    <input required name="contactPerson" value={formData.contactPerson} onChange={handleChange} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-white/80">Job Title*</label>
                    <input required name="jobTitle" value={formData.jobTitle} onChange={handleChange} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold" placeholder="General Manager" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-white/80">Email Address*</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold" placeholder="jane@hotel.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-white/80">Phone Number*</label>
                    <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold" placeholder="+971 50 XXXXXXX" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-white/80">Est. Daily Volume*</label>
                    <select required name="volume" value={formData.volume} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold appearance-none">
                      <option value="" disabled className="text-gray-500">Select volume</option>
                      <option value="1-10">1-10 Bags / Day</option>
                      <option value="10-50">10-50 Bags / Day</option>
                      <option value="50-100">50-100 Bags / Day</option>
                      <option value="100+">100+ Bags / Day</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-white/80">Comments / Requirements</label>
                  <textarea name="comments" value={formData.comments} onChange={handleChange} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold resize-none" placeholder="Tell us about your specific needs..."></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-4 rounded-xl shadow-[0_8px_20px_rgba(249,115,22,0.25)] hover:shadow-[0_12px_25px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2 mt-6 border border-orange-400/50">
                  {isSubmitting ? "Submitting..." : (
                    <>
                      Submit Request <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full mt-auto">
        <Footer4Col />
      </div>
    </main>
  );
}
