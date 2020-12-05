import React, { useState } from "react";
import axios from "axios";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { getProfile } from "../../redux/actions/profile";
// import profile from "../../redux/reducers/profile";

const Dashboard = () => {
  const [booking, setBooking] = useState([]);

  const data = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    email: "",
  });
  // const { email } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:3000/booking-history",
        { params: { email: data.email } },
        config
      );
      console.log(res.data);
      setBooking(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='hidden'
            // type='email'
            value={data.email}
            placeholder='Email Address'
            name='email'
            onChange={(e) => onChange(e)}
          />
        </div>
        <input
          type='submit'
          className='btn btn-primary'
          value='Get Booking History'
        />
      </form>

      <div>
        {booking.map((booking, index) => (
          <p key={index}>{booking.email}</p>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import PropTypes from "prop-types";
// // import { connect } from "react-redux";
// // import { getProfile } from "../../redux/actions/profile";
// // import profile from "../../redux/reducers/profile";

// const Dashboard = () => {
//   const [booking, setBooking] = useState([]);
//   const [userEmail, setUserEmail] = useState("");
//   const [formData, setFormData] = useState({
//     email: "",
//   });
//   // const { email } = formData;

//   const onChange = (e) =>
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("user"));
//     setUserEmail(data.email)
//     console.log(data.email)
//   }, [])

//   useEffect(() => {
//     const onSubmit = async (e) => {
//       // e.preventDefault();
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       try {
//         const res = await axios.get(
//           "http://localhost:3000/booking-history",
//           { params: { email: userEmail } },
//           config
//         );
//         console.log("message", res.data);
//         setBooking(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     onSubmit();
//   }, [userEmail])

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <form className='form'>
//         <div className='form-group'>
//           <input
//             type='email'
//             value={userEmail}
//             placeholder='Email Address'
//             name='email'
//             onChange={(e) => onChange(e)}
//           />
//         </div>
//         <input
//           type='submit'
//           className='btn btn-primary'
//           value='Get Booking History'
//         />
//       </form>

//       <div>
//         {userEmail ? booking.map((booking, index) => (
//           <p key={index}>{booking.email}</p>
//         ) ): <p>loading</p>}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
