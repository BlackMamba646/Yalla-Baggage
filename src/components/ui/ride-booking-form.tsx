"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; 
import { MapPin, Send, Plus, Calendar, Clock, ArrowRight } from "lucide-react";

interface RideBookingFormProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  city?: string;
  onSearch: (details: {
    pickup: string;
    dropoff: string;
    date: string;
    time: string;
  }) => void;
}

export const RideBookingForm = React.forwardRef<HTMLDivElement, RideBookingFormProps>(
  ({ className, imageUrl, city = "Chandigarh, IN", onSearch, ...props }, ref) => {
    const [pickup, setPickup] = React.useState("");
    const [dropoff, setDropoff] = React.useState("");
    const [date] = React.useState("Today");
    const [time] = React.useState("Now");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSearch({ pickup, dropoff, date, time });
    };
    
    const containerVariants: any = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
      },
    };

    const itemVariants: any = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 },
      },
    };

    return (
      <div
        className={cn("w-full max-w-6xl mx-auto p-4 lg:p-8", className)}
        ref={ref}
        {...props}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100">
          {/* Left Side: Booking Form */}
          <motion.div 
            className="p-4 sm:p-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-sm text-gray-500">
                <MapPin className="inline-block h-4 w-4 mr-2" />
                {city}
                <a href="#" className="ml-2 text-sm font-medium text-blue-600 hover:underline">
                  Change city
                </a>
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
              Ship anywhere with Yallah Baggage
            </motion.h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Location Inputs with connecting line */}
              <motion.div variants={itemVariants} className="relative bg-gray-50 p-4 rounded-lg">
                <div className="absolute left-6 top-9 bottom-9 w-px bg-gray-300 border-l border-dashed border-gray-400"></div>
                <div className="relative flex items-center mb-2">
                  <div className="z-10 bg-white p-1 rounded-full border border-gray-200 shadow-sm">
                     <MapPin className="h-4 w-4 text-gray-700" />
                  </div>
                  <input
                    type="text"
                    placeholder="Pickup location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full pl-4 pr-10 py-2 bg-transparent text-gray-900 focus:outline-none placeholder-gray-500 font-medium"
                    aria-label="Pickup location"
                  />
                   <button type="button" className="absolute right-2 p-1 text-gray-400 hover:text-blue-500 transition-colors">
                     <Send className="h-5 w-5" />
                   </button>
                </div>
                
                <hr className="border-gray-200 mx-12" />

                <div className="relative flex items-center mt-2">
                   <div className="z-10 bg-white p-1 rounded-full border border-gray-200 shadow-sm">
                     <Plus className="h-4 w-4 text-gray-700" />
                   </div>
                  <input
                    type="text"
                    placeholder="Dropoff location"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="w-full pl-4 py-2 bg-transparent text-gray-900 focus:outline-none placeholder-gray-500 font-medium"
                    aria-label="Dropoff location"
                  />
                </div>
              </motion.div>

              {/* Date and Time Inputs */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3 border border-transparent focus-within:border-gray-200">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <span className="ml-3 text-gray-900 font-medium">{date}</span>
                </div>
                <div className="relative flex items-center bg-gray-50 rounded-lg px-4 py-3 border border-transparent focus-within:border-gray-200">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span className="ml-3 text-gray-900 font-medium">{time}</span>
                  <select aria-label="Select time" className="absolute opacity-0 inset-0 w-full h-full cursor-pointer"></select>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex items-center space-x-4 pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-6 shadow-md"
                >
                  See prices
                </button>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors group"
                >
                  Log in to see recent activity
                  <ArrowRight className="inline-block h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </form>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            className="hidden lg:block w-full h-full p-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={imageUrl}
              alt="Illustration of a person getting into a car in a city"
              className="w-full h-full min-h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    );
  }
);

RideBookingForm.displayName = "RideBookingForm";
