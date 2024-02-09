import TicketCard from "../components/TicketCard";

import style from "../styles/components/EventCard.module.css";

import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";

import { useParams } from "react-router-dom";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { EventDetailContent } from '../state/content/middleware'

export default function DetailTicket() {
  const { event_id } = useParams();
  const dispatch = useDispatch()
  const { content } = useSelector(states => states)

  useEffect(() => {
    dispatch(EventDetailContent(event_id))
  }, [dispatch, event_id])

  return (
    <section className="page-container-no-bottom">
      <div style={{ textAlign: "center" }}>
        <h1 className="glitch">
          <span aria-hidden="true">TICKET LIST</span>
          TICKET LIST
          <span aria-hidden="true">TICKET LIST</span>
        </h1>
      </div>
      {content.selected_detail && (
        <div
          className={style.card}
          style={{ marginTop: "100px" }}
          key={content.selected_detail?._id}>
          <div className={style.content}>
            <h3>{content.selected_detail?.event}</h3>
            <div className={style.detail_content}>
              <span>{content.selected_detail?.type}</span>
              <span>
                <BsCalendarDateFill />
                {content.selected_detail?.date}
              </span>
              <span>
                <MdAccessTimeFilled />
                {content.selected_detail?.time}
              </span>
              <span>
                <MdLocationOn />
                {content.selected_detail?.place}
              </span>
            </div>
            <p>{content.selected_detail?.description}</p>
          </div>
          <div className={style.thumb}>
            <img src={content.selected_detail?.thumbnail?.url} alt="event" width="100%" />
          </div>
        </div>
      )}
      <TicketCard data={content.ticket} />
    </section>
  );
}
