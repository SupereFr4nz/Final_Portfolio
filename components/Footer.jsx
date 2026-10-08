"use client";
import Icon from "./Icon";
import profile from "@/data/profile";

export default function Footer() {
  return (
    <footer>
      <div className="c">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="so">
          <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a>
        </div>
        <div className="so">
          <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><Icon name="up" /></button>
        </div>
      </div>
    </footer>
  );
}
