import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Zap, Layers, Lock, Rocket } from "lucide-react";

const reasons = [
  { icon: Palette, title: "Premium Aesthetics", desc: "A beautifully crafted interface designed for clarity and efficiency." },
  { icon: Zap, title: "Lightning-Fast Performance", desc: "Optimized for speed with sub-second load times and instant interactions." },
  { icon: Layers, title: "Scalable Architecture", desc: "Built to grow with your fleet—from 10 vehicles to 10,000+." },
  { icon: Lock, title: "Enterprise-Grade Security", desc: "End-to-end encryption, role-based access, and full compliance." },
  { icon: Rocket, title: "Next-Gen Fleet Operations", desc: "AI-powered insights and predictive analytics for smarter decisions." },
];

const WhyDriveOps = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 radial-glow opacity-30" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Why DriveOps</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Built for the <span className="gradient-text">Next Generation</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-7 hover:glow-border transition-all duration-500 group"
            >
              <r.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDriveOps;
