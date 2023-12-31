import style from '../styles/components/Speakers.module.css'

export default function Speakers() {
    return (
        <section className={style.layout}>
            <div className={style.content}>
                <div className={style.speaker}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572571/speaker2_ikz1ra.png" alt="speaker 1" width="350px" />
                    <p>HARRY MAGUIRE</p>
                </div>
                <div className={style.speaker}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572568/speaker1_c7rhdu.png" alt="speaker 2" width="350px" />
                    <p>JOKO WIDODO</p>
                </div>
                <div className={style.speaker}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572566/speaker3_hbfr4w.png" alt="speaker 3" width="350px" />
                    <p>ERICK TEN HAG</p>
                </div>
                <div className={style.speaker}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572569/speaker4_tssepx.png" alt="speaker 4" width="350px" />
                    <p>ULTRAMAN GAIA</p>
                </div>
                <div className={style.speaker}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572565/speaker5_g3ykit.png" alt="speaker 5" width="350px" />
                    <p>ALIEN BORTON</p>
                </div>
            </div>
            <div className={style.title}>
                <span>OUR</span>
                <span>SPEAKERS</span>
                <span>OUR</span>
                <span>SPEAKERS</span>
            </div>
            <div className={style.title2}>
                <span>SPEAKERS</span>
                <span>OUR</span>
                <span>SPEAKERS</span>
                <span>OUR</span>
            </div>
        </section>
    )
}