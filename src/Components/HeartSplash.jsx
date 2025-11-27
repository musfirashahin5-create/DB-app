import React from "react";
import "../index.css";

export default function HeartSplash() {
  return (
    <div className="splash">
      <div className="heart-wrap" aria-hidden>
        <div className="heart big" />
        <div className="heart small" />
        <div className="heart big" />
        <div className="heart small" />
        <div className="heart big" />
        <div className="heart small" />
        <div className="heart big" />
        <div className="heart small" />
      </div>
      <div className="splash-text">A little love, just for you...</div>
    </div>
  );
}
