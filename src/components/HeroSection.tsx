import { motion } from "framer-motion";
import { ArrowRight, Play, Truck, MapPin, Users, Shield } from "lucide-react";

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
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 grid-pattern" />
    <div className="absolute inset-0 radial-glow" />

    <div className="container mx-auto px-4 md:px-8 pt-24 pb-16 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full gradient-accent animate-pulse-glow" />
          <span className="text-xs font-medium text-muted-foreground">Now in Public Beta</span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          DriveOps: The Future of{" "}
          <span className="gradient-text">Fleet Management</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          A premium, high-performance platform for modern logistics and transportation businesses.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta"
            className="gradient-accent text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 glow-cyan"
          >
            Get Started <ArrowRight size={16} />
          </a>
          <a
            href="#cta"
            className="glass text-foreground font-semibold px-8 py-3 rounded-lg hover:bg-muted/30 transition-colors flex items-center gap-2"
          >
            <Play size={16} /> Request a Demo
          </a>
        </motion.div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto">
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
      </div>
    </div>
  </section>
);

export default HeroSection;
