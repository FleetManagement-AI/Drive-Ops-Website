import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const links = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  Company: [
    { label: "About DriveOps", href: "#" },
    { label: "Contact Us", href: "mailto:support@driveops.com" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
}

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-2">
          <a href="#" className="flex items-center gap-2 mb-4">
            <img
              src="/logo/driveops-logo-white-edited.png"
              alt="DriveOps Logo"
              className="h-7 w-auto"
            />
            <span className="font-heading text-xl font-bold">
              Drive<span className="gradient-text">Ops</span>
            </span>
          </a>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-5">
            DriveOps simplifies rental fleet management — track vehicles, manage drivers,
            and monitor earnings in real time. Built for car rental businesses, taxi operators,
            and travel agencies.
          </p>
          <div className="space-y-2 mb-5">
            <a
              href="mailto:support@driveops.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={14} className="text-primary shrink-0" />
              support@driveops.com
            </a>
          </div>
          <div className="flex gap-3">
            {[
              { Icon: Twitter, label: "Twitter", href: "#" },
              { Icon: Linkedin, label: "LinkedIn", href: "#" },
              { Icon: Github, label: "GitHub", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-heading text-sm font-semibold mb-4">{title}</h4>
            <ul className="space-y-2.5">
              {items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} DriveOps. All rights reserved. Made in India 🇮🇳
        </p>
        <p className="text-xs text-muted-foreground">
          Fleet management software for rental car businesses, taxi operators & travel agencies.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
