import { Link } from 'react-router-dom'

import style from '../styles/components/GrabTicket.module.css'

export default function GrabTicket() {
    return (
        <section className={style.layout}>
            <div className={style.content}>
                <p className='glitch' style={{ color: 'white' }}>
                    <span aria-hidden="true">GET YOUR TICKET</span>
                    GET YOUR TICKET
                    <span aria-hidden="true">GET YOUR TICKET</span>
                </p>
                <div className={style.cta}>
                    <Link to="/ticket">
                        <button>BUY TICKET</button>
                    </Link>
                    <span>OR</span>
                    <Link to="/event">
                        <button>OUR SCHEDULE</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}