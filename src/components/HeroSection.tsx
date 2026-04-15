import { motion } from "framer-motion";
import { ArrowRight, Play, Truck, MapPin, Users, Shield, Activity, Navigation, Database } from "lucide-react";

const kpis = [
  { icon: Truck, value: "12,500+", label: "Active Vehicles" },
  { icon: MapPin, value: "2.4M", label: "Trips Completed" },
  { icon: Users, value: "850+", label: "Fleet Operators" },
  { icon: Shield, value: "99.99%", label: "Uptime SLA" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 grid-pattern" />
    <div className="absolute inset-0 radial-glow" />

    <div className="container mx-auto px-4 md:px-8 pt-24 pb-16 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 items-center">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">


          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            DriveOps: The Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#06B6D4]">Fleet Management</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10"
          >
            A smart, high-performance platform for managing rental fleets, tracking vehicles in real time, and optimizing transportation operations.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="https://driveops.chatserve.in/signup"
              className="bg-gradient-to-r from-[#00C2FF] to-[#06B6D4] text-slate-950 font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,194,255,0.4)]"
            >
              Get Started <ArrowRight size={16} />
            </a>
            <a
              href="#cta"
              className="glass border border-white/10 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2 backdrop-blur-md"
            >
              <Play size={16} /> Request a Demo
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-square md:aspect-video lg:aspect-[4/3] xl:aspect-square max-w-none mx-auto mt-12 lg:mt-0"
        >
          {/* Soft neon blue radial glow behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#06B6D4]/15 blur-[120px] rounded-full pointer-events-none" />

          {/* Static visual container */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative w-full group">
              {/* Decorative data nodes / GPS lines behind the image */}
              <svg className="absolute -inset-10 w-[calc(100%+5rem)] h-[calc(100%+5rem)] pointer-events-none z-0 stroke-[#00C2FF]/30" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M -10,80 Q 20,40 50,55 T 110,25"
                  fill="none"
                  strokeWidth="0.8"
                  strokeDasharray="2 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                />
              </svg>

              {/* The transparent provided image */}
              <img
                src="/images/Gemini_Generated_Image2.png"
                alt="DriveOps Dashboard Demo"
                className="relative z-10 w-full h-auto object-contain transform scale-125 transition-transform duration-700 group-hover:scale-135 drop-shadow-[0_20px_60px_rgba(0,194,255,0.3)]"
              />

              {/* Floating GPS Pins */}
              <motion.div
                className="absolute -right-2 top-1/4 z-20"
                animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-10 h-10 bg-slate-900/80 backdrop-blur border border-white/10 rounded-full flex items-center justify-center shadow-xl glow-cyan relative">
                  <div className="absolute inset-0 bg-[#00C2FF]/20 rounded-full blur-md animate-pulse" />
                  <MapPin className="w-5 h-5 text-[#22D3EE]" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-2 bottom-1/3 z-20"
                animate={{ scale: [1, 1.1, 1], y: [0, 8, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity }}
              >
                <div className="w-12 h-12 bg-slate-900/80 backdrop-blur border border-white/10 rounded-full flex items-center justify-center shadow-xl relative">
                  <div className="absolute inset-0 bg-[#06B6D4]/30 rounded-full blur-lg animate-pulse" />
                  <Navigation className="w-5 h-5 text-[#06B6D4]" fill="currentColor" />
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* KPI Cards */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            custom={i + 4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="glass rounded-xl p-5 text-center group hover:glow-border transition-all duration-300"
          >
            <kpi.icon className="w-5 h-5 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-heading text-2xl font-bold">{kpi.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{kpi.label}</p>
          </motion.div>
        ))}
      </div> */}
    </div>
  </section>
);

export default HeroSection;
