// import { useState, useEffect, useCallback } from "react";
// import { axiosInstance } from "../lib/axios";
// import { Link } from "react-router-dom";

// export default function Button(props) {
//   const [button, setButton] = useState([]);
//   const { id } = props;

//   useEffect(() => {
//     const fetchLink = async () => {
//       try {
//         const buttonResponse = await axiosInstance.get(`/event/detail/${id}`);
//         const responseData = buttonResponse.data;
//         const { status } = responseData;
//         if (status === 200) {
//           setButton(responseData.detail._id);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchLink();
//   }, [id]);

//   const renderLink = useCallback(() => {
//     return (
//       <Link to={`/ticket/${button}`}>
//         <button>GET TICKET</button>
//       </Link>
//     );
//   }, [button]);

//   return renderLink();
// }
