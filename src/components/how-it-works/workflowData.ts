import {
  CalendarDays,
  UserCheck,
  MapPin,
  Car,
  Wrench,
  BarChart3,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Wallet,
  TrendingUp,
  LucideIcon,
} from "lucide-react"

export interface WorkflowStage {
  id: string
  title: string
  description: string
  icon: LucideIcon
  colorName: "blue" | "purple" | "green" | "orange"
  accentHex: string
  badgeBg: string
  badgeBorder: string
  badgeText: string
  iconBg: string
  iconColor: string
  cardBorder: string
  glowColor: string
}

export interface ValueStripItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
  accentColor: string
  iconBg: string
  iconText: string
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: "plan",
    title: "PLAN",
    description: "Create trips, jobs and schedules with ease.",
    icon: CalendarDays,
    colorName: "blue",
    accentHex: "#2563EB",
    badgeBg: "bg-blue-50/90",
    badgeBorder: "border-blue-200/80",
    badgeText: "text-blue-600",
    iconBg: "bg-blue-50/80",
    iconColor: "text-blue-600",
    cardBorder: "border-blue-100",
    glowColor: "rgba(37, 99, 235, 0.12)",
  },
  {
    id: "dispatch",
    title: "DISPATCH",
    description: "Assign the right vehicle and driver to the right job.",
    icon: UserCheck,
    colorName: "purple",
    accentHex: "#8B5CF6",
    badgeBg: "bg-purple-50/90",
    badgeBorder: "border-purple-200/80",
    badgeText: "text-purple-600",
    iconBg: "bg-purple-50/80",
    iconColor: "text-purple-600",
    cardBorder: "border-purple-100",
    glowColor: "rgba(139, 92, 246, 0.12)",
  },
  {
    id: "track",
    title: "TRACK",
    description: "Track vehicles in real-time with live GPS updates.",
    icon: MapPin,
    colorName: "green",
    accentHex: "#10B981",
    badgeBg: "bg-emerald-50/90",
    badgeBorder: "border-emerald-200/80",
    badgeText: "text-emerald-600",
    iconBg: "bg-emerald-50/80",
    iconColor: "text-emerald-600",
    cardBorder: "border-emerald-100",
    glowColor: "rgba(16, 185, 129, 0.12)",
  },
  {
    id: "operate",
    title: "OPERATE",
    description: "Manage trips, passengers, deliveries and more.",
    icon: Car,
    colorName: "orange",
    accentHex: "#F59E0B",
    badgeBg: "bg-amber-50/90",
    badgeBorder: "border-amber-200/80",
    badgeText: "text-amber-600",
    iconBg: "bg-amber-50/80",
    iconColor: "text-amber-600",
    cardBorder: "border-amber-100",
    glowColor: "rgba(245, 158, 11, 0.12)",
  },
  {
    id: "control",
    title: "CONTROL",
    description: "Control fuel, maintenance, expenses and payroll in one place.",
    icon: Wrench,
    colorName: "blue",
    accentHex: "#2563EB",
    badgeBg: "bg-blue-50/90",
    badgeBorder: "border-blue-200/80",
    badgeText: "text-blue-600",
    iconBg: "bg-blue-50/80",
    iconColor: "text-blue-600",
    cardBorder: "border-blue-100",
    glowColor: "rgba(37, 99, 235, 0.12)",
  },
  {
    id: "analyze",
    title: "ANALYZE",
    description: "Analyze performance, revenue and costs. Grow profitability.",
    icon: BarChart3,
    colorName: "green",
    accentHex: "#10B981",
    badgeBg: "bg-emerald-50/90",
    badgeBorder: "border-emerald-200/80",
    badgeText: "text-emerald-600",
    iconBg: "bg-emerald-50/80",
    iconColor: "text-emerald-600",
    cardBorder: "border-emerald-100",
    glowColor: "rgba(16, 185, 129, 0.12)",
  },
]

export const VALUE_STRIP_ITEMS: ValueStripItem[] = [
  {
    id: "platform",
    title: "One Connected Platform",
    description: "All your fleet operations in one easy-to-use platform.",
    icon: ShieldCheck,
    accentColor: "#2563EB",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200/80",
    iconText: "text-blue-600",
  },
  {
    id: "visibility",
    title: "Real-time Visibility",
    description: "Live tracking and insights to make faster decisions.",
    icon: Zap,
    accentColor: "#8B5CF6",
    iconBg: "bg-purple-50 text-purple-600 border-purple-200/80",
    iconText: "text-purple-600",
  },
  {
    id: "automate",
    title: "Automate Operations",
    description: "Reduce manual work and improve operational efficiency.",
    icon: CheckCircle2,
    accentColor: "#10B981",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    iconText: "text-emerald-600",
  },
  {
    id: "costs",
    title: "Control Costs",
    description: "Track expenses and reduce unnecessary costs.",
    icon: Wallet,
    accentColor: "#F59E0B",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200/80",
    iconText: "text-amber-600",
  },
  {
    id: "profitability",
    title: "Drive Profitability",
    description: "Data-driven insights that boost your bottom line.",
    icon: TrendingUp,
    accentColor: "#2563EB",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200/80",
    iconText: "text-blue-600",
  },
]
