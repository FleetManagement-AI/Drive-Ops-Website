import React from "react"
import { motion } from "framer-motion"
import {
  Truck, Users, Navigation, Wrench, Fuel, ReceiptText, BarChart3,
  Search, Plus, MoreHorizontal, ChevronLeft, ChevronRight,
  TrendingUp, AlertCircle, Clock, ShieldCheck, CheckCircle2,
  Bell, Building2, User
} from "lucide-react"

export interface CapabilityData {
  id: string
  title: string
  shortTitle: string
  description: string
  icon: React.ElementType
  iconBg: string
  iconColor: string
  accentColor: string
  side: "left" | "mid"
}

export const CAPABILITIES: CapabilityData[] = [
  {
    id: "fleet",
    title: "Fleet & Vehicles",
    shortTitle: "Vehicles",
    description: "Manage vehicles, documents, insurance, permits and compliance in one place.",
    icon: Truck,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    accentColor: "#3B82F6",
    side: "left",
  },
  {
    id: "drivers",
    title: "Drivers & Attendance",
    shortTitle: "Drivers",
    description: "Handle driver profiles, licenses, attendance, shifts and payroll efficiently.",
    icon: Users,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accentColor: "#10B981",
    side: "left",
  },
  {
    id: "trips",
    title: "Trips & Dispatch",
    shortTitle: "Trips",
    description: "Create trips, assign drivers, track in real-time and manage trip sheets easily.",
    icon: Navigation,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    accentColor: "#A855F7",
    side: "left",
  },
  {
    id: "maintenance",
    title: "Maintenance & Alerts",
    shortTitle: "Maintenance",
    description: "Schedule services, set reminders and never miss maintenance or renewals.",
    icon: Wrench,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    accentColor: "#F59E0B",
    side: "left",
  },
  {
    id: "fuel",
    title: "Fuel Management",
    shortTitle: "Fuel",
    description: "Track fuel fills, mileage, efficiency and control fuel costs.",
    icon: Fuel,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accentColor: "#059669",
    side: "mid",
  },
  {
    id: "expenses",
    title: "Expenses & Revenue",
    shortTitle: "Expenses",
    description: "Record expenses, manage vendors and track revenue in real time.",
    icon: ReceiptText,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    accentColor: "#D97706",
    side: "mid",
  },
  {
    id: "reports",
    title: "Reports & Insights",
    shortTitle: "Reports",
    description: "Real-time reports and dashboards to help you make better decisions.",
    icon: BarChart3,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    accentColor: "#6366F1",
    side: "mid",
  },
]
