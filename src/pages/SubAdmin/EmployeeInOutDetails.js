import React, { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from 'react-router-dom';
import Moment from 'react-moment';
import Calendar from 'calendar-reactjs'

const EmployeeInOutDetails = () => {
    const [data, setData] = React.useState([]);
    const [cal, setCal] = React.useState();
    const [searchParams] = useSearchParams();
   
  

    

    let attDate = "";
    let jsonCal = "";
    let datte = "date";
    let status = "status";
    let dateYYYYMMDD ="";

    let jsonData = "";
    const ShowCalenderData = () => {
        
      setData({
        date: "2022-10-13",
        days: [
          { date: "2022-10-01", status: "vacation" },
          { date: "2022-10-02", status: "vacation" },
          { date: "2022-10-03", status: "present" },
          { date: "2022-10-04", status: "present" },
          { date: "2022-10-10", status: "present" },
          { date: "2022-10-06", status: "present" },
          { date: "2022-10-07", status: "present" },
          { date: "2022-10-08", status: "vacation" },
          { date: "2022-10-09", status: "vacation" },
          { date: "2022-10-10", status: "present" },
          { date: "2022-10-11", status: "present" },
          { date: "2022-10-12", status: "present" },
          { date: "2022-10-13", status: "present" },
          { date: "2022-10-14", status: "present" },
          { date: "2022-10-15", status: "vacation" },
          { date: "2022-10-16", status: "vacation" },
          { date: "2022-10-17", status: "absent" },
          { date: "2022-10-18", status: "leave" },
          { date: "2022-10-19", status: "leave" },
          { date: "2022-10-20", status: "leave" },
          { date: "2022-10-21", status: "leave" },
          { date: "2022-10-22", status: "vacation" },
          { date: "2022-10-23", status: "vacation" },
          { date: "2022-10-24", status: "present" },
          { date: "2022-10-25", status: "present" },
          { date: "2022-10-26", status: "present" },
          { date: "2022-10-27", status: "present" },
          { date: "2022-10-28", status: "present" },
          { date: "2022-10-29", status: "vacation" },
          { date: "2022-10-30", status: "vacation" },
          { date: "2022-10-31", status: "present" }
        ]
      });
        const dt = [{
            "code": 1,
            "message": "Attendance Fetched Successfully",
            "data": [
                {
                    "DayDate": "2022-10-09T00:00:00.000Z",
                    "InTime": null,
                    "OutTime": null,
                    "AttendanceType": "WD",
                    "OutLocation": null,
                    "InLocation": null
                },
                {
                    "DayDate": "2022-10-10T00:00:00.000Z",
                    "InTime": null,
                    "OutTime": null,
                    "AttendanceType": "WD",
                    "OutLocation": null,
                    "InLocation": null
                },
                {
                    "DayDate": "2022-10-13T00:00:00.000Z",
                    "InTime": null,
                    "OutTime": null,
                    "AttendanceType": "AL",
                    "OutLocation": null,
                    "InLocation": null
                },
            ]
        }]
        
        var userData = localStorage.getItem("token");
        const t = JSON.parse(userData);
        const config = {
            headers: { Authorization: `Bearer ${t.Token}` }
        };

        const id = searchParams.get('id');
        // axios
        //     .post("http://localhost:8080/APi/GetAttendance", {
        //         EmployeeId: id,
        //         MonthandYear: '2022-10'
        //     }, config)
        //     .then((res) => {
        //         setData(res.data.data)
        //     })

        

        dt.map((d, key) => {
            jsonCal = ""
            d.data.map((d, key) => {
                let date = new Date(d.DayDate);
                dateYYYYMMDD = `${date.getFullYear()}-${date.getMonth()<10?"0"+date.getMonth():date.getMonth() + 1}-${date.getDate()<10?"0"+date.getDate():date.getDate()}`;
                attDate = `${date.getFullYear()}-${date.getMonth()<10?"0"+date.getMonth():date.getMonth() + 1}-${"01"}`;
                jsonCal = jsonCal + "{ "+'"'+ datte +'":'+" " + '"' + dateYYYYMMDD + '"' +", "+'"' +status +'":' +" " + '"' + d.AttendanceType + '"' + " },";
            });


        });

        jsonCal = jsonCal.slice(0, -1);
        setCal(dateYYYYMMDD);
        //setData([{ date: "2022-10-02", status: "vacation" }]);
        jsonData = "["+JSON.parse([JSON.stringify(jsonCal)])+"]";
        setData(jsonData);
        console.log(jsonData)
        
    }



    return (

        <main id="main" className="main">

            <div className="pagetitle">
                <h1>In/Out </h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li className="breadcrumb-item">Employees</li>
                        <li className="breadcrumb-item active">In/Out Details</li>
                    </ol>
                </nav>
            </div>

            <section className="section">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Employee's In/Out</h5>
                                <button className="btn btn-info" onClick={ShowCalenderData}>Show</button>
                                <Calendar
                                    onCellClick={(val) => {console.log(val)}}
                                    month = {data}
                                    emptyCellStyle={{ backgroundColor: 'white' }}
                                    status={
                                        {
                                            "WD": {
                                                labelStyle: { backgroundColor: 'green', color: 'black', borderRadius: '8px', padding: '0px 0px 3px 0px' }
                                            },
                                            "AL": {
                                                labelStyle: { backgroundColor: 'red', color: 'black', borderRadius: '8px', padding: '0px 0px 3px 0px' }
                                            },
                                            "vacation": {
                                                labelStyle: { backgroundColor: 'yellow', color: 'black', borderRadius: '8px', padding: '0px 0px 3px 0px' }
                                            },
                                            "leave": {
                                                labelStyle: { backgroundColor: 'orange', color: 'black', borderRadius: '8px', padding: '0px 0px 3px 0px' }
                                            }
                                        }
                                    }
                                />

                                {/* <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">In Time</th>
                                            <th scope="col">Out Time</th>
                                            <th scope="col">Attendance Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((d,index) => {
                                                return (

                                                    <tr key={index}>
                                                        <th scope="row"><Moment format='MMMM Do YYYY'>{d.DayDate}</Moment></th>
                                                        <td><Moment format='h:mm:ss a'>{d.InTime}</Moment></td>
                                                        <td><Moment format='h:mm:ss a'>{d.OutTime}</Moment></td>
                                                        <td>{d.AttendanceType}</td>
                                                    </tr>

                                                );
                                            })
                                        }

                                    </tbody>
                                </table> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default EmployeeInOutDetails;