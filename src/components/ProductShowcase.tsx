import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LayoutDashboard, Car, Navigation, UserCircle, FileCheck } from "lucide-react";

import dashboardImg from "@/assets/dashboard.jpg";
import vehicleImg from "@/assets/vehicle-management.jpg";
import tripImg from "@/assets/trip-dispatch.jpg";
import driverImg from "@/assets/driver-management.jpg";
import documentImg from "@/assets/document-vault.jpg";

const modules = [
  {
    icon: LayoutDashboard,
    title: "Intelligent Command Center",
    desc: "Real-time insights into fleet operations, revenue, and trip activity. Monitor every KPI from a unified dashboard built for decision-makers.",
    img: dashboardImg,
  },
  {
    icon: Car,
    title: "Vehicle Lifecycle Management",
    desc: "Track vehicle status, performance, and maintenance schedules. From acquisition to retirement — manage every stage of the lifecycle.",
    img: vehicleImg,
  },
  {
    icon: Navigation,
    title: "Smart Dispatch & Trip Tracking",
    desc: "Assign trips, monitor routes in real-time, and automate fare calculations. Optimize operations with intelligent dispatch logic.",
    img: tripImg,
  },
  {
    icon: UserCircle,
    title: "Driver Management & Profiles",
    desc: "Manage driver profiles, availability, and performance metrics. Track certifications and assignment history in one place.",
    img: driverImg,
  },
  {
    icon: FileCheck,
    title: "Secure Document Vault",
    desc: "Store and access compliance documents securely. Encrypted storage for licenses, insurance, permits, and more.",
    img: documentImg,
  },
];

const ModuleCard = ({ mod, index }: { mod: typeof modules[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
    >
      {/* Image */}
      <div className="w-full lg:w-3/5 relative group">
        <div className="absolute -inset-1 rounded-2xl gradient-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700" />
        <div className="relative glass rounded-2xl overflow-hidden glow-border">
          <img
            src={mod.img}
            alt={`${mod.title} - DriveOps module screenshot`}
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      </div>

      {/* Text */}
      <div className="w-full lg:w-2/5 space-y-4">
        <div className="w-11 h-11 rounded-xl gradient-accent flex items-center justify-center">
          <mod.icon className="w-5 h-5 text-primary-foreground" />
        </div>
        <h3 className="font-heading text-2xl md:text-3xl font-bold">{mod.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{mod.desc}</p>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platform" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 radial-glow opacity-30" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Platform</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Explore the DriveOps{" "}
            <span className="gradient-text">Platform</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed to streamline fleet operations and maximize efficiency.
          </p>
        </motion.div>

        <div className="space-y-20 lg:space-y-28 max-w-6xl mx-auto">
          {modules.map((mod, i) => (
            <ModuleCard key={mod.title} mod={mod} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
