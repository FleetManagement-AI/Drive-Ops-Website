import React from "react"

export const HeroTripsOverview: React.FC = () => {
  // 42 total: 28 completed (66%), 10 ongoing (24%), 4 delayed (10%)
  const total = 42
  const segments = [
    { label: "Completed", count: 28, pct: "66%", color: "#22c55e" },
    { label: "Ongoing",   count: 10, pct: "24%", color: "#4f46e5" },
    { label: "Delayed",   count: 4,  pct: "70%", color: "#f97316" },
  ]

  // SVG donut — cx=50, cy=50, r=36, circumference=226.2
  const cx = 50, cy = 50, r = 36
  const circ = 2 * Math.PI * r // ~226.2
  const gaps = 3 // small gap between segments in px
  const values = [28, 10, 4]
  const totalVal = values.reduce((a, b) => a + b, 0)

  let offset = 0
  // Start from top (-90deg): strokeDashoffset shifts start point
  const arcs = values.map((v, i) => {
    const dashLen = (v / totalVal) * circ - gaps
    const o = offset
    offset += (v / totalVal) * circ
    return { dashLen, startOffset: circ - o + circ * 0.25 }
  })

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3.5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[12px] font-semibold text-slate-700">Trips Overview</span>
        <button className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
          This Month
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Donut + Legend side by side */}
      <div className="flex items-center gap-4">
        {/* Donut Chart */}
        <div className="relative flex-shrink-0">
          <svg width="88" height="88" viewBox="0 0 100 100">
            {/* Background ring */}
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f1f5f9" strokeWidth="11"/>

            {/* Completed - green */}
            <circle
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke="#22c55e"
              strokeWidth="11"
              strokeDasharray={`${arcs[0].dashLen} ${circ - arcs[0].dashLen}`}
              strokeDashoffset={arcs[0].startOffset}
              strokeLinecap="butt"
              transform="rotate(-90 50 50) rotate(0 50 50)"
            />
            {/* Ongoing - indigo */}
            <circle
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke="#4f46e5"
              strokeWidth="11"
              strokeDasharray={`${arcs[1].dashLen} ${circ - arcs[1].dashLen}`}
              strokeDashoffset={arcs[1].startOffset}
              strokeLinecap="butt"
              transform="rotate(-90 50 50)"
            />
            {/* Delayed - orange */}
            <circle
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke="#f97316"
              strokeWidth="11"
              strokeDasharray={`${arcs[2].dashLen} ${circ - arcs[2].dashLen}`}
              strokeDashoffset={arcs[2].startOffset}
              strokeLinecap="butt"
              transform="rotate(-90 50 50)"
            />

            {/* Center label */}
            <text x="50" y="46" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1e293b" fontFamily="system-ui">42</text>
            <text x="50" y="57" textAnchor="middle" fontSize="7" fill="#94a3b8" fontFamily="system-ui">trips</text>
          </svg>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-2 flex-1">
          {segments.map((s) => (
            <div key={s.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }}/>
                <span className="text-[11px] text-slate-500">{s.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-slate-700">{s.count}</span>
                <span className="text-[10px] text-slate-400">({s.pct})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
