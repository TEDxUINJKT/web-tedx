import style from "../styles/components/Theme.module.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

import Theme_img from '../assets/theme.png';

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
          <img src={Theme_img} alt="theme" width="80%" height="auto" />
          <div className={style.title}>
            <p style={{ color: "#eb0028" }}>GRAND THEME</p>
            <span >{theme.data.title}</span>
          </div>
          <div className={style.content}>
            <p>{theme.data.description}</p>
          </div>
        </section>
      </div>
    );
  };

  return renderTheme(); // Atau return elemen HTML sederhana jika diperlukan
}
