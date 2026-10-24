/** GitHub Pages serves exported routes as directories. */
export function canonicalPath(path: string): string {
  const suffixAt = path.search(/[?#]/)
  const pathname = suffixAt === -1 ? path : path.slice(0, suffixAt)
  const suffix = suffixAt === -1 ? "" : path.slice(suffixAt)
  return (pathname === "/" ? "/" : `/${pathname.replace(/^\/+|\/+$/g, "")}/`) + suffix
}
