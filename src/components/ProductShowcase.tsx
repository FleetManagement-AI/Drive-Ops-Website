import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Users, MessageSquare, CreditCard, MapPin, Star, 
  CheckCircle2, Car, Truck, Key, ArrowRight 
} from "lucide-react"
import ProductVideo from "./ProductVideo"

export default function ProductShowcase() {
  return (
    <div className="space-y-32 py-20 bg-[#FBFBFA]">
      <DriverManagementSection />
      <WhatsAppReviewsSection />
      <DriverPayrollSection />
      <FleetVisibilitySection />
      <BusinessTypesSection />
    </div>
  )
}

/* ==========================================
   SECTION 4 — DRIVER MANAGEMENT
   ========================================== */
function DriverManagementSection() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1340px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Text */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">Driver Operations</p>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Know every driver.<br />At a glance.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Manage driver profiles, availability, documents, assignments, performance and earnings from one place.
          </p>
          <div className="pt-2 space-y-2 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Automated DL & permit compliance checks</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Real-time duty shift & availability toggles</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Consolidated trip scorecards & ratings</div>
          </div>
        </div>

        {/* Right Product Video */}
        <div className="lg:col-span-7">
          <ProductVideo 
            src="https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/driver-videowr.mp4"
            alt="DriveOps Driver Management Live Video"
            hideChrome={true}
            aspectRatio="16/9"
          />
        </div>

      </div>
    </section>
  )
}

/* ==========================================
   SECTION 5 — WHATSAPP REVIEWS
   ========================================== */
function WhatsAppReviewsSection() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1340px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Product Video */}
        <div className="lg:col-span-7 order-last lg:order-first">
          <ProductVideo 
            src="https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/customer_review_gwr_video_mvp.mp4"
            alt="DriveOps WhatsApp Customer Reviews Video Walkthrough"
            hideChrome={true}
            aspectRatio="16/9"
          />
        </div>

        {/* Right Text */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">WhatsApp Reviews</p>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Turn every completed trip<br />into customer feedback.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Automatically collect customer ratings and feedback through WhatsApp after the trip.
          </p>
        </div>

      </div>
    </section>
  )
}

/* ==========================================
   SECTION 6 — DRIVER PAYROLL
   ========================================== */
function DriverPayrollSection() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1340px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Text */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">Driver Payroll</p>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Turn completed trips<br />into accurate payouts.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Calculate driver earnings, incentives, deductions, advances and settlements in one place.
          </p>
        </div>

        {/* Right Product Video */}
        <div className="lg:col-span-7">
          <ProductVideo 
            src="https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/driver_payroll_gwr_video_mvp.mp4"
            alt="DriveOps Driver Payroll Live Video Walkthrough"
            hideChrome={true}
            aspectRatio="16/9"
          />
        </div>

      </div>
    </section>
  )
}

/* ==========================================
   SECTION 7 — FLEET VISIBILITY
   ========================================== */
function FleetVisibilitySection() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1340px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Product Video */}
        <div className="lg:col-span-7 order-last lg:order-first">
          <ProductVideo 
            src="https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/command_center_gwr_video_mvp.mp4"
            alt="DriveOps Command Center Live Video Walkthrough"
            hideChrome={true}
            aspectRatio="16/9"
          />
        </div>

        {/* Right Text */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">Fleet Visibility</p>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Know what's happening<br />across your fleet.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            See active vehicles, trips, driver availability and operational alerts from one command center.
          </p>
        </div>

      </div>
    </section>
  )
}

/* ==========================================
   SECTION 9 — BUSINESS TYPES
   ========================================== */
function BusinessTypesSection() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1340px] mx-auto">
      <div className="bg-[#090D16] text-white p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-400">Business Workflows</p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Built around the way you operate.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Taxi & Passenger Transport",
              icon: Car,
              flow: "Booking → Dispatch → Driver → Trip → Review",
              desc: "Taxi fleets, corporate commutes, and chauffeur operations."
            },
            {
              title: "Goods Transport",
              icon: Truck,
              flow: "Request → Load → Pickup → Delivery",
              desc: "Logistics, pickup vans, and last-mile delivery operations."
            },
            {
              title: "Self-Drive Rental",
              icon: Key,
              flow: "Reservation → Checkout → In Use → Return → Inspection",
              desc: "Rental fleets, reservations, and vehicle handover inspection logs."
            }
          ].map((b) => {
            const Icon = b.icon
            return (
              <div key={b.title} className="bg-[#060A12] border border-slate-800 p-6 rounded-2xl flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">{b.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{b.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-800 text-[10px] font-mono text-blue-400 font-bold">
                  {b.flow}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
