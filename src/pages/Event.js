import Speakers from "../components/Speakers";
import EventCard from "../components/EventCard";

import Flayer from '../assets/gallery_bnw.jpg'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { EventContent, SpeakerContent } from '../state/content/middleware'

export default function Event() {
  const dispatch = useDispatch()
  const { content } = useSelector(states => states)

  useEffect(() => {
    dispatch(EventContent())
    dispatch(SpeakerContent())
  }, [dispatch])

  return (
    <section className="page-container-no-bottom">
      <div style={{ textAlign: "center" }}>
        <h1 className="glitch">
          <span aria-hidden="true">EVENT</span>
          EVENT
          <span aria-hidden="true">EVENT</span>
        </h1>
      </div>
      <Speakers data={content?.speaker?.main} type="main" />
      <Speakers data={content?.speaker?.student} type="student" />
      <EventCard data={content?.event} />
      <img
        src={Flayer}
        alt="gallery event"
        width="100%"
        height="auto"
      />
    </section>
  );
}
