import { axiosInstance } from "../lib/axios";
import { useState, useEffect } from "react";
// import Button from "./Button";
import style from "../styles/components/EventCard.module.css";
import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EventCard() {
  const [events, setEvents] = useState([]);
  // const navigate = useNavigate();
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
            <Link to={`/ticket/${event._id}`}>
              <button>GET TICKET</button>
            </Link>
          </div>
          <div className={style.thumb} style={{ backgroundImage: `url(${event.thumbnail.url})` }}>
          </div>
        </div>
      );
    });
  };

  return <section className={style.layout}>{renderEvents()}</section>;
}
