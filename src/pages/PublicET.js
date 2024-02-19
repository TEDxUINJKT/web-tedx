import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import QRCode from 'qrcode'

import { IconContext } from "react-icons";
import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";

import api from '../lib/api'

import datePrettier from "../lib/date_prettier"
import moneyFormatter from "../lib/money_formater"

import style from '../styles/ETicket.module.css'

export default function ETicket() {
    const [QRURL, setURL] = useState(null)
    const [ticketCount,setTicketCount] = useState([])
    const [ticket, setTicket] = useState({})
    const { order_id } = useParams()

    async function getDataETicket(id){
        const response = await api.getETicketPublic(id)
        setTicket(response)
    }

    useEffect(() => {
        getDataETicket(order_id)
    }, [order_id])

    useEffect(() => {
        generateQR(ticket?.order?._id)
        const bundle_count = ticket?.ticket?.bundle_status.bundle_count || 1

        const length = bundle_count * ticket?.order?.quantity || 0
        const empty_arr = new Array(length).fill('ok')

        setTicketCount(empty_arr)
    }, [ticket])

    async function generateQR(data) {
        try {
            const QR = await QRCode.toDataURL(data)
            setURL(QR)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className={style.container}>
            {ticketCount.map((each,index) => (
                <div className={`${style.layout} ticket`} >
                    <div className={style.tag}>
                        <div className={style.tag_img}></div>
                    </div>
                    <div className={`${style.main_part} eticket-main`}>
                        <div className={style.title}>
                            <h3>{ticket?.event.event}</h3>
                        </div>
                        <div className={style.detail}>
                            <div className={style.detail_grid}>
                                <div>
                                    <h5>{datePrettier(ticket?.event.date)}</h5>
                                <div className={style.detail_icon}>
                                    <p>
                                        <IconContext.Provider value={{ className: "icon",color:'white' }} >
                                            <MdLocationOn />
                                        </IconContext.Provider>
                                        {ticket?.event.place}
                                    </p>
                                    <p>
                                        <IconContext.Provider value={{ className: "icon",color:'white' }} >
                                            <MdAccessTimeFilled />
                                        </IconContext.Provider>
                                        {ticket?.event.time}
                                    </p>
                                </div>
                                </div>
                                <div className={style.detail_price}>
                                    <p className={style.detail_type}>{ticket?.ticket.type_ticket} #{index+1}</p>
                                    <p><span>Price : </span>{moneyFormatter(ticket?.order.total_price)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.side_part}>
                        <div className={style.barcode}>
                            <img src={QRURL} alt="QR CODE" height="auto" width="100%" />
                        </div>
                        <div >
                            <p>Ticket ID:</p>
                            <p><b>{ticket?.order._id}</b></p>
                            <p>Date:</p>
                            <p><b>{ticket?.event.date}</b></p>
                            <p>Time:</p>
                            <p><b>{ticket?.event.time}</b></p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}