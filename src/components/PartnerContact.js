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
                    <Link to="mailto:tedxuinjakarta@gmail.com">
                        <button>EMAIL</button>
                    </Link>
                    <span className="pc">OR</span>
                    <a href="https://wa.me/6281210696745">
                        <button>WHATSAPP</button>
                    </a>
                </div>
            </div>
        </section>
    )
}