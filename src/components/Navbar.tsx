import { useState, useEffect, useCallback } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"

const productLinks = [
  { label: "Trips & Dispatch", href: "/#plan-dispatch" },
  { label: "Driver App", href: "/#driver-app" },
  { label: "Live Fleet", href: "/#track-connect" },
  { label: "WhatsApp Ops", href: "/#communication" },
  { label: "Fleet Care", href: "/#fleet-care" },
  { label: "Rentals", href: "/#rentals" },
]

const solutionLinks = [
  { label: "Passenger Transport", href: "/solutions/passenger-transport" },
  { label: "Self-Drive Rentals", href: "/solutions/self-drive-rental" },
  { label: "Goods Transport", href: "/solutions/goods-transport" },
  { label: "Fleet Management", href: "/solutions/fleet-management" },
]

const SCROLL_THRESHOLD = 48

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productDropdown, setProductDropdown] = useState(false)
  const [solutionDropdown, setSolutionDropdown] = useState(false)
  const location = useLocation()

  const isHomepage = location.pathname === "/"
  const isFloating = scrolled || !isHomepage
  // Light hero — always use dark nav text (never white/cyan over #F8FAFC)
  const isDarkNav = false

  const scrollToSection = useCallback((targetId: string) => {
    const el = document.getElementById(targetId)
    if (el) {
      const navOffset = 96
      const elementPosition = el.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      })
    }
  }, [])

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
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", onResize, { passive: true })
    return () => window.removeEventListener("resize", onResize)
  }, [])

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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isFloating ? "px-3 sm:px-4 pt-3" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          isFloating
            ? "rounded-2xl border border-slate-200/70 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md"
            : "rounded-none border-0 bg-transparent shadow-none backdrop-blur-none"
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 sm:px-6 md:px-8 transition-all duration-300 ${
            isFloating ? "py-2.5 sm:py-3" : "py-3.5 sm:py-4"
          }`}
        >
          {/* Logo + name — larger; slightly compact when floating/scrolled */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            }}
            className="flex items-center gap-3 font-heading font-bold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label="DriveOps – Go to top"
          >
            <img
              src="/logo/driveops-logo-blue-edited.png"
              alt="DriveOps Logo"
              className={`w-auto transition-all duration-300 ${
                isFloating ? "h-9 sm:h-10" : "h-10 sm:h-12"
              }`}
              width="96"
              height="48"
            />
            <div className="flex flex-col">
              <span
                className={`leading-none font-extrabold whitespace-nowrap transition-all duration-300 ${
                  isFloating ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
                } ${isDarkNav ? "text-white" : "text-slate-900"}`}
              >
                Drive
                <span className={isDarkNav ? "text-cyan-400" : "text-blue-600"}>Ops</span>
              </span>
              <p
                className={`font-semibold tracking-tight leading-tight whitespace-nowrap transition-all duration-300 ${
                  isFloating ? "text-[10px] sm:text-[11px]" : "text-[11px] sm:text-xs"
                } ${isDarkNav ? "text-slate-300" : "text-slate-500"}`}
              >
                Manage & Operate
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <div
              className="relative"
              onMouseEnter={() => setProductDropdown(true)}
              onMouseLeave={() => setProductDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                  isDarkNav
                    ? "text-slate-200 hover:text-white hover:bg-white/10"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
                onClick={() => scrollToSection("product-snapshot")}
              >
                <span>Product</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${productDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
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
                    className={`absolute left-0 top-full mt-1 w-56 rounded-xl shadow-xl p-2 z-50 ${
                      isDarkNav
                        ? "bg-[#0A1628]/95 backdrop-blur-md border border-slate-700/80"
                        : "bg-white border border-slate-200/80"
                    }`}
                  >
                    {productLinks.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href)
                          setProductDropdown(false)
                        }}
                        className={`block px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                          isDarkNav
                            ? "text-slate-200 hover:text-cyan-400 hover:bg-white/5"
                            : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setSolutionDropdown(true)}
              onMouseLeave={() => setSolutionDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                  isDarkNav
                    ? "text-slate-200 hover:text-white hover:bg-white/10"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
                onClick={() => scrollToSection("built-for-fleet")}
              >
                <span>Solutions</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${solutionDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
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
                    className={`absolute left-0 top-full mt-1 w-56 rounded-xl shadow-xl p-2 z-50 ${
                      isDarkNav
                        ? "bg-[#0A1628]/95 backdrop-blur-md border border-slate-700/80"
                        : "bg-white border border-slate-200/80"
                    }`}
                  >
                    {solutionLinks.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href)
                          setSolutionDropdown(false)
                        }}
                        className={`block px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                          isDarkNav
                            ? "text-slate-200 hover:text-cyan-400 hover:bg-white/5"
                            : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/#connected-workflow"
              onClick={(e) => handleNavClick(e, "/#connected-workflow")}
              className={`px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                isDarkNav
                  ? "text-slate-200 hover:text-white hover:bg-white/10"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              How It Works
            </Link>

            <Link
              to="/pricing"
              className={`px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                isDarkNav
                  ? "text-slate-200 hover:text-white hover:bg-white/10"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/#faq"
              onClick={(e) => handleNavClick(e, "/#faq")}
              className={`px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                isDarkNav
                  ? "text-slate-200 hover:text-white hover:bg-white/10"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              FAQ
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <a
              href="https://driveops.chatserve.in/login"
              className={`text-xs sm:text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                isDarkNav
                  ? "text-slate-200 hover:text-white hover:bg-white/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              LogIn
            </a>
            <Link
              to="/contact"
              className={`text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl transition-all flex items-center ${
                isDarkNav
                  ? "border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:shadow-2xs"
              }`}
            >
              Book Demo
            </Link>
            <a
              href="https://driveops.chatserve.in/signup/account"
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-xl hover:opacity-95 shadow-sm shadow-blue-500/25 transition-all flex items-center gap-1.5 min-h-[38px]"
            >
              <span>Start Free</span>
              <ArrowRight size={13} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden min-w-[40px] min-h-[40px] flex items-center justify-center -mr-1 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              isDarkNav
                ? "text-white hover:bg-white/10"
                : "text-slate-700 hover:bg-slate-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu — inside floating shell so it stays attached to the bar */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className={`lg:hidden overflow-hidden border-t border-slate-200/80 bg-white text-slate-900 ${
                isFloating ? "rounded-b-2xl" : ""
              }`}
            >
              <div className="flex flex-col p-5">
                <div
                  className={`text-[10px] font-bold uppercase tracking-wider mb-2 px-2 ${
                    isDarkNav ? "text-slate-400" : "text-slate-400"
                  }`}
                >
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
                      className={`text-xs font-semibold transition-colors py-2 px-2.5 rounded-lg ${
                        isDarkNav
                          ? "text-slate-200 hover:text-cyan-400 hover:bg-white/5"
                          : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>

                <div
                  className={`text-[10px] font-bold uppercase tracking-wider mb-2 px-2 ${
                    isDarkNav ? "text-slate-400" : "text-slate-400"
                  }`}
                >
                  Platform
                </div>
                <div className="grid grid-cols-2 gap-1 mb-5">
                  {[
                    { label: "How It Works", href: "/#connected-workflow" },
                    { label: "Who It's For", href: "/#built-for-fleet" },
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
                      className={`text-xs font-semibold transition-colors py-2 px-2.5 rounded-lg ${
                        isDarkNav
                          ? "text-slate-200 hover:text-cyan-400 hover:bg-white/5"
                          : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>

                <div
                  className={`flex flex-col gap-2.5 pt-4 border-t ${
                    isDarkNav ? "border-white/10" : "border-slate-100"
                  }`}
                >
                  <a
                    href="https://driveops.chatserve.in/login"
                    className={`text-center py-2.5 font-semibold text-xs border rounded-xl transition-colors ${
                      isDarkNav
                        ? "border-white/20 text-slate-200 hover:bg-white/10"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign in
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className={`text-center font-semibold text-xs py-2.5 rounded-xl border transition-colors ${
                      isDarkNav
                        ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    Book Demo
                  </Link>
                  <a
                    href="https://driveops.chatserve.in/signup"
                    onClick={() => setMobileOpen(false)}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-center text-xs py-3 rounded-xl shadow-xs shadow-blue-500/25"
                  >
                    Start Free
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
