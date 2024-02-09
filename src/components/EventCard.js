import { MdLocationOn } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import style from "../styles/components/EventCard.module.css";

export default function EventCard({ data }) {
  return (
    <section className={style.layout}>
      {data?.map(each => (
        <div className={style.card} key={each._id}>
          <div className={style.content}>
            <h3>{each.event}</h3>
            <div className={style.detail_content}>
              <span>{each.type}</span>
              <span>
                <BsCalendarDateFill />
                {each.date}
              </span>
              <span>
                <MdLocationOn />
                {each.place}
              </span>
            </div>
            <p className="pc">{each.description}</p>
            <div className={style.cta}>
              <Link to={`/ticket/${each._id}`}>
                <button>GET TICKET</button>
              </Link>
            </div>
          </div>
          <div className={style.thumb} style={{ backgroundImage: `url(${each.thumbnail.url})` }}>
          </div>
        </div>
      ))}
    </section>
  )
}
