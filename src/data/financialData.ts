/**
 * Centralized Financial Marketing Demo Data
 * Numerical raw values for calculations and clean formatting.
 */

export const formatINR = (value: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)
}

export const financialMetrics = {
  kpis: {
    revenue: {
      raw: 1284500,
      formatted: "₹12,84,500",
      change: "+12.4%",
      changeType: "positive" as const,
      period: "vs last month",
      label: "Revenue",
    },
    expenses: {
      raw: 694920,
      formatted: "₹6,94,920",
      change: "+4.8%",
      changeType: "expense" as const,
      period: "vs last month",
      label: "Total Expenses",
    },
    profit: {
      raw: 589580,
      formatted: "₹5,89,580",
      change: "+18.6%",
      changeType: "positive" as const,
      period: "vs last month",
      label: "Net Profit",
    },
    margin: {
      raw: 45.9,
      formatted: "45.9%",
      change: "+3.2%",
      changeType: "positive" as const,
      period: "vs last month",
      label: "Profit Margin",
    },
  },

  chart: {
    labels: ["01 May", "05 May", "10 May", "15 May", "20 May", "25 May", "31 May"],
    revenueSeries: [8.2, 9.1, 9.8, 10.4, 11.7, 12.2, 12.8], // In Lakhs
    expenseSeries: [5.1, 5.4, 5.8, 6.1, 6.5, 6.7, 6.9],    // In Lakhs
    maxScale: 15,
  },

  fleetInsight: {
    title: "Fleet Insight",
    headline: "Your fleet profit increased",
    highlight: "18.6%",
    suffix: "this month.",
    reason: "Fuel efficiency improved by 7.2%.",
  },

  expenseBreakdown: [
    {
      id: "fuel",
      name: "Fuel",
      raw: 214300,
      formatted: "₹2,14,300",
      percentage: 31,
      flowLabel: "FUEL",
      color: "#3B82F6", // Blue
      lightBg: "bg-blue-50/80",
      border: "border-blue-200",
      text: "text-blue-600",
    },
    {
      id: "payroll",
      name: "Driver Payroll",
      raw: 320000,
      formatted: "₹3,20,000",
      percentage: 46,
      flowLabel: "DRIVER PAYROLL",
      color: "#F59E0B", // Amber
      lightBg: "bg-amber-50/80",
      border: "border-amber-200",
      text: "text-amber-600",
    },
    {
      id: "maintenance",
      name: "Maintenance",
      raw: 86420,
      formatted: "₹86,420",
      percentage: 12,
      flowLabel: "MAINTENANCE",
      color: "#10B981", // Emerald
      lightBg: "bg-emerald-50/80",
      border: "border-emerald-200",
      text: "text-emerald-600",
    },
    {
      id: "other",
      name: "Other Expenses",
      raw: 74200,
      formatted: "₹74,200",
      percentage: 11,
      flowLabel: "OTHER EXPENSES",
      color: "#8B5CF6", // Purple
      lightBg: "bg-purple-50/80",
      border: "border-purple-200",
      text: "text-purple-600",
    },
  ],

  profitableVehicles: [
    {
      reg: "KL07 AB 1234",
      profit: "₹84,250",
      change: "+18.6%",
      type: "Heavy Hauler",
      icon: "truck" as const,
    },
    {
      reg: "KL11 AC 9876",
      profit: "₹72,430",
      change: "+14.2%",
      type: "Prime Sedan",
      icon: "car" as const,
    },
    {
      reg: "KL21 D 4321",
      profit: "₹61,850",
      change: "+11.8%",
      type: "Delivery Van",
      icon: "pickup" as const,
    },
  ],

  highestCostVehicle: {
    reg: "KL45 H 1122",
    model: "Eicher Pro 2049",
    cost: "₹42,800",
    label: "Maintenance + Fuel Cost",
    vsFleetAvg: "+28.6%",
  },

  benefits: [
    {
      id: "revenue-tracking",
      title: "Revenue Tracking",
      description: "Track trip revenue, rental income and other fleet earnings.",
      icon: "trending-up" as const,
      color: "emerald",
    },
    {
      id: "expense-management",
      title: "Expense Management",
      description: "Capture fuel, maintenance, payroll and operational expenses.",
      icon: "wallet" as const,
      color: "amber",
    },
    {
      id: "vehicle-profitability",
      title: "Vehicle Profitability",
      description: "Understand which vehicles are earning and which are costing you.",
      icon: "truck" as const,
      color: "purple",
    },
    {
      id: "realtime-profitability",
      title: "Real-Time Profitability",
      description: "See revenue, expenses and net profit at a glance.",
      icon: "clock" as const,
      color: "blue",
    },
  ],
}
