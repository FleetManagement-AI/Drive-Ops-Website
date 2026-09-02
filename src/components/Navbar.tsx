import { useState, useEffect, useCallback } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"

const productLinks = [
  { label: "Trip Operations", href: "/#trips" },
  { label: "Dispatch", href: "/#dispatch" },
  { label: "Driver App", href: "/#driver-app" },
  { label: "Command Center", href: "/#command-center" },
  { label: "Compliance & OCR", href: "/#compliance" },
]

const solutionLinks = [
  { label: "Taxi & Travel", href: "/#who-its-for" },
  { label: "Airport Transfers", href: "/#who-its-for" },
  { label: "Corporate Transport", href: "/#who-its-for" },
  { label: "Multi-location Fleets", href: "/#who-its-for" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productDropdown, setProductDropdown] = useState(false)
  const [solutionDropdown, setSolutionDropdown] = useState(false)
  const location = useLocation()

  const scrollToSection = useCallback((targetId: string) => {
    const el = document.getElementById(targetId)
    if (el) {
      const navOffset = 80
      const elementPosition = el.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth"
      })
    }
  }, [])

  // Handle hash scrolling when arriving on homepage with a hash or when hash changes
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const targetId = location.hash.replace("#", "")
      const timer = setTimeout(() => {
        scrollToSection(targetId)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [location.pathname, location.hash, scrollToSection])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      const targetId = href.replace(/^\/?#/, "")
      if (location.pathname === "/") {
        e.preventDefault()
        scrollToSection(targetId)
        window.history.pushState(null, "", href.startsWith("/") ? href : `/${href}`)
      }
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", onResize, { passive: true })
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3"
        : "bg-transparent py-4 sm:py-5"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          }}
          className="flex items-center gap-2.5 font-heading text-lg sm:text-xl font-bold tracking-tight text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          aria-label="DriveOps – Go to top"
        >
          <img
            src="/logo/driveops-logo-blue-edited.png"
            alt="DriveOps Logo"
            className="h-7 sm:h-8 w-auto"
            width="80"
            height="32"
          />
          <div className="flex flex-col">
            <span className="leading-none text-base sm:text-lg font-extrabold text-slate-900">
              Drive<span className="text-blue-600">Ops</span>
            </span>
            <p className="text-[10px] font-semibold text-slate-500 tracking-tight leading-tight">Manage & Operate</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Product Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductDropdown(true)}
            onMouseLeave={() => setProductDropdown(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => scrollToSection("product-tour")}
            >
              <span>Product</span>
              <svg className={`w-3.5 h-3.5 transition-transform ${productDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {productDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 z-50"
                >
                  {productLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href)
                        setProductDropdown(false)
                      }}
                      className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionDropdown(true)}
            onMouseLeave={() => setSolutionDropdown(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              onClick={() => scrollToSection("who-its-for")}
            >
              <span>Solutions</span>
              <svg className={`w-3.5 h-3.5 transition-transform ${solutionDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {solutionDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 z-50"
                >
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item.href)
                        setSolutionDropdown(false)
                      }}
                      className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* How It Works Link */}
          <Link
            to="/#workflow"
            onClick={(e) => handleNavClick(e, "/#workflow")}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            How It Works
          </Link>

          {/* Pricing Link */}
          <Link
            to="/pricing"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Pricing
          </Link>

          {/* FAQ Link */}
          <Link
            to="/#faq"
            onClick={(e) => handleNavClick(e, "/#faq")}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            FAQ
          </Link>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          <a
            href="https://driveops.chatserve.in/login"
            className="text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2"
          >
            Sign in
          </a>
          <Link
            to="/contact"
            className="border border-slate-200 bg-white text-slate-700 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl hover:border-blue-300 hover:text-blue-600 hover:shadow-2xs transition-all flex items-center"
          >
            Book Demo
          </Link>
          <a
            href="https://driveops.chatserve.in/signup"
            className="gradient-accent text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-xl hover:opacity-95 shadow-sm shadow-blue-500/20 transition-all flex items-center gap-1.5 min-h-[38px]"
          >
            <span>Start Free</span>
            <ArrowRight size={13} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-slate-700 min-w-[40px] min-h-[40px] flex items-center justify-center -mr-1 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                Product & Operations
              </div>
              <div className="grid grid-cols-2 gap-1 mb-4">
                {productLinks.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={(e) => {
                      handleNavClick(e, l.href)
                      setMobileOpen(false)
                    }}
                    className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors py-2 px-2.5 rounded-lg hover:bg-slate-50"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                Platform
              </div>
              <div className="grid grid-cols-2 gap-1 mb-5">
                {[
                  { label: "How It Works", href: "/#workflow" },
                  { label: "Who It's For", href: "/#who-its-for" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "FAQ", href: "/#faq" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={(e) => {
                      handleNavClick(e, l.href)
                      setMobileOpen(false)
                    }}
                    className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors py-2 px-2.5 rounded-lg hover:bg-slate-50"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100">
                <a
                  href="https://driveops.chatserve.in/login"
                  className="text-center py-2.5 text-slate-700 font-semibold text-xs border border-slate-200 rounded-xl hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign in
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="border border-slate-200 text-slate-700 text-center font-semibold text-xs py-2.5 rounded-xl hover:bg-slate-50"
                >
                  Book Demo
                </Link>
                <a
                  href="https://driveops.chatserve.in/signup"
                  onClick={() => setMobileOpen(false)}
                  className="gradient-accent text-white font-semibold text-center text-xs py-3 rounded-xl shadow-xs shadow-blue-500/20"
                >
                  Start Free
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
