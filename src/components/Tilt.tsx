"use client";

import type { PointerEvent, ReactNode } from "react";

interface TiltProps {
  children: ReactNode;
  className?: string;
  max?: number;
}

// 3D tilt toward the cursor plus a moving glare; writes CSS vars directly so it never re-renders.
export default function Tilt({ children, className = "", max = 10 }: TiltProps) {
  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    el.style.setProperty("--rx", `${(0.5 - y) * max}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * max}deg`);
    el.style.setProperty("--gx", `${x * 100}%`);
    el.style.setProperty("--gy", `${y * 100}%`);
  }

  function handleLeave(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
  }

  return (
    <div className={`tilt-3d ${className}`} onPointerMove={handleMove} onPointerLeave={handleLeave}>
      {children}
    </div>
  );
}
