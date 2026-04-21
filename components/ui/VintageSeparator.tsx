"use client";

import React from "react";
import { Landmark } from "lucide-react";

export default function VintageSeparator() {
  return (
    <div className="py-20 flex items-center justify-center gap-8 max-w-4xl mx-auto px-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-river-blue/20 to-river-blue/40" />
      <div className="p-4 rounded-full border border-river-blue/10 bg-white shadow-xl text-river-blue/40">
        <Landmark size={24} />
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-river-blue/20 to-river-blue/40" />
    </div>
  );
}
