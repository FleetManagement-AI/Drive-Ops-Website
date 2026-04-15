import { Github, Twitter, Linkedin } from "lucide-react";

const links = {
  Product: ["Features", "Roadmap", "Pricing"],
  Company: ["About", "Contact", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <span className="font-heading text-xl font-bold">
            Drive<span className="gradient-text">Ops</span>
          </span>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs">
            Smarter fleet management for the future of mobility.
          </p>
          <div className="flex gap-3 mt-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-heading text-sm font-semibold mb-4">{title}</h4>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">© 2025 DriveOps. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
