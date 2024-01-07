import TicketCard from "../components/TicketCard";

import style from "../styles/components/EventCard.module.css";

import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";

import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { useCallback } from "react";

export default function DetailTicket(id) {
  const [eventCard, setEventCard] = useState([]);
  id = eventCard._id;

  useEffect(() => {
    const getEventCard = async () => {
      try {
        const eventCardResponse = await axiosInstance.get(
          `/event/detail/${id}`
        );
        const responseData = eventCardResponse.data;
        const { status } = responseData;
        console.log(responseData);
        if (status === 200) {
          setEventCard(responseData.detail);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getEventCard();
  }, [id]);

  const renderLink = useCallback(() => {
    console.log(eventCard);
    return (
      <div
        className={style.card}
        style={{ marginTop: "150px" }}
        key={eventCard._id}>
        <div className={style.content}>
          <h3>{eventCard}</h3>
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
  }, [eventCard]);

  return (
    <section style={{ padding: "100px 0 0 0" }}>
      <div style={{ textAlign: "center" }}>
        <h1 className="glitch">
          <span aria-hidden="true">TICKET LIST</span>
          TICKET LIST
          <span aria-hidden="true">TICKET LIST</span>
        </h1>
      </div>
      {renderLink()}
      {/* <div className={style.card} style={{ marginTop: "150px" }}>
        <div className={style.content}>
          <h3>TEDxUINJakarta 2.0</h3>
          <div className={style.detail_content}>
            <span>Main Event</span>
            <span>
              <BsCalendarDateFill />
              Sat, 24th January 2024
            </span>
            <span>
              <MdAccessTimeFilled />
              12:00 AM
            </span>
            <span>
              <MdLocationOn />
              UIN Jakarta
            </span>
          </div>
          <p>
            "Mastering the 'Upheaval Maze' in Today's World Adapting to Change
            and Achieving Success" In our complex era, akin to a labyrinth of
            challenges, navigating change and making wise decisions is
            essential. The 'Upheaval Maze' concept highlights the need to adapt,
            overcome obstacles, and find success amidst turmoil. Join our
            talkshow to explore these themes of change and adaptation in the
            modern world.
          </p>
        </div>
        <div className={style.thumb}>
          <img
            src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572567/event_fmfu3t.jpg"
            alt="event"
            width="100%"
          />
        </div>
      </div> */}
      <TicketCard />
    </section>
  );
}
