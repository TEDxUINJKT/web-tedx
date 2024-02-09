import { Link } from "react-router-dom";

import style from "../styles/components/Timeline.module.css";

export default function Timeline({ data }) {
  return (
    <section className={style.layout}>
      <div className={style.title}>
        <span style={{ color: "#eb0028" }}>EVENT </span>
        <span>TIMELINE</span>
      </div>
      <span className={`${style.float_version} glitch`}>
        <span aria-hidden="true">v2.0</span>
        v2.0
        <span aria-hidden="true">v2.0</span>
      </span>
      <img src={data?.url} alt="timeline" />
      <Link to="/event">
        <button>MAIN EVENT</button>
      </Link>
    </section>
  );
}
