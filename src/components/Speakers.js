import style from "../styles/components/Speakers.module.css";

export default function Speakers({ data, type }) {
  return (
    <section className={style.layout}>
      <div className={style.content}>
        {data?.map(each => (
          <div className={style.speaker} key={each._id}>
            <img
              src={each.picture.url}
              alt={each.full_name}
            />
            <p>{each.full_name}</p>
          </div>
        ))}
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
