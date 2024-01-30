import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

import style from "../styles/components/Jumbotron.module.css";

export default function Jumbotron() {
  const [scrollY, setScrollY] = useState(0);
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const banner = await axiosInstance.get("/content/2/banner");
        const res = banner.data;
        const { status } = res;
        const content = res.content;

        if (status === 200) {
          setBanner(content.data.image.url);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBanner();
  }, []);

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
      <div className={style.img_mask} style={{ maskImage: `url(${banner})` }}>
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
      <img className={style.layer_img} src={banner} alt="butterfly.png" />
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
