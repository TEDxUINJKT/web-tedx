import Speakers from "../components/Speakers";
import EventCard from "../components/EventCard";

import Flayer from '../assets/gallery_bnw.jpg'

export default function Event() {
  // const [speakers, setspeakers] = useState([]);

  // const fetchSpeakers = async (type) => {
  //   try {
  //     const speakersMain = await axiosInstance.get("/speaker/2/${type}");
  //     const responseData = speakersMain.data;
  //     const { status } = responseData;

  //     if (status === 200) {
  //       setspeakersMain(responseData.speaker);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchSpeakersMain();
  // }, []);

  // const renderSpeakersMain = () => {
  //   return speakersMain.map((speaker) => {
  //     return (
  //       <div className={style.speaker} key={speaker._id}>
  //         <img
  //           src={speaker.picture.url}
  //           alt={speaker.full_name}
  //           width="350px"
  //         />
  //         <p>{speaker.full_name}</p>
  //       </div>
  //     );
  //   });
  // };
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
