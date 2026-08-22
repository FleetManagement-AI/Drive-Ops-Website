import {
  Send,
  User,
  Users,
  Package,
  MapPin,
  Truck,
  UserCheck,
  Layers,
  FileCheck2,
  Calendar,
  CalendarCheck,
  FileText,
  IndianRupee,
  Car,
  Wrench,
  ShieldCheck,
  Building2,
  LucideIcon
} from "lucide-react"

export interface CapabilityItem {
  label: string
  icon: LucideIcon
}

export type MetricType = "sparkline" | "progress"

export interface MetricSparkline {
  type: "sparkline"
  label: string
  value: string
  trend: string
  trendPeriod: string
  trendPositive: boolean
  sparklinePoints: number[]
}

export interface MetricProgress {
  type: "progress"
  label: string
  value: string
  percentage: number
  progressLabel: string
}

export type BusinessMetric = MetricSparkline | MetricProgress

export interface BusinessTypeItem {
  id: string
  title: string
  description: string
  accentColor: "blue" | "green" | "purple"
  headerIcon: LucideIcon
  vehicleImage: string
  vehicleAlt: string
  capabilities: CapabilityItem[]
  metrics: BusinessMetric[]
  ctaText: string
  ctaHref: string
}

export const businessTypes: BusinessTypeItem[] = [
  {
    id: "passenger",
    title: "Passenger Transport Fleet Management",
    description: "Manage taxis, cabs and passenger transport fleets with trip scheduling, driver management, vehicle tracking, maintenance and profitability tools.",
    accentColor: "blue",
    headerIcon: Car,
    vehicleImage: "/card_image/taxi_image.png",
    vehicleAlt: "Passenger transport vehicle managed with DriveOps fleet management software",
    capabilities: [
      { label: "Trips & Dispatch", icon: Send },
      { label: "Drivers", icon: User },
      { label: "Passengers", icon: Users },
      { label: "Packages", icon: Package },
      { label: "Route Tracking", icon: MapPin }
    ],
    metrics: [
      {
        type: "sparkline",
        label: "Today's Trips",
        value: "24",
        trend: "↑ 14%",
        trendPeriod: "vs yesterday",
        trendPositive: true,
        sparklinePoints: [14, 16, 13, 20, 18, 22, 24]
      },
      {
        type: "progress",
        label: "Active Vehicles",
        value: "86",
        percentage: 90,
        progressLabel: "90%"
      },
      {
        type: "sparkline",
        label: "Revenue Today",
        value: "₹1,25,340",
        trend: "↑ 12.6%",
        trendPeriod: "vs yesterday",
        trendPositive: true,
        sparklinePoints: [70, 82, 78, 96, 92, 114, 125]
      }
    ],
    ctaText: "Explore Passenger Fleet Solution",
    ctaHref: "/solutions/passenger-transport"
  },
  {
    id: "goods",
    title: "Goods Transport Fleet Management",
    description: "Manage trucks and delivery vehicles with fleet tracking, driver management, trip operations, maintenance, expenses and delivery visibility.",
    accentColor: "green",
    headerIcon: Truck,
    vehicleImage: "/card_image/truck_image.png",
    vehicleAlt: "Goods transport truck managed with DriveOps fleet management software",
    capabilities: [
      { label: "Cargo & Deliveries", icon: Package },
      { label: "Fleet Management", icon: Truck },
      { label: "Driver Management", icon: UserCheck },
      { label: "Loading & Unloading", icon: Layers },
      { label: "POD & Proof", icon: FileCheck2 }
    ],
    metrics: [
      {
        type: "sparkline",
        label: "Deliveries Today",
        value: "38",
        trend: "↑ 18%",
        trendPeriod: "vs yesterday",
        trendPositive: true,
        sparklinePoints: [20, 24, 22, 30, 28, 35, 38]
      },
      {
        type: "progress",
        label: "On Time Delivery",
        value: "96%",
        percentage: 96,
        progressLabel: "96%"
      },
      {
        type: "sparkline",
        label: "Trip Profitability",
        value: "₹18,620",
        trend: "↑ 9.4%",
        trendPeriod: "vs yesterday",
        trendPositive: true,
        sparklinePoints: [13, 15, 14, 16.5, 16, 17.8, 18.6]
      }
    ],
    ctaText: "Explore Goods Fleet Solution",
    ctaHref: "/solutions/goods-transport"
  },
  {
    id: "rental",
    title: "Self-Drive Rental Management",
    description: "Manage rental vehicles, bookings, availability, customers, contracts, payments and vehicle utilization from one platform.",
    accentColor: "purple",
    headerIcon: Wrench,
    vehicleImage: "/card_image/rental_image.png",
    vehicleAlt: "Self-drive rental vehicles managed with DriveOps",
    capabilities: [
      { label: "Bookings", icon: Calendar },
      { label: "Availability", icon: CalendarCheck },
      { label: "Customers", icon: Users },
      { label: "Contracts", icon: FileText },
      { label: "Payments", icon: IndianRupee }
    ],
    metrics: [
      {
        type: "sparkline",
        label: "Active Bookings",
        value: "42",
        trend: "↑ 11%",
        trendPeriod: "vs yesterday",
        trendPositive: true,
        sparklinePoints: [29, 31, 33, 37, 36, 40, 42]
      },
      {
        type: "progress",
        label: "Fleet Utilization",
        value: "78%",
        percentage: 78,
        progressLabel: "78%"
      },
      {
        type: "sparkline",
        label: "Revenue This Month",
        value: "₹2,85,600",
        trend: "↑ 13.2%",
        trendPeriod: "vs last month",
        trendPositive: true,
        sparklinePoints: [1.9, 2.2, 2.1, 2.45, 2.4, 2.68, 2.85]
      }
    ],
    ctaText: "Explore Rental Fleet Solution",
    ctaHref: "/solutions/self-drive-rental"
  }
]

export interface TrustItem {
  value: string
  label: string
  icon: LucideIcon
  colorTheme: "blue" | "green" | "amber" | "purple" | "yellow"
}

export const trustMetrics: TrustItem[] = [
  {
    value: "50K+",
    label: "Vehicles Managed",
    icon: ShieldCheck,
    colorTheme: "blue"
  },
  {
    value: "500+",
    label: "Fleets Trust DriveOps",
    icon: Users,
    colorTheme: "green"
  },
  {
    value: "250+",
    label: "Cities Covered",
    icon: MapPin,
    colorTheme: "amber"
  },
  {
    value: "99.6%",
    label: "Uptime",
    icon: ShieldCheck,
    colorTheme: "purple"
  },
  {
    value: "24/7",
    label: "Support",
    icon: Building2,
    colorTheme: "yellow"
  }
]
