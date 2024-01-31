import { useEffect, useState } from "react";
import style from "../styles/components/Speakers.module.css";
import { axiosInstance } from "../lib/axios";
export default function Speakers({ type }) {
  const [speakersMain, setspeakersMain] = useState([]);

  const fetchSpeakersMain = async (speaker_type) => {
    try {
      const speakersMain = await axiosInstance.get(`/speaker/2/${speaker_type}`);
      const responseData = speakersMain.data;
      const { status } = responseData;

      if (status === 200) {
        setspeakersMain(responseData.speaker);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSpeakersMain(type);
  }, [type]);

  const renderSpeakersMain = () => {
    return speakersMain.map((speaker) => {
      return (
        <div className={style.speaker} key={speaker._id}>
          <img
            src={speaker.picture.url}
            alt={speaker.full_name}
          />
          <p>{speaker.full_name}</p>
        </div>
      );
    });
  };
  return (
    <section className={style.layout}>
      <div className={style.content}>
        {renderSpeakersMain()}
      </div>

      <div className={style.title2}>
        <span>SPEAKERs</span>
        <span>{type}</span>
        <span>SPEAKERs</span>
        <span>{type}</span>
      </div>
      <div className={style.title}>
        <span>{type}</span>
        <span>SPEAKERs</span>
        <span>{type}</span>
        <span>SPEAKERs</span>
      </div>
    </section>
  );
}
