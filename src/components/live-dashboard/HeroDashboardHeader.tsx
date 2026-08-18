import React from "react"

export const HeroDashboardHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-100">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2C5.8 2 4 3.8 4 6c0 1.4.7 2.6 1.8 3.4L4.5 13h7l-1.3-3.6C11.3 8.6 12 7.4 12 6c0-2.2-1.8-4-4-4z" fill="white" opacity="0.9"/>
            <circle cx="8" cy="6" r="1.5" fill="white"/>
          </svg>
        </div>
        <span className="font-semibold text-slate-800 text-[15px] tracking-tight">DriveOps</span>
      </div>

      {/* Right: Depots dropdown + Bell + Avatar */}
      <div className="flex items-center gap-3">
        {/* All Depots dropdown */}
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 text-xs font-medium hover:bg-slate-50 transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="3" width="12" height="2" rx="1" fill="currentColor" opacity="0.5"/>
            <rect x="1" y="7" width="8" height="2" rx="1" fill="currentColor" opacity="0.5"/>
            <path d="M10 8l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          All Depots
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Notification Bell */}
        <div className="relative">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5A4.5 4.5 0 003.5 6v2.5L2 10.5h12l-1.5-2V6A4.5 4.5 0 008 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              <path d="M6.5 11.5a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
          {/* Red badge */}
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[9px] font-bold leading-none">3</span>
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white shadow-sm">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="7" r="3.5" fill="white" opacity="0.9"/>
            <path d="M2 16c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
