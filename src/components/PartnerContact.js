import { Link } from 'react-router-dom'

import style from '../styles/components/PartnerContact.module.css'

export default function PartnerContact() {
    return (
        <section className={style.layout}>
            <div className={style.content}>
                <p className='glitch' style={{ color: 'white' }}>
                    <span aria-hidden="true">BE PART OF US</span>
                    BE PART OF US
                    <span aria-hidden="true">BE PART OF US</span>
                </p>
                <div className={style.cta}>
                    <Link to="/ticket">
                        <button>
                            EMAIL
                        </button>
                    </Link>
                    <span>OR</span>
                    <Link to="/event">
                        <button>
                            WHATSAPP
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}