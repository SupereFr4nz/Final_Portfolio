"use client";
import { useEffect, useRef, useState } from "react";

// <img> that shows `fallback` if the file is missing, instead of a broken icon.
export default function SafeImg({ src, alt, className, fallback = null, loading = "lazy" }) {
  const ref = useRef(null);
  const [bad, setBad] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setBad(true);
  }, []);
  if (bad) return fallback;
  return <img ref={ref} src={src} alt={alt} className={className} loading={loading} onError={() => setBad(true)} />;
}
