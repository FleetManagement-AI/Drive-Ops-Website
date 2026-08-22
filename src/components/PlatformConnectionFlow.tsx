import React, { useRef, useEffect, useState } from "react"
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  useNodesState,
  useEdgesState,
  Position,
  Handle,
  type Node,
  type Edge,
  type NodeProps,
  type EdgeProps,
  getBezierPath,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import {
  FileSpreadsheet, MessageSquare, Fuel, Wrench,
  UserRound, ReceiptText, BarChart3,
} from "lucide-react"
import { motion } from "framer-motion"

/* ─── Challenge card data ─── */
const CHALLENGES = [
  { id: "c0", icon: FileSpreadsheet, label: "Vehicles in\nSpreadsheets",     iconColor: "text-blue-600",    iconBg: "bg-blue-50"   },
  { id: "c1", icon: MessageSquare,   label: "Trip Tracking\nin WhatsApp",     iconColor: "text-emerald-600", iconBg: "bg-emerald-50"},
  { id: "c2", icon: Fuel,            label: "Fuel Expenses\nHard to Track",   iconColor: "text-amber-600",   iconBg: "bg-amber-50"  },
  { id: "c3", icon: Wrench,          label: "Maintenance\nOften Missed",      iconColor: "text-orange-600",  iconBg: "bg-orange-50" },
  { id: "c4", icon: UserRound,       label: "Driver Payroll\nManually Done",  iconColor: "text-purple-600",  iconBg: "bg-purple-50" },
  { id: "c5", icon: ReceiptText,     label: "Revenue &\nExpenses Scattered",  iconColor: "text-rose-600",    iconBg: "bg-rose-50"   },
  { id: "c6", icon: BarChart3,       label: "No Clear\nProfitability View",   iconColor: "text-slate-600",   iconBg: "bg-slate-100" },
]

const CARD_W = 116
const CARD_H = 128  // approx rendered height
const H_GAP  = 14   // gap between cards
const V_GAP  = 140  // vertical space between card bottom and logo center — makes curves pronounced
const CANVAS_H = CARD_H + V_GAP + 110  // cards + gap + logo area

/* ─── Custom node: Challenge card ─── */
type ChallengeData = { icon: React.ElementType; label: string; iconColor: string; iconBg: string }

function ChallengeNode({ data }: NodeProps<Node<ChallengeData>>) {
  const Icon = data.icon
  const lines = data.label.split("\n")
  return (
    <div
      className="flex flex-col items-center gap-2 bg-white rounded-xl border border-slate-200/80 shadow-sm px-3 py-3 select-none"
      style={{ width: CARD_W }}
    >
      <div className={`w-9 h-9 rounded-full ${data.iconBg} flex items-center justify-center`}>
        <Icon className={`w-4 h-4 ${data.iconColor}`} aria-hidden="true" />
      </div>
      <p className="text-[10.5px] font-semibold text-slate-700 text-center leading-snug">
        {lines.map((l, i) => (
          <React.Fragment key={i}>{l}{i < lines.length - 1 && <br />}</React.Fragment>
        ))}
      </p>
      <div className="w-[18px] h-[18px] rounded-full bg-red-50 border border-red-300 flex items-center justify-center">
        <span className="text-red-500 text-[9px] font-black leading-none">✕</span>
      </div>
      <Handle type="source" position={Position.Bottom} style={{ opacity: 0, bottom: 0 }} />
    </div>
  )
}

/* ─── Custom node: DriveOps logo node ─── */
function DriveOpsLogoNode() {
  return (
    <div className="flex flex-col items-center select-none">
      <Handle type="target" position={Position.Top} style={{ opacity: 0, top: 0 }} />
      <div className="relative flex items-center justify-center" style={{ width: 80, height: 80 }}>
        {/* Outer glow pulse ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)",
            transform: "scale(1.7)",
          }}
          aria-hidden="true"
        />
        {/* Main node */}
        <div
          className="relative w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center"
          style={{
            border: "1.5px solid rgba(37,99,235,0.3)",
            boxShadow: "0 0 0 7px rgba(37,99,235,0.07), 0 8px 28px rgba(37,99,235,0.22), 0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src="/logo/driveops-logo-blue-edited.png"
            alt="DriveOps"
            className="w-10 h-10 object-contain"
            draggable={false}
          />
        </div>
      </div>
      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 mt-2">DriveOps</p>
    </div>
  )
}

/* ─── Custom edge: animated dotted bezier ─── */
function AnimatedDottedEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }: EdgeProps) {
  const [edgePath] = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition })
  return (
    <g>
      <path
        id={id}
        fill="none"
        stroke="#3B82F6"
        strokeWidth={1.6}
        strokeDasharray="5 4"
        strokeOpacity={0.55}
        d={edgePath}
      />
      {/* One-shot animated travelling dot */}
      <circle r={3.5} fill="#3B82F6" opacity={0.8}>
        <animateMotion dur="1.4s" repeatCount="1" path={edgePath} begin="0.2s" />
      </circle>
    </g>
  )
}

const nodeTypes = { challenge: ChallengeNode, driveopsLogo: DriveOpsLogoNode }
const edgeTypes = { animatedDotted: AnimatedDottedEdge }

/* ─── Build nodes and edges ─── */
function buildGraph(canvasWidth: number) {
  const totalCardsW = CHALLENGES.length * CARD_W + (CHALLENGES.length - 1) * H_GAP
  const startX = Math.max(0, (canvasWidth - totalCardsW) / 2)
  const logoCenterX = canvasWidth / 2
  const logoNodeX = logoCenterX - 40  // logo node width ≈ 80
  const logoNodeY = CARD_H + V_GAP - 40 // center of logo vertically

  const nodes: Node[] = CHALLENGES.map((c, i) => ({
    id: c.id,
    type: "challenge",
    position: { x: startX + i * (CARD_W + H_GAP), y: 8 },
    data: { icon: c.icon, label: c.label, iconColor: c.iconColor, iconBg: c.iconBg },
    draggable: false,
    selectable: false,
  }))

  nodes.push({
    id: "logo",
    type: "driveopsLogo",
    position: { x: logoNodeX, y: logoNodeY },
    data: {},
    draggable: false,
    selectable: false,
  })

  const edges: Edge[] = CHALLENGES.map((c) => ({
    id: `e-${c.id}`,
    source: c.id,
    target: "logo",
    type: "animatedDotted",
    animated: false,
    sourceHandle: null,
    targetHandle: null,
  }))

  return { nodes, edges }
}

/* ─── Inner flow (must be inside ReactFlowProvider) ─── */
function FlowInner({ width }: { width: number }) {
  const { nodes: init, edges: initE } = buildGraph(width)
  const [nodes, , onNodesChange] = useNodesState(init)
  const [edges, , onEdgesChange] = useEdgesState(initE)

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      fitView={false}
      panOnDrag={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      preventScrolling={false}
      proOptions={{ hideAttribution: true }}
      defaultViewport={{ x: 0, y: 0, zoom: 1 }}
      style={{ background: "transparent", width, height: CANVAS_H }}
    >
      {/* No Background grid — clean transparent canvas */}
    </ReactFlow>
  )
}

/* ─── Public component ─── */
export default function PlatformConnectionFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setWidth(containerRef.current.offsetWidth)
    }
    // Small delay ensures layout is settled before measuring
    const timer = setTimeout(update, 50)
    const ro = new ResizeObserver(update)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => { clearTimeout(timer); ro.disconnect() }
  }, [])

  return (
    <div className="w-full">
      {/* ── MOBILE FALLBACK (< md): CSS-only 2-column grid — no ReactFlow ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="md:hidden w-full"
        aria-label="Challenge cards showing fleet management problems"
      >
        {/* 2-column grid of challenge cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {CHALLENGES.map((c) => {
            const Icon = c.icon
            const lines = c.label.split("\n")
            return (
              <div
                key={c.id}
                className="flex flex-col items-center gap-2 bg-white rounded-xl border border-slate-200/80 shadow-sm px-3 py-3 select-none"
              >
                <div className={`w-9 h-9 rounded-full ${c.iconBg} flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${c.iconColor}`} aria-hidden="true" />
                </div>
                <p className="text-[10.5px] font-semibold text-slate-700 text-center leading-snug">
                  {lines.map((l, i) => (
                    <React.Fragment key={i}>{l}{i < lines.length - 1 && <br />}</React.Fragment>
                  ))}
                </p>
                <div className="w-[18px] h-[18px] rounded-full bg-red-50 border border-red-300 flex items-center justify-center">
                  <span className="text-red-500 text-[9px] font-black leading-none">✕</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Connector to DriveOps logo */}
        <div className="flex flex-col items-center gap-2">
          <svg width="2" height="32" viewBox="0 0 2 32" aria-hidden="true">
            <line x1="1" y1="0" x2="1" y2="32" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.55" />
          </svg>
          <div className="relative flex items-center justify-center" style={{ width: 72, height: 72 }}>
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)", transform: "scale(1.7)" }}
              aria-hidden="true"
            />
            <div
              className="relative w-[64px] h-[64px] rounded-full bg-white flex items-center justify-center"
              style={{ border: "1.5px solid rgba(37,99,235,0.3)", boxShadow: "0 0 0 7px rgba(37,99,235,0.07), 0 8px 28px rgba(37,99,235,0.22)" }}
            >
              <img src="/logo/driveops-logo-blue-edited.png" alt="DriveOps" className="w-9 h-9 object-contain" draggable={false} />
            </div>
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 mt-1">DriveOps</p>
        </div>
      </motion.div>

      {/* ── DESKTOP / TABLET (≥ md): ReactFlow canvas ── */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="hidden md:block w-full"
        style={{ height: CANVAS_H, overflow: "hidden" }}
        aria-label="Challenge cards connected to DriveOps solution"
      >
        {width > 0 && (
          <ReactFlowProvider>
            <FlowInner width={width} />
          </ReactFlowProvider>
        )}
      </motion.div>
    </div>
  )
}
