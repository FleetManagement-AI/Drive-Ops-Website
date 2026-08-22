import React from "react";
import "./FleetTrackingMap.css";
import carSvg from "../assets/car_topview.svg";
import carBlue from "../assets/car_blue.svg";
import carGreen from "../assets/car_green.svg";
import carOrange from "../assets/car_orange.svg";
import carPurple from "../assets/car_purple.svg";

type VehicleColor = "blue" | "green" | "orange" | "purple";

type Vehicle = {
  id: string;
  registration: string;
  model: string;
  speed?: number;
  status?: "ACTIVE" | "DELAYED";
  color: string;
  vehicleImage: string;
  routeId: string;
  duration: string;
  beginOffset?: string;
};

const VEHICLE_COLORS: Record<VehicleColor, string> = {
  blue: "#287CF4",
  green: "#13B878",
  orange: "#F9A900",
  purple: "#7552E8",
};

const vehicles: Vehicle[] = [
  {
    id: "blue",
    registration: "KL07 AB 1234",
    model: "Innova Crysta",
    speed: 48,
    color: VEHICLE_COLORS.blue,
    vehicleImage: carBlue || carSvg,
    routeId: "route-blue",
    duration: "7s",
    beginOffset: "0s",
  },
  {
    id: "green",
    registration: "KL07 CD 5678",
    model: "Ace Gold",
    speed: 32,
    color: VEHICLE_COLORS.green,
    vehicleImage: carGreen || carSvg,
    routeId: "route-green",
    duration: "8s",
    beginOffset: "-2s",
  },
  {
    id: "orange",
    registration: "KL07 EF 9012",
    model: "Traveller 17S",
    status: "DELAYED",
    color: VEHICLE_COLORS.orange,
    vehicleImage: carOrange || carSvg,
    routeId: "route-orange",
    duration: "9s",
    beginOffset: "-4s",
  },
  {
    id: "purple",
    registration: "KL07 GH 3456",
    model: "BharatBenz 1412",
    speed: 62,
    color: VEHICLE_COLORS.purple,
    vehicleImage: carPurple || carSvg,
    routeId: "route-purple",
    duration: "7.5s",
    beginOffset: "-3s",
  },
];

/**
 * Topview vehicle rendered with natural proportions and automatic path orientation.
 * Rotated by 90deg so the front-facing direction matches SVG motion vector.
 */
function FleetVehicle({ vehicle }: { vehicle: Vehicle }) {
  return (
    <g
      className={`fleet-vehicle fleet-vehicle-${vehicle.id}`}
      style={
        {
          "--vehicle-color": vehicle.color,
        } as React.CSSProperties
      }
    >
      {/* Subtle soft ground shadow sitting directly on the route */}
      <ellipse
        cx="0"
        cy="0"
        rx="16"
        ry="8"
        fill="#172033"
        opacity="0.18"
        filter="url(#vehicle-shadow)"
      />

      {/* Vehicle image with rotate(90) so front aligns with route path */}
      <g transform="rotate(90)">
        <image
          href={vehicle.vehicleImage}
          x="-7"
          y="-15"
          width="14"
          height="30"
          preserveAspectRatio="xMidYMid meet"
          style={{
            filter: "drop-shadow(0 2px 2px rgba(20, 30, 45, 0.18))",
          }}
        />
      </g>
    </g>
  );
}

function LocationPin({
  x,
  y,
  color,
}: {
  x: number;
  y: number;
  color: string;
}) {
  return (
    <g
      transform={`translate(${x} ${y})`}
      className="location-pin"
    >
      <circle
        cx="0"
        cy="3"
        r="10"
        fill={color}
        opacity="0.12"
      />

      <path
        d="
          M0 -11
          C-5.8 -11 -9.5 -6.8 -9.5 -1.5
          C-9.5 5.2 0 14 0 14
          C0 14 9.5 5.2 9.5 -1.5
          C9.5 -6.8 5.8 -11 0 -11
          Z
        "
        fill={color}
      />

      <circle
        cx="0"
        cy="-1.5"
        r="3.3"
        fill="white"
      />
    </g>
  );
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className={`vehicle-card card-${vehicle.id}`}>
      <div className="vehicle-registration">
        {vehicle.registration}
      </div>

      <div className="vehicle-model">
        {vehicle.model}
      </div>

      {vehicle.status === "DELAYED" ? (
        <div className="delay-row">
          <span className="delay-dot" />
          <span>Delayed</span>
        </div>
      ) : (
        <div className="speed-row">
          <svg
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2 8.5C2.6 5.8 4.2 4.3 6 4.3C7.8 4.3 9.4 5.8 10 8.5"
              stroke={vehicle.color}
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              d="M6 8L8 6"
              stroke={vehicle.color}
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            <circle
              cx="6"
              cy="8"
              r="1"
              fill={vehicle.color}
            />
          </svg>

          <span>{vehicle.speed} km/h</span>
        </div>
      )}
    </div>
  );
}

export default function FleetTrackingMap() {
  return (
    <div className="fleet-map">
      {/* ================= 1. MAP BACKGROUND LAYER ================= */}
      <svg
        className="map-background"
        viewBox="0 0 580 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="map-bg"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#F8FAFB"
            />
            <stop
              offset="100%"
              stopColor="#EEF2F4"
            />
          </linearGradient>

          <filter id="map-blur">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        <rect
          width="580"
          height="400"
          fill="url(#map-bg)"
        />

        {/* Water body / River */}
        <path
          d="
            M385 -20
            C370 45 405 83 391 128
            C375 178 404 211 389 259
            C376 301 395 343 375 420
            H445
            C454 359 438 318 454 270
            C470 222 438 185 451 135
            C463 89 431 46 443 -20
            Z
          "
          fill="#DDEFF7"
          opacity=".7"
        />

        {/* Secondary water channel */}
        <path
          d="
            M-20 303
            C55 286 85 318 140 307
            C198 296 232 325 290 314
            C347 303 388 332 431 321
            C484 308 533 322 610 306
          "
          fill="none"
          stroke="#DCEFF6"
          strokeWidth="18"
          opacity=".65"
        />

        {/* Green vegetation parks */}
        <path
          d="
            M430 24
            C455 7 500 14 520 38
            C539 61 515 87 486 84
            C454 81 418 55 430 24Z
          "
          fill="#E3F1E8"
        />

        <path
          d="
            M24 155
            C47 130 83 132 98 153
            C111 172 94 194 66 195
            C37 196 12 178 24 155Z
          "
          fill="#E4F2E9"
        />

        {/* Major road network */}
        <g
          fill="none"
          stroke="#D7DDE2"
          strokeLinecap="round"
        >
          <path
            d="
              M-30 102
              C70 122 119 102 177 129
              C242 159 298 160 363 130
              C427 100 492 115 610 91
            "
            strokeWidth="7"
          />

          <path
            d="
              M-30 265
              C58 238 121 255 174 286
              C235 322 288 296 341 259
              C397 221 461 240 610 214
            "
            strokeWidth="8"
          />

          <path
            d="
              M109 -20
              C120 59 102 109 133 161
              C166 216 158 269 191 319
              C209 346 222 371 224 420
            "
            strokeWidth="7"
          />

          <path
            d="
              M315 -20
              C301 50 330 93 316 150
              C301 207 326 244 309 297
              C297 335 312 373 321 420
            "
            strokeWidth="6"
          />

          <path
            d="
              M500 -20
              C478 43 503 92 487 143
              C469 202 494 254 478 308
              C468 347 484 382 493 420
            "
            strokeWidth="6"
          />
        </g>

        {/* Secondary streets */}
        <g
          fill="none"
          stroke="#E2E6E9"
          strokeWidth="2"
        >
          <path d="M-10 57L180 202L318 67L505 185L610 145" />
          <path d="M-20 194L100 90L255 116L362 245L530 340" />
          <path d="M35 370L145 247L284 271L397 176L590 274" />
          <path d="M190-20L228 91L205 189L269 269L243 420" />
          <path d="M406-20L370 86L414 173L372 287L410 420" />
          <path d="M550 38L435 150L452 257L387 350" />
          <path d="M65 20L133 79L88 151L176 228L150 381" />
        </g>

        {/* Urban building footprints */}
        <g fill="#EFF1F3">
          <rect x="145" y="36" width="38" height="23" rx="3" />
          <rect x="190" y="47" width="26" height="31" rx="3" />
          <rect x="234" y="26" width="48" height="24" rx="3" />
          <rect x="276" y="62" width="31" height="35" rx="3" />

          <rect x="43" y="218" width="40" height="27" rx="3" />
          <rect x="91" y="231" width="29" height="38" rx="3" />
          <rect x="128" y="214" width="38" height="30" rx="3" />

          <rect x="430" y="112" width="36" height="30" rx="3" />
          <rect x="475" y="126" width="30" height="38" rx="3" />
          <rect x="518" y="103" width="41" height="27" rx="3" />

          <rect x="430" y="280" width="40" height="28" rx="3" />
          <rect x="481" y="293" width="31" height="35" rx="3" />
          <rect x="521" y="273" width="43" height="30" rx="3" />
        </g>
      </svg>

      {/* ================= 2. ROUTE & GLOW LAYER ================= */}
      <svg
        className="route-layer"
        viewBox="0 0 580 400"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id="route-glow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
        </defs>

        {/* 1. Blue Route */}
        <path
          id="route-blue"
          d="
            M 43 44
            C 45 85 58 125 90 165
            C 120 202 155 232 188 260
            C 215 282 232 310 242 350
          "
          fill="none"
          stroke="#287CF4"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="
            M 43 44
            C 45 85 58 125 90 165
            C 120 202 155 232 188 260
            C 215 282 232 310 242 350
          "
          fill="none"
          stroke="#287CF4"
          strokeWidth="7"
          opacity=".12"
          filter="url(#route-glow)"
        />

        {/* 2. Green Route */}
        <path
          id="route-green"
          d="
            M 476 45
            C 468 88 442 122 408 152
            C 372 184 346 212 340 248
            C 334 285 348 328 368 368
          "
          fill="none"
          stroke="#13B878"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="
            M 476 45
            C 468 88 442 122 408 152
            C 372 184 346 212 340 248
            C 334 285 348 328 368 368
          "
          fill="none"
          stroke="#13B878"
          strokeWidth="7"
          opacity=".12"
          filter="url(#route-glow)"
        />

        {/* 3. Orange Route */}
        <path
          id="route-orange"
          d="
            M 188 260
            C 210 278 235 292 262 298
            C 290 304 316 296 338 280
            C 356 268 376 258 402 254
          "
          fill="none"
          stroke="#F9A900"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="
            M 188 260
            C 210 278 235 292 262 298
            C 290 304 316 296 338 280
            C 356 268 376 258 402 254
          "
          fill="none"
          stroke="#F9A900"
          strokeWidth="7"
          opacity=".12"
          filter="url(#route-glow)"
        />

        {/* 4. Purple Route */}
        <path
          id="route-purple"
          d="
            M 340 248
            C 356 274 378 298 402 318
            C 430 340 458 354 488 368
          "
          fill="none"
          stroke="#7552E8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="
            M 340 248
            C 356 274 378 298 402 318
            C 430 340 458 354 488 368
          "
          fill="none"
          stroke="#7552E8"
          strokeWidth="7"
          opacity=".12"
          filter="url(#route-glow)"
        />
      </svg>

      {/* ================= 3. LOCATION PINS LAYER ================= */}
      <svg
        className="pin-layer"
        viewBox="0 0 580 400"
        preserveAspectRatio="none"
      >
        <LocationPin
          x={43}
          y={44}
          color={VEHICLE_COLORS.blue}
        />
        <LocationPin
          x={476}
          y={45}
          color={VEHICLE_COLORS.green}
        />
      </svg>

      {/* ================= 4. MOVING VEHICLES LAYER ================= */}
      <svg
        className="vehicle-layer"
        viewBox="0 0 580 400"
        preserveAspectRatio="none"
      >
        <defs>
          <filter
            id="vehicle-shadow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="1.5"
            />
          </filter>
        </defs>

        {vehicles.map((v) => (
          <g key={v.id}>
            <animateMotion
              dur={v.duration}
              begin={v.beginOffset || "0s"}
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href={`#${v.routeId}`} />
            </animateMotion>

            <FleetVehicle vehicle={v} />
          </g>
        ))}
      </svg>

      {/* ================= 5. FLOATING INFORMATION CARDS LAYER ================= */}
      <div className="cards-layer">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
          />
        ))}
      </div>
    </div>
  );
}
