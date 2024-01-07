import { axiosInstance } from "../lib/axios";
import { useState, useEffect } from "react";
import Button from "./Button";
import style from "../styles/components/EventCard.module.css";
import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
// import { Link } from "react-router-dom";

export default function EventCard() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const eventsResponse = await axiosInstance.get("/event/2");
      const responseData = eventsResponse.data;
      const { status } = responseData;

      if (status === 200) {
        setEvents(responseData.events);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const renderEvents = () => {
    return events.map((event) => {
      return (
        <div className={style.card} key={event._id}>
          <div className={style.content}>
            <h3>{event.event}</h3>
            <div className={style.detail_content}>
              <span>{event.type}</span>
              <span>
                <BsCalendarDateFill />
                {event.date}
              </span>
              <span>
                <MdAccessTimeFilled />
                {event.time}
              </span>
              <span>
                <MdLocationOn />
                {event.place}
              </span>
            </div>
            <p>{event.description}</p>
            <Button id={event._id} />
          </div>
          <div className={style.thumb}>
            <img src={event.thumbnail.url} alt="event" width="100%" />
          </div>
        </div>
      );
    });
  };

  return <section className={style.layout}>{renderEvents()}</section>;
}
