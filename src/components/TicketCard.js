import { Link } from 'react-router-dom'

import style from '../styles/components/TicketCard.module.css'

export default function TicketCard() {
    return (
        <section className={style.layout}>
            <div className={style.ticket_card}>
                <h5>EARLY BIRD</h5>
                <p>🌟 Seize the Worm! 🌅 Grab your Early Bird ticket now and unlock the best deals before they fly away. Limited availability Act fast! 🎟️ #EarlyBirdSpecial #LimitedTimeOffer</p>
                <span className={style.sold_tag}>Sold Out</span>
                <span className={style.price_tag}><span>IDR</span> 30,000</span>
                <button className="btn_disable">BUY NOW</button>
            </div>
            <div className={style.ticket_card}>
                <h5>PRESALE I</h5>
                <p>🚀 Dive into the Exclusive Experience! Presale 1 is now open. Secure your spot ahead of the crowd and be among the first to savor the excitement. Don't miss out and Reserve your tickets today! 🎫 #PresalePerks #EarlyAccess</p>
                <span className={style.sold_tag}>Sold Out</span>
                <span className={style.price_tag}><span>IDR</span> 35,000</span>
                <button className="btn_disable">BUY NOW</button>
            </div>
            <div className={style.ticket_card}>
                <h5>PRESALE II</h5>
                <p>🌟 Level Up Your Experience! Presale 2 is live, offering a second chance for the savvy ones. Don't let this opportunity slip away – Snag your tickets now and be part of something extraordinary! 🎟️ #SecondRound #UpgradeYourEvent</p>
                <span className={style.avail_tag}>Available</span>
                <span className={style.price_tag}><span>IDR</span> 40,000</span>
                <Link to="/order/2">
                    <button className="btn_secondary">BUY NOW</button>
                </Link>
            </div>
            <div className={style.ticket_card}>
                <h5>GENERAL</h5>
                <p>🎉 Join the Party! General tickets are now available for the ultimate celebration. Don't wait – Secure your place and get ready to make memories that will last a lifetime. 🎟️ #GeneralAdmission #PartyTime</p>
                <span className={style.avail_tag}>Available</span>
                <span className={style.price_tag}><span>IDR</span> 50,000</span>
                <Link to="/order/3">
                    <button className="btn_secondary">BUY NOW</button>
                </Link>
            </div>
            <div className={style.ticket_card}>
                <h5>BUNDLING</h5>
                <p>🌈 Bundle Up for Savings! Mix and match your perfect experience with our exclusive bundle tickets. More fun for less – Grab your bundle now and make every moment count! 🎫 #BundleAndSave #UltimateExperience</p>
                <span className={style.avail_tag}>Available</span>
                <span className={style.price_tag}><span>IDR</span> 120,000</span>
                <Link to="/order/3">
                    <button className="btn_secondary">BUY NOW</button>
                </Link>
            </div>
            <div className={style.ticket_card}>
                <h5>OTS</h5>
                <p>🎟️ Last Call for Fun! On-the-Spot tickets are here for the spontaneous souls. Join us on the day and make memories in the moment. Limited availability – Get your tickets at the event! 🎉 #SpontaneousFun #LastMinuteTickets</p>
                <span className={style.avail_tag}>Available</span>
                <span className={style.price_tag}><span>IDR</span> 55,000</span>
                <button className="btn_disable">BUY NOW</button>
            </div>
        </section>
    )
}