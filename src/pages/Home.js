import Jumbotron from "../components/Jumbotron";
import Trailer from "../components/Trailer";
import GeneralAbout from "../components/GeneralAbout";
import GrabTicket from "../components/GrabTicket";
import Timeline from "../components/Timeline";

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HomeContent } from '../state/content/middleware'

export default function Home() {
  const dispatch = useDispatch()
  const { content } = useSelector(states => states)

  useEffect(() => {
    dispatch(HomeContent())
  }, [dispatch])

  return (
    <main>
      <Jumbotron data={content.banner?.image} />
      <GeneralAbout />
      <Timeline data={content.timeline?.image} />
      <Trailer data={content.teaser?.link} />
      <GrabTicket />
    </main>
  );
}