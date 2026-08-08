import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import { Phone, Mail, MapPin } from "lucide-react"

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
      <SEO
        title="Contact DriveOps | Sales & Support for Fleet Operations"
        description="Get in touch with DriveOps. Our fleet management experts are ready to help you streamline your taxi operations and business growth."
        keywords="contact DriveOps, DriveOps support, DriveOps sales, fleet management software contact"
        canonicalUrl="/contact"
      />

      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Contact Our Fleet Experts
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ready to upgrade your taxi dispatch and fleet management operations? We're here to help you get started.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200/60 p-8 rounded-2xl shadow-sm text-center hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Sales</h2>
              <p className="text-slate-600 mb-4">Talk to an expert about upgrading your operations.</p>
              <a href="tel:+919846199883" className="text-blue-600 font-bold hover:underline">+91 98461 99883</a>
            </div>

            <div className="bg-white border border-slate-200/60 p-8 rounded-2xl shadow-sm text-center hover:border-emerald-300 transition-colors">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Support</h2>
              <p className="text-slate-600 mb-4">Need help with the platform? We're available 24/7.</p>
              <a href="mailto:driveopsfleet@[EMAIL_ADDRESS]" className="text-emerald-600 font-bold hover:underline">driveopsfleet@gmail.com</a>
            </div>

            <div className="bg-white border border-slate-200/60 p-8 rounded-2xl shadow-sm text-center hover:border-purple-300 transition-colors">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Office</h2>
              <p className="text-slate-600 mb-4">Visit us at our headquarters in India.</p>
              <span className="text-slate-800 font-medium">Kochi, Kerala, India</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contact
