import React, { useRef, useEffect, useState } from "react"
import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Position,
  Handle,
  type Node,
  type Edge,
  type NodeProps,
  type EdgeProps,
  getBezierPath,
  getStraightPath,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import {
  Truck, Users, Navigation, Bell,
  Fuel, ReceiptText, IndianRupee, PieChart,
  type LucideIcon,
} from "lucide-react"
import HeroDashboardVisual from "./hero/HeroDashboardVisual"
import { motion } from "framer-motion"

/* ─── Data ─── */
const LEFT_CAPS = [
  { id: "lc0", icon: Truck,        title: "Fleet & Vehicles",      desc: "All vehicles, documents, insurance & compliance in one place.", iconColor: "text-blue-600",   iconBg: "bg-blue-50",   stroke: "#3B82F6" },
  { id: "lc1", icon: Users,        title: "Drivers & Attendance",  desc: "Driver profiles, licenses, attendance, shifts & payroll.",      iconColor: "text-indigo-600", iconBg: "bg-indigo-50", stroke: "#6366F1" },
  { id: "lc2", icon: Navigation,   title: "Trips & Dispatch",      desc: "Create trips, assign drivers & track in real-time.",            iconColor: "text-purple-600", iconBg: "bg-purple-50", stroke: "#A855F7" },
  { id: "lc3", icon: Bell,         title: "Maintenance & Alerts",  desc: "Schedule services & never miss maintenance again.",             iconColor: "text-orange-600", iconBg: "bg-orange-50", stroke: "#F97316" },
]
const RIGHT_CAPS = [
  { id: "rc0", icon: Fuel,         title: "Fuel Management",       desc: "Track fuel fills, mileage, efficiency and costs.",              iconColor: "text-emerald-600", iconBg: "bg-emerald-50", stroke: "#10B981" },
  { id: "rc1", icon: ReceiptText,  title: "Expense Management",    desc: "Record all expenses, categorize and manage payments.",           iconColor: "text-cyan-600",    iconBg: "bg-cyan-50",    stroke: "#06B6D4" },
  { id: "rc2", icon: IndianRupee,  title: "Revenue Management",    desc: "Track trip revenue, rental income and earnings.",               iconColor: "text-teal-600",    iconBg: "bg-teal-50",    stroke: "#14B8A6" },
  { id: "rc3", icon: PieChart,     title: "Profitability Insights", desc: "Real-time reports to grow your bottom line.",                  iconColor: "text-violet-600",  iconBg: "bg-violet-50",  stroke: "#8B5CF6" },
]

/* ─── Layout constants ─── */
const CARD_W    = 216
const CARD_H    = 98
const CARD_GAP  = 14
const N         = 4
const CARDS_H   = N * CARD_H + (N - 1) * CARD_GAP  // 4*98 + 3*14 = 434
const CONV_SIZE = 16
const GAP_AC    = 36   // card → convergence horizontal gap
const GAP_CD    = 36   // convergence → dashboard horizontal gap
const CANVAS_H  = 530  // tall enough for dashboard (~470) + padding

/* ─── Compute x-positions from total canvas width ─── */
function layout(cw: number) {
  const DASH_W = Math.max(cw - 2 * (CARD_W + GAP_AC + CONV_SIZE + GAP_CD), 380)

  const leftCardX  = 0
  const leftConvX  = CARD_W + GAP_AC
  const dashX      = leftConvX + CONV_SIZE + GAP_CD
  const rightConvX = dashX + DASH_W + GAP_CD
  const rightCardX = rightConvX + CONV_SIZE + GAP_AC

  const cardsTopY  = (CANVAS_H - CARDS_H) / 2          // vertical-center cards
  const convY      = (CANVAS_H - CONV_SIZE) / 2         // vertical-center convergence
  const dashY      = Math.max((CANVAS_H - 472) / 2, 8)  // vertical-center dashboard

  return { DASH_W, leftCardX, leftConvX, dashX, rightConvX, rightCardX, cardsTopY, convY, dashY }
}

/* ─── Custom node: Capability card ─── */
type CapData = { icon: LucideIcon; title: string; desc: string; iconColor: string; iconBg: string; stroke: string; side: "left" | "right" }

function CapabilityCardNode({ data }: NodeProps<Node<CapData>>) {
  const Icon = data.icon
  return (
    <div
      className={`flex items-start gap-2.5 bg-white rounded-xl border border-slate-200/80 shadow-sm px-3 py-3 select-none
        ${data.side === "right" ? "flex-row-reverse text-right" : "text-left"}`}
      style={{ width: CARD_W, height: CARD_H, overflow: "hidden" }}
    >
      {/* Source handle */}
      {data.side === "left"
        ? <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
        : <Handle type="source" id="left" position={Position.Left} style={{ opacity: 0 }} />
      }
      <div className={`w-8 h-8 rounded-lg ${data.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
        <Icon className={`w-[17px] h-[17px] ${data.iconColor}`} aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11.5px] font-bold text-slate-800 leading-snug mb-0.5">{data.title}</p>
        <p className="text-[10px] text-slate-500 leading-relaxed">{data.desc}</p>
      </div>
    </div>
  )
}

/* ─── Custom node: Convergence dot ─── */
type ConvData = { color: string }

function ConvergenceNode({ data }: NodeProps<Node<ConvData>>) {
  return (
    <div
      className="rounded-full"
      style={{
        width: CONV_SIZE, height: CONV_SIZE,
        background: data.color,
        boxShadow: `0 0 0 4px ${data.color}2a, 0 0 14px ${data.color}55`,
      }}
    >
      {/* Receive edges from left cards */}
      <Handle type="target" position={Position.Left} style={{ opacity: 0, top: "50%" }} />
      {/* Receive edges from right cards */}
      <Handle type="target" id="right" position={Position.Right} style={{ opacity: 0, top: "50%" }} />
      {/* Send edge to dashboard (left conv → dash left) */}
      <Handle type="source" id="srcRight" position={Position.Right} style={{ opacity: 0, top: "50%" }} />
      {/* Send edge to dashboard (right conv → dash right) */}
      <Handle type="source" id="srcLeft" position={Position.Left} style={{ opacity: 0, top: "50%" }} />
    </div>
  )
}

/* ─── Custom node: Dashboard ─── */
type DashData = { width: number }

function DashboardNode({ data }: NodeProps<Node<DashData>>) {
  return (
    <div style={{ width: data.width, height: 472, overflow: "hidden" }}>
      <Handle type="target" id="left"  position={Position.Left}  style={{ opacity: 0, top: "50%" }} />
      <Handle type="target" id="right" position={Position.Right} style={{ opacity: 0, top: "50%" }} />
      <HeroDashboardVisual />
    </div>
  )
}

/* ─── Custom edge: Fan-in (card → convergence) ─── */
function FanEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data }: EdgeProps) {
  const [path] = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition })
  const stroke = (data?.stroke as string) ?? "#94A3B8"
  return (
    <g>
      <path fill="none" stroke={stroke} strokeWidth={1.4} strokeDasharray="5 4" strokeOpacity={0.5} d={path} />
      <circle r={3} fill={stroke} opacity={0.75}>
        <animateMotion dur="1.2s" repeatCount="1" path={path} begin="0.15s" />
      </circle>
    </g>
  )
}

/* ─── Custom edge: Convergence → Dashboard (straight, prominent) ─── */
function ConvEdge({ sourceX, sourceY, targetX, targetY }: EdgeProps) {
  const [path] = getStraightPath({ sourceX, sourceY, targetX, targetY })
  const arrowRight = targetX > sourceX  // left→right or right→left
  return (
    <g>
      <path fill="none" stroke="#3B82F6" strokeWidth={2} strokeDasharray="6 4" strokeOpacity={0.6} d={path} />
      {/* Arrowhead at target */}
      {arrowRight
        ? <polygon points={`${targetX},${targetY} ${targetX - 8},${targetY - 4} ${targetX - 8},${targetY + 4}`} fill="#3B82F6" opacity={0.65} />
        : <polygon points={`${targetX},${targetY} ${targetX + 8},${targetY - 4} ${targetX + 8},${targetY + 4}`} fill="#3B82F6" opacity={0.65} />
      }
      <circle r={3.5} fill="#3B82F6" opacity={0.85}>
        <animateMotion dur="0.7s" repeatCount="1" path={path} begin="0.3s" />
      </circle>
    </g>
  )
}

const nodeTypes = { capCard: CapabilityCardNode, convNode: ConvergenceNode, dashNode: DashboardNode }
const edgeTypes = { fanEdge: FanEdge, convEdge: ConvEdge }

/* ─── Graph builder ─── */
function buildGraph(cw: number) {
  const { DASH_W, leftCardX, leftConvX, dashX, rightConvX, rightCardX, cardsTopY, convY, dashY } = layout(cw)
  const nodes: Node[] = []
  const edges: Edge[] = []

  // Left capability card nodes + fan-in edges → leftConv
  LEFT_CAPS.forEach((c, i) => {
    nodes.push({ id: c.id, type: "capCard", position: { x: leftCardX, y: cardsTopY + i * (CARD_H + CARD_GAP) }, data: { ...c, side: "left" }, draggable: false, selectable: false })
    edges.push({ id: `el-${c.id}`, source: c.id, target: "leftConv", type: "fanEdge", data: { stroke: c.stroke } })
  })

  // Left convergence node
  nodes.push({ id: "leftConv", type: "convNode", position: { x: leftConvX, y: convY }, data: { color: "#3B82F6" }, draggable: false, selectable: false })

  // Left convergence → Dashboard (left edge)
  edges.push({ id: "e-lconv-dash", source: "leftConv", target: "dashboard", type: "convEdge", sourceHandle: "srcRight", targetHandle: "left" })

  // Central Dashboard node
  nodes.push({ id: "dashboard", type: "dashNode", position: { x: dashX, y: dashY }, data: { width: DASH_W }, draggable: false, selectable: false })

  // Right capability card nodes + fan-in edges → rightConv
  RIGHT_CAPS.forEach((c, i) => {
    nodes.push({ id: c.id, type: "capCard", position: { x: rightCardX, y: cardsTopY + i * (CARD_H + CARD_GAP) }, data: { ...c, side: "right" }, draggable: false, selectable: false })
    edges.push({ id: `er-${c.id}`, source: c.id, target: "rightConv", type: "fanEdge", data: { stroke: c.stroke }, sourceHandle: "left" })
  })

  // Right convergence node
  nodes.push({ id: "rightConv", type: "convNode", position: { x: rightConvX, y: convY }, data: { color: "#3B82F6" }, draggable: false, selectable: false })

  // Right convergence → Dashboard (right edge)
  edges.push({ id: "e-rconv-dash", source: "rightConv", target: "dashboard", type: "convEdge", sourceHandle: "srcLeft", targetHandle: "right" })

  return { nodes, edges }
}

/* ─── Inner flow (inside ReactFlowProvider) ─── */
function FlowInner({ width }: { width: number }) {
  const [nodes, , onNC] = useNodesState(buildGraph(width).nodes)
  const [edges, , onEC] = useEdgesState(buildGraph(width).edges)
  return (
    <ReactFlow
      nodes={nodes} edges={edges}
      onNodesChange={onNC} onEdgesChange={onEC}
      nodeTypes={nodeTypes} edgeTypes={edgeTypes}
      fitView={false} defaultViewport={{ x: 0, y: 0, zoom: 1 }}
      panOnDrag={false} zoomOnScroll={false} zoomOnPinch={false}
      zoomOnDoubleClick={false} nodesDraggable={false}
      nodesConnectable={false} elementsSelectable={false}
      preventScrolling={false} proOptions={{ hideAttribution: true }}
      style={{ background: "transparent", width, height: CANVAS_H }}
    />
  )
}

/* ─── Public component ─── */
export default function CapabilityFlowSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const update = () => { if (ref.current) setWidth(ref.current.offsetWidth) }
    const t = setTimeout(update, 60)
    const ro = new ResizeObserver(update)
    if (ref.current) ro.observe(ref.current)
    return () => { clearTimeout(t); ro.disconnect() }
  }, [])

  return (
    <div className="w-full">
      {/* ── MOBILE FALLBACK (< md): vertical stacked layout — no ReactFlow ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="md:hidden w-full space-y-4"
        aria-label="DriveOps platform capabilities"
      >
        {/* Left Capabilities (2-col grid) */}
        <div className="grid grid-cols-2 gap-2.5">
          {LEFT_CAPS.map((c) => {
            const Icon = c.icon
            return (
              <div key={c.id} className="flex items-start gap-2.5 bg-white rounded-xl border border-slate-200/80 shadow-sm px-3 py-3 select-none">
                <div className={`w-8 h-8 rounded-lg ${c.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon className={`w-[17px] h-[17px] ${c.iconColor}`} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-slate-800 leading-snug mb-0.5">{c.title}</p>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Connector to dashboard */}
        <div className="flex flex-col items-center gap-1">
          <svg width="2" height="24" viewBox="0 0 2 24" aria-hidden="true">
            <line x1="1" y1="0" x2="1" y2="24" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.55" />
          </svg>
          <div
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
            style={{ border: "1.5px solid rgba(37,99,235,0.3)", boxShadow: "0 0 0 5px rgba(37,99,235,0.07), 0 4px 16px rgba(37,99,235,0.18)" }}
          >
            <img src="/logo/driveops-logo-blue-edited.png" alt="DriveOps" className="w-6 h-6 object-contain" draggable={false} />
          </div>
          <svg width="2" height="24" viewBox="0 0 2 24" aria-hidden="true">
            <line x1="1" y1="0" x2="1" y2="24" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.55" />
          </svg>
        </div>

        {/* Dashboard — constrained width, horizontally scrollable only within this container */}
        <div className="w-full overflow-x-auto rounded-2xl border border-slate-200/90 shadow-xl shadow-blue-900/10" style={{ WebkitOverflowScrolling: "touch" }}>
          <div style={{ minWidth: 520 }}>
            <HeroDashboardVisual />
          </div>
        </div>

        {/* Right Capabilities (2-col grid) */}
        <div className="grid grid-cols-2 gap-2.5">
          {RIGHT_CAPS.map((c) => {
            const Icon = c.icon
            return (
              <div key={c.id} className="flex items-start gap-2.5 bg-white rounded-xl border border-slate-200/80 shadow-sm px-3 py-3 select-none">
                <div className={`w-8 h-8 rounded-lg ${c.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon className={`w-[17px] h-[17px] ${c.iconColor}`} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-slate-800 leading-snug mb-0.5">{c.title}</p>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* ── DESKTOP / TABLET (≥ md): ReactFlow canvas ── */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="hidden md:block w-full"
        style={{ height: CANVAS_H }}
        aria-label="DriveOps platform capabilities connected to central dashboard"
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
