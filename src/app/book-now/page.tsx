import Footer4Col from "@/components/ui/footer-column"
import Link from "next/link"
import { BookingWizard } from "@/components/ui/booking-wizard"

export default function BookNowPage() {
  return (
    <main className="relative w-full min-h-screen flex flex-col font-sans overflow-x-hidden pt-24">
      {/* Background Image & Overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hotel.png')" }}
      />
      <div className="fixed inset-0 z-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Fixed Global Header (Logo + Home link) */}
      <header className="fixed top-0 inset-x-0 w-full z-[100] pt-4 px-4 sm:px-8 lg:px-16 flex justify-between items-start transition-all duration-300 pointer-events-none">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 cursor-pointer bg-black/60 border border-white/10 backdrop-blur-xl px-4 py-2 sm:py-2.5 rounded-full shadow-2xl transition-transform hover:scale-105 pointer-events-auto filter drop-shadow-md"
        >
          <img
            src="/Logo.png"
            alt="Yallah Baggage Logo"
            className="h-6 sm:h-8 md:h-9 w-auto object-contain brightness-200"
          />
          <span className="text-xl sm:text-2xl font-black tracking-tighter drop-shadow-md">
            <span className="text-white">Yallah</span>
            <span className="text-orange-500">Baggage</span>
          </span>
        </Link>
      </header>

      {/* Booking content */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 md:py-14">
        <BookingWizard />
      </div>

      <div className="mt-auto relative z-10 w-full">
        <Footer4Col />
      </div>
    </main>
  )
}

