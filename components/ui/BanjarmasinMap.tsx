"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Next.js - Stable Initialization
let customIcon: L.Icon | undefined;
if (typeof window !== "undefined") {
  customIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
}

export default function BanjarmasinMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Cleanup function to ensure Leaflet instances are destroyed correctly during HMR
    return () => {
      setMounted(false);
    };
  }, []);

  // Center of Banjarmasin (Menara Pandang area)
  const position: [number, number] = [-3.3228, 114.5944];

  // River routes (Martapura River flow near Siring)
  const riverRoute: [number, number][] = [
    [-3.3180, 114.5880],
    [-3.3220, 114.5930],
    [-3.3260, 114.5980],
    [-3.3320, 114.6020],
  ];

  if (!mounted) return (
    <div className="w-full h-[600px] bg-river-blue/5 rounded-[3.5rem] animate-pulse flex items-center justify-center font-heading text-river-blue/20">
      Initializing Map...
    </div>
  );

  return (
    <div className="w-full h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/10 relative">
      <MapContainer 
        center={position} 
        zoom={14} 
        scrollWheelZoom={false} 
        className="w-full h-full grayscale-[0.8] hover:grayscale-0 transition-all duration-1000 z-10"
        // Key helps React identify when to fully re-mount the component during HMR
        key="banjarmasin-map-instance"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        {customIcon && (
          <Marker position={position} icon={customIcon}>
            <Popup>
              <div className="p-2 font-body">
                <h3 className="font-bold text-river-blue text-sm">Menara Pandang</h3>
                <p className="text-[10px] text-gray-600 leading-relaxed">Landmark Ikonik Siring Martapura.</p>
              </div>
            </Popup>
          </Marker>
        )}

        <Polyline 
          positions={riverRoute} 
          pathOptions={{ color: "#D4AF37", weight: 4, opacity: 0.5, dashArray: "8, 12" }} 
        />
      </MapContainer>
      
      {/* Map Overlay Info - High Z-Index to stay above map */}
      <div className="absolute top-8 left-8 z-[1000] p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
        <h3 className="text-white font-heading text-xl font-black mb-1">Peta Interaktif Siring</h3>
        <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.2em] leading-relaxed">
          Explore the "Seribu Sungai" <br /> Heart of Banjarmasin
        </p>
      </div>
    </div>
  );
}
