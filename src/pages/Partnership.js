import Partners from "../components/Partners";
import Sponsors from "../components/Sponsors";
import PartnerContact from "../components/PartnerContact";
import SliderAds from "../components/SliderAds";

export default function Partnership() {
  return (
    <section className="page-container-no-bottom" style={{ marginBottom: '50px' }}>
      <div style={{ textAlign: "center", marginBottom: '100px' }}>
        <h1 className="glitch">
          <span aria-hidden="true">PARTNER</span>
          PARTNER
          <span aria-hidden="true">PARTNER</span>
        </h1>
      </div>
      <SliderAds />
      <Partners />
      <Sponsors />
      <PartnerContact />
    </section>
  );
}
