import { moments, stats } from "@/data/content";
import CountUp from "./CountUp";
import Heartbeat from "./Heartbeat";
import FlipCard from "./FlipCard";

export default function Moments() {
  return (
    <section id="moments" className="section moments">
      <div className="section-marker">
        <span>04 — IMPACT</span>
        <span>THE WORK ADDS UP</span>
      </div>
      <h2 data-reveal>Small fixes.{" "}<br /><em>Meaningful uptime.</em></h2>

      <div className="stats">
        {stats.map((s) => (
          <div key={s.label}>
            {"text" in s ? (
              <strong>{s.text}</strong>
            ) : (
              <strong><CountUp value={s.value!} />{s.suffix}</strong>
            )}
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="moment-cards">
        {moments.map((m) => (
          <FlipCard
            key={m.eyebrow}
            front={
              <>
                {"monitor" in m && m.monitor ? (
                  <Heartbeat systems={m.monitor} />
                ) : (
                  <span className="moment-symbol">{m.symbol}</span>
                )}
                <p className="eyebrow">{m.eyebrow}</p>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </>
            }
            back={
              <>
                <p className="eyebrow">{m.eyebrow}</p>
                <h3>{m.back.title}</h3>
                <ul className="flip-points">
                  {m.back.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </>
            }
          />
        ))}
      </div>
    </section>
  );
}
