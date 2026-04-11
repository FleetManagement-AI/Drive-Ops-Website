import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { LayoutDashboard, Car, Navigation, UserCircle, FileCheck } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Intelligent Command Center",
    desc: "Real-time fleet overview with actionable insights, KPIs, and operational metrics at your fingertips.",
  },
  {
    icon: Car,
    title: "Advanced Vehicle Lifecycle Management",
    desc: "Track every vehicle from acquisition through maintenance, compliance, and eventual retirement.",
  },
  {
    icon: Navigation,
    title: "Smart Dispatch & Trip Tracking",
    desc: "Optimize routes, assign trips, and monitor journeys in real-time with intelligent scheduling.",
  },
  {
    icon: UserCircle,
    title: "Driver Management & Profiles",
    desc: "Comprehensive driver profiles with performance analytics, certifications, and assignment history.",
  },
  {
    icon: FileCheck,
    title: "Secure Document Vault",
    desc: "Centralized, encrypted storage for licenses, insurance, permits, and compliance documents.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 radial-glow opacity-50" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Features</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Everything You Need to{" "}
            <span className="gradient-text">Manage Your Fleet</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-7 group hover:glow-border hover:glow-cyan transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center mb-5">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
