import { priorityHomepageFaqs } from "@/data/homepage-faqs"
import { Link } from "react-router-dom"
import { MessageSquare } from "lucide-react"
import FAQList from "@/components/FAQList"


export default function ReviewManagementTeaser() {
  return (
    <section className="border-b border-slate-200/70 bg-slate-50 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2">
        <div>
          <MessageSquare className="mb-4 h-8 w-8 text-blue-600" aria-hidden="true" />
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">Customer review management</p>
          <h2 className="font-heading mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">Bring passenger feedback into your operations inbox.</h2>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-slate-600">Request feedback after trips through WhatsApp. Review incoming replies with your team and decide which customer conversations need follow-up.</p>
          <Link to="/product/reviews/" className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">Explore review management →</Link>
        </div>
        <div>
          <h2 className="mb-5 text-xl font-bold text-slate-900">Compliance, fuel and feedback: common questions</h2>
          <FAQList faqs={priorityHomepageFaqs} />
        </div>
      </div>
    </section>
  )
}
