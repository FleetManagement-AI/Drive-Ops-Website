import { Link } from "react-router-dom"

export default function RelatedOperations() {
  return (
    <aside className="border-t border-slate-200 bg-blue-50/40 px-4 py-8" aria-label="Related fleet operations">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-3 text-lg font-bold text-slate-900">Keep the details of every trip connected</h2>
        <p className="mb-4 text-sm text-slate-600">Organize documents, record refuelling and review customer feedback alongside your transport operations.</p>
        <div className="flex flex-wrap justify-center gap-5 text-sm font-semibold text-blue-700">
          <Link to="/product/compliance/">Compliance management</Link>
          <Link to="/product/fuel/">Fuel logs</Link>
          <Link to="/product/reviews/">Customer review management</Link>
        </div>
      </div>
    </aside>
  )
}
