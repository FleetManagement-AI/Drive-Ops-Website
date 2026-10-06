import { Link, useParams, Navigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import ProductPageLayout from "@/components/ProductPageLayout"
import {
  PRODUCT_GROUPS,
  PRODUCT_HUB,
  PRODUCT_PAGES,
  getProductPage,
} from "@/data/product-pages"

export function ProductHubPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBFBFA] text-foreground antialiased">
      <SEO
        title="DriveOps Product | Fleet Operations Platform"
        description={PRODUCT_HUB.description}
        keywords="fleet operations software, trip dispatch, driver app, live fleet tracking, fleet care, self-drive rentals, DriveOps product"
        canonicalUrl="/product"
        ogImage="/images/hero/DriveOps Live Fleet Management Dashboard.webp"
      />
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-slate-200/60 bg-gradient-to-b from-white via-blue-50/20 to-transparent px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
              Product
            </p>
            <h1 className="font-heading mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {PRODUCT_HUB.title}
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {PRODUCT_HUB.description}
            </p>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl space-y-12">
            {PRODUCT_GROUPS.map((group) => {
              const pages = PRODUCT_PAGES.filter((p) => p.group === group.id)
              return (
                <div key={group.id}>
                  <div className="mb-5">
                    <h2 className="font-heading text-xl font-bold text-slate-900 sm:text-2xl">
                      {group.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">{group.description}</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {pages.map((page) => (
                      <Link
                        key={page.slug}
                        to={`/product/${page.slug}`}
                        className="group rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-blue-200 hover:bg-blue-50/30"
                      >
                        <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                          {page.title}
                        </h3>
                        <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-slate-600">
                          {page.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                          Explore
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  if (!slug) return <Navigate to="/product" replace />
  const page = getProductPage(slug)
  if (!page) return <Navigate to="/product" replace />
  return <ProductPageLayout page={page} />
}
