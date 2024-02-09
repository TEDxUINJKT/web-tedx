import { useEffect, useState } from "react";

import style from "../styles/components/Jumbotron.module.css";

export default function Jumbotron({ data }) {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={style.jumbotron}>
      <div className={style.img_mask} style={{ maskImage: `url(${data?.url})` }}>
        <div
          className={style.roller_text}
          style={{ transform: `translateX(${-scrollY / 20}%)` }}>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
        </div>
        <div
          className={style.roller_text2}
          style={{ transform: `translateX(${scrollY / 20}%)` }}>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
        </div>
      </div>
      <div className={style.outline_mask}>
        <div
          className={style.roller_text}
          style={{ transform: `translateX(${-scrollY / 20}%)` }}>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
        </div>
        <div
          className={style.roller_text2}
          style={{ transform: `translateX(${scrollY / 20}%)` }}>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
        </div>
      </div>
      <img className={style.layer_img} src={data?.url} alt="butterfly.png" />
      <video
        className={style.video}
        width="100%"
        height="100%"
        autoPlay
        loop
        muted>
        <source
          src="https://res.cloudinary.com/delq31bnx/video/upload/v1703572575/bg_ftswhl.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
