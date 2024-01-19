import Speakers from "../components/Speakers";
import EventCard from "../components/EventCard";

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
    <section style={{ padding: "100px 0 0 0" }}>
      <div style={{ textAlign: "center" }}>
        <h1 className="glitch">
          <span aria-hidden="true">EVENT</span>
          EVENT
          <span aria-hidden="true">EVENT</span>
        </h1>
      </div>
      <Speakers />
      <EventCard />
      <img
        src="https://res.cloudinary.com/delq31bnx/image/upload/v1703572567/gallery_bnw_hcxvsy.jpg"
        alt="gallery event"
      />
    </section>
  );
}
