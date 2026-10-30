/** Marketing illustrations, independent of product capability and SEO data. */
export const productArtwork: Record<string, string> = {
  vehicles: "overview",
  drivers: "driver",
  "trips-dispatch": "trips",
  "live-fleet": "tracking",
  maintenance: "care",
  compliance: "care",
  fuel: "fuel",
  customers: "overview",
  "recurring-trips": "trips",
  "trip-sheets": "trips",
  notifications: "driver",
  alerts: "care",
  "driver-app": "driver",
  rentals: "rentals",
};
export function artworkForPath(path: string): string | undefined {
  if (path === "/product/") return "overview";
  if (path.startsWith("/product/")) return productArtwork[path.split("/")[2]];
  return undefined;
}
