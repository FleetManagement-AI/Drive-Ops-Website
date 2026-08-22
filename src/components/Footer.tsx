import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import { siteConfig } from "@/config/site"

const solutionLinks = [
  { label: "Passenger Transport", href: "/solutions/passenger-transport" },
  { label: "Goods Transport", href: "/solutions/goods-transport" },
  { label: "Self-Drive Rental", href: "/solutions/self-drive-rental" },
  { label: "Fleet Management India", href: "/fleet-management-software-india" },
  { label: "Platform Overview", href: "/solutions/fleet-management" },
]

const featureLinks = [
  { label: "Live Fleet Tracking", href: "/features/fleet-tracking" },
  { label: "Vehicle Fleet Ledger", href: "/features/vehicle-management" },
  { label: "Driver Duty Rosters", href: "/features/driver-management" },
  { label: "Preventive Maintenance", href: "/features/vehicle-maintenance" },
  { label: "Fuel & Expense Tracking", href: "/features/fleet-expenses" },
  { label: "Profitability Analytics", href: "/features/fleet-profitability" },
  { label: "Smart Taxi Dispatch", href: "/features/taxi-dispatch" },
  { label: "WhatsApp Reviews", href: "/features/whatsapp-review-management" },
]

const companyLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing Plans", href: "/pricing" },
  { label: "Frequently Asked Questions", href: "/#faq" },
  { label: "Contact Sales & Support", href: "/contact" },
]

const Footer = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": `${siteConfig.siteUrl}/logo/driveops-logo-blue-edited.png`,
    "@id": `${siteConfig.siteUrl}/#organization`,
    "url": siteConfig.siteUrl,
    "telephone": siteConfig.contact.telephone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400" role="contentinfo">
      {/* Injecting Local Business Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Top separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 pt-16 pb-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 text-white font-heading font-bold text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded">
              <img
                src="/logo/driveops-logo-white-edited.png"
                alt="DriveOps Logo"
                className="h-8 w-auto"
                width="80"
                height="32"
              />
              <span>
                Drive<span className="gradient-text">Ops</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              DriveOps is India's complete fleet operations and business growth platform for taxi operators, logistics companies, and vehicle rental businesses.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://driveops.chatserve.in/signup"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 border border-blue-800 hover:border-blue-600 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
              >
                <ExternalLink size={13} />
                Fleet Portal
              </a>
              <Link
                to="/fleet-management-software-india"
                className="text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 px-3 py-1.5 rounded-lg transition-all"
              >
                Fleet Software India 🇮🇳
              </Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">Solutions</h4>
            <ul className="space-y-3">
              {solutionLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Column */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">Features</h4>
            <ul className="space-y-3">
              {featureLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support Column */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DriveOps Operations Platform. All rights reserved. Made in India 🇮🇳</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Support</Link>
            <Link to="/pricing" className="hover:text-slate-300 transition-colors">Pricing</Link>
            <a
              href="https://driveops.chatserve.in/signup"
              className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
            >
              Start Free Trial →
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
