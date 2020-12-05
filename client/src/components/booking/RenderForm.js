import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const RenderForm = ({ data, ...rest }) => {
  const history = useHistory();

  const departure = useRef(null);
  const destination = useRef(null);
  const bus_type = useRef(null);
  const bus_company = useRef(null);
  const price = useRef(null);
  const travel_time = useRef(null);
  const travel_date = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "info",
      JSON.stringify({
        departure: departure.current.value,
        destination: destination.current.value,
        bus_type: bus_type.current.value,
        bus_company: bus_company.current.value,
        price: price.current.value,
        travel_date: travel_date.current.value,
        travel_time: travel_time.current.value,
      })
    );
    history.push("/booking-info");
  };

  return (
    <div>
      <div className='card p-2 my-4'>
        <form className='' onSubmit={(e) => handleClick(e)}>
          <div className='box-container'>
            <div className='box m-1'>
              <label>Departure</label>
              <input
                type='text'
                className='1'
                value={data.departure}
                name='departure'
                ref={departure}
              />
            </div>
            <div className='box m-1'>
              <label>Destination</label>
              <input
                type='text'
                className='2'
                value={data.destination}
                name='destination'
                ref={destination}
              />
            </div>
            <div className='box m-1'>
              <label>Bus</label>
              <input
                type='text'
                className='3'
                value={data.bus_type}
                name='bus_type'
                ref={bus_type}
              />
            </div>
            <div className='box m-1'>
              <label>Company</label>
              <input
                type='text'
                className='4'
                value={data.bus_company}
                name='bus_company'
                ref={bus_company}
              />
            </div>
            <div className='box m-1'>
              <label>price</label>
              <input
                type='text'
                className='5'
                value={data.price}
                name='price'
                ref={price}
              />
            </div>
            <div className='box m-1'>
              <label>Date</label>
              <input
                type='text'
                className='6'
                value={data.travel_date}
                name='travel_date'
                ref={travel_date}
              />
            </div>
            <div className='box m-1'>
              <label>Time</label>
              <input
                type='text'
                className='7'
                value={data.travel_time}
                name='travel_time'
                ref={travel_time}
              />
            </div>
            <div className='box m-1'>
              <label>{data.price}</label>
              <button type='submit' className='btn-list'>
                Proceed
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RenderForm;
