"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";
import profile from "@/data/profile";

const cards = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "phone", label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: "pin", label: "Location", value: profile.location },
];
const empty = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [f, setF] = useState(empty);
  const [status, setStatus] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(f.subject || `Portfolio message from ${f.name}`);
    const body = encodeURIComponent(`${f.message}\n\n— ${f.name} (${f.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app…");
    setF(empty);
  };

  return (
    <section id="contact" className="sec">
      <Reveal className="c">
        <SectionHeader eyebrow="Let's connect" title="Contact Me" text="Feel free to reach out if you have questions, project ideas, or just want to connect." />
        <div className="ctg">
          <div className="cl">
            {cards.map((c) => {
              const inner = (<>
                <span className="ic p"><Icon name={c.icon} size={18} /></span>
                <span><small>{c.label}</small><b>{c.value}</b></span>
              </>);
              return c.href
                ? <a key={c.label} className="gc" href={c.href}>{inner}</a>
                : <div key={c.label} className="gc cdiv">{inner}</div>;
            })}
          </div>
          <form className="gc" onSubmit={submit} autoComplete="off">
            <div className="fr">
              <div><label htmlFor="name">Name</label><input id="name" required value={f.name} onChange={set("name")} placeholder="Your Name" /></div>
              <div><label htmlFor="email">Email</label><input id="email" type="email" required value={f.email} onChange={set("email")} placeholder="Your Email" /></div>
            </div>
            <div><label htmlFor="subject">Subject</label><input id="subject" value={f.subject} onChange={set("subject")} placeholder="Subject" /></div>
            <div><label htmlFor="message">Message</label><textarea id="message" rows={6} required value={f.message} onChange={set("message")} placeholder="Your Message" /></div>
            <div><button className="btn p" type="submit"><Icon name="send" />Send Message</button></div>
            <div id="fm" role="status">{status}</div>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
