"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import profile from "@/data/profile";
import timeline from "@/data/timeline";
import certificates from "@/data/certificates";

const links = [
  ["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"],
  ["Experience", "journey", timeline.length], ["Certificates", "certificates", certificates.length], ["Contact", "contact"],
].filter((l) => l[2] === undefined || l[2] > 0);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let idx = 0;
      links.forEach(([, id], i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) idx = i;
      });
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "s" : ""}>
      <div className="c">
        <nav aria-label="Primary">
          <a className="logo" href="#home">{profile.initials}<i>.</i></a>
          <ul className={open ? "o" : ""}>
            {links.map(([label, id], i) => (
              <li key={id}>
                <a href={`#${id}`} className={active === i ? "on" : ""} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
          <button id="bg" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <Icon name={open ? "x" : "menu"} />
          </button>
        </nav>
      </div>
    </header>
  );
}
