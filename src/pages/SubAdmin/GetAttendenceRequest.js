import React, { useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";

const GetAttendenceRequest = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        fecthUserAttendenceRequest()
    }, [])

    function fecthUserAttendenceRequest() {
        var userData = localStorage.getItem("token");

        const t = JSON.parse(userData);
        const config = {
            headers: { Authorization: `Bearer ${t.data.Token}` }
        };

        axios.post("http://hrm.unibillapp.com:8080/Api/GetAttendanceRequest", {
            "MonthandYear": "2022-11"
        }, config)
            .then((res) => {
                
                if (res != undefined) {
                    setData(res.data.data)
                    console.log(res.data.data)
                }
                else {
                    console.log('No Data')
                }
            })
            .then(data => {
                console.log('No Data')
            })
            .catch(error => {
                 console.log('No Data')
                console.log(error)
                setData([])
            })
    }


    return (
        <main id="main" class="main">
            <section className="section">
                <div class="pagetitle">
                    <h1>User Attendance Request</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item">Attendance</li>
                            <li class="breadcrumb-item active">User Request</li>
                        </ol>
                    </nav>
                </div>
              


                <br />




                <section class="section">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Requests</h5>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id#</th>
                                                <th scope="col">EmployeeName</th>
                                                <th scope="col">Request Date</th>
                                                <th scope="col">Applied Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Remark</th>
                                                <th scope="col">AssignManagerName</th>
                                                <th scope="col">Manager Remark</th>
                                                <th scope="col">Approve Date</th>
                                                <th scope="col">Approve By</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                             {

                                                data.map(d => {

                                                    return (

                                                        <tr>
                                                            <th scope="row">{d.RequestId}</th>
                                                            <td>{d.EmployeeName}</td>
                                                            <td><Moment format='MMM Do YYYY'>{d.Date}</Moment></td>
                                                            <td><Moment format='MMM Do YYYY'>{d.RequestDate}</Moment></td>
                                                            <td>
                                                                {d.Status === "Applied" && <button className="btn btn-success">Approve</button>}
                                                                
                                                            </td>
                                                            <td>{d.Requestremark}</td>

                                                            <td>{d.AssignManagerName}</td>
                                                            <td>{d.ManagerRemark}</td>

                                                            <td>{d.ActionDate}</td>
                                                            <td>{d.AssignManagerName}</td>
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

            </section>
        </main>
    );
};
export default GetAttendenceRequest;
