"use client";
import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";
import timeline from "@/data/timeline";

export default function Journey() {
  const wrap = useRef(null);
  const fill = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const r = wrap.current.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (window.innerHeight * 0.6 - r.top) / r.height));
      fill.current.style.transform = `translateX(-50%) scaleY(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  return (
    <section id="journey" className="sec">
      <Reveal className="c">
        <SectionHeader eyebrow="My path so far" title="Journey Timeline" text="Perjalanan pendidikan dan pengalaman kerja yang membentuk kemampuan saya saat ini." />
        <div className="tlw" ref={wrap}>
          <div className="ln" /><div className="lf" ref={fill} />
          {timeline.map((t, i) => (
            <Reveal key={t.title} className={`ti ${i % 2 === 1 ? "r" : ""}`}>
              <span className="dot"><Icon name={t.icon} /></span>
              <div className="gc">
                <span className="eb">{t.period}</span>
                <h3>{t.title}</h3>
                <p className="o">{t.org}</p>
                <p>{t.description}</p>
                <div className="tg">{t.tags.map((x) => <span key={x}>{x}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
