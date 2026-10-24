import { canonicalPath } from "../config/paths"

export function trackCta(event: MouseEvent) {
  const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]")
  if (!anchor || document.documentElement.dataset.exporting || !window.gtag) return
  const url = new URL(anchor.href, window.location.origin)
  const type = url.hostname === "driveops.chatserve.in" && url.pathname.startsWith("/signup")
    ? "signup" : url.origin === window.location.origin && canonicalPath(url.pathname) === "/contact/"
      ? "contact" : url.origin === window.location.origin && canonicalPath(url.pathname) === "/pricing/"
        ? "pricing" : null
  if (!type) return
  const path = canonicalPath(window.location.pathname)
  const topic = /compliance/.test(path) ? "compliance" : /fuel|fleet-expenses/.test(path) ? "fuel" : /review/.test(path) ? "reviews" : "general"
  window.gtag("event", "marketing_cta_click", { page_path: path, topic, cta_type: type, destination: url.href })
}
