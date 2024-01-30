import TicketCard from "../components/TicketCard";

import style from "../styles/components/EventCard.module.css";

import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";

import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
// import { useCallback } from "react";
import { useParams } from "react-router-dom";

export default function DetailTicket() {
  const { event_id } = useParams();
  const [eventCard, setEventCard] = useState(null);
  // id = eventCard._id;

  useEffect(() => {
    const getEventCard = async () => {
      try {
        const eventCardResponse = await axiosInstance.get(
          `/event/detail/${event_id}`
        );
        const responseData = eventCardResponse.data;
        const { status } = responseData;
        if (status === 200) {
          setEventCard(responseData.detail);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getEventCard();
  }, [event_id]);

  const renderEventCard = () => {
    if (!eventCard) {
      return null; // Return early if eventCard is still empty
    }
    return (
      <div
        className={style.card}
        style={{ marginTop: "100px" }}
        key={eventCard._id}>
        <div className={style.content}>
          <h3>{eventCard.event}</h3>
          <div className={style.detail_content}>
            <span>{eventCard.type}</span>
            <span>
              <BsCalendarDateFill />
              {eventCard.date}
            </span>
            <span>
              <MdAccessTimeFilled />
              {eventCard.time}
            </span>
            <span>
              <MdLocationOn />
              {eventCard.place}
            </span>
          </div>
          <p>{eventCard.description}</p>
        </div>
        <div className={style.thumb}>
          <img src={eventCard.thumbnail?.url} alt="event" width="100%" />
        </div>
      </div>
    );
  };

  return (
    <section className="page-container-no-bottom">
      <div style={{ textAlign: "center" }}>
        <h1 className="glitch">
          <span aria-hidden="true">TICKET LIST</span>
          TICKET LIST
          <span aria-hidden="true">TICKET LIST</span>
        </h1>
      </div>
      {renderEventCard()}
      <TicketCard event={event_id} />
    </section>
  );
}
