export type Faq = { q: string; a: string }

/** Native details keep every answer in HTML and work without JavaScript. */
export default function FAQList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-3">
      {faqs.map(faq => (
        <details key={faq.q} className="group rounded-xl border border-slate-200 bg-white open:border-blue-200">
          <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-slate-900 focus-visible:outline-blue-600">
            {faq.q}
          </summary>
          <p className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">{faq.a}</p>
        </details>
      ))}
    </div>
  )
}
