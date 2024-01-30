import Speakers from "../components/Speakers";
import EventCard from "../components/EventCard";

import Flayer from '../assets/gallery_bnw.jpg'

export default function Event() {
  return (
    <section className="page-container-no-bottom">
      <div style={{ textAlign: "center" }}>
        <h1 className="glitch">
          <span aria-hidden="true">EVENT</span>
          EVENT
          <span aria-hidden="true">EVENT</span>
        </h1>
      </div>
      <Speakers type="main" />
      <Speakers type="student" />
      <EventCard />
      <img
        src={Flayer}
        alt="gallery event"
        width="100%"
        height="auto"
      />
    </section>
  );
}
