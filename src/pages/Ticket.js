import EventCard from '../components/EventCard'

export default function Ticket() {
    return (
        <section className="page-container-no-bottom">
            <div style={{ textAlign: 'center' }}>
                <h1 className="glitch">
                    <span aria-hidden="true">TICKET</span>
                    TICKET
                    <span aria-hidden="true">TICKET</span>
                </h1>
            </div>
            <EventCard />
        </section>
    )
}