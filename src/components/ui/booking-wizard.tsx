"use client"

import React, { useMemo, useState } from "react"

type Step = 1 | 2 | 3 | 4

type BookingDraft = {
  pickupLocation: string
  dropoffLocation: string
  pickupDate: string
  pickupTime: string
  deliveryDate: string
  deliveryTime: string

  firstName: string
  lastName: string
  email: string
  phone: string
  numberOfBags: number
}

const defaultDraft: BookingDraft = {
  pickupLocation: "",
  dropoffLocation: "",
  pickupDate: "",
  pickupTime: "",
  deliveryDate: "",
  deliveryTime: "",

  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  numberOfBags: 1,
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function BookingWizard() {
  const [step, setStep] = useState<Step>(1)
  const [draft, setDraft] = useState<BookingDraft>(defaultDraft)
  const [bookingId, setBookingId] = useState<string | null>(null)

  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const stepSummary = useMemo(() => {
    if (!draft.pickupLocation || !draft.dropoffLocation) return null
    return `${draft.pickupLocation} → ${draft.dropoffLocation}`
  }, [draft.dropoffLocation, draft.pickupLocation])

  const canGoToStep2 =
    draft.pickupLocation.trim().length > 0 &&
    draft.dropoffLocation.trim().length > 0 &&
    draft.pickupDate.trim().length > 0 &&
    draft.pickupTime.trim().length > 0 &&
    draft.deliveryDate.trim().length > 0 &&
    draft.deliveryTime.trim().length > 0

  const validateStep2 = () => {
    if (!draft.firstName.trim()) return "First name is required."
    if (!draft.lastName.trim()) return "Last name is required."
    if (!draft.email.trim() || !isValidEmail(draft.email)) return "A valid email is required."
    if (!draft.phone.trim()) return "Phone number is required."
    if (!Number.isFinite(draft.numberOfBags) || draft.numberOfBags <= 0) return "Number of bags must be at least 1."
    return null
  }

  const validateStep1 = () => {
    if (!draft.pickupLocation.trim()) return "Pickup location is required."
    if (!draft.dropoffLocation.trim()) return "Drop-off location is required."
    if (!draft.pickupDate.trim()) return "Pick-up date is required."
    if (!draft.pickupTime.trim()) return "Pick-up time is required."
    if (!draft.deliveryDate.trim()) return "Delivery date is required."
    if (!draft.deliveryTime.trim()) return "Delivery time is required."
    return null
  }

  const submitBooking = async () => {
    setError(null)
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pickupLocation: draft.pickupLocation,
          dropoffLocation: draft.dropoffLocation,
          pickupDate: draft.pickupDate,
          pickupTime: draft.pickupTime,
          deliveryDate: draft.deliveryDate,
          deliveryTime: draft.deliveryTime,
          firstName: draft.firstName,
          lastName: draft.lastName,
          email: draft.email,
          phone: draft.phone,
          numberOfBags: draft.numberOfBags,
        }),
      })

      const json = (await res.json()) as { bookingId?: string; error?: string }
      if (!res.ok || !json.bookingId) {
        throw new Error(json.error ?? "Failed to create booking.")
      }

      setBookingId(json.bookingId)
      setStep(3)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unexpected error.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const confirmPayment = async () => {
    if (!bookingId) return
    setError(null)
    setIsSubmitting(true)
    try {
      const res = await fetch(`/api/bookings/${bookingId}/confirm-payment`, {
        method: "POST",
      })

      const json = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Payment confirmation failed.")
      }

      setStep(4)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unexpected error.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500" />

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white mb-1">Book Your Luggage Transfer</h1>
            <p className="text-white/70 font-medium">
              Step {step} of 3 {step === 4 ? "(complete)" : ""}
            </p>
          </div>

          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 text-red-200 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          {stepSummary && step !== 4 && (
            <div className="text-white/70 text-sm">
              <span className="font-bold text-white/90">Route:</span> {stepSummary}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-black text-white">1) Pick-up & Delivery</h2>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80">Pickup Location*</label>
                <input
                  value={draft.pickupLocation}
                  onChange={(e) => setDraft((d) => ({ ...d, pickupLocation: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold"
                  placeholder="Hotel / building / address"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80">Drop-off Location*</label>
                <input
                  value={draft.dropoffLocation}
                  onChange={(e) => setDraft((d) => ({ ...d, dropoffLocation: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold"
                  placeholder="Airport / hotel / address"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80">Pick-up Date*</label>
                  <input
                    type="date"
                    value={draft.pickupDate}
                    onChange={(e) => setDraft((d) => ({ ...d, pickupDate: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80">Pick-up Time*</label>
                  <input
                    type="time"
                    value={draft.pickupTime}
                    onChange={(e) => setDraft((d) => ({ ...d, pickupTime: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80">Delivery Date*</label>
                  <input
                    type="date"
                    value={draft.deliveryDate}
                    onChange={(e) => setDraft((d) => ({ ...d, deliveryDate: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80">Delivery Time*</label>
                  <input
                    type="time"
                    value={draft.deliveryTime}
                    onChange={(e) => setDraft((d) => ({ ...d, deliveryTime: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => {
                    const step1Error = validateStep1()
                    if (step1Error) {
                      setError(step1Error)
                      return
                    }
                    setError(null)
                    setStep(2)
                  }}
                  disabled={!canGoToStep2}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-4 rounded-xl shadow-[0_8px_20px_rgba(249,115,22,0.25)] hover:shadow-[0_12px_25px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2 border border-orange-400/50 disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-black text-white">2) Contact & Bags</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80">First Name*</label>
                  <input
                    value={draft.firstName}
                    onChange={(e) => setDraft((d) => ({ ...d, firstName: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold"
                    placeholder="Jane"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80">Last Name*</label>
                  <input
                    value={draft.lastName}
                    onChange={(e) => setDraft((d) => ({ ...d, lastName: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80">Email*</label>
                <input
                  value={draft.email}
                  onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80">Phone*</label>
                <input
                  value={draft.phone}
                  onChange={(e) => setDraft((d) => ({ ...d, phone: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold"
                  placeholder="+971 50 123 4567"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/80">Number of Bags*</label>
                <input
                  type="number"
                  min={1}
                  value={draft.numberOfBags}
                  onChange={(e) => setDraft((d) => ({ ...d, numberOfBags: Number(e.target.value) }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold"
                />
              </div>

              <div className="flex justify-between pt-4 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setError(null)
                    setStep(1)
                  }}
                  className="bg-white/5 hover:bg-white/10 text-white font-bold text-lg py-4 rounded-xl shadow-sm transition-all border border-white/10"
                >
                  Back
                </button>

                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => {
                    const step2Error = validateStep2()
                    if (step2Error) {
                      setError(step2Error)
                      return
                    }
                    submitBooking()
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-4 rounded-xl shadow-[0_8px_20px_rgba(249,115,22,0.25)] hover:shadow-[0_12px_25px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2 border border-orange-400/50 disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Saving..." : "Continue to Payment"}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-xl font-black text-white">3) Payment</h2>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-white">Pickup</span>
                  <span className="text-right text-white/80">{draft.pickupLocation}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-white">Drop-off</span>
                  <span className="text-right text-white/80">{draft.dropoffLocation}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-white">When</span>
                  <span className="text-right text-white/80">
                    Pick-up: {draft.pickupDate} {draft.pickupTime}
                    <br />
                    Delivery: {draft.deliveryDate} {draft.deliveryTime}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-white">Bags</span>
                  <span className="text-right text-white/80">{draft.numberOfBags}</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white/70">
                This demo flow will mark your booking as paid. When you plug in Stripe/your payment provider,
                we’ll replace this section with real payment processing + webhook confirmation.
              </div>

              <div className="flex justify-between pt-4 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setError(null)
                    setStep(2)
                  }}
                  disabled={isSubmitting}
                  className="bg-white/5 hover:bg-white/10 text-white font-bold text-lg py-4 rounded-xl shadow-sm transition-all border border-white/10 disabled:opacity-50"
                >
                  Back
                </button>

                <button
                  type="button"
                  disabled={isSubmitting || !bookingId}
                  onClick={confirmPayment}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-4 rounded-xl shadow-[0_8px_20px_rgba(249,115,22,0.25)] hover:shadow-[0_12px_25px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2 border border-orange-400/50 disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Processing..." : "Pay Now"}
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-500/20 text-green-300 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-500/30">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Booking confirmed!</h2>
                <p className="text-white/70 font-medium">
                  We’ll contact you shortly. Your booking ID is <span className="text-white font-bold">{bookingId ?? "—"}</span>.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setStep(1)
                  setDraft(defaultDraft)
                  setBookingId(null)
                  setError(null)
                }}
                className="w-full bg-white/5 hover:bg-white/10 text-white font-bold text-lg py-4 rounded-xl shadow-sm transition-all border border-white/10"
              >
                Book another transfer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

