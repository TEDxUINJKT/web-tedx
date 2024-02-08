import OrderDetail from "../components/OrderDetail"
import OrderForm from "../components/OrderForm"

import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Order() {
    const { id } = useParams();

    const plain = {
        ticket_id: id,
        event_name: 'TEST',
        user_id: '123123',
        price: 11000,
        total_price: 10000,
        email: null,
        full_name: null,
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
            <div style={layout}>
                <OrderForm data={formData} setData={setFormData} />
                <OrderDetail data={formData} setData={setFormData} />
            </div>
        </section>
    )
}

const layout = {
    margin: '150px 0',
    width: '90vw',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
}