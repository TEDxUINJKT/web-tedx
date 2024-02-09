import EventCard from '../components/EventCard'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { EventContent } from '../state/content/middleware'

export default function Ticket() {
    const dispatch = useDispatch()
    const { content } = useSelector(states => states)

    useEffect(() => {
        dispatch(EventContent())
    }, [dispatch])

    return (
        <section className="page-container-no-bottom">
            <div style={{ textAlign: 'center' }}>
                <h1 className="glitch">
                    <span aria-hidden="true">TICKET</span>
                    TICKET
                    <span aria-hidden="true">TICKET</span>
                </h1>
            </div>
            <EventCard data={content?.event} />
        </section>
    )
}