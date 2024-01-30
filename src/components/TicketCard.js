import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import style from "../styles/components/TicketCard.module.css";

export default function TicketCard({ event }) {
  const [tickets, setTicket] = useState([]);

  useEffect(() => {
    const getTicket = async () => {
      try {
        const ticketResponse = await axiosInstance.get(
          `event/ticket/${event}`
        );
        const responseData = ticketResponse.data;
        const { status } = responseData;
        if (status === 200) {
          setTicket(responseData.tickets);
          console.log(responseData.tickets);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTicket();
  }, [event]);

  const renderTicket = () => {
    return (
      <section className={style.layout}>
        {tickets.map(ticket => (
          <div className={style.ticket_card} key={ticket._id}>
            <h5>{ticket.type_ticket}</h5>
            <p>{ticket.description}</p>
            <span className={style.price_tag}>
              <span>IDR</span> {ticket.price}
            </span>
            {ticket.status === 'Available' ?
              (<Link to={`/order/${ticket._id}`}>
                <button className="btn_secondary">BUY NOW</button>
              </Link>) : <button className="btn_disable">BUY NOW</button>}
          </div>
        ))}
      </section>
    );
  };

  return renderTicket();
}
