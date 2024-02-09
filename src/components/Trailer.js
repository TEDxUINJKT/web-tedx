import style from "../styles/components/Teaser.module.css";

export default function Trailer({ data }) {
  return (
    <section className={style.layout}>
      <div className={style.content}>
        <p>MAIN EVENT</p>
        <p style={{ color: "#eb0028" }}>TEASER</p>
      </div>
      <div className={style.video}>
        <iframe
          style={{ borderRadius: "10px" }}
          src={data}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
    </section>
  );
}
