import { Link } from 'react-router-dom'

import style from '../styles/components/About.module.css'

export default function GeneralAbout() {
    return (
        <section className={style.layout}>
            <div className={style.title}>
                <span >
                    WHAT IS
                </span>
                <span style={{ color: '#eb0028' }}> TEDx</span>
            </div>
            <div className={style.content}>
                <p>In the spirit of ideas worth spreading, <strong>TED</strong> has created a program called <strong>TEDx</strong>. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called <strong>TEDx</strong>UINJakarta, where x = independently organized TED Event. At our <strong>TEDx</strong>UINJakarta event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group. The TED conference provides general guidance for the TEDx program, but individual TEDx Events, including ours, are self-organized.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" rel="noreferrer">
                        <button>OFFICIAL TED</button>
                    </a>
                    <Link to="/about">
                        <button>TEDXUINJakarta</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}