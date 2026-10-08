import { useState, useEffect, useLayoutEffect, useCallback } from "react"
import {
  Menu,
  X,
  ArrowRight,
  Car,
  UserRound,
  Route,
  MapPin,
  Wrench,
  ShieldCheck,
  Fuel,
  Users,
  BarChart3,
  RefreshCw,
  ClipboardList,
  Bell,
  AlertTriangle,
  Smartphone,
  KeyRound,
  CalendarCheck,
  Calendar,
  Hand,
  ClipboardCheck,
  Wallet,
  Compass,
  Building2,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"

type NavLinkItem = {
  label: string
  href: string
  icon: LucideIcon
  iconColor: string
}

const productColumns: { title: string; links: NavLinkItem[] }[] = [
  {
    title: "Fleet Management",
    links: [
      { label: "Vehicles", href: "/product/vehicles", icon: Car, iconColor: "text-emerald-600" },
      { label: "Drivers", href: "/product/drivers", icon: UserRound, iconColor: "text-violet-600" },
      { label: "Attendance & Duty", href: "/product/attendance-duty", icon: CalendarCheck, iconColor: "text-sky-600" },
      { label: "Trips & Dispatch", href: "/product/trips-dispatch", icon: Route, iconColor: "text-blue-600" },
      { label: "Live Fleet", href: "/product/live-fleet", icon: MapPin, iconColor: "text-cyan-600" },
      { label: "Maintenance", href: "/product/maintenance", icon: Wrench, iconColor: "text-amber-600" },
      { label: "Compliance", href: "/product/compliance", icon: ShieldCheck, iconColor: "text-indigo-600" },
      { label: "Fuel Management", href: "/product/fuel", icon: Fuel, iconColor: "text-orange-600" },
      { label: "Customers", href: "/product/customers", icon: Users, iconColor: "text-pink-600" },
      { label: "Operational Visibility", href: "/product/analytics", icon: BarChart3, iconColor: "text-teal-600" },
    ],
  },
  {
    title: "Operations",
    links: [
      { label: "Recurring Trips", href: "/product/recurring-trips", icon: RefreshCw, iconColor: "text-sky-600" },
      { label: "Package Templates", href: "/product/packages", icon: LayoutGrid, iconColor: "text-indigo-600" },
      { label: "Trip Sheets", href: "/product/trip-sheets", icon: ClipboardList, iconColor: "text-lime-600" },
      { label: "Notifications", href: "/product/notifications", icon: Bell, iconColor: "text-purple-600" },
      { label: "Alerts", href: "/product/alerts", icon: AlertTriangle, iconColor: "text-rose-600" },
      { label: "Driver App", href: "/product/driver-app", icon: Smartphone, iconColor: "text-cyan-700" },
    ],
  },
  {
    title: "Rentals",
    links: [
      { label: "Overview", href: "/product/rentals", icon: KeyRound, iconColor: "text-rose-500" },
      { label: "Availability", href: "/product/rentals#availability", icon: CalendarCheck, iconColor: "text-emerald-500" },
      { label: "Reservations", href: "/product/rentals#reservations", icon: Calendar, iconColor: "text-blue-500" },
      { label: "Handover", href: "/product/rentals#handover", icon: Hand, iconColor: "text-amber-500" },
      { label: "Return & Inspection", href: "/product/rentals#return", icon: ClipboardCheck, iconColor: "text-teal-500" },
      { label: "Payment Recording", href: "/product/rentals#payments", icon: Wallet, iconColor: "text-violet-500" },
    ],
  },
]

const solutionLinks: NavLinkItem[] = [
  { label: "Taxi & Cab Fleets", href: "/solutions/taxi-cab-fleets", icon: Car, iconColor: "text-blue-600" },
  { label: "Travel & Tour Operators", href: "/solutions/travel-tour-operators", icon: Compass, iconColor: "text-emerald-600" },
  { label: "Corporate Transport", href: "/solutions/corporate-transport", icon: Building2, iconColor: "text-violet-600" },
  { label: "Self-Drive Rentals", href: "/solutions/self-drive-rentals", icon: KeyRound, iconColor: "text-rose-600" },
]

const flatProductLinks = productColumns.flatMap((col) => col.links)

const SCROLL_THRESHOLD = 48

const Navbar = () => {
  const location = useLocation()
  const isHomepage = location.pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  const [overDarkSection, setOverDarkSection] = useState(isHomepage)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productDropdown, setProductDropdown] = useState(false)
  const [solutionDropdown, setSolutionDropdown] = useState(false)

  const isFloating = scrolled || !isHomepage
  const isDarkNav = isHomepage && overDarkSection && !mobileOpen

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

  useLayoutEffect(() => {
    if (!isHomepage) return

    const darkSections = document.querySelectorAll<HTMLElement>(
      ".landing-hero, .landing-workflow, #cta",
    )
    let frame = 0
    const updateTheme = () => {
      frame = 0
      const headerMidpoint = window.innerWidth < 700 ? 42 : 62
      const overDark = Array.from(darkSections).some((section) => {
        const { top, bottom } = section.getBoundingClientRect()
        return top <= headerMidpoint && bottom > headerMidpoint
      })
      setOverDarkSection(overDark)
    }
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateTheme)
    }

    updateTheme()
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate, { passive: true })
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
    }
  }, [isHomepage])

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

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkNav ? "landing-nav-dark" : "landing-nav-light"} ${
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

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <div
              className="relative"
              onMouseEnter={() => setProductDropdown(true)}
              onMouseLeave={() => setProductDropdown(false)}
            >
              <Link
                to="/product"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                  isDarkNav
                    ? "text-slate-200 hover:text-white hover:bg-white/10"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
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
              </Link>
              <AnimatePresence>
                {productDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full z-50 mt-1 w-[min(720px,calc(100vw-2rem))] rounded-xl border border-slate-200/80 bg-white p-4 shadow-xl sm:p-5"
                  >
                    <div className="grid grid-cols-3 gap-4 sm:gap-5">
                      {productColumns.map((col) => (
                        <div key={col.title}>
                          <p className="mb-2.5 px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
                            {col.title}
                          </p>
                          <div className="space-y-0.5">
                            {col.links.map((item) => {
                              const Icon = item.icon
                              return (
                                <Link
                                  key={item.href}
                                  to={item.href}
                                  onClick={() => setProductDropdown(false)}
                                  className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50/50 hover:text-blue-600"
                                >
                                  <Icon className={`h-4 w-4 shrink-0 ${item.iconColor}`} aria-hidden="true" />
                                  <span className="leading-snug">{item.label}</span>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-slate-100 pt-3">
                      <Link
                        to="/product"
                        onClick={() => setProductDropdown(false)}
                        className="inline-flex items-center gap-1.5 px-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                      >
                        Explore the platform
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setSolutionDropdown(true)}
              onMouseLeave={() => setSolutionDropdown(false)}
            >
              <Link
                to="/#solutions"
                onClick={(e) => handleNavClick(e, "/#solutions")}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                  isDarkNav
                    ? "text-slate-200 hover:text-white hover:bg-white/10"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
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
              </Link>
              <AnimatePresence>
                {solutionDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full z-50 mt-1 w-72 rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xl"
                  >
                    {solutionLinks.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setSolutionDropdown(false)}
                          className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50/50 hover:text-blue-600"
                        >
                          <Icon className={`h-4 w-4 shrink-0 ${item.iconColor}`} aria-hidden="true" />
                          <span className="leading-snug">{item.label}</span>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/#how-it-works"
              onClick={(e) => handleNavClick(e, "/#how-it-works")}
              className={`rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${
                isDarkNav ? "text-slate-200 hover:bg-white/10 hover:text-white" : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              }`}
            >
              How It Works
            </Link>

            <Link
              to="/pricing"
              className={`rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${
                isDarkNav ? "text-slate-200 hover:bg-white/10 hover:text-white" : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/faq"
              className={`rounded-lg px-3 py-2 text-[15px] font-medium transition-colors ${
                isDarkNav ? "text-slate-200 hover:bg-white/10 hover:text-white" : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              }`}
            >
              FAQ
            </Link>
          </div>

          <div className="hidden items-center gap-2 sm:flex sm:gap-3">
            <a
              href="https://driveops.chatserve.in/login"
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors sm:text-sm ${
                isDarkNav ? "text-slate-200 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Sign in
            </a>
            <Link
              to="/contact"
              className={`flex items-center rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all sm:text-sm ${
                isDarkNav
                  ? "border-white/25 bg-white/10 text-white hover:border-sky-300/60 hover:bg-white/15"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              Book Demo
            </Link>
            <a
              href="https://driveops.chatserve.in/signup/account"
              className="flex min-h-[38px] items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-blue-500/25 transition-all hover:bg-blue-500 sm:px-5 sm:text-sm"
            >
              <span>Start Free</span>
              <ArrowRight size={13} aria-hidden="true" />
            </a>
          </div>

          <button
            className={`-mr-1 flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden ${
              isDarkNav ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className={`overflow-hidden border-t border-slate-200/80 bg-white text-slate-900 lg:hidden ${
                isFloating ? "rounded-b-2xl" : ""
              }`}
            >
              <div className="flex max-h-[min(70vh,calc(100dvh-5.5rem))] flex-col overflow-y-auto p-4 sm:p-5">
                <div className="mb-2.5 px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
                  Product
                </div>
                <div className="mb-5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  <Link
                    to="/product"
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-[44px] items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  >
                    <LayoutGrid className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                    <span className="leading-snug">Platform overview</span>
                  </Link>
                  {flatProductLinks.slice(0, 9).map((l) => {
                    const Icon = l.icon
                    return (
                      <Link
                        key={l.href}
                        to={l.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex min-h-[44px] items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${l.iconColor}`} aria-hidden="true" />
                        <span className="leading-snug">{l.label}</span>
                      </Link>
                    )
                  })}
                </div>

                <div className="mb-2.5 px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
                  Solutions
                </div>
                <div className="mb-5 grid grid-cols-1 gap-1.5">
                  {solutionLinks.map((l) => {
                    const Icon = l.icon
                    return (
                      <Link
                        key={l.href}
                        to={l.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex min-h-[44px] items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${l.iconColor}`} aria-hidden="true" />
                        <span className="leading-snug">{l.label}</span>
                      </Link>
                    )
                  })}
                </div>

                <div className="mb-2.5 px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
                  Platform
                </div>
                <div className="mb-5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {[
                    { label: "How It Works", href: "/#how-it-works" },
                    { label: "Pricing", href: "/pricing" },
                    { label: "FAQ", href: "/faq" },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      to={l.href}
                      onClick={(e) => {
                        handleNavClick(e, l.href)
                        setMobileOpen(false)
                      }}
                      className="flex min-h-[44px] items-center rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-2.5 border-t border-slate-100 pt-4">
                  <a
                    href="https://driveops.chatserve.in/login"
                    className="rounded-xl border border-slate-200 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign in
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl border border-slate-200 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Book Demo
                  </Link>
                  <a
                    href="https://driveops.chatserve.in/signup"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl bg-blue-600 py-3.5 text-center text-sm font-semibold text-white shadow-xs shadow-blue-500/25"
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
