import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center glass rounded-3xl p-10 md:p-16 glow-cyan relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-accent opacity-5" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Transform Your Fleet Operations{" "}
              <span className="gradient-text">Today</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join hundreds of fleet operators already using DriveOps to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://driveops.chatserve.in/signup"
                className="gradient-accent text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Start Free Trial <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="glass text-foreground font-semibold px-8 py-3 rounded-lg hover:bg-muted/30 transition-colors flex items-center gap-2"
              >
                <Calendar size={16} /> Book a Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
