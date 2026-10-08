"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Modal from "./Modal";
import Icon from "./Icon";
import certificates from "@/data/certificates";

const Pic = ({ c, style }) => (
  <div className="ci" style={style}>
    {c.image ? <img src={c.image} alt={c.title} loading="lazy" /> : c.emoji}
  </div>
);

export default function Certificates() {
  const [sel, setSel] = useState(null);
  return (
    <section id="certificates" className="sec">
      <Reveal className="c">
        <SectionHeader eyebrow="Proof of learning" title="Certificates" text="Sertifikat pembelajaran yang telah saya selesaikan dari berbagai platform dan institusi." />
        <div className="cg">
          {certificates.map((c) => (
            <button key={c.title} type="button" className="gc ce" onClick={() => setSel(c)}>
              <div className="ci">
                {c.image ? <img src={c.image} alt={c.title} loading="lazy" /> : c.emoji}
                <div className="ov"><span><Icon name="zoom" size={14} />Preview</span></div>
              </div>
              <div className="cb">
                <div><Icon name="award" size={14} /><span>{c.year}</span></div>
                <h3>{c.title}</h3>
                <p>{c.issuer}</p>
              </div>
            </button>
          ))}
        </div>
      </Reveal>
      <Modal open={!!sel} onClose={() => setSel(null)}>
        {sel && (<>
          <Pic c={sel} style={{ fontSize: "4.5rem", marginBottom: 18, borderRadius: 14 }} />
          <p style={{ fontSize: ".75rem" }}>{sel.year}</p>
          <h2>{sel.title}</h2>
          <p style={{ color: "var(--s)" }}>{sel.issuer}</p>
        </>)}
      </Modal>
    </section>
  );
}
