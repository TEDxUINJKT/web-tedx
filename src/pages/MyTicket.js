import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UserOrderList } from '../state/ticket/middleware'

import { Link } from 'react-router-dom'

import style from '../styles/MyTicket.module.css'

export default function MyTicket() {
    const dispatch = useDispatch()
    const { ticket, auth } = useSelector(states => states)

    useEffect(() => {
        dispatch(UserOrderList(auth.id))
    }, [dispatch, auth])

    return (
        <section className={style.layout}>
            <h1>My Ticket</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th className="pc">Name</th>
                        <th>Order ID</th>
                        <th className="pc">Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ticket?.list?.map((each, index) => (
                        <tr>
                            <td>{index + 1}.</td>
                            <td className="pc">{each.full_name}</td>
                            <td>{each._id}</td>
                            <td className="pc">IDR {each.total_price}</td>
                            <td>{each.status}</td>
                            <td className={style.cta}>
                                {each.status === 'Paid' ? (
                                    <Link to={`/e-ticket/${each._id}`}>
                                        <button>E-Ticket</button>
                                    </Link>
                                ) : (
                                    <button className="btn_disable">E-Ticket</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}