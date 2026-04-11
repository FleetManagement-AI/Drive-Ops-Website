import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Satellite, Wrench, Fuel, Smartphone, BarChart3 } from "lucide-react";

const items = [
  { icon: Satellite, title: "Live GPS & Telematics Integration", status: "In Progress" },
  { icon: Wrench, title: "Predictive Maintenance AI", status: "Upcoming" },
  { icon: Fuel, title: "Smart Fuel & Expense Management", status: "Upcoming" },
  { icon: Smartphone, title: "Mobile Driver Application", status: "Planned" },
  { icon: BarChart3, title: "Advanced BI Analytics", status: "Planned" },
];

const RoadmapSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="roadmap" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Roadmap</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            What's <span className="gradient-text">Coming Next</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex items-start gap-5 relative"
              >
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 shrink-0 glass rounded-xl flex items-center justify-center glow-border">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="pt-1 md:pt-3">
                  <h3 className="font-heading text-base md:text-lg font-semibold">{item.title}</h3>
                  <span
                    className={`inline-block mt-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      item.status === "In Progress"
                        ? "gradient-accent text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
