import React, { useEffect, useState } from "react";
import axios from "axios";
import * as moment from 'moment'


const AllEmployeeAttendence = () => {
    const [data, setData] = React.useState([]);

    // const [data2,setData2]=useState([]);
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = () => {

        var userData = localStorage.getItem("token");

        const t = JSON.parse(userData);
        const config = {
            headers: { Authorization: `Bearer ${t.data.Token}` }
        };

        axios
            .post("http://hrm.unibillapp.com:8080/Api/GetAllEmployeeAttendance", {
                "MonthandYear": "2022-11"
            }, config)
            .then((res) => {
           setData(res.data.data)
            })

    }
    return (

        <main id="main" className="main">
            <section className="section">
                <div className="pagetitle">
                    <h1>All Employees</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li className="breadcrumb-item">Employees</li>
                            <li className="breadcrumb-item active">All</li>

                        </ol>
                    </nav>
                </div>

                <div className="col-sm-12">
                </div>

                <div className="row filter-row">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus">
                            <input type="employee Name" className="form-control floating" placeholder="Employee Name" />

                        </div>
                    </div>


                    <div className="col-sm-6 col-md-3">
                        <select class="form-select" aria-label="Default select example">
                            <option selected="">Select Month</option>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sep</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dec</option>
                        </select>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <select class="form-select" aria-label="Default select example">
                            <option selected="">Select Year</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                        </select>

                    </div>
                    <div className="col-sm-6 col-md-2">
                        <a href="#" className="btn btn-success btn-block w-100"> Search </a>
                    </div>
                </div>
            </section>
            <br />
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body" >
                                <h5 className="card-title">Employees</h5>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Employee</th>
                                            {[...Array(31)].map((x, i) =>
                                                <th key={i} scope="col">{i + 1}</th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                          {
                                            data.map(d => {
                                                return (

                                                    <tr id={d.EmployeeId} key={d.EmployeeId}>
                                                        <th scope="row">{d.EmployeeName}</th>
                                                        {/* {
                                                            [...Array(31)].map((x, i) => {
                                                                i = i + 1;
                                                                let attendance = d.Attendance[i];

                                                                if (attendance != undefined) {
                                                                    let dayDate = new Date(attendance.DayDate);
                                                                    let day = dayDate.getDate();

                                                                    if (day === i + 1) {
                                                                        return <td id={d.EmployeeName+"_"+i} key={d.EmployeeName+"_"+i}>{attendance.AttendanceType}</td>
                                                                    }
                                                                    else {
                                                                        return <td id={d.EmployeeName+"_"+i} key={d.EmployeeName+"_"+i}></td>
                                                                    }
                                                                }
                                                                else {
                                                                    return <td id={d.EmployeeName+"_"+i} key={d.EmployeeName+"_"+i}></td>
                                                                }
                                                            }

                                                            )
                                                        } */}

                                                        {(() => {
                                                            const rows = [];
                                                            let countLeave;
                                                            let leaveData;
                                                            let colorCircle = "red";
                                                            let leaveTitle = "";

                                                            data.map((d, i) => {

                                                                countLeave = Object.keys(d.leave).length;
                                                                leaveData = d.leave;

                                                            })

                                                            for (let i = 1; i <= 31; i++) {

                                                                for (let j = 0; j < countLeave; j++) {

                                                                    var leave = leaveData[j];
                                                                    var dateLeave = new Date(leave.DayDate);
                                                                    var dayLeave = dateLeave.getDate();
                                                                    if (i === dayLeave) {
                                                                        debugger;
                                                                        leaveTitle = "Leave: " + leave.WeekDay + " - " + leave.LeaveRequestType
                                                                        colorCircle = "orange"
                                                                        break;
                                                                    }
                                                                    else {
                                                                        leaveTitle = "Absent";
                                                                        colorCircle = "red"
                                                                    }

                                                                }

                                                                i = "1" ? rows.push(<td className="ri-close-circle-fill" title={leaveTitle}
                                                                    style={{ width: "20px", color: colorCircle }} id={d.EmployeeName + "_" + i} key={i}> </td>) : rows.push(<td style={{ width: "20px" }} id={d.EmployeeName + "_" + i} key={i}></td>)
                                                            }

                                                            data.map((d, i) => {

                                                                const count = Object.keys(d.Attendance).length;
                                                     


                                                                for (let i = 0; i <= count; i++) {

                                                                    let attendance = d.Attendance[i];


                                                                    if (attendance != undefined) {
                                                                        let dailyCheckInOut = d.Attendance[i].Attendance;
                                                                        let dailyCheckInOutCount = Object.keys(dailyCheckInOut).length;
                                                                        let dayDate = new Date(attendance.DayDate);
                                                                        let day = dayDate.getDate();
                                                                        var inTime;
                                                                        var outTime;
                                                                        var inLocation;
                                                                        var outLocation;

                                                                        var title = "Present";
                                                                        var color = "green"
                                                                        if (attendance.AttendanceType === "P") {
                                                                            color = "green"
                                                                        }
                                                                        else if (attendance.AttendanceType === "HD") {
                                                                            color = "yellow"
                                                                            title = "Half Day"
                                                                        }
                                                                        var WorkingHours = 0;
                                                                        var WorkingMins = 0;
                                                                        let activities = [];
                                                                        if (dailyCheckInOut != null && dailyCheckInOut != undefined) {
                                                                            for (let j = 0; j < dailyCheckInOutCount; j++) {

                                                                                inTime = null
                                                                                outTime = null
                                                                                inLocation = null
                                                                                outLocation = null
                                                                                if (dailyCheckInOut[j] != null && dailyCheckInOut[j] != undefined) {
                                                                                    if (dailyCheckInOut[j].InTime != null && dailyCheckInOut[j].InTime != undefined) {
                                                                                        inTime = moment(dailyCheckInOut[j].InTime).utc().format('LTS');
                                                                                        inLocation = dailyCheckInOut[j].InLocation;
                                                                                    }
                                                                                    if (dailyCheckInOut[j].OutTime != null && dailyCheckInOut[j].OutTime != undefined) {
                                                                                        outTime = moment(dailyCheckInOut[j].OutTime).utc().format('LTS');
                                                                                        outLocation = dailyCheckInOut[j].OutLocation
                                                                                    }

                                                                                    if (dailyCheckInOut[j].WorkingHours != null && dailyCheckInOut[j].WorkingHours != undefined) {

                                                                                        // const WkHrs = Moment(dailyCheckInOut[j].WorkingHours)
                                                                                        // WorkingHours = WorkingHours + WkHrs.hours();

                                                                                        var workinghrsArray = dailyCheckInOut[j].WorkingHours.split(':');
                                                                                        
                                                                                        var hrs = parseInt(workinghrsArray[0]);
                                                                                        var mins = parseInt(workinghrsArray[1]);

                                                                                        WorkingHours = WorkingHours + hrs;
                                                                                        WorkingMins = WorkingMins + mins;
                                                                                        
                                                                                    }
                                                                                }
                                                                                activities.push(<div key={j}>

                                                                                    <div class="activity-item d-flex">
                                                                                        <div class="activite-label">In</div>
                                                                                        <i class='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                                                                        <div className="activity-content">
                                                                                            {inTime} - {inLocation}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="activity-item d-flex">
                                                                                        <div className="activite-label">out</div>
                                                                                        <i className="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                                                                                        <div className="activity-content">
                                                                                            {outTime} - {outLocation}
                                                                                        </div>
                                                                                    </div>
                                                                                    <br />

                                                                                </div>)
                                                                            }
                                                                        }
                                                                        const col = <td id={d.EmployeeName + "_" + day} key={day}>
                                                                            <button style={{ border: "none", background: "white" }} type="button" data-bs-toggle="modal" data-bs-target={"#basicModal" + "_" + day}>
                                                                                <i style={{ width: "20px", color: color }} className="ri-checkbox-circle-fill" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                                    title={title} ></i>
                                                                            </button>
                                                                            <div className="modal fade" id={"basicModal" + "_" + day} tabindex="-1" style={{ display: "none" }} aria-hidden="true">
                                                                                <div className="modal-dialog modal-lg">
                                                                                    <div className="modal-content">
                                                                                        <div className="modal-header">
                                                                                            <h5 className="modal-title">Attendance Info</h5>
                                                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                                        </div>
                                                                                        <div className="modal-body">
                                                                                            <section className="section dashboard">
                                                                                                <div className="row">
                                                                                                    <div className="col-lg-12">
                                                                                                        <div className="row">
                                                                                                            <div className="col-lg-12">
                                                                                                                <div className="card">
                                                                                                                    <div className="card-body">
                                                                                                                        <h5 className="card-title">Punch In/Out Activity</h5>
                                                                                                                        <div className="activity">

                                                                                                                            {
                                                                                                                                activities

                                                                                                                            }

                                                                                                                            {
                                                                                                                                activities = []
                                                                                                                            }
                                                                                                                            
                                                                                                                            <div className="icon">
                                                                                                                                <div className="bi bi-alarm-fill">
                                                                                                                                    <span><b>Working Hours:</b> {WorkingHours + (WorkingMins/60) } Hrs</span>
                                                                                                                            </div>
                                                                                                                                
                                                                                                                            
                                                                                                                             {/* <span><b>Working Hours:</b> {WorkingHours + (WorkingMins/60) } Hrs</span> */}
                                                                                                                           </div>
                                                                                                                        </div>

                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </section>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </td>

                                                                        rows[day - 1] = col;
                                                                    }
                                                                }
                                                            })
                                                            return rows;
                                                        })()}
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </main >
    )
};
export default AllEmployeeAttendence;


