"use client";

import React, { useState } from "react";

type District = {
  name: string;
  population: string;
  literacyRate: string;
  sexRatio: string;
  // Transparent hitboxes coordinates (approximate overlay for the image)
  path: string;
};

const DISTRICTS: District[] = [
  {
    name: "West Tripura",
    population: "1,724,619",
    literacyRate: "93.04%",
    sexRatio: "960",
    path: "M 320,380 L 380,340 L 440,380 L 445,460 L 400,520 L 340,500 L 310,450 Z"
  },
  {
    name: "Sepahijala",
    population: "631,777",
    literacyRate: "89.73%",
    sexRatio: "975",
    path: "M 310,450 L 340,500 L 400,520 L 415,620 L 380,680 L 320,650 L 290,550 Z"
  },
  {
    name: "Gomati",
    population: "449,302",
    literacyRate: "88.46%",
    sexRatio: "967",
    path: "M 415,620 L 520,530 L 600,600 L 580,720 L 500,750 L 420,680 Z"
  },
  {
    name: "South Tripura",
    population: "432,564",
    literacyRate: "88.03%",
    sexRatio: "970",
    path: "M 420,680 L 500,750 L 580,720 L 540,850 L 480,950 L 400,850 L 350,750 Z"
  },
  {
    name: "Khowai",
    population: "326,143",
    literacyRate: "89.94%",
    sexRatio: "965",
    path: "M 440,380 L 520,340 L 580,450 L 550,550 L 520,530 L 445,460 Z"
  },
  {
    name: "Dhalai",
    population: "378,230",
    literacyRate: "86.76%",
    sexRatio: "942",
    path: "M 520,340 L 700,420 L 750,550 L 700,750 L 600,600 L 550,550 Z"
  },
  {
    name: "Unakoti",
    population: "279,117",
    literacyRate: "92.81%",
    sexRatio: "957",
    path: "M 620,180 L 750,220 L 820,300 L 780,450 L 700,420 L 650,250 Z"
  },
  {
    name: "North Tripura",
    population: "595,034",
    literacyRate: "88.82%",
    sexRatio: "945",
    path: "M 750,220 L 880,150 L 980,250 L 940,450 L 820,300 Z"
  }
];

export default function TripuraInteractiveMap() {
  const [active, setActive] = useState<District | null>(null);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: "0",
    flexWrap: "wrap",
    backgroundColor: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    border: "1px solid #eee",
    minHeight: "550px",
  };

  const mapPanelStyle: React.CSSProperties = {
    flex: "2 1 500px",
    padding: "0", // No padding so the image fills nicely
    position: "relative",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  };

  return (
    <div style={containerStyle}>
      {/* Map Image with SVG Overlay */}
      <div style={mapPanelStyle}>
        {/* The Exact Image the User Provided */}
        <img 
          src="/tripura-map-labeled.png" 
          alt="Official Tripura Map" 
          style={{ width: "100%", height: "auto", display: "block" }}
        />

        {/* Transparent SVG Overlay for Interactivity */}
        <svg
          viewBox="0 0 1280 900" // Corresponds to the image aspect ratio
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {DISTRICTS.map((d) => (
            <path
              key={d.name}
              d={d.path}
              fill="rgba(255, 255, 255, 0)" // Transparent hitzone
              stroke="rgba(0, 159, 204, 0)" // Invisible border
              strokeWidth="2"
              onMouseEnter={() => setActive(d)}
              onMouseLeave={() => setActive(null)}
              style={{ cursor: "pointer", transition: "all 0.3s ease" }}
            />
          ))}
        </svg>

        {/* Floating Tooltip Placeholder when hovering */}
        {active && (
          <div style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "rgba(0, 86, 179, 0.9)",
            color: "white",
            padding: "8px 15px",
            borderRadius: "20px",
            fontSize: "0.9rem",
            fontWeight: "bold",
            pointerEvents: "none",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}>
            🖱️ Viewing Data for {active.name}...
          </div>
        )}
      </div>

      {/* Side Info Panel */}
      <div style={{
        flex: "1 1 300px",
        backgroundColor: "#fdfdfd",
        borderLeft: "1px solid #eee",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        {active ? (
          <>
            <h2 style={{
              color: "var(--primary-color)",
              marginTop: 0,
              marginBottom: "25px",
              borderBottom: "4px solid var(--secondary-color)",
              paddingBottom: "10px",
              fontSize: "1.6rem"
            }}>
              District Info
            </h2>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "15px", color: "#333" }}>{active.name}</div>
            {[
              { label: "Population (2011 Census)", value: active.population, color: "#0056b3" },
              { label: "Literacy Rate (%)", value: active.literacyRate, color: "#83245a" },
              { label: "Sex Ratio (per 1,000)", value: active.sexRatio, color: "#16a085" },
            ].map(({ label, value, color }) => (
              <div key={label} style={{
                backgroundColor: "white",
                borderLeft: `5px solid ${color}`,
                borderRadius: "8px",
                padding: "18px",
                marginBottom: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
              }}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888" }}>{label}</div>
                <div style={{ fontSize: "1.6rem", fontWeight: "bold", marginTop: "5px", color: "#222" }}>{value}</div>
              </div>
            ))}
          </>
        ) : (
          <div style={{ textAlign: "center", color: "#999" }}>
            <div style={{ fontSize: "5rem", marginBottom: "25px" }}>🏛️</div>
            <h3 style={{ color: "var(--primary-color)", margin: "0 0 10px" }}>District Data Hub</h3>
            <p style={{ fontSize: "1rem", margin: 0, lineHeight: 1.6 }}>Move your mouse over the map to explore demographic data of each district.</p>
          </div>
        )}
      </div>
    </div>
  );
}
