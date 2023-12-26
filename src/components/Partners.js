import style from '../styles/components/Partners.module.css'

export default function Partners() {
    return (
        <section className={style.layout}>
            <div className={style.content}>
                <span>MEET OUR</span>
                <br />
                <span style={{ color: '#eb0028' }}>PARTNERS</span>
                <p style={{ marginTop: '20px' }}>We extend our heartfelt gratitude to our valued partners contribution, whose support and collaboration played a pivotal role in the success of this remarkable event</p>
            </div>
            <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572571/sponsors_xypp8f.png" width="600px" alt="sponsor_list" />
        </section>
    )
}