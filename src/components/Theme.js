import style from "../styles/components/Theme.module.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

export default function Theme() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const getTheme = await axiosInstance.get("/content/2/theme");
        const res = getTheme.data;
        const { status } = res;
        const content = res.content;

        if (status === 200) {
          setTheme(content);
          console.log(content);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTheme();
  }, []);

  const renderTheme = () => {
    if (!theme) {
      return null; // Return early if eventCard is still empty
    }
    return (
      <div id="theme">
        <section className={style.layout} key={theme._id}>
          <div className={style.title}>
            <span>{theme.data.title}</span>
            <h2 style={{ color: "#eb0028" }}>GRAND THEME</h2>
          </div>
          <div className={style.content}>
            <p>{theme.data.description}</p>
          </div>
          <div className={style.sub_theme_list}>
            <button>PERFECT METAMORPHOSIS</button>
            <button>ANOTHER SIDE OF WINGS</button>
            <button>POLLINATION FANTASIA</button>
          </div>
          <div className={style.images_layout}>
            <img
              src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572568/hand_bf2_nepfle.png"
              alt="hand 1"
            />
            <img
              src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572570/hand_bf5_xty9io.png"
              alt="hand 1"
            />
          </div>
        </section>
      </div>
    );
  };

  return renderTheme(); // Atau return elemen HTML sederhana jika diperlukan
}
