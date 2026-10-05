import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight, CheckCircle2, Play } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { HERO_SLIDES, type HeroSlideCta } from "@/data/hero-slides"
import MovingBackground from "@/components/MovingBackground"

const AUTOPLAY_MS = 4000
const RESUME_DELAY_MS = 4000

const PROOF_ITEMS = ["No credit card", "Quick setup", "Built for fleet operators"] as const

function CtaLink({
  cta,
  variant,
}: {
  cta: HeroSlideCta
  variant: "primary" | "secondary"
}) {
  const base =
    variant === "primary"
      ? "text-showcase-cta inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white shadow-sm shadow-blue-600/25 transition-colors hover:bg-blue-500 sm:w-auto"
      : "text-showcase-cta inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600 sm:w-auto"

  const content = (
    <>
      {variant === "secondary" && (
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-slate-500">
          <Play className="h-2.5 w-2.5 fill-current" aria-hidden="true" />
        </span>
      )}
      {cta.label}
      {variant === "primary" && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </>
  )

  if (cta.external) {
    return (
      <a href={cta.href} className={base}>
        {content}
      </a>
    )
  }

  return (
    <Link to={cta.href} className={base}>
      {content}
    </Link>
  )
}

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const userInteracted = useRef(false)

  const slide = HERO_SLIDES[selectedIndex] ?? HERO_SLIDES[0]
  const autoplayActive = Boolean(api) && !shouldReduceMotion && !paused

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  const pauseAutoplay = useCallback(() => {
    setPaused(true)
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
  }, [])

  const scheduleResume = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => {
      userInteracted.current = false
      setPaused(false)
    }, RESUME_DELAY_MS)
  }, [])

  const markInteraction = useCallback(() => {
    userInteracted.current = true
    pauseAutoplay()
    scheduleResume()
  }, [pauseAutoplay, scheduleResume])

  useEffect(() => {
    if (!api || shouldReduceMotion || paused) return

    const id = setInterval(() => {
      if (userInteracted.current) return
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, AUTOPLAY_MS)

    return () => clearInterval(id)
  }, [api, paused, shouldReduceMotion])

  useEffect(() => {
    if (!autoplayActive) {
      setProgress(0)
      return
    }

    setProgress(0)
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const next = Math.min(1, (now - start) / AUTOPLAY_MS)
      setProgress(next)
      if (next < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [autoplayActive, selectedIndex])

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current)
    }
  }, [])

  const scrollTo = (index: number) => {
    markInteraction()
    api?.scrollTo(index)
  }

  const scrollPrev = () => {
    markInteraction()
    api?.scrollPrev()
  }

  const scrollNext = () => {
    markInteraction()
    api?.scrollNext()
  }

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <section
      className="relative w-full overflow-hidden bg-[#F8FAFC]"
      aria-label="DriveOps product overview"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={() => {
        if (!userInteracted.current) setPaused(false)
      }}
      onFocusCapture={pauseAutoplay}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          if (!userInteracted.current) setPaused(false)
        }
      }}
    >
      <MovingBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col px-0 pb-5 pt-20 sm:pb-5 sm:pt-[5.25rem] lg:pt-[5.5rem]">
        <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:items-center lg:gap-10 xl:gap-12">
          {/* Left copy */}
          <div className="relative z-10 max-w-[540px] px-4 sm:px-5 lg:px-6 lg:pt-1 lg:pr-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={transition}
              >
                <div className="mb-4 flex flex-wrap items-center gap-2.5">
                  {/* <span className="text-showcase-eyebrow text-slate-400">
                    {slide.indexLabel}
                  </span> */}
                  {/* <span className="text-showcase-eyebrow inline-flex items-center rounded-full border border-blue-200 bg-blue-50/70 px-2.5 py-1 text-blue-600">
                    {slide.category}
                  </span> */}
                </div>

                <h1 className="text-showcase-h1 text-slate-900">
                  {slide.headline.map((part, i) =>
                    part.highlight ? (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                      >
                        {part.text.split("\n").map((line, li, arr) => (
                          <span key={li}>
                            {line}
                            {li < arr.length - 1 && <br className="hidden sm:inline" />}
                            {li < arr.length - 1 && <span className="sm:hidden"> </span>}
                          </span>
                        ))}
                      </span>
                    ) : (
                      <span key={i}>
                        {part.text.split("\n").map((line, li, arr) => (
                          <span key={li}>
                            {line}
                            {li < arr.length - 1 && <br className="hidden sm:inline" />}
                            {li < arr.length - 1 && <span className="sm:hidden"> </span>}
                          </span>
                        ))}
                      </span>
                    ),
                  )}
                </h1>

                <p className="text-showcase-desc mt-5 text-slate-600">
                  {slide.description}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <CtaLink cta={slide.primaryCta} variant="primary" />
                  <CtaLink cta={slide.secondaryCta} variant="secondary" />
                </div>

                {slide.showProofRow && (
                  <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                    {PROOF_ITEMS.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 text-xs font-medium text-slate-500 sm:text-sm"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Slide nav — under CTAs: Prev | dash indicators | Next */}
            <div className="relative z-10 mt-5 flex items-center gap-2.5 sm:mt-6 sm:gap-3">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous slide"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-9 sm:w-9"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>

              <div
                className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2"
                role="tablist"
                aria-label="Product slides"
              >
                {HERO_SLIDES.map((s, index) => {
                  const active = index === selectedIndex
                  const fillPercent = active
                    ? autoplayActive
                      ? progress * 100
                      : 100
                    : 0
                  return (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-label={s.navLabel}
                      aria-selected={active}
                      aria-controls={`hero-slide-${s.id}`}
                      onClick={() => scrollTo(index)}
                      className="relative h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-white/90 shadow-sm ring-1 ring-slate-200/70 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span
                        className="absolute inset-y-0 left-0 rounded-full bg-slate-800"
                        style={{ width: `${fillPercent}%` }}
                        aria-hidden="true"
                      />
                    </button>
                  )
                })}
              </div>

              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next slide"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-9 sm:w-9"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right visuals — bare transparent PNGs, no card chrome */}
          <div className="relative min-w-0 bg-transparent px-2 sm:px-3 lg:px-0">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
                duration: shouldReduceMotion ? 0 : 22,
                watchDrag: true,
              }}
              className="w-full bg-transparent"
              onPointerDown={markInteraction}
            >
              <CarouselContent className="-ml-0">
                {HERO_SLIDES.map((s, index) => (
                  <CarouselItem
                    key={s.id}
                    className="basis-full bg-transparent pl-0"
                    id={`hero-slide-${s.id}`}
                  >
                    <img
                      src={encodeURI(s.image)}
                      alt={s.imageAlt}
                      width={1400}
                      height={900}
                      fetchPriority={index === 0 ? "high" : undefined}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="mx-auto h-auto max-h-[280px] w-full object-contain object-center sm:max-h-[380px] lg:max-h-none"
                      draggable={false}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
