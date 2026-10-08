"use client";
import { useEffect, useRef, useState } from "react";

export default function Reveal({ className = "", children }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.08 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`${className} rv ${seen ? "v" : ""}`}>{children}</div>;
}
