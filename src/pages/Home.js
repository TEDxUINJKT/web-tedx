import Jumbotron from "../components/Jumbotron";
import Trailer from "../components/Trailer";
import GeneralAbout from "../components/GeneralAbout";
import GrabTicket from "../components/GrabTicket";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <GeneralAbout />
      <Timeline />
      <Trailer />
      <GrabTicket />
    </main>
  );
}