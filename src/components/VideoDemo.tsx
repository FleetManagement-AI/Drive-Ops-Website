import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ArrowRight, Calendar } from "lucide-react";

const VideoDemo = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 radial-glow opacity-40" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Demo</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            See DriveOps{" "}
            <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how DriveOps transforms fleet operations with intelligent automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative glass rounded-2xl overflow-hidden glow-cyan group">
            {/* Video embed area */}
            <div className="aspect-video relative">
              {!playing ? (
                <div className="absolute inset-0 flex items-center justify-center bg-card">
                  {/* Thumbnail overlay */}
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute inset-0 radial-glow" />

                  {/* Play button */}
                  <button
                    onClick={() => setPlaying(true)}
                    className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full gradient-accent flex items-center justify-center glow-cyan group/btn hover:scale-110 transition-transform duration-300"
                    aria-label="Play demo video"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                  </button>

                  {/* Decorative text */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-medium">DriveOps Platform Demo</span>
                    <span className="text-xs text-muted-foreground">2:30</span>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                  title="DriveOps Product Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* CTAs below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="#cta"
            className="gradient-accent text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Request a Live Demo <ArrowRight size={16} />
          </a>
          <a
            href="#cta"
            className="glass text-foreground font-semibold px-8 py-3 rounded-lg hover:bg-muted/30 transition-colors flex items-center gap-2"
          >
            <Calendar size={16} /> Start Your Free Trial
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemo;
