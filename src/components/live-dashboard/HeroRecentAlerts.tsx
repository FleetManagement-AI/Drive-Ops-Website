import React from "react"

const alerts = [
  {
    type: "maintenance",
    message: "Maintenance due for",
    vehicle: "KL07 AB 1234",
    time: "2h ago",
    color: "#f97316",
    bg: "#fff7ed",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M11.5 1.5l-2 2-1.5-1.5 2-2a3 3 0 00-3.8 3.3L2 7.5a1.3 1.3 0 001.8 1.8l4.2-4.2a3 3 0 003.5-3.6z" stroke="#f97316" strokeWidth="1.1" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    type: "delay",
    message: "Trip delay on",
    vehicle: "MH12 XY 9876",
    time: "3h ago",
    color: "#ef4444",
    bg: "#fef2f2",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1.5L12.5 11.5H1.5L7 1.5z" stroke="#ef4444" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M7 6v2.5" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="7" cy="10" r="0.5" fill="#ef4444"/>
      </svg>
    ),
  },
  {
    type: "fuel",
    message: "Low fuel on",
    vehicle: "KA05 MN 5678",
    time: "5h ago",
    color: "#f97316",
    bg: "#fff7ed",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="2" y="1.5" width="7" height="11" rx="1.5" stroke="#f97316" strokeWidth="1.1"/>
        <path d="M9 4h1.5a1 1 0 011 1v4a1 1 0 01-1 1H9" stroke="#f97316" strokeWidth="1.1"/>
        <path d="M4 5.5h3M4 8h3" stroke="#f97316" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export const HeroRecentAlerts: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3.5 flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[12px] font-semibold text-slate-700">Recent Alerts</span>
        <button className="text-[10px] text-indigo-500 font-medium hover:underline">View All</button>
      </div>

      {/* Alert rows */}
      <div className="flex flex-col gap-2.5">
        {alerts.map((alert, i) => (
          <div key={i} className="flex items-center gap-2.5">
            {/* Icon badge */}
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: alert.bg }}
            >
              {alert.icon}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-slate-500 leading-tight truncate">{alert.message}</p>
              <p className="text-[10px] font-semibold text-slate-700 leading-tight">{alert.vehicle}</p>
            </div>

            {/* Time */}
            <span className="text-[10px] text-slate-400 whitespace-nowrap flex-shrink-0">{alert.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
