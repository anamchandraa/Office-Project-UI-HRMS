import React, { useEffect } from "react";
import axios from "axios";
import { APIUrl, getToken } from '../../constants/Global'

const AllEmployees = () => {
    const [data, setData] = React.useState([]);


    useEffect(() => {
        fetchData();
    },[]);
      
    const fetchData =() =>{

        axios.post(APIUrl+"/GetEmployee", {
                "DepartmentId": 1
            }, getToken())
            .then((res) => {
                console.log(res.data.data[0]);
                
                
                setData(res.data.data)
                // console.log(res.data.data);

            })
    }

    return (

        <main id="main" class="main">
               <section className="section">
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





         <br/>
                



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
                                            {/* <th scope="col">Photo</th> */}
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
                                                        {/* <td>{d.Photo}</td> */}
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

