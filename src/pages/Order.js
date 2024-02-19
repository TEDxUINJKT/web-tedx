import OrderDetail from "../components/OrderDetail"
import OrderForm from "../components/OrderForm"

import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { TicketDetailContent } from '../state/content/middleware'

import style from '../styles/Order.module.css'

export default function Order() {
    const { order, auth } = useSelector(states => states)
    const { id } = useParams();

    const dispatch = useDispatch()
    
    const [formData, setFormData] = useState({})

    useEffect(() => {
        dispatch(TicketDetailContent(id))
    }, [dispatch,id])

    useEffect(() => {
        const plain = {
            ticket_id: order?.ticket?._id,
            event_id:order?.event?._id,
            event_name: order?.event?.event,
            user_id: auth.id,
            price: order?.ticket?.price,
            total_price: order?.ticket?.price,
            email: null,
            quantity:1,
            ticket_name:order?.ticket?.type_ticket,
            first_name: null,
            last_name: null,
            university: null,
            phone_number: null,
            is_refferal: false,
            refferal: null,
            total_guest:order?.ticket?.bundle_status?.bundle_count
        }
        setFormData(plain)
    }, [order,auth])

    return (
        <section style={{ padding: '100px 0 0 0' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 className="glitch">
                    <span aria-hidden="true">ORDER</span>
                    ORDER
                    <span aria-hidden="true">ORDER</span>
                </h1>
            </div>
            <div className={style.layout}>
                <OrderForm plain={order} data={formData} setData={setFormData} />
                <OrderDetail plain={order} data={formData} setData={setFormData} />
            </div>
        </section>
    )
}

// const layout = {
//     margin: '150px 0',
//     width: '90vw',
//     flexWrap: 'wrap',
//     display: 'flex',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between'
// }