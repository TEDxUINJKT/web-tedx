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
          setBanner(content);
          console.log(content);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBanner();
  }, []);

  //   const backgroundImage = {
  //     backgroundImage: banner.data.image.url,
  //   };

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
      <div className={style.img_mask}>
        <div
          className={style.roller_text}
          style={{ transform: `translateX(${-scrollY / 25}%)` }}>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
        </div>
        <div
          className={style.roller_text2}
          style={{ transform: `translateX(${scrollY / 25}%)` }}>
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
          style={{ transform: `translateX(${-scrollY / 25}%)` }}>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
        </div>
        <div
          className={style.roller_text2}
          style={{ transform: `translateX(${scrollY / 25}%)` }}>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
          <span>UINJAKARTA</span>
          <span>TEDx</span>
        </div>
      </div>
      {/* {renderBanner()} */}
      {/* <img className={style.layer_img} src={butterfly} alt="butterfly.png" /> */}
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
