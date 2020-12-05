// import axios from "axios";
// // import { setAlert } from "./alert";
// import { BOOKING_SUCCESS, BOOKING_FAILURE } from "./types";

// export const getProfile = ({ email }) => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   const body = JSON.stringify({ email });
//   try {
//     const res = await axios.get("http://localhost:3000/booking-history", config, body);
//     console.log("message", res);
//     dispatch({
//       type: BOOKING_SUCCESS,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: BOOKING_FAILURE,
//     });
//   }
// };
