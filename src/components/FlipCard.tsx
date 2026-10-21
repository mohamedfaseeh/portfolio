"use client";

import { useState } from "react";

// An Impact card that turns over to show how the number was reached.
// Hover (or keyboard focus) flips it on desktop; a tap flips it on touch screens.
export default function FlipCard({ front, back }: { front: React.ReactNode; back: React.ReactNode }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <article
      className={`flip-card${flipped ? " is-flipped" : ""}`}
      data-reveal
      tabIndex={0}
      aria-label="Impact card. Press Enter to flip."
      onClick={() => { if (matchMedia("(hover: none)").matches) setFlipped((f) => !f); }}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFlipped((f) => !f); } }}
    >
      <div className="flip-inner">
        <div className="flip-face flip-front">{front}</div>
        <div className="flip-face flip-back" aria-hidden={!flipped}>{back}</div>
      </div>
    </article>
  );
}
