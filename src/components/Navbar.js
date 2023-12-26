import { Link } from 'react-router-dom'

import style from '../styles/components/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={style.navbar}>
            <Link to='/'>
                <img src='https://res.cloudinary.com/delq31bnx/image/upload/v1703572566/logo2_uijxmk.png' alt="logo" width="150px" />
            </Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/event">Event</Link></li>
                <li><Link to="/partner">Partners</Link></li>
                <li><Link to="/ticket">Ticket</Link></li>
            </ul>
            <div>
                <Link to="/login">
                    <button>LOGIN</button>
                </Link>
            </div>
        </nav>
    )
}