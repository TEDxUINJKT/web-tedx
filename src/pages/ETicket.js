<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function ETicket() {
  return (
    <div>
      <h1 className="p-5 text-center">e-Ticket</h1>
      <div className="e-ticket flex flex-row">
        <div className="bg-[url(https://res.cloudinary.com/dbvyywl6v/image/upload/v1707445804/BG_Ticket_png_cyrhmm.png)] bg-cover bg-center py-5 px-7 dashed border-t-0 border-l-0 border-b-0 border-red-600">
          <div className="flex flex-row gap-16">
            <h4 className="text-white pb-6 pt-7">
              Chrysalis Dreamscape:
              <br />
              Blooms of Tomorrow's Potential
            </h4>
            <div className="flex flex-col gap-1">
              <p className="text-yellow-400 font-light text-sm">
                TEDxUINJakarta
              </p>
              <h4 className="text-yellow-400 text-center">
                Early
                <br />
                Bird
              </h4>
            </div>
          </div>
          <h4 className="text-yellow-400 font-semibold">01 MARCH 2024</h4>
          <div className="flex flex-row gap-5 py-2 justify-between">
            <div className="flex flex-row gap-3">
              <div className="flex flex-row">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#ffffff" }}
                  size="xl"
                  className="m-auto"
                />
                <p className="text-white font-light text-sm px-2">
                  Theater FST,
                  <br />
                  UIN Jakarta
                </p>
              </div>
              <div className="flex flex-row">
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ color: "#ffffff" }}
                  size="xl"
                  className="m-auto"
                />
                <p className="text-white font-light text-sm px-2 m-auto">
                  09:00
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <p className="text-white font-light text-sm flex my-auto">
                Price:
              </p>
              <p className="font-bold text-lg text-white my-auto ml-1"> 35K</p>
            </div>
          </div>
        </div>
        <div
          className="bg-red-700 p-5 flex flex-col"
          style={{
            border: "dashed",
            borderColor: "white",
            borderTop: "0",
            borderRight: "0",
            borderBottom: "0",
          }}>
          <img
            src="https://res.cloudinary.com/dbvyywl6v/image/upload/v1707457276/icons8-qr-96_sipbeo.png"
            alt="qrCode.png"
            className=""
          />
          <p className="text-white font-light text-sm mt-auto">Date: </p>
          <p className="text-white font-bold">01-03-2024</p>
          <p className="text-white font-light text-sm">Time: </p>
          <p className="text-white font-bold">09:00</p>
        </div>
      </div>
    </div>
  );
}
=======
export default function ETicket() {
    return (
        <h1>E-Ticket Page</h1>
    )
}
>>>>>>> 98f2a9627871c629559374d6114aa463b8547c78
