"use client";
import { useEffect, useState } from "react";
import profile from "@/data/profile";

export default function Preloader() {
  const [fade, setFade] = useState(false);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const a = setTimeout(() => setFade(true), 900);
    const b = setTimeout(() => setGone(true), 1500);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);
  if (gone) return null;
  return (
    <div id="pre" style={{ opacity: fade ? 0 : 1 }}>
      <b>{profile.initials}<i>.</i></b>
      <div />
    </div>
  );
}
