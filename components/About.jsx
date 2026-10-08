import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";
import interests from "@/data/interests";
import profile from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="sec">
      <Reveal className="c">
        <SectionHeader eyebrow="Get to know me" title="About Me" text="A little about my background and what I enjoy." />
        <div className="g5">
          <div>
            <p className="ab">{profile.about}</p>
            <div className="ed">
              <div className="gc"><span className="ic p"><Icon name="grad" /></span><div><b>{profile.school}</b><small>{profile.degree}</small></div></div>
              <div className="gc"><span className="ic s"><Icon name="pin" /></span><div><b>{profile.location}</b><small>Location</small></div></div>
            </div>
          </div>
          <div>
            <div className="ih"><span style={{ color: "var(--ac)", display: "flex" }}><Icon name="spark" /></span>Interests</div>
            <div className="ig">
              {interests.map((i) => (<div className="gc" key={i.label}><Icon name={i.icon} size={18} /><span>{i.label}</span></div>))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
