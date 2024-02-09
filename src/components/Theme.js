import style from "../styles/components/Theme.module.css";

export default function Theme({ data }) {
  return (
    <div id="theme">
      <section className={style.layout}>
        <img src={data.image.url} alt="theme" width="80%" height="auto" />
        <div className={style.title}>
          <p style={{ color: "#eb0028" }}>GRAND THEME</p>
          <span >{data.title}</span>
        </div>
        <div className={style.content}>
          <p>{data.description}</p>
        </div>
      </section>
    </div>
  )
}
