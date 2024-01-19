import Partners from "../components/Partners";
import Sponsors from "../components/Sponsors";
import PartnerContact from "../components/PartnerContact";

export default function Partnership() {
  return (
    <section style={{ padding: "100px 0" }}>
      <div style={{ textAlign: "center" }}>
        <h1 className="glitch">
          <span aria-hidden="true">PARTNER</span>
          PARTNER
          <span aria-hidden="true">PARTNER</span>
        </h1>
      </div>
      <Partners />
      <Sponsors />
      <PartnerContact />
    </section>
  );
}
