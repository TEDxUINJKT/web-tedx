import Speakers from '../components/Speakers'
import EventCard from '../components/EventCard'

export default function Event() {
    return (
        <section style={{ padding: '100px 0 0 0' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 className="glitch">
                    <span aria-hidden="true">EVENT</span>
                    EVENT
                    <span aria-hidden="true">EVENT</span>
                </h1>
            </div>
            <Speakers />
            <EventCard />
            <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572567/gallery_bnw_hcxvsy.jpg" alt="gallery event" />
        </section>
    )
}