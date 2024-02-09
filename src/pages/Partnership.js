import Partners from "../components/Partners";
import Sponsors from "../components/Sponsors";
import PartnerContact from "../components/PartnerContact";
import SliderAds from "../components/SliderAds";

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PartnerContent } from '../state/content/middleware'

export default function Partnership() {
  const dispatch = useDispatch()
  const { content } = useSelector(states => states)

  useEffect(() => {
    dispatch(PartnerContent())
  }, [dispatch])

  return (
    <section className="page-container-no-bottom" style={{ marginBottom: '50px' }}>
      <div style={{ textAlign: "center", marginBottom: '100px' }}>
        <h1 className="glitch">
          <span aria-hidden="true">PARTNER</span>
          PARTNER
          <span aria-hidden="true">PARTNER</span>
        </h1>
      </div>
      <SliderAds data={content?.partner?.ads} />
      <Partners data={content?.partner?.medpart} />
      <Sponsors data={content?.partner?.sponsor} />
      <PartnerContact />
    </section>
  );
}
