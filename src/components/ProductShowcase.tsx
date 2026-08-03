import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { 
  LayoutDashboard, Car, Navigation, Shield, 
  TrendingUp, MessageCircle, Star, ArrowRight,
  Activity, Users, MapPin, Zap, CheckCircle2,
  BarChart3, Fuel, Clock
} from "lucide-react"

// --- Mock UI Components for the Interactive Product Showcase ---

const DashboardView = () => (
  <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-4 sm:p-6 overflow-hidden relative">
    <div className="flex justify-between items-center mb-4 shrink-0">
      <div>
        <h3 className="text-lg font-bold text-slate-900">Operations Command Center</h3>
        <p className="text-xs text-slate-500 font-medium">Real-time overview of all fleet activities</p>
      </div>
      <div className="flex gap-2">
        <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 shadow-sm">Today</span>
        <span className="px-3 py-1.5 bg-[#0A0A0A] text-white rounded-lg text-xs font-semibold shadow-sm">Export</span>
      </div>
    </div>
    
    <div className="grid grid-cols-4 gap-3 mb-4 shrink-0">
      {[
        { l: "Active Vehicles", v: "142", t: "+12", ic: Car, c: "text-blue-600", bg: "bg-blue-50" },
        { l: "Drivers Online", v: "108", t: "+5", ic: Users, c: "text-emerald-600", bg: "bg-emerald-50" },
        { l: "Live Trips", v: "34", t: "+2", ic: Navigation, c: "text-indigo-600", bg: "bg-indigo-50" },
        { l: "Today's Revenue", v: "$14.2k", t: "+1.2k", ic: TrendingUp, c: "text-violet-600", bg: "bg-violet-50" },
      ].map((s, i) => (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          key={i} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2"
        >
          <div className="flex justify-between items-center">
            <div className={`p-1.5 rounded-lg ${s.bg} ${s.c}`}>
              <s.ic className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">{s.t}</span>
          </div>
          <div>
            <div className="text-xl font-black text-slate-900 tracking-tight">{s.v}</div>
            <div className="text-[10px] font-medium text-slate-500">{s.l}</div>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
      {/* Live Map */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
        className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 relative overflow-hidden flex flex-col"
      >
        <div className="flex justify-between items-center mb-2 shrink-0">
          <h4 className="font-bold text-slate-900 text-xs">Live Tracking</h4>
          <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active</span>
        </div>
        <div className="flex-1 bg-slate-50 rounded-lg overflow-hidden border border-slate-100 relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
          <motion.div animate={{ x: [0, 20, 0], y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} className="absolute top-[30%] left-[20%] w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md"></motion.div>
          <motion.div animate={{ x: [0, -15, 0], y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="absolute top-[60%] left-[60%] w-3 h-3 bg-indigo-500 rounded-full border-2 border-white shadow-md"></motion.div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 20 30 Q 40 10 60 60 T 80 40" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 2" className="opacity-40" />
          </svg>
        </div>
      </motion.div>

      {/* Dispatches */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
        className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 flex flex-col overflow-hidden"
      >
        <h4 className="font-bold text-slate-900 text-xs mb-2 shrink-0">Recent Dispatches</h4>
        <div className="flex-1 overflow-y-auto space-y-2 pr-1">
          {[1,2,3,4].map((i) => (
            <div key={i} className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-3 h-3 text-blue-600" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800">Trip #{4829 + i}</div>
                  <div className="text-[9px] font-medium text-slate-400">Driver {i} • 2m ago</div>
                </div>
              </div>
              <div className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-600">En Route</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fleet Health & Mini Chart */}
      <div className="grid grid-rows-2 gap-3 min-h-0">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-bold text-slate-900 text-xs">Fleet Health</h4>
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <div className="text-xl font-black text-emerald-600 mb-1">98%</div>
          <div className="w-full bg-slate-100 rounded-full h-1">
            <div className="bg-emerald-500 h-1 rounded-full w-[98%] shadow-[0_0_4px_rgb(16,185,129,0.5)]"></div>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 flex flex-col">
          <h4 className="font-bold text-slate-900 text-xs mb-2">Trip Volume</h4>
          <div className="flex-1 flex items-end gap-1 pb-1">
            {[40, 60, 45, 80, 50, 90, 75].map((h, i) => (
              <div key={i} className="w-full bg-slate-50 rounded-t h-full flex items-end">
                <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.8, delay: i * 0.1 }} className="w-full bg-indigo-500 rounded-t" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
)

const ReviewManagementView = () => (
  <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-4 sm:p-6 overflow-hidden relative">
    <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-emerald-100/40 rounded-full blur-[60px]"></div>
    
    <div className="flex justify-between items-center mb-5 shrink-0 relative z-10">
      <div>
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-1.5">
          WhatsApp Reviews <Star className="w-4 h-4 text-amber-400 fill-current" />
        </h3>
        <p className="text-xs text-slate-500 font-medium">Automated post-trip review collection workflow.</p>
      </div>
      <span className="px-3 py-1.5 bg-[#25D366] text-white rounded-lg text-xs font-semibold shadow-lg shadow-[#25D366]/20 flex items-center gap-1.5">
        <MessageCircle className="w-3.5 h-3.5" /> Connected
      </span>
    </div>

    {/* Workflow Visualization (Compact) */}
    <div className="flex items-center justify-between mb-5 relative z-10 bg-white p-4 rounded-xl border border-slate-100 shadow-sm shrink-0">
      <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-slate-100 -z-10 -translate-y-1/2"></div>
      {[
        { title: "Trip Complete", icon: MapPin, col: "text-blue-600", bg: "bg-blue-100" },
        { title: "WhatsApp Sent", icon: MessageCircle, col: "text-[#25D366]", bg: "bg-[#25D366]/20" },
        { title: "5★ Received", icon: Star, col: "text-amber-500", bg: "bg-amber-100" },
        { title: "Rating Increases", icon: TrendingUp, col: "text-emerald-600", bg: "bg-emerald-100" }
      ].map((step, i) => (
        <motion.div 
          key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
          className="flex flex-col items-center gap-2 bg-white px-2"
        >
          <div className={`w-10 h-10 rounded-full ${step.bg} flex items-center justify-center ring-4 ring-white shadow-sm relative`}>
            <step.icon className={`w-4 h-4 ${step.col}`} />
            {i === 1 && <motion.div animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 rounded-full border border-[#25D366]"></motion.div>}
          </div>
          <span className="text-[10px] font-bold text-slate-700 whitespace-nowrap">{step.title}</span>
        </motion.div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-4 flex-1 min-h-0 relative z-10">
      {/* Stats Col */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="col-span-1 grid grid-rows-2 gap-4">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-lg p-4 flex flex-col justify-center border border-slate-700">
          <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Conversion</h4>
          <div className="text-3xl font-black text-white mb-1">48%</div>
          <p className="text-[10px] text-emerald-400 font-medium">↑ 12% vs last month</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col justify-center gap-2">
          <div className="flex justify-between items-center border-b border-slate-50 pb-2">
            <span className="text-slate-500 text-xs font-medium">Requests</span>
            <span className="text-slate-900 font-bold text-sm">1,248</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-50 pb-2">
            <span className="text-slate-500 text-xs font-medium">Collected</span>
            <span className="text-slate-900 font-bold text-sm">598</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 text-xs font-medium">Avg Rating</span>
            <span className="text-amber-500 font-bold text-sm flex items-center gap-1">4.9 <Star className="w-3 h-3 fill-current"/></span>
          </div>
        </div>
      </motion.div>

      {/* Feed Col */}
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col overflow-hidden">
        <h4 className="font-bold text-slate-900 text-xs mb-3 shrink-0">Live Customer Feedback</h4>
        <div className="space-y-3 flex-1 overflow-y-auto pr-1">
          {[
            { n: "David Chen", t: "Just now", r: 5, msg: "Driver was exactly on time and the car was immaculate. Will definitely use again for airport transfers!" },
            { n: "Sarah Jenkins", t: "12m ago", r: 5, msg: "Very smooth ride. Loved that I got a WhatsApp receipt and review link right after." },
            { n: "Michael T.", t: "1h ago", r: 4, msg: "Good service, clean vehicle. Easy booking process." }
          ].map((r, i) => (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + (i * 0.1) }} key={i} className="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex justify-between items-start mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[10px]">{r.n.charAt(0)}</div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{r.n}</div>
                    <div className="text-[9px] text-slate-500">{r.t}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-2.5 h-2.5 ${j < r.r ? 'text-amber-400 fill-current' : 'text-slate-300'}`} />
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-slate-600 font-medium leading-snug">"{r.msg}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
)

const AnalyticsView = () => (
  <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-4 sm:p-6 overflow-hidden relative">
    <div className="flex justify-between items-center mb-5 shrink-0">
      <div>
        <h3 className="text-lg font-bold text-slate-900">Business Analytics</h3>
        <p className="text-xs text-slate-500 font-medium">Deep dive into operational metrics and revenue.</p>
      </div>
      <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 shadow-sm">This Month</span>
    </div>
    
    <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
      {/* Col 1: Revenue Chart */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="col-span-1 bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col">
        <h4 className="font-bold text-slate-900 text-xs mb-1">Revenue Trend</h4>
        <div className="text-lg font-black text-emerald-600 mb-3">$84,290</div>
        <div className="flex-1 flex items-end justify-between gap-1.5">
          {[40, 55, 45, 70, 65, 85, 100].map((h, i) => (
            <div key={i} className="w-full bg-slate-50 rounded-t h-full flex items-end">
              <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.8, delay: i * 0.1 }} className="w-full bg-indigo-500 rounded-t" />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[8px] font-bold text-slate-400 uppercase">
          <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
        </div>
      </motion.div>

      {/* Col 2: Utilization & Fuel */}
      <div className="col-span-1 grid grid-rows-2 gap-4 min-h-0">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 rounded-full border-[6px] border-slate-50 flex items-center justify-center relative mb-2">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="50%" cy="50%" r="24" fill="none" stroke="#e2e8f0" strokeWidth="6" />
              <motion.circle initial={{ strokeDasharray: "0 100" }} animate={{ strokeDasharray: "78 100" }} transition={{ duration: 1, delay: 0.4 }} cx="50%" cy="50%" r="24" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" strokeDasharray="78 100" />
            </svg>
            <span className="text-sm font-black text-slate-900">78%</span>
          </div>
          <h4 className="font-bold text-slate-900 text-[11px]">Vehicle Utilization</h4>
          <p className="text-[9px] text-slate-500 font-medium leading-tight mt-0.5">Fleet actively generating revenue today.</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl shadow-md text-white flex flex-col justify-center">
          <div className="flex items-center gap-1.5 mb-1">
            <Fuel className="w-3.5 h-3.5 text-emerald-100" />
            <h4 className="font-bold text-emerald-50 text-[11px]">Fuel Efficiency</h4>
          </div>
          <div className="text-2xl font-black mb-1">92/100</div>
          <p className="text-[9px] text-emerald-100 font-medium leading-tight">~$450 saved in fuel costs via optimized routing.</p>
        </motion.div>
      </div>

      {/* Col 3: Driver Perf & Trends */}
      <div className="col-span-1 grid grid-rows-2 gap-4 min-h-0">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col">
          <h4 className="font-bold text-slate-900 text-[11px] mb-2 shrink-0">Driver Performance</h4>
          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {[
              { n: "M. Ramirez", s: 98 },
              { n: "J. Smith", s: 95 },
              { n: "L. Chen", s: 91 }
            ].map((d, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-700">{d.n}</span>
                <span className="text-[10px] font-black text-blue-600">{d.s} pts</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-slate-900 p-3 rounded-xl shadow-md text-white flex flex-col justify-center">
          <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-1">Total Trips (MTD)</h4>
          <div className="text-2xl font-black text-white mb-1">4,289</div>
          <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
            <ArrowRight className="w-2.5 h-2.5 -rotate-45" /> +18.4%
          </div>
        </motion.div>
      </div>
    </div>
  </div>
)


const TABS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, component: DashboardView },
  { id: "reviews", label: "⭐ Review Management", icon: Star, component: ReviewManagementView },
  { id: "analytics", label: "Analytics", icon: BarChart3, component: AnalyticsView },
]

// --- Main Section Component ---

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(TABS[0].id)
  const ActiveComponent = TABS.find(t => t.id === activeTab)?.component || DashboardView

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-4">
              Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">DriveOps Platform</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
              Every operation—from dispatch to customer reviews—managed from a single intelligent platform.
            </p>
          </motion.div>
        </div>

        {/* Interactive Feature Navigation (Pills) */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 group ${
                  isActive 
                    ? "text-white" 
                    : "bg-white text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-showcase-pill"
                    className="absolute inset-0 bg-slate-900 rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                  <tab.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? (tab.id === 'reviews' ? 'text-amber-400' : 'text-blue-400') : 'text-slate-400 group-hover:text-slate-600'} transition-colors`} />
                  {tab.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Product Showcase Window */}
        <div className="max-w-[1000px] w-full mx-auto relative perspective-1000">
          
          {/* Floating Accents (Smaller and pushed further out) */}
          <motion.div 
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -left-12 lg:-left-32 top-24 z-20 bg-white p-3 rounded-xl shadow-[0_15px_30px_rgb(0,0,0,0.08)] border border-slate-100 hidden md:flex items-center gap-3 scale-90 origin-right"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="whitespace-nowrap">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Fleet Health</div>
              <div className="text-sm font-black text-slate-900">100% Active</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [8, -8, 8] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute -right-12 lg:-right-32 bottom-16 z-20 bg-slate-900 p-3 rounded-xl shadow-[0_15px_30px_rgb(0,0,0,0.15)] border border-slate-800 hidden md:flex items-center gap-3 scale-90 origin-left"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-blue-400" />
            </div>
            <div className="whitespace-nowrap">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Efficiency Score</div>
              <div className="text-sm font-black text-white">A+ Rating</div>
            </div>
          </motion.div>

          <div className="w-full bg-white rounded-xl sm:rounded-2xl border border-slate-200/60 shadow-[0_20px_50px_rgb(0,0,0,0.1)] overflow-hidden flex flex-col aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] max-h-[600px]">
            {/* Browser Chrome */}
            <div className="flex items-center px-4 py-2.5 border-b border-slate-100 bg-[#FAFAFA] shrink-0">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="mx-auto bg-white border border-slate-200 rounded text-[10px] text-slate-400 font-bold flex items-center justify-center gap-1.5 shadow-sm px-16 py-1 w-auto max-w-[200px]">
                <Shield className="w-2.5 h-2.5 text-slate-300" />
                <span className="truncate">app.driveops.com</span>
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="flex-1 relative overflow-hidden bg-[#FAFAFA]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <ActiveComponent />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="max-w-[1200px] mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Navigation, title: "Smart Dispatch", desc: "Assign trips automatically based on proximity, vehicle type, and driver availability." },
              { icon: LayoutDashboard, title: "Fleet Visibility", desc: "Track every vehicle in real-time on a live interactive map with status indicators." },
              { icon: Shield, title: "Compliance Management", desc: "Never miss permit renewals. Store all fleet and driver documents in one secure vault." },
              { icon: Activity, title: "Maintenance Automation", desc: "Reduce downtime by scheduling proactive maintenance based on vehicle usage." },
              { icon: TrendingUp, title: "Business Analytics", desc: "Monitor revenue, fuel costs, utilization rates, and operational KPIs in real time." },
              { icon: MessageCircle, title: "WhatsApp Review Management", desc: "Collect customer reviews automatically after every completed trip to boost Google ratings." },
            ].map((f, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-slate-100 rounded-xl p-5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-slate-300 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                  <f.icon className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">{f.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-xs">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
