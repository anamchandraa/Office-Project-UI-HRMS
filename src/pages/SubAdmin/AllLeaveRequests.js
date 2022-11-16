import React, { useEffect } from "react";
import axios from "axios";
import { APIUrl, getToken } from '../../constants/Global'
import Moment from "react-moment";

const AllLeaveRequests = () => {
    const [data, setData] = React.useState([]);
    const [dataFor, setDataFor] = React.useState("all");
    const [month, setMonth] = React.useState("all");
    const [year, setYear] = React.useState("all");

    const selectMonth = (event) => {
        setMonth(event.target.value);
        setDataFor(year + "-" + event.target.value);
    }

    const selectYear = (event) => {
        setYear(event.target.value);
        setDataFor(event.target.value + "-" + month);

    }

    const searchData = () => {

        if (month === "all" && year === "all") {
            setDataFor("all");

        }
        axios.post(APIUrl + "/GetLeaveRequest", {
            "MonthandYear": dataFor
        }, getToken())
            .then((res) => {
                setData(res.data.data)

            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                setData([])
            })
    }

    useEffect(() => {
        fecthLeaveDat()
    }, [])

    function fecthLeaveDat() {
        var userData = localStorage.getItem("token");

        const t = JSON.parse(userData);
        const config = {
            headers: { Authorization: `Bearer ${t.data.Token}` }
        };

        if (month === "all" && year === "all") {
            setDataFor("all");
        }

        axios.post(APIUrl+"/GetLeaveRequest", {
            "MonthandYear": "2022-11"
        }, getToken())
            .then((res) => {
                setData(res.data.data)
                console.log(res.data.data)
            })
    }

    const approveLeave = (id) => {
debugger
        axios.post(APIUrl+"/ApproveLeave", {
            "LeaveId": id,
            "IsApproved": true
        }, getToken())
            .then((res) => {
                debugger
                if(res.data.code === 1)
                {
                    alert(res.data.message)
                    window.location.href = "/all-leaves-requests";
                }
                else
                {
                    alert('Somthing went wrong check the API.')
                }

                window.location.href = "/all-leaves-requests";
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
                            <li className="breadcrumb-item">Leave Request</li>
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

                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <select onChange={selectMonth} value={month} class="form-select" aria-label="Default select example">
                            <option selected="all">Select Month</option>
                            <option value="01">Jan</option>
                            <option value="02">Feb</option>
                            <option value="03">Mar</option>
                            <option value="04">Apr</option>
                            <option value="05">May</option>
                            <option value="06">Jun</option>
                            <option value="07">Jul</option>
                            <option value="08">Aug</option>
                            <option value="09">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <select onChange={selectYear} value={year} class="form-select" aria-label="Default select example">
                            <option selected="all">Select Year</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                        </select>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">

                        <div className="form-group form-focus select-focus">
                            <input className="form-control floating" type="date" />
                            <label className="focus-label"></label></div></div>





                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <button className="btn btn-success btn-block w-100" onClick={searchData}> Search </button>
                    </div>
                </div>

            </section>

            <br />

            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Leave Request</h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Position</th>
                                            <th scope="col">Manager</th>
                                            <th scope="col">Applied</th>
                                            <th scope="col">From</th>
                                            <th scope="col">To</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Reason</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(d => {
                                                return (

                                                    <tr>
                                                        <th scope="row">{d.RequestId}</th>
                                                        <td>{d.EmployeeName}</td>
                                                        <td>{d.JobTitle}</td>
                                                        <td>{d.AssignManagerName}</td>
                                                        <td><Moment format='MMM Do YYYY'>{d.Applieddate}</Moment></td>
                                                        <td><Moment format='MMM Do YYYY'>{d.FromLeaveDate}</Moment></td>
                                                        <td><Moment format='MMM Do YYYY'>{d.ToLeaveDate}</Moment></td>
                                                        <td>{d.LeaveStatus === "Approved" && <span class="badge bg-success">{d.LeaveStatus}</span>}
                                                            {d.LeaveStatus === "Applied" && <span class="badge bg-primary">{d.LeaveStatus}</span>}
                                                            {d.LeaveStatus === "Reject" && <span class="badge bg-danger">{d.LeaveStatus}</span>}


                                                        </td>
                                                        <td>{d.LeaveType}</td>
                                                        <td>{d.LeaveReason}</td>
                                                        <td>
                                                            {d.LeaveStatus === "Applied" && <button className="btn btn-success"  onClick={() => approveLeave(d.RequestId)}>Approve</button>}
                                                        </td>
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

export default AllLeaveRequests;

