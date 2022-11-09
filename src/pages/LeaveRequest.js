import axios from "axios";
import React, { useState } from "react";


const LeaveRequest = () => {

    const currentDate = new Date();
    const [inputtext, setinputtext] = useState({
        fromDate: "",
        toDate: "",
        reason: "",
        leaveType: "",
        isPaid: "",
        minDate: `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1) < 10 ? "0" + (currentDate.getMonth() + 1).toString() : (currentDate.getMonth() + 1).toString()}-${currentDate.getDate()}`
    });

    const [isformvalid, setisformvalid] = useState(false);
    const [message, setMessage] = useState("");
    const [warnrequirdFromDate, setwarnrequirdFromDate] = useState("");
    const [warnrequirdToDate, setwarnrequirdToDate] = useState("");
    const [warnrequirdReason, setwarnrequirdReason] = useState("");
    const [warnrequirdLeaveType, setwarnrequirdLeaveType] = useState("");
    const [warnrequirdIsPaid, setwarnrequirdIsPaid] = useState("");

    const inputEvent = event => {
        
        const name = event.target.name;
        const value = event.target.value;

        if (name === "fromDate")
            setwarnrequirdFromDate("");

        if (name === "toDate")
            setwarnrequirdToDate("");

        if (name === "reason")
            setwarnrequirdReason("");

        if (name === "leaveType")
            setwarnrequirdLeaveType("");

        if (name === "isPaid")
            setwarnrequirdIsPaid("");

        setinputtext(lastValue => {
            return {
                ...lastValue,
                [name]: value
            };
        });
    }

    async function reset () {
        inputtext.fromDate = "";
        inputtext.toDate = "";
        inputtext.reason = "";
        inputtext.leaveType = "";
        inputtext.isPaid = "";
        
    }

    async function applyLeave() {
        try {
            

            if (inputtext.fromDate === "") {
                setisformvalid(false);
                setwarnrequirdFromDate("Please enter from date.");
            }

            if (inputtext.toDate === "") {
                setisformvalid(false);
                setwarnrequirdToDate("Please enter to date.");
            }

            if (inputtext.reason === "") {
                setisformvalid(false);
                setwarnrequirdReason("Please enter reason.");
            }

            if (inputtext.leaveType === "") {
                setisformvalid(false);
                setwarnrequirdLeaveType("Please select leave type.");
            }

            if (inputtext.isPaid === "") {
                setisformvalid(false);
                setwarnrequirdIsPaid("Please select Is paid.");
            }

            var userData = localStorage.getItem("token");

            
            const t = JSON.parse(userData);
            const config = {
                headers: { Authorization: `Bearer ${t.Token}` }
            };

            const resp = await axios.post("http://localhost:8080/Api/GetLeaveRequest", {
                EmployeeId: t.UserId,
                FromLeaveDate: inputtext.fromDate,
                ToLeaveDate: inputtext.toDate,
                Reason: inputtext.reason,
                LeaveType: inputtext.leaveType,
                IsPaid: inputtext.isPaid === 'yes' ? true : false
            }, config);
            reset();
            setMessage(resp.data.message);
        } catch (error) {
            console.log(error);
            setMessage(error.message);
        }
    };


    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Apply Leave Here</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="dashboard">Dashboard</a></li>
                        <li className="breadcrumb-item active">Leave Request</li></ol></nav></div>
            <section className="section"><div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Leave Request</h5>

                            <div className="row mb-3">
                                <label for="inputDate" className="col-sm-2 col-form-label">From Date</label>
                                <div className="col-sm-10">
                                    <input value={inputtext.fromDate} onChange={inputEvent} name="fromDate" type="date" className="form-control" min={inputtext.minDate} />
                                    <div class="invalid-feedback" style={{ display: "block" }}>{warnrequirdFromDate}</div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label for="inputDate" className="col-sm-2 col-form-label">To Date</label>
                                <div className="col-sm-10">
                                    <input value={inputtext.toDate} onChange={inputEvent} name="toDate" type="date" className="form-control" min={inputtext.minDate} />
                                    <div class="invalid-feedback" style={{ display: "block" }}>{warnrequirdToDate}</div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Reason</label>
                                <div className="col-sm-10">
                                    <textarea value={inputtext.reason} onChange={inputEvent} name="reason" className="form-control" style={{ height: 100 }}></textarea>
                                    <div class="invalid-feedback" style={{ display: "block" }}>{warnrequirdReason}</div>
                                </div>
                            </div>


                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label">Leave Type</label>
                                <div class="col-sm-10">
                                    <select name="leaveType" value={inputtext.leaveType} onChange={inputEvent} class="form-select" aria-label="Default select example">
                                        <option selected="">Select</option>
                                        <option value="SickLeave">Sick Leave</option>
                                        <option value="CasualLeave">Casual Leave</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div class="invalid-feedback" style={{ display: "block" }}>{warnrequirdLeaveType}</div>
                                </div>
                            </div>
                            

                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label">Is Paid</label>
                                <div class="col-sm-10">
                                    <select value={inputtext.isPaid} onChange={inputEvent} name="isPaid" class="form-select" aria-label="Default select example">
                                        <option selected="">select</option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                    <div class="invalid-feedback" style={{ display: "block" }}>{warnrequirdIsPaid}</div>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"></label>
                                <div class="col-sm-2">
                                    <button type="submit" class="btn btn-primary" onClick={applyLeave}>Submit</button>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label"></label>
                                <div class="col-sm-8">
                                <label class="text-danger">{message}</label>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            </section>
        </main>
    )
}

export default LeaveRequest;