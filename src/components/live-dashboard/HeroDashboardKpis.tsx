import React from "react"

export const HeroDashboardKpis: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
      {/* Total Vehicles */}
      <div className="bg-white rounded-xl border border-slate-100 p-3 flex items-start justify-between shadow-sm">
        <div>
          <p className="text-[10px] text-slate-400 font-medium mb-1">Total Vehicles</p>
          <p className="text-2xl font-bold text-slate-800 leading-none mb-1.5">128</p>
          <p className="text-[10px] text-emerald-500 font-medium">+8 this month</p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1" y="6" width="16" height="8" rx="2" stroke="#60a5fa" strokeWidth="1.4"/>
            <path d="M3 6l2.5-3.5h7L15 6" stroke="#60a5fa" strokeWidth="1.4" strokeLinejoin="round"/>
            <circle cx="4.5" cy="14" r="1.8" fill="white" stroke="#60a5fa" strokeWidth="1.4"/>
            <circle cx="13.5" cy="14" r="1.8" fill="white" stroke="#60a5fa" strokeWidth="1.4"/>
          </svg>
        </div>
      </div>

      {/* Active Trips */}
      <div className="bg-white rounded-xl border border-slate-100 p-3 flex items-start justify-between shadow-sm">
        <div>
          <p className="text-[10px] text-slate-400 font-medium mb-1">Active Trips</p>
          <p className="text-2xl font-bold text-slate-800 leading-none mb-1.5">42</p>
          <p className="text-[10px] text-emerald-500 font-medium">Live tracking</p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2C5.686 2 3 4.686 3 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6z" stroke="#34d399" strokeWidth="1.4" fill="none"/>
            <circle cx="9" cy="8" r="2" fill="#34d399"/>
          </svg>
        </div>
      </div>

      {/* Fuel Cost MTD */}
      <div className="bg-white rounded-xl border border-slate-100 p-3 flex items-start justify-between shadow-sm">
        <div>
          <p className="text-[10px] text-slate-400 font-medium mb-1">Fuel Cost (MTD)</p>
          <p className="text-xl font-bold text-slate-800 leading-none mb-1.5">₹ 82,430</p>
          <p className="text-[10px] text-red-500 font-medium">↑ 6.4%</p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2.5" y="2" width="9" height="14" rx="2" stroke="#94a3b8" strokeWidth="1.4"/>
            <path d="M11.5 5.5h2a1 1 0 011 1v5a1 1 0 01-1 1h-2" stroke="#94a3b8" strokeWidth="1.4"/>
            <path d="M5.5 7h4M5.5 10h4" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Maintenance Due */}
      <div className="bg-white rounded-xl border border-slate-100 p-3 flex items-start justify-between shadow-sm">
        <div>
          <p className="text-[10px] text-slate-400 font-medium mb-1">Maintenance Due</p>
          <p className="text-2xl font-bold text-slate-800 leading-none mb-1.5">8</p>
          <p className="text-[10px] text-indigo-500 font-medium">View all</p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2C5.686 2 3 4.686 3 8c0 3.314 2.686 6 6 6s6-2.686 6-6c0-3.314-2.686-6-6-6z" stroke="#fbbf24" strokeWidth="1.4"/>
            <path d="M9 5v4l2.5 1.5" stroke="#fbbf24" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
