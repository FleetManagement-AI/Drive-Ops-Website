import React from "react"
import { ExternalLink, Mail, MessageSquare } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"
import { siteConfig } from "@/config/site"

const productLinks = [
  { label: "Platform overview", href: "/product" },
  { label: "Trips & Dispatch", href: "/product/trips-dispatch" },
  { label: "Driver App", href: "/product/driver-app" },
  { label: "Live Fleet", href: "/product/live-fleet" },
  { label: "Compliance", href: "/product/compliance" },
  { label: "Fleet Care", href: "/product/maintenance" },
  { label: "Self-Drive Rentals", href: "/product/rentals" },
]

const solutionLinks = [
  { label: "Taxi & Cab Fleets", href: "/solutions/taxi-cab-fleets" },
  { label: "Travel & Tour Operators", href: "/solutions/travel-tour-operators" },
  { label: "Corporate Transport", href: "/solutions/corporate-transport" },
  { label: "Self-Drive Rentals", href: "/solutions/self-drive-rentals" },
  { label: "Fleet Software India", href: "/fleet-management-software-india" },
]

const companyLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing Plans", href: "/pricing" },
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

function toWhatsAppUrl(telephone: string) {
  const digits = telephone.replace(/\D/g, "")
  return `https://wa.me/${digits}`
}

const iconButtonClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-colors hover:border-slate-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"

export default function Footer() {
  const { contact, social } = siteConfig
  const salesWhatsApp = toWhatsAppUrl(contact.telephone)
  const supportWhatsApp = toWhatsAppUrl(contact.supportTelephone)

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
              Manage and operate your fleet from one platform—trips, dispatch, Driver App, live tracking, WhatsApp, fleet care, and self-drive rentals.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DriveOps on Instagram"
                className={iconButtonClass}
              >
                <FaInstagram size={16} aria-hidden="true" />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DriveOps on Facebook"
                className={iconButtonClass}
              >
                <FaFacebook size={16} aria-hidden="true" />
              </a>
              {/* <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DriveOps on LinkedIn"
                className={iconButtonClass}
              >
                <FaLinkedin size={16} aria-hidden="true" />
              </a> */}
              {/* <Link
                to="/contact"
                aria-label="Contact DriveOps"
                className={iconButtonClass}
              >
                <MessageSquare size={16} aria-hidden="true" />
              </Link> */}
              <a
                href={salesWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp sales ${contact.telephone}`}
                className={`${iconButtonClass} hover:border-emerald-700 hover:text-emerald-400`}
              >
                <FaWhatsapp size={16} aria-hidden="true" />
              </a>
              <a
                href={supportWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp support ${contact.supportTelephone}`}
                className={`${iconButtonClass} hover:border-emerald-700 hover:text-emerald-400`}
              >
                <FaWhatsapp size={16} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                aria-label={`Email ${contact.email}`}
                className={iconButtonClass}
              >
                <Mail size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="pt-1">
              <a
                href="https://driveops.chatserve.in/signup"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 border border-blue-900 bg-blue-950/40 hover:border-blue-700 px-3.5 py-1.5 rounded-lg transition-all inline-flex items-center gap-1.5"
              >
                <ExternalLink size={12} />
                <span>Operator Portal</span>
              </a>
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
        <div className="border-t border-slate-850 pt-8 flex flex-col sm:grid sm:grid-cols-3 items-center gap-4 text-xs text-slate-500">
          <p className="sm:justify-self-start text-center sm:text-left">
            © {new Date().getFullYear()} DriveOps. All rights reserved. Built for passenger transport operators.
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <img
              src="/ChatServeLogoIocnOnly-removebg-preview.png"
              alt="ChatServe"
              className="h-5 w-auto"
              width="20"
              height="20"
            />
            <span>WhatsApp powered by ChatServe Solutions</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5">
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
