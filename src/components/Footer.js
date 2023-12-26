import style from '../styles/components/Footer.module.css'

import { IconContext } from "react-icons";
import { FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <span>This independent <strong>TEDx</strong> event is operated under license from <strong>TED</strong>.</span>
            <div className={style.socmed_list}>
                <IconContext.Provider value={{ className: "icon" }} >
                    <a href="https://www.linkedin.com/company/tedxuinjakarta" target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                    </a>
                </IconContext.Provider>

                <IconContext.Provider value={{ className: "icon" }} >
                    <a href="https://www.instagram.com/tedxuinjakarta/" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                </IconContext.Provider>

                <IconContext.Provider value={{ className: "icon" }} >
                    <a href="https://www.instagram.com/tedxuinjakarta/" target="_blank" rel="noreferrer">
                        <FaTiktok />
                    </a>
                </IconContext.Provider>
            </div>
        </footer>
    )
}