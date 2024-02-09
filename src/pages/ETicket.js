import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { UserEticketDetail } from '../state/ticket/middleware'
import QRCode from 'qrcode'

import style from '../styles/ETicket.module.css'

export default function ETicket() {
    const dispatch = useDispatch()
    const [QRURL, setURL] = useState(null)
    const { order_id } = useParams()
    const { ticket } = useSelector(states => states)

    useEffect(() => {
        dispatch(UserEticketDetail(order_id))
    }, [dispatch, order_id])

    useEffect(() => {
        generateQR(ticket.selected?.order._id)
    }, [ticket])

    async function generateQR(data) {
        try {
            const QR = await QRCode.toDataURL(data)
            setURL(QR)
            console.log('test')

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className={style.container}>
            <div className={style.layout}>
                <div className={style.barcode}>
                    <img src={QRURL} alt="QR CODE" height="auto" width="100%" />
                </div>
                <div className={style.detail}>
                    <p><b>Order ID</b> : {ticket.selected?.order._id}</p>
                    <p><b>Guest</b> : {ticket.selected?.order.full_name}</p>
                    <p><b>Event</b> : {ticket.selected?.event.event}</p>
                    <p><b>Event Type</b> : {ticket.selected?.event.type}</p>
                    <p><b>Date</b> : {ticket.selected?.event.date}</p>
                    <p><b>Time</b> : {ticket.selected?.event.time}</p>
                    <p><b>Location</b> : {ticket.selected?.event.place}</p>
                </div>
            </div>
        </section>
    )
}