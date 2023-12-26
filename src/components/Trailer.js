import style from '../styles/components/Teaser.module.css'

export default function Trailer() {
    return (
        <section className={style.layout}>
            <div className={style.content}>
                <p>
                    MAIN EVENT
                </p>
                <p style={{ color: '#eb0028' }}>TEASER</p>
            </div>
            <iframe style={{ borderRadius: '10px' }} width="560" height="315" src="https://www.youtube.com/embed/JgBT6EYSnXk?si=ybN6pr5J_HNL7f2P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
    )
}