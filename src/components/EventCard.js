import { Link } from 'react-router-dom';

import style from '../styles/components/EventCard.module.css'

import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";

export default function EventCard() {
    return (
        <section className={style.layout}>
            <div className={style.card}>
                <div className={style.content}>
                    <h3>XPLORER'S QUEST: THE ENIGMA XPLORATION</h3>
                    <div className={style.detail_content}>
                        <span>Pre-Event I</span>
                        <span>
                            <BsCalendarDateFill />
                            Sat, 24th January 2024
                        </span>
                        <span>
                            <MdAccessTimeFilled />
                            12:00 AM
                        </span>
                        <span>
                            <MdLocationOn />
                            UIN Jakarta
                        </span>
                    </div>
                    <p>Through The Enigma Xploration, TEDxUniversitasAirlangga is unveiling the journey of finding the authentic compass inside us, enduring diverse societal currents, flourishing and actualizing our boundless potential, regarding all the influence that our environment gives to us, especially our family as the root that mainly shapes us for who we are.</p>
                    <Link to="/ticket/1">
                        <button>GET TICKET</button>
                    </Link>
                </div>
                <div className={style.thumb}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572567/event_fmfu3t.jpg" alt="event" width="100%" />
                </div>
            </div>
            <div className={style.card}>
                <div className={style.content}>
                    <h3>INXIGHT: UNVEILING TOMORROW ON CAMERA</h3>
                    <div className={style.detail_content}>
                        <span>Pre-Event II</span>
                        <span>
                            <BsCalendarDateFill />
                            Sat, 24th January 2024
                        </span>
                        <span>
                            <MdAccessTimeFilled />
                            12:00 AM
                        </span>
                        <span>
                            <MdLocationOn />
                            UIN Jakarta
                        </span>
                    </div>
                    <p>inXight: Unveiling Tomorrow on Camera Witness how technology serves as the linchpin, propelling us from one state to another with unprecedented speed and scale. Unveil the paradoxical nature of technology a force that simultaneously empowers and challenges humanity.</p>
                    <Link to="/ticket/2">
                        <button>GET TICKET</button>
                    </Link>
                </div>
                <div className={style.thumb}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572567/event_fmfu3t.jpg" alt="event" width="100%" />
                </div>
            </div>
            <div className={style.card}>
                <div className={style.content}>
                    <h3>TEDxUINJakarta 2.0</h3>
                    <div className={style.detail_content}>
                        <span>Main Event</span>
                        <span>
                            <BsCalendarDateFill />
                            Sat, 24th January 2024
                        </span>
                        <span>
                            <MdAccessTimeFilled />
                            12:00 AM
                        </span>
                        <span>
                            <MdLocationOn />
                            UIN Jakarta
                        </span>
                    </div>
                    <p>"Mastering the 'Upheaval Maze' in Today's World Adapting to Change and Achieving Success" In our complex era, akin to a labyrinth of challenges, navigating change and making wise decisions is essential. The 'Upheaval Maze' concept highlights the need to adapt, overcome obstacles, and find success amidst turmoil. Join our talkshow to explore these themes of change and adaptation in the modern world.</p>
                    <div>
                        <Link to="/ticket/3">
                            <button>GET TICKET</button>
                        </Link>
                    </div>
                </div>
                <div className={style.thumb}>
                    <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572567/event_fmfu3t.jpg" alt="event" width="100%" />
                </div>
            </div>
        </section>
    )
}