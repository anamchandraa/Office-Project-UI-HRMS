import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Moment from "react-moment";
import Calendar from "calendar-reactjs";
import { APIUrl, getToken } from '../../constants/Global'

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
        
        
        const id = searchParams.get('id');
        axios.post(APIUrl+"/GetAttendance", {
                EmployeeId: id,
                MonthandYear: '2022-10'
            }, getToken())
            .then((res) => {
                console.log(res.data.data.Attendance)
                var dt = res.data.data.Attendance;
                jsonCal = ""
                    dt.map((d, key) => {
                        let date = new Date(d.DayDate);
                        dateYYYYMMDD = `${date.getFullYear()}-${date.getMonth()<10?"0"+date.getMonth():date.getMonth() + 1}-${date.getDate()<10?"0"+date.getDate():date.getDate()}`;
                        attDate = `${date.getFullYear()}-${date.getMonth()<10?"0"+date.getMonth():date.getMonth() + 1}-${"01"}`;
                        jsonCal = jsonCal + "{ "+'"'+ datte +'":'+" " + '"' + dateYYYYMMDD + '"' +", "+'"' +status +'":' +" " + '"' + d.Attendance[0].AttendanceType + '"' + " },";
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
        <div><h1>EmployeeId</h1></div>




















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
                            backgroundColor: "orange",
                            color: "black",
                            borderRadius: "8px",
                            padding: "0px 0px 3px 0px"
                          }
                        },
                        vacation: {
                          labelStyle: {
                            backgroundColor: "purple",
                            color: "black",
                            borderRadius: "8px",
                            padding: "0px 0px 3px 0px"
                          }
                        },
                        HD: {
                          labelStyle: {
                            backgroundColor: "yellow",
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
