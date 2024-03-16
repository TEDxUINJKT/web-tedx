/** @format */

import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserEticketDetail } from "../state/ticket/middleware";
import QRCode from "qrcode";

import { IconContext } from "react-icons";
import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";

import datePrettier from "../lib/date_prettier";
import convertToPDF from "../lib/pdfConverter";
import moneyFormatter from "../lib/money_formater";

import style from "../styles/ETicket.module.css";

export default function ETicket() {
  const dispatch = useDispatch();
  const eTicket = useRef([]);
  const [QRURL, setURL] = useState(null);
  const [ticketCount, setTicketCount] = useState([]);
  const { order_id } = useParams();
  const { ticket } = useSelector((states) => states);

  useEffect(() => {
    dispatch(UserEticketDetail(order_id));
  }, [dispatch, order_id]);

  useEffect(() => {
    generateQR(ticket.selected?.order._id);
    const bundle_count =
      ticket.selected?.ticket.bundle_status.bundle_count || 1;

    const length = bundle_count * ticket.selected?.order.quantity || 0;
    const empty_arr = new Array(length).fill("ok");

    setTicketCount(empty_arr);
  }, [ticket]);

  async function generateQR(data) {
    try {
      const QR = await QRCode.toDataURL(data);
      setURL(QR);
    } catch (err) {
      console.log(err);
    }
  }

  const addTicketRef = (ref) => {
    if (ref && !eTicket.current?.includes(ref)) {
      eTicket.current.push(ref);
    }
  };

  function handleDownload() {
    const component = eTicket.current;

    convertToPDF(component, ticket.selected?.event.event);
  }

  return (
    <section className={style.container}>
      <div className={style.cta_container}>
        <button onClick={() => handleDownload()}>Donwload E-Ticket</button>
      </div>
      {ticketCount.map((each, index) => (
        <div className={style.layout} ref={addTicketRef}>
          <div className={style.tag}>
            <div className={style.tag_img}></div>
          </div>
          <div className={style.main_part}>
            <div className={style.title}>
              <h3>{ticket.selected?.event.event}</h3>
            </div>
            <div className={style.detail}>
              <div className={style.detail_grid}>
                <div className={style.detail_desc}>
                  <h5>{datePrettier(ticket.selected?.event.date)}</h5>
                  <div className={style.detail_icon}>
                    <p>
                      <IconContext.Provider
                        value={{ className: "icon", color: "white" }}
                      >
                        <MdLocationOn />
                      </IconContext.Provider>
                      {ticket.selected?.event.place}
                    </p>
                    <p>
                      <IconContext.Provider
                        value={{ className: "icon", color: "white" }}
                      >
                        <MdAccessTimeFilled />
                      </IconContext.Provider>
                      {ticket.selected?.event.time}
                    </p>
                  </div>
                </div>
                <div className={style.detail_price}>
                  <p className={style.detail_type}>
                    {ticket.selected?.ticket.type_ticket} #{index + 1}
                  </p>
                  <p>
                    <span>Price : </span>
                    {moneyFormatter(ticket.selected?.order.total_price)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.side_part}>
            <div className={style.barcode}>
              <img src={QRURL} alt="QR CODE" height="auto" width="100%" />
            </div>
            <div>
              <p>Ticket ID:</p>
              <p>
                <b>{ticket.selected?.order._id}</b>
              </p>
              <p>Date:</p>
              <p>
                <b>{ticket.selected?.event.date}</b>
              </p>
              <p>Time:</p>
              <p>
                <b>{ticket.selected?.event.time}</b>
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
