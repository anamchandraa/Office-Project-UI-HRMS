import React, { useEffect } from "react";
import axios from "axios";

const AllEmployeeAttendence = () => {
    const [data, setData] = React.useState([]);


    useEffect(() => {

        var userData = localStorage.getItem("token");

        const t = JSON.parse(userData);
        const config = {
            headers: { Authorization: `Bearer ${t.Token}` }
        };

        axios
            .post("http://localhost:8080/Api/GetAllEmployeeAttendance", {
                "MonthandYear": "2022-10"
            }, config)
            .then((res) => {
                setData(res.data.data)
                console.log(res.data.data)
            })
    })
    return (

        <main id="main" className="main">

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
                        <input type="employee Name" className="form-control floating" />
                        <label className="focus-label">Employee Name</label>
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

            <section className="section">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">
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

                                                    <tr key={d.EmployeeId}>
                                                        <th scope="row">{d.EmployeeName}</th>
                                                        {
                                                            [...Array(31)].map((x, i) => {

                                                                let attendance = d.Attendance[i];

                                                                if (attendance != undefined) {
                                                                    let dayDate = new Date(attendance.DayDate);
                                                                    let day = dayDate.getDate();

                                                                    if (day === i + 1) {
                                                                        return <td key={i}>{attendance.AttendanceType}</td>
                                                                    }
                                                                    else {
                                                                        return <td key={i}></td>
                                                                    }
                                                                }
                                                            }

                                                            )
                                                        }
                                                    </tr>
                                                );
                                            })

                                            // [...Array(31)].map((x, i) =>
                                            //     <tr>
                                            //         <td>{"in"}</td>
                                            //     </tr>
                                            // )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
};
export default AllEmployeeAttendence;
