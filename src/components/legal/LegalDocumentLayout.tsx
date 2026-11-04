import { useEffect, useState } from "react"
import type { LegalBlock, LegalDocument } from "@/data/legal/types"

function formatDisplayDate(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00Z`)
  if (Number.isNaN(date.getTime())) return isoDate
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date)
}

function LegalBlockView({ block }: { block: LegalBlock }) {
  if (block.type === "p") {
    return <p className="text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-7">{block.text}</p>
  }

  if (block.type === "ul") {
    return (
      <ul className="list-disc space-y-2 pl-5 text-[15px] leading-7 text-slate-600 sm:text-base">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <aside className="rounded-lg border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-sm leading-6 text-amber-950">
      <p className="font-semibold text-amber-900">Review note</p>
      <p className="mt-1">{block.text}</p>
    </aside>
  )
}

type LegalDocumentLayoutProps = {
  legalDocument: LegalDocument
}

export default function LegalDocumentLayout({ legalDocument }: LegalDocumentLayoutProps) {
  const [activeId, setActiveId] = useState(legalDocument.sections[0]?.id ?? "")

  useEffect(() => {
    const headings = legalDocument.sections
      .map((section) => window.document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] }
    )

    headings.forEach((heading) => observer.observe(heading))
    return () => observer.disconnect()
  }, [legalDocument.sections])

  return (
    <div className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_42%,#ffffff_100%)]">
      <header className="border-b border-slate-200/70 bg-white/90 px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">Legal</p>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {legalDocument.title}
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">{legalDocument.description}</p>
          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 sm:text-sm">
            <div>
              <dt className="inline font-semibold text-slate-700">Effective: </dt>
              <dd className="inline">{formatDisplayDate(legalDocument.effectiveDate)}</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-slate-700">Last updated: </dt>
              <dd className="inline">{formatDisplayDate(legalDocument.lastUpdated)}</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-slate-700">Version: </dt>
              <dd className="inline">{legalDocument.version}</dd>
            </div>
          </dl>
          <p className="mt-4 max-w-3xl rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
            {legalDocument.reviewNote}
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-14">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm shadow-slate-900/5">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
              On this page
            </p>
            <label className="sr-only" htmlFor={`${legalDocument.slug}-toc`}>
              Jump to section
            </label>
            <select
              id={`${legalDocument.slug}-toc`}
              className="mb-3 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden"
              value={activeId}
              onChange={(event) => {
                const id = event.target.value
                setActiveId(id)
                window.document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
            >
              {legalDocument.sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title}
                </option>
              ))}
            </select>
            <nav aria-label="Table of contents" className="hidden max-h-[70vh] overflow-y-auto lg:block">
              <ul className="space-y-1">
                {legalDocument.sections.map((section) => {
                  const isActive = section.id === activeId
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`block rounded-md px-2 py-1.5 text-xs leading-5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                          isActive
                            ? "bg-blue-50 font-semibold text-blue-700"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        {section.title}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </aside>

        <article className="min-w-0">
          <div className="space-y-12 rounded-2xl border border-slate-200/80 bg-white px-5 py-8 shadow-sm shadow-slate-900/5 sm:px-8 sm:py-10">
            {legalDocument.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-heading text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.blocks.map((block, index) => (
                    <LegalBlockView key={`${section.id}-${index}`} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}
