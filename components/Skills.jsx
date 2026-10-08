"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";
import SafeImg from "./SafeImg";
import skills, { categories } from "@/data/skills";

export default function Skills() {
  const [cat, setCat] = useState("All");
  const shown = skills.filter((s) => cat === "All" || s.category === cat);
  return (
    <section id="skills" className="sec">
      <Reveal className="c">
        <SectionHeader eyebrow="What I work with" title="Tech Stack" text="The tools and technologies I use to build my projects." />
        <div className="fl">
          {categories.map((c) => (<button key={c} type="button" className={c === cat ? "on" : ""} onClick={() => setCat(c)}>{c}</button>))}
        </div>
        <div className="sg sg-logos">
          {shown.map((s) => (
            <div className="sk" key={s.name}>
              <span className="ic has">
                {s.image
                  ? <SafeImg src={s.image} alt={s.name} fallback={<Icon name="code" size={24} />} />
                  : <Icon name="code" size={24} />}
              </span>
              <b>{s.name}</b><small>{s.category}</small>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
