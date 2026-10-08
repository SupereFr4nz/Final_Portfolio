"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Modal from "./Modal";
import Icon from "./Icon";
import SafeImg from "./SafeImg";
import projects from "@/data/projects";

function Thumb({ p }) {
  return (
    <div className="th" style={{ background: p.gradient }}>
      {p.image
        ? <SafeImg src={p.image} alt={`${p.name} thumbnail`} fallback={<b>{p.letter}</b>} />
        : <b>{p.letter}</b>}
      {p.category && <span className="chip">{p.category}</span>}
    </div>
  );
}
const Tags = ({ tags }) => (tags?.length ? <div className="tg">{tags.map((t) => <span key={t}>{t}</span>)}</div> : null);
const hasDetail = (p) => !!(p.description || p.tags?.length || p.github);

export default function Projects() {
  const [sel, setSel] = useState(null);
  return (
    <section id="projects" className="sec">
      <Reveal className="c">
        <SectionHeader eyebrow="Selected work" title="Projects" text="Some of the projects I've built." />
        <div className="pg">
          {projects.map((p) => (
            <article key={p.name} className="gc pj" style={hasDetail(p) ? undefined : { cursor: "default" }} onClick={hasDetail(p) ? () => setSel(p) : undefined}>
              <Thumb p={p} />
              <div className="pb">
                <h3>{p.name}</h3>
                {p.description && <p>{p.description}</p>}
                <Tags tags={p.tags} />
                {p.github && (
                  <a className="gh" href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} GitHub repository`} onClick={(e) => e.stopPropagation()}><Icon name="github" size={15} /></a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
      <Modal open={!!sel} onClose={() => setSel(null)}>
        {sel && (<>
          <Thumb p={sel} />
          <h2>{sel.name}</h2>
          {sel.description && <p>{sel.description}</p>}
          <Tags tags={sel.tags} />
          {sel.github && <div style={{ marginTop: 20 }}><a className="btn p" href={sel.github} target="_blank" rel="noreferrer"><Icon name="github" />View on GitHub</a></div>}
        </>)}
      </Modal>
    </section>
  );
}
