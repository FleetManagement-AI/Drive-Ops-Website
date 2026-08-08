import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Shield, Bell, Search, Car, Navigation, Users, MessageSquare, 
  CreditCard, BarChart3, Star, TrendingUp, AlertTriangle, 
  MapPin, CheckCircle2, DollarSign, ArrowRight, ChevronRight, Phone
} from "lucide-react"

// ==========================================
// 1. PRODUCT WINDOW WRAPPER
// ==========================================
export const ProductWindow = ({ 
  path = "ops.driveops.in/dashboard", 
  children,
  activeItem = "Dashboard"
}: { 
  path?: string
  children: React.ReactNode
  activeItem?: string
}) => {
  return (
    <div className="w-full bg-[#090D16] rounded-2xl shadow-2xl border border-slate-800/80 overflow-hidden flex flex-col h-[500px]">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-850 bg-[#060A12] shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
        </div>
        <div className="bg-slate-900/80 border border-slate-800/60 rounded px-10 py-0.5 text-[10px] text-slate-400 font-mono tracking-tight flex items-center gap-1.5">
          <Shield className="w-3 h-3 text-blue-500" />
          {path}
        </div>
        <div className="flex items-center gap-3">
          <Bell className="w-3.5 h-3.5 text-slate-500" />
          <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[9px] font-bold text-slate-350">
            A
          </div>
        </div>
      </div>

      {/* Main Workspace Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left App Sidebar */}
        <div className="w-[130px] bg-[#060A12] border-r border-slate-850 p-3 hidden sm:flex flex-col gap-5 text-[10px] text-slate-400 font-medium">
          <div className="flex items-center gap-1.5 text-white font-bold text-xs px-1.5 py-1">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            DriveOps
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { label: "Dashboard", icon: BarChart3 },
              { label: "Trips", icon: Navigation },
              { label: "Dispatch", icon: MapPin },
              { label: "Drivers", icon: Users },
              { label: "Vehicles", icon: Car },
              { label: "Payroll", icon: CreditCard },
              { label: "Reviews", icon: MessageSquare }
            ].map((item) => {
              const isSelected = activeItem.toLowerCase() === item.label.toLowerCase()
              return (
                <div 
                  key={item.label} 
                  className={`px-2 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                    isSelected 
                      ? "text-white bg-blue-600/10 border border-blue-500/10 font-bold" 
                      : "hover:text-white hover:bg-slate-800/10"
                  }`}
                >
                  <item.icon className={`w-3.5 h-3.5 ${isSelected ? "text-blue-500" : "text-slate-500"}`} />
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Dashboard workspace page content */}
        <div className="flex-1 p-5 overflow-y-auto bg-[#090D16] text-white">
          {children}
        </div>
      </div>
    </div>
  )
}

// ==========================================
// 2. COMMAND CENTER PREVIEW
// ==========================================
export const CommandCenterPreview = () => {
  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex justify-between items-center pb-3 border-b border-slate-850 shrink-0">
        <div>
          <h4 className="text-xs font-bold text-slate-300">Live Command Center</h4>
          <p className="text-[9px] text-slate-500">Real-time dispatches and active routes.</p>
        </div>
        <span className="text-[9px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping"></span>
          Active Operations
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1 min-h-0">
        {/* Map Simulator */}
        <div className="md:col-span-8 bg-slate-950 border border-slate-850 rounded-xl relative overflow-hidden flex flex-col justify-center items-center min-h-[220px]">
          {/* Coordinates grid lines */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.05] pointer-events-none">
            <div className="border-r border-slate-500 w-full h-full"></div>
            <div className="border-b border-slate-500 w-full h-full"></div>
          </div>

          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 40,160 C 120,60 180,180 280,100" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="3 3" />
            <circle cx="280" cy="100" r="4.5" fill="#EF4444" />
            <circle cx="40" cy="160" r="4.5" fill="#10B981" />
          </svg>

          {/* Vehicle Markers */}
          <div className="absolute top-[80px] left-[110px] bg-blue-600 text-white px-2 py-0.5 rounded text-[8px] font-bold flex items-center gap-1 shadow-lg">
            <Car className="w-2.5 h-2.5" />
            <span>KA-51-A-4839</span>
          </div>

          <div className="absolute bottom-[70px] right-[90px] bg-emerald-500 text-white px-2 py-0.5 rounded text-[8px] font-bold flex items-center gap-1 shadow-lg">
            <Car className="w-2.5 h-2.5" />
            <span>DL-01-S-8822</span>
          </div>
        </div>

        {/* Live Trip Activity Logs */}
        <div className="md:col-span-4 flex flex-col gap-2 overflow-y-auto">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Active Queue</span>
          {[
            { trip: "#4829", route: "Airport → Lulu Mall", status: "En Route", col: "text-blue-400 bg-blue-500/10" },
            { trip: "#4830", route: "Fort Kochi → Infopark", status: "Allocated", col: "text-amber-400 bg-amber-500/10" },
            { trip: "#4831", route: "Railway Station → Aluva", status: "Completed", col: "text-slate-400 bg-slate-800" },
          ].map((t) => (
            <div key={t.trip} className="p-2.5 bg-slate-900/80 border border-slate-850 rounded-lg flex justify-between items-center text-[10px]">
              <div>
                <span className="font-bold text-slate-200">{t.trip}</span>
                <div className="text-slate-500 text-[9px] mt-0.5">{t.route}</div>
              </div>
              <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${t.col}`}>
                {t.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ==========================================
// 3. WHATSAPP & REVIEW PREVIEW
// ==========================================
export const ReviewPreview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-full items-stretch">
      {/* WhatsApp Experience column */}
      <div className="md:col-span-5 bg-slate-950 border border-slate-850 rounded-xl p-4 flex flex-col justify-between min-h-[220px]">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-850">
          <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center">
            <MessageSquare className="w-3 h-3 text-white fill-current" />
          </div>
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">WhatsApp Auto-Request</span>
        </div>

        <div className="space-y-3 my-4">
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-850 text-[10px] leading-relaxed max-w-[90%] relative">
            <div className="absolute -left-1.5 top-3 w-3 h-3 bg-slate-900 border-l border-b border-slate-850 rotate-45"></div>
            <p className="text-slate-350">
              "Hi Sarah! Thank you for riding with DriveOps. How would you rate your trip with driver **Mike Reynolds**? Reply with 1 to 5 stars."
            </p>
          </div>
          <div className="bg-blue-600/10 p-2.5 rounded-xl border border-blue-500/20 text-[10px] self-end max-w-[60%] ml-auto text-right text-blue-200">
            "5 stars! Extremely clean vehicle and professional driver."
          </div>
        </div>

        <div className="text-[9px] text-slate-500 text-center">
          Feedback is instantly logged in DriveOps review dashboard.
        </div>
      </div>

      {/* Operator Dashboard Reviews column */}
      <div className="md:col-span-7 flex flex-col gap-3">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Reviews Registry</span>
        
        <div className="space-y-2 flex-1 overflow-y-auto">
          {[
            { customer: "Sarah Jenkins", comment: "Extremely clean vehicle and professional driver.", rating: 5, trip: "#4829", driver: "Mike R." },
            { customer: "Rahul Verma", comment: "Arrived exactly on time, very helpful with heavy baggage.", rating: 5, trip: "#4821", driver: "David K." }
          ].map((r, i) => (
            <div key={i} className="p-3 bg-slate-900/60 border border-slate-850 rounded-xl space-y-1.5 text-[10px]">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-200">{r.customer}</span>
                <div className="flex text-amber-500">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} className="w-2.5 h-2.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-400 italic">"{r.comment}"</p>
              <div className="flex justify-between text-[8px] text-slate-500 pt-1 border-t border-slate-850/50">
                <span>Driver: {r.driver}</span>
                <span>Trip: {r.trip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ==========================================
// 4. PAYROLL PREVIEW
// ==========================================
export const PayrollPreview = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center pb-3 border-b border-slate-850">
        <div>
          <h4 className="text-xs font-bold text-slate-300">Driver Payroll Ledger</h4>
          <p className="text-[9px] text-slate-500">Automated trip earnings & advances settlement.</p>
        </div>
        <span className="text-[10px] font-bold text-blue-500 bg-blue-500/10 px-2.5 py-0.5 rounded-full">
          Aug Settlement Cycle
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Ledger Breakdown */}
        <div className="md:col-span-7 bg-slate-950/80 border border-slate-850 rounded-xl p-4 font-mono text-[11px] space-y-2.5">
          <div className="flex justify-between text-slate-400">
            <span>Base Salary</span>
            <span className="text-slate-200">₹25,000.00</span>
          </div>
          <div className="flex justify-between text-emerald-400">
            <span>+ Trip Earnings</span>
            <span>₹6,500.00</span>
          </div>
          <div className="flex justify-between text-emerald-400">
            <span>+ Performance Bonus</span>
            <span>₹2,000.00</span>
          </div>
          <div className="flex justify-between text-rose-400">
            <span>- Advance Recovery</span>
            <span>-₹2,000.00</span>
          </div>
          <div className="border-t border-slate-800 my-2 pt-2.5 flex justify-between text-xs font-bold text-white">
            <span>Net Settlement</span>
            <span className="text-blue-500 font-black">₹31,500.00</span>
          </div>
        </div>

        {/* Informative text / verification flow */}
        <div className="md:col-span-5 space-y-3 text-[11px] text-slate-400">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>GPS tracking log verified: 48 trips completed successfully.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>Advance recovery automatically calculated & deducted.</span>
          </div>
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-[10px] tracking-wider transition-colors mt-2">
            Disburse Settlement Fund
          </button>
        </div>
      </div>
    </div>
  )
}

// ==========================================
// 5. FLEET PREVIEW
// ==========================================
export const FleetPreview = () => {
  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex justify-between items-center pb-3 border-b border-slate-850 shrink-0">
        <div>
          <h4 className="text-xs font-bold text-slate-300">Fleet Registrations & Expiries</h4>
          <p className="text-[9px] text-slate-500">Automated vehicle renewal tracking.</p>
        </div>
        <span className="text-[9px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
          3 Alerts Pending
        </span>
      </div>

      <div className="space-y-2.5 flex-1 overflow-y-auto">
        {[
          { vehicle: "KA-51-A-4839 (Toyota Innova)", task: "Road Tax Renewal Due", days: "2 days left", type: "critical", col: "border-l-red-500 bg-red-500/5 text-red-200" },
          { vehicle: "DL-01-S-8822 (Maruti Ertiga)", task: "Annual Fitness Certificate", days: "14 days left", type: "warning", col: "border-l-amber-500 bg-amber-500/5 text-amber-200" },
          { vehicle: "MH-12-P-0911 (Hyundai Aura)", task: "Scheduled Engine Service", days: "In progress", type: "info", col: "border-l-blue-500 bg-blue-500/5 text-blue-200" },
        ].map((item, i) => (
          <div key={i} className={`p-3 border border-slate-850 border-l-2 rounded-xl flex justify-between items-center text-[10px] ${item.col}`}>
            <div>
              <div className="font-bold text-slate-200">{item.vehicle}</div>
              <div className="text-slate-500 text-[9px] mt-0.5">{item.task}</div>
            </div>
            <span className="text-[9px] font-bold font-mono">
              {item.days}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
