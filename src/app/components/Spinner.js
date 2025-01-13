import React from "react";

export default function Spinner({ size = 48, thickness = "1.5" }) {
  return (
    <div id="spinner">
      <svg viewBox="0 0 24 24" height={size} className="svg-class">
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth={thickness}
          pathLength="100"
          className="circle"
        />
      </svg>
    </div>
  );
}
