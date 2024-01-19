import style from "../styles/components/Teaser.module.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

export default function Trailer() {
  const [teaser, setTeaser] = useState(null);

  useEffect(() => {
    const getTeaser = async () => {
      try {
        const getTeaser = await axiosInstance.get("/content/2/teaser");
        const res = getTeaser.data;
        const { status } = res;
        const content = res.content;

        if (status === 200) {
          setTeaser(content);
          console.log(content);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getTeaser();
  }, []);

  const renderTeaser = () => {
    if (!teaser) {
      return null; // Return early if eventCard is still empty
    }
    return (
      <iframe
        key={teaser._id}
        style={{ borderRadius: "10px" }}
        width="560"
        height="315"
        src={teaser.data.link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    );
  };

  return (
    <section className={style.layout}>
      <div className={style.content}>
        <p>MAIN EVENT</p>
        <p style={{ color: "#eb0028" }}>TEASER</p>
      </div>
      {renderTeaser()}
    </section>
  );
}
