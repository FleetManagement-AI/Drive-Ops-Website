import { motion } from "framer-motion"
import {
  ArrowRight, Play, CheckCircle2, Star,
  MessageCircle, TrendingUp, Navigation, Shield,
  MapPin, Car, Users, Zap
} from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-24 overflow-hidden bg-[#FBFBFD] flex items-center">
      {/* Absolute Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Radial subtle glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[100px] opacity-70 mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[80px] opacity-60 mix-blend-multiply" />
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-sky-50/50 rounded-full blur-[100px] opacity-50 mix-blend-multiply" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-100" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE - 40% (span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left pt-10 lg:pt-0">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <h1 className="text-5xl lg:text-[64px] font-extrabold text-[#0A0A0A] leading-[1.05] tracking-tight mb-6">
                The Complete <br className="hidden xl:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Fleet Operations Platform.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-lg lg:text-[20px] text-slate-500 mb-10 max-w-[540px] leading-relaxed font-medium"
            >
              DriveOps is the ultimate fleet management software for taxi and transport businesses. Automate smart taxi dispatch, GPS vehicle tracking, driver management, and WhatsApp review collection from one unified dashboard.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-[#0A0A0A] hover:bg-black text-white rounded-xl font-semibold text-base transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex items-center justify-center gap-2 group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-semibold text-base transition-all shadow-sm flex items-center justify-center gap-2 group">
                <Play className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors fill-current" />
                Book Demo
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-2 gap-y-4 gap-x-6 w-full max-w-md"
            >
              {[
                "No credit card required",
                "14-day free trial",
                "Setup in minutes",
                "24×7 Support"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2.5 text-slate-600 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE - 60% (span-7) Product Showcase */}
          <div className="lg:col-span-7 relative mt-16 lg:mt-0 lg:ml-8 perspective-1000">
            {/* Main Browser Window */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full rounded-2xl border border-white/40 bg-white/60 backdrop-blur-2xl shadow-[0_20px_50px_rgb(0,0,0,0.05)] overflow-hidden"
            >
              {/* Browser Chrome */}
              <div className="flex items-center px-4 py-3 border-b border-white/50 bg-white/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400 border border-rose-500/20" />
                  <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/20" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500/20" />
                </div>
                <div className="mx-auto bg-white border border-slate-100 rounded-md px-16 py-1 text-[11px] text-slate-400 font-medium flex items-center gap-2 shadow-sm">
                  <Shield className="w-3 h-3 text-slate-300" />
                  driveops.chatserve.in
                </div>
              </div>

              {/* Dashboard Content Mockup */}
              <div className="p-6 bg-[#FAFAFA]/50">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">Fleet Overview</h3>
                    <p className="text-sm text-slate-500 font-medium">Live operations dashboard</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">Date Range</span>
                    <span className="px-4 py-1.5 bg-[#0A0A0A] text-white rounded-lg text-xs font-semibold shadow-sm cursor-pointer hover:bg-black transition-colors">New Dispatch</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {/* Top Stats */}
                  {[
                    { label: "Active Vehicles", val: "124", icon: Car, col: "text-blue-600", bg: "bg-blue-50", trend: "+12%" },
                    { label: "Drivers Online", val: "98", icon: Users, col: "text-emerald-600", bg: "bg-emerald-50", trend: "+5%" },
                    { label: "Today's Revenue", val: "$12,450", icon: TrendingUp, col: "text-indigo-600", bg: "bg-indigo-50", trend: "+24%" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-3 group hover:border-slate-200 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className={`p-2 rounded-lg ${stat.bg} ${stat.col} group-hover:scale-105 transition-transform`}>
                          <stat.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">{stat.trend}</span>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-slate-900 tracking-tight">{stat.val}</div>
                        <div className="text-xs font-medium text-slate-500">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {/* Main Chart Area */}
                  <div className="col-span-2 bg-white p-5 rounded-xl border border-slate-100 shadow-sm h-64 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-slate-900 text-sm">Revenue Analytics</h4>
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span> Weekly
                      </span>
                    </div>
                    <div className="w-full h-full flex items-end justify-between gap-2 px-2 pb-2">
                      {/* Fake Bar Chart */}
                      {[40, 60, 45, 80, 50, 90, 75].map((h, i) => (
                        <div key={i} className="w-full bg-slate-50 rounded-t-sm flex items-end h-full">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                            className="w-full bg-blue-500 rounded-t-sm hover:bg-blue-600 transition-colors cursor-pointer"
                          ></motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Right Side Activity */}
                  <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm h-64 overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent z-10"></div>
                    <h4 className="font-bold text-slate-900 text-sm mb-4 relative z-20">Live Activity</h4>
                    <div className="space-y-4 pt-2 relative z-0">
                      {[
                        { to: "Airport T2", time: "Just now", status: "Assigned" },
                        { to: "Downtown", time: "5 min ago", status: "Completed" },
                        { to: "Central Station", time: "12 min ago", status: "Completed" },
                      ].map((d, i) => (
                        <div key={i} className="flex justify-between items-center group">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                              <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                            </div>
                            <div>
                              <div className="text-[13px] font-bold text-slate-800">{d.to}</div>
                              <div className="text-[11px] font-medium text-slate-400">{d.time}</div>
                            </div>
                          </div>
                          <div className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${d.status === 'Assigned' ? 'bg-amber-50 text-amber-600' : 'bg-slate-50 text-slate-500'}`}>
                            {d.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING WIDGETS (Telling the story) */}

            {/* Widget 1: Booking / Assigned */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -left-12 lg:-left-20 top-16 z-20 bg-white/90 backdrop-blur-xl border border-slate-200/60 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 w-64"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Navigation className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-0.5">Trip Started</div>
                <div className="text-sm font-bold text-slate-900">Driver: Mike R.</div>
                <div className="text-xs font-medium text-slate-500">ETA: 14 mins to Airport</div>
              </div>
            </motion.div>

            {/* Widget 2: The WhatsApp Review Collection (Prominent, High Priority) */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 lg:-right-24 top-40 z-30 bg-white/95 backdrop-blur-2xl border border-emerald-100 p-5 rounded-2xl shadow-[0_20px_40px_rgb(16,185,129,0.15)] w-72"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shadow-md shadow-[#25D366]/30">
                    <MessageCircle className="w-4 h-4 text-white fill-current" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Automated Request</span>
                </div>
                <div className="flex items-center gap-0.5 text-[#F59E0B]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-3.5 mb-4 border border-slate-100 relative shadow-inner">
                <div className="absolute -left-1.5 top-4 w-3 h-3 bg-[#F8FAFC] border-l border-b border-slate-100 rotate-45"></div>
                <div className="flex gap-3 items-start relative z-10">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Customer" className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm" />
                  <div>
                    <div className="text-[13px] font-bold text-slate-900">Sarah Jenkins</div>
                    <p className="text-[11px] font-medium text-slate-600 mt-1 leading-snug">"Thanks for your ride! The car was super clean and driver was very professional."</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <div>
                  <div className="text-lg font-black text-slate-900">126</div>
                  <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Reviews</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black text-emerald-600">4.9/5</div>
                  <div className="text-[9px] uppercase font-bold text-emerald-600/50 tracking-wider">Avg Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Widget 3: Business Growth / Revenue */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2.5 }}
              className="absolute left-4 lg:-left-12 -bottom-12 z-30 bg-[#0A0A0A]/95 backdrop-blur-2xl border border-slate-800 p-4 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.2)] flex items-center gap-4 w-60"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-500/30">
                <TrendingUp className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Business Growth</div>
                <div className="text-lg font-black text-white flex items-center gap-2">
                  $45,280 <span className="text-[10px] font-bold text-emerald-400 flex items-center bg-emerald-400/10 px-1.5 py-0.5 rounded"><ArrowRight className="w-3 h-3 -rotate-45 mr-0.5" /> 24%</span>
                </div>
              </div>
            </motion.div>

            {/* Widget 4: Fleet Health / Compliance */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-12 lg:right-4 -bottom-6 z-20 bg-white/90 backdrop-blur-xl border border-slate-200/60 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col gap-2.5 w-48"
            >
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Compliance</span>
                <Shield className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div className="bg-emerald-500 h-1.5 rounded-full w-[98%] shadow-[0_0_8px_rgb(16,185,129,0.5)]"></div>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-800">Score</span>
                <span className="font-black text-emerald-600">98/100</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
