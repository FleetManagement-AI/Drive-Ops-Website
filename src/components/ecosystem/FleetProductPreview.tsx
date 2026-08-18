import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search, Plus, MoreHorizontal, ChevronLeft, ChevronRight,
  TrendingUp, TrendingDown, AlertCircle, Clock, ShieldCheck, CheckCircle2,
  Bell, Building2, User, ChevronDown, Wrench, Fuel, IndianRupee,
  Navigation, Car, Check, RefreshCw
} from "lucide-react"

interface FleetProductPreviewProps {
  activeCapability: string
}

export const FleetProductPreview: React.FC<FleetProductPreviewProps> = ({ activeCapability }) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden flex flex-col font-sans">
      {/* ── Top App Bar ── */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-100 bg-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img
              src="/logo/driveops-logo-blue-edited.png"
              alt="DriveOps Logo"
              className="w-5 h-5 object-contain"
            />
            <span className="font-heading font-black text-slate-900 text-sm tracking-tight">Drive<span className="text-blue-600">Ops</span></span>
          </div>
          <span className="hidden sm:inline-flex items-center text-[10.5px] font-bold text-blue-700 bg-blue-50/90 border border-blue-200/80 px-2.5 py-0.5 rounded-full">
            Operations Hub
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-xs">
          <button className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-slate-600 bg-slate-50 border border-slate-200/80 rounded-lg text-[11px] font-medium hover:bg-slate-100 transition-colors">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span>All Depots</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          
          <div className="relative p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
          </div>

          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
            AD
          </div>
        </div>
      </div>

      {/* ── Dynamic Content Frame ── */}
      <div className="p-4 sm:p-5 flex-1 min-h-[460px] bg-slate-50/40">
        <AnimatePresence mode="wait">
          {activeCapability === "fleet" && <FleetVehiclesView key="fleet" />}
          {activeCapability === "drivers" && <DriversView key="drivers" />}
          {activeCapability === "trips" && <TripsView key="trips" />}
          {activeCapability === "maintenance" && <MaintenanceView key="maintenance" />}
          {activeCapability === "fuel" && <FuelView key="fuel" />}
          {activeCapability === "expenses" && <ExpensesView key="expenses" />}
          {activeCapability === "reports" && <ReportsView key="reports" />}
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   1. FLEET & VEHICLES VIEW (Reference Match)
   ───────────────────────────────────────────────────────────── */
const FleetVehiclesView = () => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.2 }}
    className="space-y-4"
  >
    {/* KPI Metric Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider">Total Vehicles</span>
          <Car className="w-3.5 h-3.5 text-blue-500" />
        </div>
        <div className="text-lg font-heading font-black text-slate-900 leading-none mb-1">128</div>
        <span className="text-[9.5px] font-bold text-emerald-600 flex items-center gap-0.5">
          <TrendingUp className="w-2.5 h-2.5" /> 8 this month
        </span>
      </div>

      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider">Active Vehicles</span>
          <Navigation className="w-3.5 h-3.5 text-emerald-500" />
        </div>
        <div className="text-lg font-heading font-black text-slate-900 leading-none mb-1">118</div>
        <span className="text-[9.5px] font-bold text-emerald-600 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 92% active
        </span>
      </div>

      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider">Insurance Exp.</span>
          <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
        </div>
        <div className="text-lg font-heading font-black text-amber-600 leading-none mb-1">12</div>
        <span className="text-[9.5px] font-medium text-slate-500">Due this month</span>
      </div>

      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider">Fitness Exp.</span>
          <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
        </div>
        <div className="text-lg font-heading font-black text-rose-600 leading-none mb-1">8</div>
        <span className="text-[9.5px] font-medium text-slate-500">Action needed</span>
      </div>

      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs col-span-2 sm:col-span-1">
        <div className="flex items-center justify-between text-slate-400 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider">Permits Exp.</span>
          <Clock className="w-3.5 h-3.5 text-amber-500" />
        </div>
        <div className="text-lg font-heading font-black text-amber-600 leading-none mb-1">15</div>
        <span className="text-[9.5px] font-medium text-slate-500">Upcoming renewals</span>
      </div>
    </div>

    {/* Filter & Action Bar */}
    <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex flex-wrap items-center justify-between gap-2.5">
      <div className="flex items-center gap-2 flex-1 min-w-[200px]">
        <span className="text-xs font-heading font-bold text-slate-900 shrink-0">Vehicles</span>
        <div className="relative flex-1 max-w-[220px]">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search vehicles..."
            readOnly
            value=""
            className="w-full pl-8 pr-2.5 py-1 text-[11px] bg-slate-50 border border-slate-200/80 rounded-lg text-slate-700 placeholder:text-slate-400 focus:outline-hidden"
          />
        </div>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        <span className="px-2 py-1 text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-md">
          All Status
        </span>
        <span className="px-2 py-1 text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-md hidden sm:inline-block">
          All Types
        </span>
        <span className="px-2 py-1 text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-md hidden sm:inline-block">
          All Depots
        </span>
        <button className="flex items-center gap-1 px-2.5 py-1 text-[10.5px] font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-2xs transition-colors">
          <Plus className="w-3 h-3" />
          <span>Add Vehicle</span>
        </button>
      </div>
    </div>

    {/* Vehicle Table */}
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[10.5px]">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200/70 text-slate-500 font-semibold text-[10px] uppercase tracking-wider">
              <th className="py-2 px-3">Vehicle</th>
              <th className="py-2 px-3">Reg. Number</th>
              <th className="py-2 px-3 hidden sm:table-cell">Type</th>
              <th className="py-2 px-3 hidden md:table-cell">Depot</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3 hidden lg:table-cell">Insurance Expiry</th>
              <th className="py-2 px-3 hidden lg:table-cell">Fitness Expiry</th>
              <th className="py-2 px-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {[
              { name: "Tata 1613", sub: "Truck", reg: "KL07 AB 1234", type: "Truck", depot: "Kochi Main Depot", status: "Active", ins: "12 Jan 2026", fit: "20 Jan 2026", img: "🚚" },
              { name: "BharatBenz 1017", sub: "Bus", reg: "KL15 Y 6789", type: "Bus", depot: "Kochi Main Depot", status: "Active", ins: "05 Feb 2026", fit: "15 Feb 2026", img: "🚌" },
              { name: "Innova Crysta", sub: "Car", reg: "KL11 AC 9876", type: "Car", depot: "Kochi Main Depot", status: "Active", ins: "18 Mar 2026", fit: "28 Mar 2026", img: "🚗" },
              { name: "Ashok Leyland Dost", sub: "Mini Truck", reg: "KL21 D 4321", type: "Mini Truck", depot: "Aluva Depot", status: "Maintenance", ins: "28 Dec 2025", fit: "05 Jan 2026", img: "🛻" },
              { name: "Eicher Pro 2049", sub: "Truck", reg: "KL45 H 1122", type: "Truck", depot: "Aluva Depot", status: "Active", ins: "07 Feb 2026", fit: "17 Feb 2026", img: "🚛" },
            ].map((v, i) => (
              <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-2 px-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{v.img}</span>
                    <div>
                      <div className="font-bold text-slate-900 leading-tight">{v.name}</div>
                      <div className="text-[9px] text-slate-400">{v.sub}</div>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 font-mono font-medium text-slate-800">{v.reg}</td>
                <td className="py-2 px-3 hidden sm:table-cell text-slate-600">{v.type}</td>
                <td className="py-2 px-3 hidden md:table-cell text-slate-500">{v.depot}</td>
                <td className="py-2 px-3">
                  <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold ${
                    v.status === "Active"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                      : "bg-amber-50 text-amber-700 border border-amber-200/60"
                  }`}>
                    <span className={`w-1 h-1 rounded-full mr-1 ${v.status === "Active" ? "bg-emerald-500" : "bg-amber-500"}`}></span>
                    {v.status}
                  </span>
                </td>
                <td className="py-2 px-3 hidden lg:table-cell text-slate-600 font-mono text-[10px]">{v.ins}</td>
                <td className="py-2 px-3 hidden lg:table-cell text-slate-600 font-mono text-[10px]">{v.fit}</td>
                <td className="py-2 px-2 text-right">
                  <button className="text-slate-400 hover:text-slate-600 p-1 rounded">
                    <MoreHorizontal className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between px-3 py-2 border-t border-slate-100 bg-slate-50/50 text-[10px] text-slate-500">
        <span>Showing 1 to 5 of 128 vehicles</span>
        <div className="flex items-center gap-1">
          <button className="w-5 h-5 flex items-center justify-center rounded border border-slate-200 text-slate-400"><ChevronLeft className="w-3 h-3" /></button>
          <span className="w-5 h-5 flex items-center justify-center rounded bg-blue-600 text-white font-bold">1</span>
          <span className="w-5 h-5 flex items-center justify-center rounded border border-slate-200 text-slate-600">2</span>
          <span className="w-5 h-5 flex items-center justify-center rounded border border-slate-200 text-slate-600">3</span>
          <span className="px-0.5">...</span>
          <span className="w-5 h-5 flex items-center justify-center rounded border border-slate-200 text-slate-600">26</span>
          <button className="w-5 h-5 flex items-center justify-center rounded border border-slate-200 text-slate-600"><ChevronRight className="w-3 h-3" /></button>
        </div>
      </div>
    </div>
  </motion.div>
)

/* ─────────────────────────────────────────────────────────────
   2. DRIVERS & ATTENDANCE VIEW
   ───────────────────────────────────────────────────────────── */
const DriversView = () => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.2 }}
    className="space-y-4"
  >
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Drivers</span>
        <div className="text-lg font-heading font-black text-slate-900">142</div>
        <span className="text-[9.5px] font-bold text-emerald-600">+6 this month</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Today</span>
        <div className="text-lg font-heading font-black text-emerald-600">126</div>
        <span className="text-[9.5px] font-medium text-slate-500">89% attendance</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">On Active Trips</span>
        <div className="text-lg font-heading font-black text-blue-600">94</div>
        <span className="text-[9.5px] font-medium text-slate-500">Live on GPS</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">DL Expiring Soon</span>
        <div className="text-lg font-heading font-black text-amber-600">3</div>
        <span className="text-[9.5px] font-medium text-slate-500">Renewal pending</span>
      </div>
    </div>

    <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs p-3">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-bold text-slate-900">Driver Roster & Shift Status</span>
        <button className="text-[10.5px] font-bold text-blue-600 flex items-center gap-1">+ Add Driver</button>
      </div>
      <div className="space-y-2">
        {[
          { name: "Rajesh Kumar", id: "DRV-102", vehicle: "Tata 1613 (KL07 AB 1234)", status: "On Trip", rating: "4.9★", trips: "34 trips", dl: "Valid (2028)" },
          { name: "Mohammed Shafi", id: "DRV-108", vehicle: "BharatBenz 1017 (KL15 Y 6789)", status: "Available", rating: "4.8★", trips: "28 trips", dl: "Valid (2027)" },
          { name: "Suresh Varma", id: "DRV-114", vehicle: "Innova Crysta (KL11 AC 9876)", status: "On Trip", rating: "4.7★", trips: "41 trips", dl: "Exp. in 15 days" },
          { name: "Anandhu Nair", id: "DRV-120", vehicle: "Eicher Pro (KL45 H 1122)", status: "Off Duty", rating: "4.9★", trips: "19 trips", dl: "Valid (2029)" },
        ].map((d, idx) => (
          <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50/40 text-[11px]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center">
                {d.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-slate-800">{d.name} <span className="font-mono text-[9.5px] text-slate-400 font-normal">({d.id})</span></div>
                <div className="text-[9.5px] text-slate-500">{d.vehicle}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-amber-600 font-bold">{d.rating}</span>
              <span className="text-[10px] text-slate-500 hidden sm:inline-block">{d.trips}</span>
              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                d.status === "On Trip" ? "bg-blue-50 text-blue-700" : d.status === "Available" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"
              }`}>
                {d.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
)

/* ─────────────────────────────────────────────────────────────
   3. TRIPS & DISPATCH VIEW
   ───────────────────────────────────────────────────────────── */
const TripsView = () => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.2 }}
    className="space-y-4"
  >
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Trips</span>
        <div className="text-lg font-heading font-black text-blue-600">42</div>
        <span className="text-[9.5px] text-slate-500">Live on map</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Scheduled Today</span>
        <div className="text-lg font-heading font-black text-slate-900">18</div>
        <span className="text-[9.5px] text-emerald-600">Ready for dispatch</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Completed Today</span>
        <div className="text-lg font-heading font-black text-emerald-600">84</div>
        <span className="text-[9.5px] text-slate-500">100% on time</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Trip Delays</span>
        <div className="text-lg font-heading font-black text-rose-600">4</div>
        <span className="text-[9.5px] text-rose-500">Traffic alert</span>
      </div>
    </div>

    <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs p-3">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-bold text-slate-900">Live Dispatch Monitor</span>
        <button className="text-[10.5px] font-bold text-blue-600">+ Create Trip</button>
      </div>
      <div className="space-y-2">
        {[
          { id: "TRP-9821", route: "Kochi Port → Trivandrum Central", driver: "Rajesh K.", vehicle: "KL07 AB 1234", eta: "1 hr 20m left", status: "En Route" },
          { id: "TRP-9822", route: "Aluva Industrial Area → Nedumbassery Airport", driver: "Suresh V.", vehicle: "KL11 AC 9876", eta: "45m left", status: "En Route" },
          { id: "TRP-9823", route: "Kochi Main Depot → Kozhikode Bypass", driver: "Vipin D.", vehicle: "KL45 H 1122", eta: "Starts at 14:00", status: "Scheduled" },
          { id: "TRP-9820", route: "Fort Kochi → Infopark Phase 2", driver: "Mohammed S.", vehicle: "KL15 Y 6789", eta: "Arrived", status: "Completed" },
        ].map((t, idx) => (
          <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50/40 text-[11px]">
            <div>
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <span>{t.route}</span>
                <span className="font-mono text-[9px] text-slate-400 font-normal">#{t.id}</span>
              </div>
              <div className="text-[9.5px] text-slate-500">Driver: {t.driver} • {t.vehicle}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-slate-500 font-medium">{t.eta}</span>
              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                t.status === "En Route" ? "bg-blue-50 text-blue-700" : t.status === "Completed" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
              }`}>
                {t.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
)

/* ─────────────────────────────────────────────────────────────
   4. MAINTENANCE & ALERTS VIEW
   ───────────────────────────────────────────────────────────── */
const MaintenanceView = () => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.2 }}
    className="space-y-4"
  >
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Scheduled Services</span>
        <div className="text-lg font-heading font-black text-amber-600">14</div>
        <span className="text-[9.5px] text-slate-500">Next 7 days</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Overdue</span>
        <div className="text-lg font-heading font-black text-rose-600">2</div>
        <span className="text-[9.5px] text-rose-500 font-bold">Needs attention</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">In Workshop</span>
        <div className="text-lg font-heading font-black text-blue-600">6</div>
        <span className="text-[9.5px] text-slate-500">Under repair</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Completed (MTD)</span>
        <div className="text-lg font-heading font-black text-emerald-600">32</div>
        <span className="text-[9.5px] text-emerald-600 font-bold">₹34,280 spent</span>
      </div>
    </div>

    <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs p-3 space-y-2">
      <span className="text-xs font-bold text-slate-900 block mb-1">Preventive Service Schedule</span>
      {[
        { vehicle: "Ashok Leyland Dost (KL21 D 4321)", task: "50,000 km Major Engine Service & Brake Overhaul", due: "2 days overdue", status: "Overdue", type: "critical" },
        { vehicle: "Tata 1613 (KL07 AB 1234)", task: "Transmission Oil Change & Filter Replacement", due: "Due in 3 days", status: "Scheduled", type: "warning" },
        { vehicle: "Innova Crysta (KL11 AC 9876)", task: "Front & Rear Tire Rotation & Alignment", due: "Due in 8 days", status: "Scheduled", type: "info" },
      ].map((m, idx) => (
        <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50/40 text-[11px]">
          <div>
            <div className="font-bold text-slate-800">{m.vehicle}</div>
            <div className="text-[9.5px] text-slate-500">{m.task}</div>
          </div>
          <div className="text-right">
            <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
              m.status === "Overdue" ? "bg-rose-50 text-rose-700 border border-rose-200" : "bg-amber-50 text-amber-700"
            }`}>
              {m.status}
            </span>
            <div className="text-[9px] text-slate-400 mt-0.5">{m.due}</div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
)

/* ─────────────────────────────────────────────────────────────
   5. FUEL MANAGEMENT VIEW
   ───────────────────────────────────────────────────────────── */
const FuelView = () => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.2 }}
    className="space-y-4"
  >
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Fuel Cost (MTD)</span>
        <div className="text-lg font-heading font-black text-slate-900">₹82,430</div>
        <span className="text-[9.5px] text-emerald-600 font-bold">↓ 6.4% vs last month</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg Fleet Mileage</span>
        <div className="text-lg font-heading font-black text-emerald-600">14.2 km/L</div>
        <span className="text-[9.5px] text-emerald-600 font-bold">+1.2 km/L optimized</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Fuel Logged</span>
        <div className="text-lg font-heading font-black text-blue-600">864 Liters</div>
        <span className="text-[9.5px] text-slate-500">48 refills recorded</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Fuel Theft Alerts</span>
        <div className="text-lg font-heading font-black text-emerald-600">0</div>
        <span className="text-[9.5px] text-emerald-600">All tanks verified</span>
      </div>
    </div>

    <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs p-3">
      <span className="text-xs font-bold text-slate-900 block mb-2.5">Recent Fuel Dispense & Mileage Entries</span>
      <div className="space-y-2">
        {[
          { vehicle: "Tata 1613 (KL07 AB 1234)", qty: "65 Liters", amount: "₹6,175", km: "8.4 km/L", station: "HPCL Cochin Depot", date: "Today, 08:30" },
          { vehicle: "Innova Crysta (KL11 AC 9876)", qty: "42 Liters", amount: "₹3,990", km: "15.8 km/L", station: "IOCL Aluva Bypass", date: "Yesterday, 19:40" },
          { vehicle: "Eicher Pro (KL45 H 1122)", qty: "50 Liters", amount: "₹4,750", km: "9.2 km/L", station: "BPCL Ernakulam", date: "Yesterday, 14:15" },
        ].map((f, idx) => (
          <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50/40 text-[11px]">
            <div>
              <div className="font-bold text-slate-800">{f.vehicle}</div>
              <div className="text-[9.5px] text-slate-500">{f.station} • {f.date}</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-slate-900">{f.amount} <span className="text-slate-400 font-normal">({f.qty})</span></div>
              <div className="text-[9.5px] font-bold text-emerald-600">{f.km}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
)

/* ─────────────────────────────────────────────────────────────
   6. EXPENSES & REVENUE VIEW
   ───────────────────────────────────────────────────────────── */
const ExpensesView = () => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.2 }}
    className="space-y-4"
  >
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Gross Revenue (MTD)</span>
        <div className="text-lg font-heading font-black text-emerald-600">₹2,38,550</div>
        <span className="text-[9.5px] text-emerald-600 font-bold">↑ 12.4% vs last month</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Expenses</span>
        <div className="text-lg font-heading font-black text-slate-900">₹1,16,710</div>
        <span className="text-[9.5px] text-slate-500">Fuel, maintenance, toll</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Net Profit</span>
        <div className="text-lg font-heading font-black text-blue-600">₹1,21,840</div>
        <span className="text-[9.5px] text-blue-600 font-bold">51.1% profit margin</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pending Receivables</span>
        <div className="text-lg font-heading font-black text-amber-600">₹18,200</div>
        <span className="text-[9.5px] text-slate-500">3 client invoices</span>
      </div>
    </div>

    <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs p-3">
      <span className="text-xs font-bold text-slate-900 block mb-2">P&L Operating Expense Categories</span>
      <div className="space-y-2">
        {[
          { category: "Fuel Expenses", amount: "₹82,430", percent: "70.6%", color: "bg-emerald-500" },
          { category: "Vehicle Repairs & Scheduled Maintenance", amount: "₹34,280", percent: "29.4%", color: "bg-blue-500" },
          { category: "Toll & Fastag Disbursements", amount: "₹14,500", percent: "12.4%", color: "bg-amber-500" },
          { category: "Driver Trip Allowances", amount: "₹18,500", percent: "15.8%", color: "bg-purple-500" },
        ].map((item, idx) => (
          <div key={idx} className="space-y-1 text-[11px]">
            <div className="flex justify-between font-medium text-slate-700">
              <span>{item.category}</span>
              <span className="font-bold text-slate-900">{item.amount}</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full ${item.color} rounded-full`} style={{ width: item.percent }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
)

/* ─────────────────────────────────────────────────────────────
   7. REPORTS & INSIGHTS VIEW
   ───────────────────────────────────────────────────────────── */
const ReportsView = () => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.2 }}
    className="space-y-4"
  >
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Fleet Utilization</span>
        <div className="text-lg font-heading font-black text-blue-600">92%</div>
        <span className="text-[9.5px] text-emerald-600 font-bold">+4% vs target</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Revenue / Vehicle</span>
        <div className="text-lg font-heading font-black text-slate-900">₹1,863/day</div>
        <span className="text-[9.5px] text-emerald-600 font-bold">Top quartile</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Cost / Kilometer</span>
        <div className="text-lg font-heading font-black text-emerald-600">₹11.4/km</div>
        <span className="text-[9.5px] text-emerald-600 font-bold">8.5% cost reduction</span>
      </div>
      <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Customer CSAT</span>
        <div className="text-lg font-heading font-black text-amber-500">4.9 / 5.0</div>
        <span className="text-[9.5px] text-slate-500">From 250+ reviews</span>
      </div>
    </div>

    <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs p-3">
      <div className="flex justify-between items-center mb-2.5">
        <span className="text-xs font-bold text-slate-900">Automated Analytics Digest</span>
        <span className="text-[10px] text-blue-600 font-bold">Download PDF Report</span>
      </div>
      <div className="space-y-2 text-[11px] text-slate-600">
        <div className="p-2 bg-emerald-50/60 border border-emerald-200/60 rounded-lg flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span><strong>Route Optimization:</strong> Grouping Cochin airport dispatches saved ₹12,400 in fuel this month.</span>
        </div>
        <div className="p-2 bg-blue-50/60 border border-blue-200/60 rounded-lg flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <span><strong>Driver Performance:</strong> 94% on-time arrivals with 0 safety violation infractions logged.</span>
        </div>
      </div>
    </div>
  </motion.div>
)

export default FleetProductPreview
