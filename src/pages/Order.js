import OrderDetail from "../components/OrderDetail"
import OrderForm from "../components/OrderForm"

import { useState } from "react";
import { useSelector } from "react-redux"

import style from '../styles/Order.module.css'

export default function Order() {
    const { order, auth } = useSelector(states => states)

    const plain = {
        ticket_id: order.ticket._id,
        event_name: order.event.event,
        user_id: auth.id,
        price: order.ticket.price,
        total_price: order.ticket.price,
        email: null,
        first_name: null,
        last_name: null,
        university: null,
        phone_number: null,
        is_refferal: false,
        refferal: null
    }

    const [formData, setFormData] = useState(plain)

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