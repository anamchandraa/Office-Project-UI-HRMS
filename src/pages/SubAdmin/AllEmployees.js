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

            <div class="col-sm-12">
                </div>

            <div class="row filter-row">
                <div class="col-sm-6 col-md-3">
                    <div class="form-group form-focus">
                        <input type="employee Name" class="form-control floating" />
                        <label class="focus-label">Employee Name</label>
                    </div>
                </div>
                
                <div class="col-sm-6 col-md-3">
                    <div class="form-group form-focus select-focus">
                        <select class="select floating select2-hidden-accessible" data-select2-id="105" tabindex="-1" aria-hidden="true">
                            <option data-select2-id="107">-</option>
                            <option data-select2-id="117">Jan</option>
                            <option data-select2-id="118">Feb</option>
                            <option data-select2-id="119">Mar</option>
                            <option data-select2-id="120">Apr</option>
                            <option data-select2-id="121">May</option>
                            <option data-select2-id="122">Jun</option>
                            <option data-select2-id="123">Jul</option>
                            <option data-select2-id="124">Aug</option>
                            <option data-select2-id="125">Sep</option>
                            <option data-select2-id="126">Oct</option>


                            <option data-select2-id="127">Nov</option>
                            <option data-select2-id="128">Dec</option>
                        </select>
                        <span class="select2 select2-container select2-container--default select2-container--below" dir="ltr" data-select2-id="106" style={{ width: '100%' }}><span class="selection">
                            <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-wtiu-container">
                                <span class="select2-selection__rendered" id="select2-wtiu-container" role="textbox" aria-readonly="true" title="-">-</span>
                                <span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
                            <span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        <label class="focus-label">Select Month</label></div></div>
                <div class="col-sm-6 col-md-3">
                    <div class="form-group form-focus select-focus">
                        <select class="select floating select2-hidden-accessible" data-select2-id="108" tabindex="-1" aria-hidden="true">
                            <option data-select2-id="110">-</option><option>2019</option><option>2018</option>
                            <option>2017</option><option>2016</option><option>2015</option></select>
                        <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="109" style={{ width: "100%" }}>
                            <span class="selection">
                                <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-1nag-container">
                                    <span class="select2-selection__rendered" id="select2-1nag-container" role="textbox" aria-readonly="true" title="-">-</span>
                                    <span class="select2-selection__arrow" role="presentation">
                                        <b role="presentation"></b></span></span></span>
                            <span class="dropdown-wrapper" aria-hidden="true"></span></span>
                            <label class="focus-label">Select Year</label>
                            </div>
                            </div>
                <div class="col-sm-6 col-md-2">
                    <a href="#" class="btn btn-success btn-block w-100"> Search </a>
                </div>
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
                                                        <td><a href={"in-out-details?id=" + d.EmployeeId}>View</a></td>
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