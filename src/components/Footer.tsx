import React from "react"
import { ExternalLink, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import { siteConfig } from "@/config/site"

const productLinks = [
  { label: "Trip Operations", href: "/#trips" },
  { label: "Dispatch Queue", href: "/#dispatch" },
  { label: "Driver Mobile App", href: "/#driver-app" },
  { label: "Command Center", href: "/#command-center" },
  { label: "Compliance & OCR", href: "/#compliance" },
  { label: "Repeat Packages", href: "/#workflow" },
]

const solutionLinks = [
  { label: "Taxi & Travel Operators", href: "/#who-its-for" },
  { label: "Airport Transfers", href: "/#who-its-for" },
  { label: "Corporate Transport", href: "/#who-its-for" },
  { label: "Multi-depot Fleets", href: "/#who-its-for" },
  { label: "Fleet Software India", href: "/fleet-management-software-india" },
]

const companyLinks = [
  { label: "How It Works", href: "/#workflow" },
  { label: "Product Walkthrough", href: "/#product-tour" },
  { label: "Pricing Plans", href: "/pricing" },
  { label: "Frequently Asked Questions", href: "/#faq" },
  { label: "Book a Demo", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 max-w-7xl">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2.5 text-white font-heading font-bold text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
            >
              <img
                src="/logo/driveops-logo-white-edited.png"
                alt="DriveOps Logo"
                className="h-8 w-auto"
                width="80"
                height="32"
              />
              <span className="text-white font-extrabold text-xl">
                Drive<span className="text-blue-500">Ops</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Trip-first transport operations for growing fleets. Plan trips, dispatch vehicles and drivers, execute work on mobile, and stay compliant.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://driveops.chatserve.in/signup"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 border border-blue-900 bg-blue-950/40 hover:border-blue-700 px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
              >
                <ExternalLink size={12} />
                <span>Operator Portal</span>
              </a>
              <Link
                to="/fleet-management-software-india"
                className="text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 bg-slate-900 hover:border-slate-700 px-3.5 py-1.5 rounded-lg transition-all"
              >
                Passenger Fleets India 🇮🇳
              </Link>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-widest mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-widest mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {solutionLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-850 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DriveOps Platform. All rights reserved. Built for passenger transport operators.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Support</Link>
            <Link to="/pricing" className="hover:text-slate-300 transition-colors">Pricing</Link>
            <a
              href="https://driveops.chatserve.in/signup"
              className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
            >
              Start Free →
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
