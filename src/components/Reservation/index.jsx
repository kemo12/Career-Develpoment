import React from 'react';
import './Reservation.css';
import { FiSearch } from 'react-icons/fi';
import { FaHotel } from 'react-icons/fa';
import { IoIosAirplane } from 'react-icons/io';
import { GoCalendar } from 'react-icons/go';
const Reservation = () => {
  return (
    <div className="reservationContainer generalContainer">
      <div className="reservationTabs">
        <button className="clicked">
          <IoIosAirplane
            style={{ transform: 'rotate(315deg)', color: 'rgb(46, 125, 245)' }}
          />
          <p>Fight</p>
        </button>
        <button>
          <FaHotel style={{ color: 'rgb(46, 125, 245)' }} />
          <p>Hotel</p>
        </button>
      </div>
      <div className="reservationContent">
        <div className="reserveFrom">
          <div>
            <span>Living From</span>
            <span>Dubai</span>
          </div>
          <div>
            <IoIosAirplane />
          </div>
          <div>
            <span>Going to</span>
            <span>New York</span>
          </div>
        </div>
        <div className="reserveTo">
          <div>
            <span>
              Leave <IoIosAirplane />
            </span>
            <span>23 Jan, Sat</span>
          </div>
          <div>
            <GoCalendar />
          </div>
          <div>
            <span>
              Return <IoIosAirplane style={{ transform: 'rotate(180deg)' }} />
            </span>
            <span>12 Jan, Thu</span>
          </div>
        </div>
        <div className="reserveSerach">
          <button className="searchBtn">
            <FiSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
