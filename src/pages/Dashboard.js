// import MyTimer from "../components/UseTimer";
import React, { useState } from "react";
import Geolocation from "../components/GeoLocation";

import axios from "axios";

const Dashboard = () => {
  const [location, setLocation] = useState("");
  // const [lat, setLat] = useState(0);
  // const [lng, setLng] = useState(0);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 32400); // 10 minutes timer

  async function checkIn() {
    try {
      debugger
      var userData = localStorage.getItem("token");

      const t = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${t.Token}` }
      };

      const resp = await axios.post("http://localhost:8080/Api/CheckInOut", {
        EmployeeId: "UNI111",
        InLocation: location
      }, config);

      alert(resp.data.message);
    } catch (error) {
      alert(error);
    }
  };

  async function checkOut() {
    try {

      var userData = localStorage.getItem("token");

      const t = JSON.parse(userData);
      const config = {
        headers: { Authorization: `Bearer ${t.Token}` }
      };
      const resp = await axios.post(" http://localhost:8080/Api/CheckInOut", {
        EmployeeId: "UNI111",
        OutLocation: location
      }, config);

      alert(resp.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  async function getLocation(lat,lng) {
    try {
      const locationAPIURL = "https://api.opencagedata.com/geocode/v1/json?q=" + lat + "+" + lng + "&key=abf008e0c99a4c5aa2cb57d46d2ef2cf";
      const respLocation = await axios.get(locationAPIURL);
      setLocation(respLocation.data.results[0].formatted)
      console.log(respLocation.data.results[0])
    } catch (error) {
      console.log(error);
    }
  }

  const getCurrentPosition = () => {
    const geolocation = navigator.geolocation;
    
    geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      () => {
        console.log(new Error("Permission denied"));
      }
    );
  };

  return (

    <div style={{ height: 500 }}>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>User Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="dashboard">Dashboard</a>
              </li>
              <li className="breadcrumb-item">Pages</li>
              {/* <li className="breadcrumb-item active">Blank</li> */}
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Attendance</h5>

                  {/* <MyTimer expiryTimestamp={time} autostart={false} /> */}
                  <button onClick={checkIn} className="btn btn-success">Check In</button> <span>{" "}</span>
                  <button onClick={checkOut} className="btn btn-info">Check Out</button> <span>{" "}</span>

                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">My Current Location</h5>
                  <p>
                    <Geolocation
                      render={({
                        fetchingPosition,
                        position: { coords: { latitude, longitude } = {} } = {},
                        error,
                        getCurrentPosition
                      }) => (
                        <div>
                          <button onClick={getCurrentPosition} className="btn btn-info">Update Location</button>
                          <button onClick={getLocation(latitude,longitude)} style={{display:'none'}}>Get Position</button>
                          <br/>
                          <br/>
                          {error && <div>{error.message}</div>}
                         
                            <h5>Latitude: </h5> {latitude}
                            <br />
                            <br />
                            <h5>Longitude: </h5> {longitude}
                            <br />
                            <br />
                            <h5> Location: </h5> {location}
                         
                        </div>
                      )}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>

  );
};
export default Dashboard;
