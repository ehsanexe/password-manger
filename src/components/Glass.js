import React from "react";
import "./glass.css";

export default function Glass({ children, noPadding, style, className = "" }) {
  return (
    <div
      className={`glassContainer ${className}`}
      style={{ padding: noPadding && 0, ...style }}
    >
      {children}
    </div>
  );
}
