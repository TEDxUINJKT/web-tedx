/** @format */

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { OrderDetailTicketContent } from "../state/order/middleware";

import style from "../styles/components/TicketCard.module.css";

export default function TicketCard({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleOrderRedirect(detail_ticket) {
    dispatch(OrderDetailTicketContent(detail_ticket));
    console.log(detail_ticket);
    if (detail_ticket?.redirect || detail_ticket?.redirect !== "") {
      window.open(detail_ticket?.redirect);
    } else {
      navigate(`/order/${detail_ticket._id}`);
    }
  }

  return (
    <section className={style.layout}>
      {data?.map((ticket) => (
        <div className={style.ticket_card} key={ticket._id}>
          <h5>{ticket.type_ticket}</h5>
          <p>{ticket.description}</p>
          <span className={style.price_tag}>
            <span>IDR</span> {ticket.price}
          </span>
          {ticket.status === "Available" ? (
            <button
              onClick={() => handleOrderRedirect(ticket)}
              className="btn_secondary"
            >
              BUY NOW
            </button>
          ) : (
            <button className="btn_disable">SOLD OUT</button>
          )}
        </div>
      ))}
    </section>
  );
}
