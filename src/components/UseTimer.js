import React from 'react';
import { useTimer } from 'react-timer-hook';
import axios from "axios";

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    // resume,
    // restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });



  async function checkIn() {
    try {

      var userData = localStorage.getItem("token");

      const t = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${t.Token}` }
      };


      const resp = await axios.post(" http://localhost:8080/Api/CheckInOut", {
        EmployeeId: "UNI111",
        InLocation: "Sastri nagar"
      }, config);
      start();
      alert(resp.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  async function checkOut() {
    try {
      pause();

       var userData = localStorage.getItem("token");

      const t = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${t.Token}` }
      };
      const resp = await axios.post(" http://localhost:8080/Api/CheckInOut", {
        EmployeeId: "UNI111",
        OutLocation: "Sastri nagar"
      }, config);
      pause();
      alert(resp.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ textAlign: 'center', alignItems: 'left' }}>
      <div style={{ fontSize: '50px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={checkIn} className="btn btn-success">Check In</button> <span>{" "}</span>
      <button onClick={checkOut} className="btn btn-info">Check Out</button> <span>{" "}</span>
      {/* <button onClick={resume} className="btn btn-primary">Resume</button> <span>{" "}</span> */}
      {/* <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 32400);
        // restart(time)
      }} className="btn btn-danger">Restart</button> */}
    </div>
  );
}

export default MyTimer;