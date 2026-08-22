import React from 'react';
import FleetTrackingMap from '@/components/FleetTrackingMap';
import { Activity, Radio, ShieldCheck, MapPin } from 'lucide-react';

const FleetMapPreview: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Container with header badge */}
      <div className="w-full max-w-[760px] flex flex-col items-center gap-6">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Radio className="w-3.5 h-3.5 animate-pulse text-blue-400" />
            <span>Live Telemetry & Tracking</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Fleet Tracking Map Component Preview
          </h1>
          <p className="text-sm text-slate-400 max-w-md">
            Interactive SVG route canvas with CSS path animation, dynamic telemetry badges, and floating status cards.
          </p>
        </div>

        {/* The Component Card Preview */}
        <div className="w-full p-3 sm:p-6 bg-slate-800/80 rounded-2xl border border-slate-700/60 shadow-2xl backdrop-blur-md flex justify-center items-center">
          <FleetTrackingMap />
        </div>

        {/* Live Legend & Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
              4
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">Active Units</div>
              <div className="text-[10px] text-slate-400">GPS streaming</div>
            </div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
              3
            </div>
            <div>
              <div className="text-xs font-semibold text-emerald-300">On Schedule</div>
              <div className="text-[10px] text-slate-400">Normal speed</div>
            </div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold">
              1
            </div>
            <div>
              <div className="text-xs font-semibold text-amber-300">Delayed Alert</div>
              <div className="text-[10px] text-slate-400">KL07 EF 9012</div>
            </div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">
              <Activity className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">Path Motion</div>
              <div className="text-[10px] text-slate-400">CSS offsetPath</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetMapPreview;
