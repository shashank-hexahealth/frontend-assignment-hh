import React from "react";

export default function Spinner() {
  return (
    <svg viewBox="0 0 24 24" height={20} className="svg-class">
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={1}
        pathLength="100"
        className="circle"
      />
    </svg>
  );
}
