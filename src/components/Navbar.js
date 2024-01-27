import { useState } from 'react'
import { Link } from 'react-router-dom'

import { IconContext } from "react-icons";
import { IoMenu } from "react-icons/io5";

import Logo from '../assets/logo.png'
import style from '../styles/components/Navbar.module.css'

export default function Navbar() {
    const [showNav, setShow] = useState(false)
    return (
        <nav className={style.navbar}>
            <IconContext.Provider value={{ className: 'icon mobile' }} >
                <div onClick={() => setShow(!showNav)} className={style.burger_menu}>
                    <IoMenu />
                </div>
            </IconContext.Provider>
            <div className={`${style.navbar_content} ${showNav ? style.show : null}`}>
                <Link to='/'>
                    <img src={Logo} alt="logo" width="150px" />
                </Link>
                <ul>
                    <li onClick={() => setShow(!showNav)}><Link to="/">Home</Link></li>
                    <li onClick={() => setShow(!showNav)}><Link to="/about">About</Link></li>
                    <li onClick={() => setShow(!showNav)}><Link to="/event">Event</Link></li>
                    <li onClick={() => setShow(!showNav)}><Link to="/partner">Partners</Link></li>
                    <li onClick={() => setShow(!showNav)}><Link to="/ticket">Ticket</Link></li>
                </ul>
                <div className={style.navbar_cta}>
                    <Link to="/login">
                        <button>LOGIN</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}