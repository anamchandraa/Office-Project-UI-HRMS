import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Moment from "react-moment";
import Calendar from "calendar-reactjs";

const EmployeeInOutDetails = () => {

  const [calenderData, setCalenderData] = React.useState([]);
  const [calenderDate, setCalenderDate] = React.useState();
  const [searchParams] = useSearchParams();

  let attDate = "";
  let jsonCal = "";
  let datte = "date";
  let status = "status";
  let dateYYYYMMDD ="";
  let jsonData = "";

  useEffect(() => {
    function fetchData() {

    var dt = [{
            "code": 1,
            "message": "Attendance Fetched Successfully",
            "data": [
                {
                  "DayDate": "2022-10-13T00:00:00.000Z",
                  "InTime": "1970-01-01T09:30:33.000Z",
                  "OutTime": "1970-01-01T06:30:33.000Z",
                  "AttendanceType": "P",
                  "OutLocation": "dominoes, Meerut, Uttar Pradesh 250001, IN",
                  "InLocation": "dominoes, Meerut, Uttar Pradesh 250001, IN"
              },
              {
                  "DayDate": "2022-10-14T00:00:00.000Z",
                  "InTime": "1970-01-01T09:40:30.000Z",
                  "OutTime": "1970-01-01T06:50:30.000Z",
                  "AttendanceType": "P",
                  "OutLocation": "dominoes, Meerut, Uttar Pradesh 250001, IN",
                  "InLocation": "dominoes, Meerut, Uttar Pradesh 250001, IN"
              },
              {
                  "DayDate": "2022-10-15T00:00:00.000Z",
                  "InTime": "1970-01-01T09:40:30.000Z",
                  "OutTime": "1970-01-01T06:40:30.000Z",
                  "AttendanceType": "P",
                  "OutLocation": "dominoes, Meerut, Uttar Pradesh 250001, IN",
                  "InLocation": "dominoes, Meerut, Uttar Pradesh 250001, IN"
              },
              {
                  "DayDate": "2022-10-17T00:00:00.000Z",
                  "InTime": null,
                  "OutTime": null,
                  "AttendanceType": "AL",
                  "OutLocation": null,
                  "InLocation": null
              },
              {
                  "DayDate": "2022-10-18T00:00:00.000Z",
                  "InTime": null,
                  "OutTime": null,
                  "AttendanceType": "WD",
                  "OutLocation": null,
                  "InLocation": null
              },
              {
                  "DayDate": "2022-10-19T00:00:00.000Z",
                  "InTime": null,
                  "OutTime": null,
                  "AttendanceType": "AL",
                  "OutLocation": null,
                  "InLocation": null
              },
              {
                  "DayDate": "2022-10-20T00:00:00.000Z",
                  "InTime": null,
                  "OutTime": null,
                  "AttendanceType": "AL",
                  "OutLocation": null,
                  "InLocation": null
              },
              {
                  "DayDate": "2022-10-21T00:00:00.000Z",
                  "InTime": null,
                  "OutTime": null,
                  "AttendanceType": "WD",
                  "OutLocation": null,
                  "InLocation": null
              },
              {
                  "DayDate": "2022-10-22T00:00:00.000Z",
                  "InTime": null,
                  "OutTime": null,
                  "AttendanceType": "AL",
                  "OutLocation": null,
                  "InLocation": null
              },
              {
                  "DayDate": "2022-10-23T00:00:00.000Z",
                  "InTime": null,
                  "OutTime": null,
                  "AttendanceType": "AL",
                  "OutLocation": null,
                  "InLocation": null
              },
              {
                  "DayDate": "2022-10-24T00:00:00.000Z",
                  "InTime": null,
                  "OutTime": null,
                  "AttendanceType": "AL",
                  "OutLocation": null,
                  "InLocation": null
              },
              {
                  "DayDate": "2022-10-25T00:00:00.000Z",
                  "InTime": null,
                  "OutTime": null,
                  "AttendanceType": "WD",
                  "OutLocation": null,
                  "InLocation": null
              },
              {
                  "DayDate": "2022-10-26T00:00:00.000Z",
                  "InTime": null,
                  "OutTime": null,
                  "AttendanceType": "AL",
                  "OutLocation": null,
                  "InLocation": null
              },
              {
                  "DayDate": "2022-10-27T00:00:00.000Z",
                  "InTime": null,
                  "OutTime": null,
                  "AttendanceType": "AL",
                  "OutLocation": null,
                  "InLocation": null
              }        
            ]
        }]
        
        var userData = localStorage.getItem("token");
        const t = JSON.parse(userData);
        const config = {
            headers: { Authorization: `Bearer ${t.Token}` }
        };
debugger
        const id = searchParams.get('id');
        axios.post("http://localhost:8080/APi/GetAttendance", {
                EmployeeId: id,
                MonthandYear: '2022-10'
            }, config)
            .then((res) => {
                debugger
                console.log(res.data.data.Attendance)
                dt = res.data.data.Attendance;
                jsonCal = ""
                    dt.map((d, key) => {
                     
                        let date = new Date(d.DayDate);
                        dateYYYYMMDD = `${date.getFullYear()}-${date.getMonth()<10?"0"+date.getMonth():date.getMonth() + 1}-${date.getDate()<10?"0"+date.getDate():date.getDate()}`;
                        attDate = `${date.getFullYear()}-${date.getMonth()<10?"0"+date.getMonth():date.getMonth() + 1}-${"01"}`;
                        jsonCal = jsonCal + "{ "+'"'+ datte +'":'+" " + '"' + dateYYYYMMDD + '"' +", "+'"' +status +'":' +" " + '"' + d.AttendanceType + '"' + " },";
                    });
                
        
                jsonCal = jsonCal.slice(0, -1);
                jsonData = "["+JSON.parse([JSON.stringify(jsonCal)])+"]";
               
              const newData = {
                date: dateYYYYMMDD,
                days: JSON.parse(jsonData)
              };
        
              setCalenderData(() => [newData]);
            })

       
    }
    fetchData();
  }, []);

  console.log(calenderDate);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>In/Out </h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item">Employees</li>
            <li className="breadcrumb-item active">In/Out Details</li>
          </ol>
        </nav>
      </div>

      <section>
        
      <div className="col-sm-12">
                </div>

                <div className="row filter-row">
                    {/* <div className="col-sm-6 col-md-3"> */}
                        {/* <div className="form-group form-focus">
                            <input type="employee Name" className="form-control floating" placeholder="Employee Name" />

                        </div> */}

                    {/* </div> */}
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


                    <div className="col-sm-6 col-md-3">

                    <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">Current</a></li>
                  {/* <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li> */}
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
                      
                    </div>











                    <div className="col-sm-6 col-md-2">
                        <a href="#" className="btn btn-success btn-block w-100"> Search </a>
                    </div>
                </div>
            </section>


        <br/>





















      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">

              
              <div className="card-body">
                <h5 className="card-title">Employee's In/Out</h5>

                

                {calenderData.map((d, index) => {
                  return (
                    <Calendar key={index} 
                      onCellClick={val => {
                        console.log(val);
                      }}
                      month={d}
                      emptyCellStyle={{ backgroundColor: "white" }}
                      status={{
                        P: {
                          labelStyle: {
                            backgroundColor: "green",
                            color: "black",
                            borderRadius: "8px",
                            padding: "0px 0px 3px 0px"
                          }
                        },
                        AB: {
                          labelStyle: {
                            backgroundColor: "red",
                            color: "black",
                            borderRadius: "8px",
                            padding: "0px 0px 3px 0px"
                          }
                        },
 
                        WD: {
                          labelStyle: {
                            backgroundColor: "grey",
                            color: "black",
                            borderRadius: "8px",
                            padding: "0px 0px 3px 0px"
                          }
                        },
 








                        AL: {
                          labelStyle: {
                            backgroundColor: "purple",
                            color: "black",
                            borderRadius: "8px",
                            padding: "0px 0px 3px 0px"
                          }
                        },
                        vacation: {
                          labelStyle: {
                            backgroundColor: "yellow",
                            color: "black",
                            borderRadius: "8px",
                            padding: "0px 0px 3px 0px"
                          }
                        },
                        HD: {
                          labelStyle: {
                            backgroundColor: "orange",
                            color: "black",
                            borderRadius: "8px",
                            padding: "0px 0px 3px 0px"
                          }
                        }
                      }}
                    />
                  );
                })}

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
  );
};

export default EmployeeInOutDetails;
