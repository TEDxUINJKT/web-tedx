import style from "../styles/components/Partners.module.css";
import { axiosInstance } from "../lib/axios";
import { useState, useEffect } from "react";

import SliderLogo from "./SliderLogo";

export default function Partners() {
  const [medparts, setMedparts] = useState([]);

  const fetchMedparts = async () => {
    try {
      const medpartsResponse = await axiosInstance.get("/partner/2/medpart");
      const responseData = medpartsResponse.data;
      const { status } = responseData;

      if (status === 200) {
        setMedparts(responseData.partners);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMedparts();
  }, []);

  return (
    <section className={style.layout}>
      <div className={style.content}>
        <span>MEET OUR</span>
        <span style={{ color: "#eb0028" }}>MEDIA PARTNERS</span>
        <p style={{ marginTop: "20px" }}>
          We extend our heartfelt gratitude to our valued partners contribution,
          whose support and collaboration played a pivotal role in the success
          of this remarkable event
        </p>
      </div>
      <SliderLogo data={medparts} />
    </section>
  );
}
