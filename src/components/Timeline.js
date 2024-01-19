import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

import style from "../styles/components/Timeline.module.css";

export default function Timeline() {
  const [timeline, setTimeline] = useState(null);

  useEffect(() => {
    const getTimeline = async () => {
      try {
        const timeline = await axiosInstance.get("/content/2/timeline");
        const res = timeline.data;
        const { status } = res;
        const content = res.content;

        if (status === 200) {
          setTimeline(content);
          console.log(content);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getTimeline();
  }, []);

  const renderTimeline = () => {
    if (!timeline) {
      return null; // Return early if eventCard is still empty
    }
    return (
      <img src={timeline.data.image.url} alt="timeline" key={timeline._id} />
    );
  };
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
      {renderTimeline()}
      <Link to="/event">
        <button>MAIN EVENT</button>
      </Link>
    </section>
  );
}
