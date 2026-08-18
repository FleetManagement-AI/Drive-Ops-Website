import React from "react"

export const HeroFleetMap: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm h-full flex flex-col overflow-hidden">
      {/* Card Header */}
      <div className="flex items-center justify-between px-3.5 pt-3 pb-2 flex-shrink-0">
        <span className="text-[12px] font-semibold text-slate-700">Live Fleet Tracking</span>
        <button className="text-[10px] text-indigo-600 font-medium border border-indigo-200 rounded-md px-2 py-0.5 hover:bg-indigo-50 transition-colors">
          View All Trips
        </button>
      </div>

      {/* Map Body */}
      <div className="flex-1 relative overflow-hidden mx-3 mb-3 rounded-lg min-h-[160px]">
        {/* Map background — light road-grid */}
        <svg
          viewBox="0 0 340 200"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="340" height="200" fill="#e8eff7"/>

          {/* Grid roads horizontal */}
          {[20, 45, 80, 115, 145, 170, 195, 225].map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="340" y2={y} stroke="white" strokeWidth="10"/>
          ))}
          {/* Grid roads vertical */}
          {[30, 75, 120, 165, 210, 255, 300].map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="200" stroke="white" strokeWidth="10"/>
          ))}

          {/* Water / river-like shape */}
          <path d="M0 155 Q50 148 100 155 Q150 162 200 155 Q250 148 300 155 Q320 158 340 155 L340 175 Q320 172 300 168 Q250 162 200 168 Q150 175 100 168 Q50 162 0 168Z" fill="#b8d4ea" opacity="0.6"/>

          {/* City blocks */}
          {[
            [35,25,30,15], [80,25,30,15], [125,25,30,15], [170,25,30,15], [215,25,30,15], [260,25,30,15],
            [35,60,30,30], [80,60,30,30], [125,60,30,30], [170,60,30,30], [215,60,30,30], [260,60,30,30],
            [35,100,30,30], [80,100,30,30], [125,100,30,30], [215,100,30,30], [260,100,30,30],
            [35,140,30,10], [80,140,30,10], [125,140,30,10], [215,135,30,12], [260,135,30,12],
          ].map(([x,y,w,h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="2" fill="white" opacity="0.7"/>
          ))}

          {/* Route path — dashed blue line */}
          <path
            d="M60 30 Q80 50 100 80 Q120 110 155 120 Q190 130 220 100 Q250 70 280 160"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            strokeLinecap="round"
          />

          {/* Vehicle 1 — white truck top-left area */}
          <g transform="translate(95, 76)">
            <rect x="-9" y="-6" width="18" height="12" rx="3" fill="white" stroke="#94a3b8" strokeWidth="1"/>
            <rect x="-7" y="-4" width="14" height="5" rx="1" fill="#60a5fa"/>
            <circle cx="-5" cy="6" r="2" fill="#374151"/>
            <circle cx="5" cy="6" r="2" fill="#374151"/>
          </g>

          {/* Vehicle 2 — green van middle */}
          <g transform="translate(190, 105)">
            <rect x="-9" y="-6" width="18" height="12" rx="3" fill="white" stroke="#94a3b8" strokeWidth="1"/>
            <rect x="-7" y="-4" width="14" height="5" rx="1" fill="#34d399"/>
            <circle cx="-5" cy="6" r="2" fill="#374151"/>
            <circle cx="5" cy="6" r="2" fill="#374151"/>
          </g>

          {/* Vehicle 3 — yellow taxi lower */}
          <g transform="translate(240, 140)">
            <rect x="-9" y="-6" width="18" height="12" rx="3" fill="white" stroke="#94a3b8" strokeWidth="1"/>
            <rect x="-7" y="-4" width="14" height="5" rx="1" fill="#fbbf24"/>
            <circle cx="-5" cy="6" r="2" fill="#374151"/>
            <circle cx="5" cy="6" r="2" fill="#374151"/>
          </g>

          {/* Map pin — start (top-left) */}
          <g transform="translate(60, 22)">
            <path d="M0-10C-4-10-7-7-7-3c0 5.5 7 13 7 13s7-7.5 7-13c0-4-3-7-7-7z" fill="#4f46e5"/>
            <circle cx="0" cy="-3" r="2.5" fill="white"/>
          </g>

          {/* Map pin — end (bottom-right) */}
          <g transform="translate(280, 153)">
            <path d="M0-10C-4-10-7-7-7-3c0 5.5 7 13 7 13s7-7.5 7-13c0-4-3-7-7-7z" fill="#4f46e5"/>
            <circle cx="0" cy="-3" r="2.5" fill="white"/>
          </g>

          {/* Map pin — green destination mid-right */}
          <g transform="translate(220, 75)">
            <path d="M0-9C-3.5-9-6-6.5-6-3c0 5 6 11 6 11s6-6 6-11c0-3.5-2.5-6-6-6z" fill="#34d399"/>
            <circle cx="0" cy="-3" r="2" fill="white"/>
          </g>
        </svg>
      </div>
    </div>
  )
}
