import style from "../styles/components/Theme.module.css";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";

export default function Theme() {
  const [theme, setTheme] = useState([]);

  const fetchTheme = async () => {
    try {
      const theme = await axiosInstance.get("/content/2/theme");
      const responseData = theme.data;
      const { status } = responseData;

      if (status === 200) {
        setTheme(responseData.content);
        console.log(responseData.content);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTheme();
  }, []);

  const renderTheme = () => {
    return theme?.map((item) => {
      return (
        <section className={style.layout} key={item._id}>
          <div className={style.title}>
            <span>{item.data.title}</span>
            <h2 style={{ color: "#eb0028" }}>GRAND THEME</h2>
          </div>
          <div className={style.content}>
            <p>
              Butterflies have capture the imagination throughout time and are
              often associated with love and transformation. Their delicate
              wings and otherworldly colors have also associated them with
              faeries and other air elementals.
            </p>
          </div>
          <div className={style.sub_theme_list}>
            <button>PERFECT METAMORPHOSIS</button>
            <button>ANOTHER SIDE OF WINGS</button>
            <button>PALLINATION FANTASIA</button>
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
      );
    });
  };
  return (
    <section className={style.layout}>
      <div className={style.title}>
        <span>"The Perfect Sense of Butterfly"</span>
        <h2 style={{ color: "#eb0028" }}>GRAND THEME</h2>
      </div>
      <div className={style.content}>
        <p>
          Butterflies have capture the imagination throughout time and are often
          associated with love and transformation. Their delicate wings and
          otherworldly colors have also associated them with faeries and other
          air elementals.
        </p>
      </div>
      <div className={style.sub_theme_list}>
        <button>PERFECT METAMORPHOSIS</button>
        <button>ANOTHER SIDE OF WINGS</button>
        <button>PALLINATION FANTASIA</button>
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
  );
}
