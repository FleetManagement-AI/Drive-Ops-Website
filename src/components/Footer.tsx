import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

const productLinks = [
  { label: "Fleet Management", href: "/features/fleet-management" },
  { label: "Taxi Dispatch", href: "/features/taxi-dispatch" },
  { label: "Driver Management", href: "/features/driver-management" },
  { label: "GPS Vehicle Tracking", href: "/features/gps-vehicle-tracking" },
  { label: "Fleet Analytics", href: "/features/fleet-analytics" },
  { label: "Fleet Compliance", href: "/features/fleet-compliance" },
  { label: "Fleet Maintenance", href: "/features/fleet-maintenance" },
  { label: "WhatsApp Review Mgmt", href: "/features/whatsapp-review-management" },
  { label: "Customer Review Automation", href: "/features/customer-review-collection" },
]

const companyLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Sales", href: "/contact" },
]

const Footer = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DriveOps",
    "image": "https://driveops.com/logo/driveops-logo-blue-edited.png",
    "@id": "https://driveops.com/#organization",
    "url": "https://driveops.com",
    "telephone": "+919846199883",
    "email": "support@driveops.com",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

        {/* Brand Column */}
        <div className="sm:col-span-2 lg:col-span-1">
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
          <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
            The complete fleet operations platform for taxi operators, fleet owners, and travel companies across India.
          </p>

          {/* Social / App badges placeholder area — ready for real links */}
          <div className="flex items-center gap-3">
            <a
              href="https://driveops.chatserve.in/signup"
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 border border-blue-800 hover:border-blue-600 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
            >
              <ExternalLink size={13} />
              Fleet Portal
            </a>
          </div>
        </div>

        {/* Company Links */}
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

        {/* Product Links */}
        <div>
          <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">Product</h4>
          <ul className="space-y-3">
            {productLinks.map((item) => (
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

        {/* Contact Information */}
        <div>
          <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">Contact Us</h4>
          <ul className="space-y-4">
            <li>
              <a
                href="tel:+919846199883"
                className="flex items-start gap-3 group"
                aria-label="Call primary number +91 98461 99883"
              >
                <span className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-200">
                  <Phone size={14} />
                </span>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">Sales</span>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium">+91 98461 99883</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="tel:+919847851049"
                className="flex items-start gap-3 group"
                aria-label="Call support number +91 98478 51049"
              >
                <span className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-200">
                  <Phone size={14} />
                </span>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">Support</span>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium">+91 98478 51049</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:support@driveops.com"
                className="flex items-start gap-3 group"
                aria-label="Email support at support@driveops.com"
              >
                <span className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-200">
                  <Mail size={14} />
                </span>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">Support</span>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium break-all">support@driveops.com</span>
                </div>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 shrink-0">
                  <Clock size={14} />
                </span>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">Business Hours</span>
                  <span className="text-sm text-slate-400">Mon – Sat, 9 AM – 7 PM IST</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} DriveOps Operations Platform. All rights reserved. Made in India 🇮🇳</p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          <a
            href="https://driveops.chatserve.in/signup"
            className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
          >
            Fleet Portal →
          </a>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
