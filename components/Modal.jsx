"use client";
import { useEffect } from "react";

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <div className={`md ${open ? "o" : ""}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="mb">
        <button className="mx" onClick={onClose} aria-label="Close">×</button>
        {open && children}
      </div>
    </div>
  );
}
