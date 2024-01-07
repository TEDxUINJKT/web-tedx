import style from "../styles/components/Sponsors.module.css";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";

export default function Sponsors() {
  const [sponsors, setsponsors] = useState([]);

  const fetchSponsors = async () => {
    try {
      const sponsorsResponse = await axiosInstance.get("partner/2/sponsor");
      const responseData = sponsorsResponse.data;
      const { status } = responseData;

      if (status === 200) {
        setsponsors(responseData.partners);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSponsors();
  }, []);

  const renderSponsors = () => {
    return sponsors.map((sponsor) => {
      return (
        <div key={sponsor._id}>
          <img src={sponsor.logo.url} width="600px" alt="sponsor_list" />
        </div>
      );
    });
  };

  return (
    <section className={style.layout}>
      {renderSponsors()}
      {/* <img src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572571/sponsors_xypp8f.png" width="600px" alt="sponsor_list" /> */}
      <div className={style.content}>
        <span>MEET OUR</span>
        <br />
        <span style={{ color: "#eb0028" }}> SPONSORS</span>
        <p style={{ marginTop: "20px" }}>
          We extend our heartfelt gratitude to our valued partners contribution,
          whose support and collaboration played a pivotal role in the success
          of this remarkable event
        </p>
      </div>
    </section>
  );
}
