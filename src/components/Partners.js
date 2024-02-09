import style from "../styles/components/Partners.module.css";

import SliderLogo from "./SliderLogo";

export default function Partners({ data }) {
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
      <SliderLogo data={data} />
    </section>
  );
}
