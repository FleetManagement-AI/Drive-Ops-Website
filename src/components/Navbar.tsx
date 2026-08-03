import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Preview", href: "/#platform" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener("resize", onResize, { passive: true })
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3"
        : "bg-transparent py-4 sm:py-5"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-2.5 font-heading text-lg sm:text-xl font-bold tracking-tight text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          aria-label="DriveOps – Go to top"
        >
          <img
            src="/logo/driveops-logo-blue-edited.png"
            alt="DriveOps Logo"
            className="h-7 sm:h-8 w-auto"
            width="80"
            height="32"
          />
          <span>
            Drive<span className="gradient-text">Ops</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          <a
            href="https://driveops.chatserve.in/login"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2"
          >
            Sign In
          </a>
          <Link
            to="/contact"
            className="border border-slate-200 bg-white text-slate-700 text-sm font-semibold px-4 py-2 rounded-xl hover:border-blue-300 hover:text-blue-600 hover:shadow-sm transition-all hidden lg:flex items-center"
          >
            Book Demo
          </Link>
          <a
            href="https://driveops.chatserve.in/signup"
            className="gradient-accent text-white text-sm font-semibold px-4 sm:px-5 py-2 rounded-xl hover:opacity-95 shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5 min-h-[38px]"
          >
            <span>Start Free</span>
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-700 p-2 -mr-1 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-5">
              <div className="grid grid-cols-2 gap-1 mb-5">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-2.5 px-2 rounded-lg hover:bg-slate-50"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100">
                <a
                  href="https://driveops.chatserve.in/signup"
                  className="text-center py-3 text-slate-700 font-medium text-sm border border-slate-200 rounded-xl hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign In
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="border border-slate-200 text-slate-700 text-center font-semibold text-sm py-3 rounded-xl hover:bg-slate-50"
                >
                  Book Demo
                </Link>
                <a
                  href="https://driveops.chatserve.in/signup"
                  onClick={() => setMobileOpen(false)}
                  className="gradient-accent text-white font-semibold text-center text-sm py-3.5 rounded-xl shadow-md shadow-blue-500/20"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
