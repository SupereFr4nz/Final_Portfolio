import Icon from "./Icon";
import SafeImg from "./SafeImg";
import profile from "@/data/profile";

export default function Hero() {
  return (
    <section id="home">
      <div className="hl">
        <span className="eb">{profile.eyebrow}</span>
        <h1><span className="gt">{profile.name}</span></h1>
        <p className="role">{profile.role}</p>
        <p className="d">{profile.intro}</p>
        <div className="bts">
          <a className="btn p" href="#contact"><Icon name="mail" />Learn more</a>
        </div>
      </div>
      <div className="hr">
        <div className="lan">
          <div className="strap"><span>PORTFOLIO</span><span>PORTFOLIO</span><span>PORTFOLIO</span></div>
          <div className="clip" />
          <div className="idc has-photo">
            <SafeImg className="pf" src={profile.photo} alt={profile.name} loading="eager" fallback={<div className="ph" />} />
            <em>{profile.shortName}</em>
            <small>{profile.school.toUpperCase()}</small>
          </div>
        </div>
      </div>
      <a className="dn" href="#about" aria-label="Scroll to About section"><Icon name="down" size={18} /></a>
    </section>
  );
}
