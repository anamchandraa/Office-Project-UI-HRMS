import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllEmployees = () => {
    const [data, setData] = React.useState([]);


    useEffect(() => {

        var userData = localStorage.getItem("token");

        const t = JSON.parse(userData);
        const config = {
            headers: { Authorization: `Bearer ${t.Token}` }
        };

        axios
            .post("http://localhost:8080/Api/GetEmployee", {
                "DepartmentId": 1
            }, config)
            .then((res) => {
                setData(res.data.data)
                console.log(res.data.data)
            })
    })

    return (

        <main id="main" class="main">

            <div class="pagetitle">
                <h1>All Employees</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li class="breadcrumb-item">Employees</li>
                        <li class="breadcrumb-item active">All</li>
                    </ol>
                </nav>
            </div>

            <section class="section">
                <div class="row">
                    <div class="col-lg-12">

                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Employees</h5>


                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Position</th>
                                            <th scope="col">Manager</th>
                                            <th scope="col">Photo</th>
                                            <th scope="col">In/Out Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(d => {
                                                return (

                                                    <tr>
                                                        <th scope="row">{d.EmployeeId}</th>
                                                        <td>{d.EmployeeName}</td>
                                                        <td>{d.JobTitle}</td>
                                                        <td>{d.ReportingManager}</td>
                                                        <td>{d.Photo}</td>
                                                        <td><a href={"in-out-details?id="+ d.EmployeeId}>View</a></td>
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
            </section>
        </main>

    )
}

export default AllEmployees;