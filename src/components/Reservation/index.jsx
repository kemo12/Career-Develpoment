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
            <span className="reserveTitle">Living From</span>
            <span className="reserveLocation">Dubai</span>
          </div>
          <div className="midIconContainer">
            <IoIosAirplane className="midIcon" />
          </div>
          <div>
            <span className="reserveTitle">Going to</span>
            <span className="reserveLocation">New York</span>
          </div>
        </div>
        <div className="reserveTo">
          <div>
            <span className="reserveTitle">
              <span className="iconMarginLeft">Leave</span>
              <IoIosAirplane
                style={{ marginLeft: '5PX', color: 'rgb(46, 125, 245)' }}
              />
            </span>
            <span className="reserveLocation">23 Jan, Sat</span>
          </div>
          <div className="midIconContainer">
            <GoCalendar className="midIcon" />
          </div>
          <div>
            <span className="reserveTitle">
              <span className="iconMarginLeft">Return</span>
              <IoIosAirplane
                style={{
                  transform: 'rotate(180deg)',
                  marginLeft: '5px',
                  color: 'rgb(46, 125, 245)',
                }}
              />
            </span>
            <span className="reserveLocation">12 Jan, Thu</span>
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
