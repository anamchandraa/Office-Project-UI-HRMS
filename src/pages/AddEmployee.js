import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useeffect } from "react";
import { useState } from "react";
import { APIUrl, getToken } from '../constants/Global'
 


const AddEmployee = () => {


  const [firstname, setFirstName] = useState("");
  const [firstnamevalidation, setFirstNameValidation] = useState("form-control");

  const [lastname, setLastName] = useState("");
  const [lastnamevalidation, setLastNameValidation] = useState("form-control");

  const [email, setEmail] = useState("");
  const [emailvalidation, setEmailValidation] = useState("form-control");


  const [workemail, setWorkEmail] = useState("");
  const [workemailvalidation, setWorkEmailValidation] = useState("form-control");


  const [password, setPassword] = useState("");
  const [passwordvalidation, setPasswordValidation] = useState("form-control");

  const [phonenumber, setPhoneNumber] = useState("");
  const [phonenumbervalidation, setPhoneNumberValidation] = useState("form-control");


  const [alternatephonenumber, setAlternatePhoneNumber] = useState("");
  const [alternatephonenumbervalidation, setAlternatePhoneNumberValidation] = useState("form-control");


  const [designation, SetDesignation] = useState("");
  const [designationvalidation, setDesignationValidation] = useState("form-control");



  const [employeetype, SetEmployeeType] = useState("");
  const [employeetypevalidation, setEmployeeTypeValidation] = useState("form-control");


  const [dateofjoining, setDateOfJoining] = useState("");
  const [dateofjoiningvalidation, setDateOfJoiningValidation] = useState("form-control");


  const [inshift, setInshift] = useState("");
  const [inshiftvalidation, setInShiftValidation] = useState("form-control");


  const [outshift, setOutshift] = useState("");
  const [outshiftvalidation, setOutShiftValidation] = useState("form-control");


  const [gender, setGender] = useState("");
  const [gendervalidation, setGenderValidation] = useState("form-control");


  const [weekoff, setWeekoff] = useState("");
  const [weekoffvalidation, setWeekOffValidation] = useState("form-control");


  const [dateofbirth, setDateofBirth] = useState("");
  const [dateofbirthvalidation, setDateOfBirthValidation] = useState("form-control");


  const [departmentid, setDepartmentid] = useState("");
  const [departmentidvalidation, setdepartmentIdValidation] = useState("form-control");


  const [currentaddresshousenumber, SetCurrentAddressHouseNumber] = useState("");
  const [currentaddresshousenumbervalidation, setCurrentAddressHouseNumberValidation] = useState("form-control");

  const [currentaddressLine, setCurrentAddressLine] = useState("");
  const [currentaddresslinevalidation, setCurrentAddressLineValidation] = useState("form-control");

  const [currentaddressstate, setCurrentAddressState] = useState("");
  const [currentaddressstatevalidation, setCurrentAddressStateValidation] = useState("form-control");

  const [currentaddresscity, setCurrentaddressCity] = useState("");
  const [currentaddresscityvalidation, setCurrentAddressCityValidation] = useState("form-control");

  const [currentaddresszipcode, setCurrentAddressZipCode] = useState("");
  const [currentaddresszipcodevalidation, setCurrentAddressZipCodeValidation] = useState("form-control");

  const [permanentaddresshousenumber, setPermanentAddressHouseNumber] = useState("");
  const [permanentaddresshousenumbervalidation, setPermanentAddressHouseNumberValidation] = useState("form-control");

  const [permanentaddressLine, setPermanentAddressLine] = useState("");
  const [permanentaddressLinevalidation, setPermanentAddressLineValidation] = useState("form-control");

  const [permanentaddressstate, setPermanentAddressState] = useState("");
  const [permanentaddressstatevalidation, setPermanentAddressStateValidation] = useState("form-control");

  const [permanentaddresscity, setPermanentAddressCity] = useState("");
  const [permanentaddresscityvalidation, setPermanentAddressCityValidation] = useState("form-control");

  const [permanentaddresszipcode, setPermanentAddressZipCode] = useState("");
  const [permanentaddresszipcodevalidation, setPermanentAddressZipCodeValidation] = useState("form-control");


  const setValidation = () => {

    var isFormValid = false;

    if (firstname == "") {
      isFormValid = false;
      setFirstNameValidation("form-control add-validation");
    }
    else {
      isFormValid = true;
      setFirstNameValidation("form-control");
    }

    if (lastname == "") {
      isFormValid = false;
      setLastNameValidation("form-control add-validation");
    }
    else {
      setLastNameValidation("form-control");
      isFormValid = true;
    }

    if (email == "") {
      isFormValid = false;
      setEmailValidation("form-control add-validation");
    }
    else {
      setEmailValidation("form-control");
      isFormValid = true;
    }

    if (workemail == "") {
      isFormValid = false;
      setWorkEmailValidation("form-control add-validation");
    }
    else {
      setWorkEmailValidation("form-control");
      isFormValid = true;
    }

    if (password == "") {
      isFormValid = false;
      setPasswordValidation("form-control add-validation");
    }
    else {
      setPasswordValidation("form-control");
      isFormValid = true;
    }

    if (phonenumber == "") {
      isFormValid = false;
      setPhoneNumberValidation("form-control add-validation");
    }
    else {
      setPhoneNumberValidation("form-control");
      isFormValid = true;
    }

    if (alternatephonenumber == "") {
      isFormValid = false;
      setAlternatePhoneNumberValidation("form-control add-validation");
    }
    else {
      setAlternatePhoneNumberValidation("form-control");
      isFormValid = true;
    }


    if (designation == "") {
      isFormValid = false;
      setDesignationValidation("form-control add-validation");
    }
    else {
      setDesignationValidation("form-control");
      isFormValid = true;
    }

    if (employeetype == "") {
      isFormValid = false;
      setEmployeeTypeValidation("form-control add-validation");
    }
    else {
      setEmployeeTypeValidation("form-control");
      isFormValid = true;
    }

    if (dateofjoining == "") {
      isFormValid = false;
      setDateOfJoiningValidation("form-control add-validation");
    }
    else {
      setDateOfJoiningValidation("form-control");
      isFormValid = true;
    }
    if (inshift == "") {
      isFormValid = false;
      setInShiftValidation("form-control add-validation");
    }
    else {
      setInShiftValidation("form-control");
      isFormValid = true;
    }

    if (outshift == "") {
      isFormValid = false;
      setOutShiftValidation("form-control add-validation");
    }
    else {
      setOutShiftValidation("form-control");
      isFormValid = true;
    }
    if (gender == "") {
      isFormValid = false;
      setGenderValidation("form-control add-validation");
    }
    else {
      setGenderValidation("form-control");
      isFormValid = true;
    }

    if (weekoff == "") {
      isFormValid = false;
      setWeekOffValidation("form-control add-validation");
    }
    else {
      setWeekOffValidation("form-control");
      isFormValid = true;
    }

    if (dateofbirth == "") {
      isFormValid = false;
      setDateOfBirthValidation("form-control add-validation");
    }
    else {
      setDateOfBirthValidation("form-control");
      isFormValid = true;
    }

    if (departmentid == "") {
      isFormValid = false;
      setdepartmentIdValidation("form-control add-validation");
    }
    else {
      setdepartmentIdValidation("form-control");
      isFormValid = true;
    }

    if (currentaddresshousenumber == "") {
      isFormValid = false;
      setCurrentAddressHouseNumberValidation("form-control add-validation");
    }
    else {
      setCurrentAddressHouseNumberValidation("form-control");
      isFormValid = true;
    }

    if (currentaddressLine == "") {
      isFormValid = false;
      setCurrentAddressLineValidation("form-control add-validation");
    }
    else {
      setCurrentAddressLineValidation("form-control");
      isFormValid = true;
    }

    if (currentaddressstate == "") {
      isFormValid = false;
      setCurrentAddressStateValidation("form-control add-validation");
    }
    else {
      setCurrentAddressStateValidation("form-control");
      isFormValid = true;
    }

    if (currentaddresscity == "") {
      isFormValid = false;
      setCurrentAddressCityValidation("form-control add-validation");
    }
    else {
      setCurrentAddressCityValidation("form-control");
      isFormValid = true;
    }

    if (currentaddresszipcode == "") {
      isFormValid = false;
      setCurrentAddressZipCodeValidation("form-control add-validation");
    }
    else {
      setCurrentAddressZipCodeValidation("form-control");
      isFormValid = true;
    }

    if (permanentaddresshousenumber == "") {
      isFormValid = false;
      setPermanentAddressHouseNumberValidation("form-control add-validation");
    }
    else {
      setPermanentAddressHouseNumberValidation("form-control");
      isFormValid = true;
    }

    if (permanentaddressLine == "") {
      isFormValid = false;
      setPermanentAddressLineValidation("form-control add-validation");
    }
    else {
      setPermanentAddressLineValidation("form-control");
      isFormValid = true;
    }

    if (permanentaddressstate == "") {
      isFormValid = false;
      setPermanentAddressStateValidation("form-control add-validation");
    }
    else {
      setPermanentAddressStateValidation("form-control");
      isFormValid = true;
    }

    if (permanentaddresscity == "") {
      isFormValid = false;
      setPermanentAddressCityValidation("form-control add-validation");
    }
    else {
      setPermanentAddressCityValidation("form-control");
      isFormValid = true;
    }

    if (permanentaddresszipcode == "") {
      isFormValid = false;
      setPermanentAddressZipCodeValidation("form-control add-validation");
    }
    else {
      setPermanentAddressZipCodeValidation("form-control");
      isFormValid = true;
    }

    return isFormValid;
  }


  const handleSubmit = (event) => {
    debugger
    event.preventDefault();

    var isFormValid = setValidation();

    if (isFormValid) {

      var wkoff = weekoff.split(",");

      var weekData = "";
      wkoff.forEach((day, index) => {
          weekData = weekData + '"' + day + '"' + ","
      });

      weekData ='[' + weekData.slice(0,-1) + ']';
      console.log(weekData);

      axios.post(APIUrl + "/AddEmployee", {
        "FirstName": firstname,
        "LastName": lastname,
        "EmailId": email,
        "WorkingEmailId": workemail,
        "Password": password,
        "PhoneNumber": phonenumber,
        "AlternatePhoneNumber": alternatephonenumber,
        "Designation": designation,
        "EmployeeType": employeetype,
        "DateOfJoining": dateofjoining,
        "InShift": inshift,
        "OutShift": outshift,
        "Gender": gender,
        "Weekoff": ["Satuday","Sunday"],
        "DateOfBirth": dateofbirth,
        "DepartmentId": departmentid,
        "CurrentAddresshouseno": currentaddresshousenumber,
        "CurrentAddressline": currentaddressLine,
        "CurrentAddressState": currentaddressstate,
        "CurrentAddressCity": currentaddresscity,
        "CurrentAddressZipCode": currentaddresszipcode,
        "PermanentAddresshouseno": permanentaddresshousenumber,
        "PermanentAddressline": permanentaddressLine,
        "PermanentAddressState": permanentaddressstate,
        "PermanentAddressZipCode": permanentaddresszipcode,
        "PermanentAddressCity": permanentaddresscity
      }
        , getToken())
        .then((res) => {
          debugger
          if (res.data.code === 1) {
            window.location='/all-employee'
          }

          alert(res.data.message);
        })
        .then(data => {
          debugger
          console.log(data)
        })
        .catch(error => {
          debugger
          alert('Something went wrong check the API# ' + error);
        })
    }
  }
  return (
    <div>
      <main id="main" class="main">
      <div class="pagetitle">
          <h1>Add Employee</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
              <li class="breadcrumb-item">Employees</li>
              <li class="breadcrumb-item active">Add Employee</li>
            </ol>
          </nav>
        </div>
        <section class="section">
          <br />
          <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
              <div class="row">
                <div class="col-lg-12">

                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Add New Employee</h5>
                      <form class="row g-3" onSubmit={handleSubmit}>
                        <div class="col-12">
                          <label for="TxtFirstName" class="form-label">First Name<span className="text-danger">*</span></label>
                          <input type="text" class={firstnamevalidation} id="TxtFirstName" value={firstname}
                            onChange={(e) => {
                              setFirstName(e.target.value);
                              setFirstNameValidation("form-control");
                            }}
                            placeholder="Enter First Name" />

                        </div>
                        <div class="col-12">
                          <label for="TxtLastName" class="form-label">Last Name<span className="text-danger">*</span></label>
                          <input type="text" class={lastnamevalidation} id="TxtLastName" value={lastname} required=""
                            onChange={(e) => {
                              setLastName(e.target.value)
                              setLastNameValidation("form-control");
                            }} placeholder="Enter Last Name" />
                           
                        </div>
                        <div class="col-12">
                          <label for="TxtEmail" class="form-label">Email<span className="text-danger">*</span></label>
                          <input type="email" class={emailvalidation} id="TxtEmail" value={email}
                            onChange={(e) => {
                              setEmail(e.target.value)
                              setEmailValidation("form-control");
                            }} placeholder="Enter Email" />
                        </div>
                        <div class="col-12">
                          <label for="TxtWorkEmail" class="form-label">Work Email<span className="text-danger">*</span></label>
                          <input type="email" class={workemailvalidation} id="TxtWorkEmail" value={workemail}
                            onChange={(e) => {
                              setWorkEmail(e.target.value)
                              setWorkEmailValidation("form-control");
                            }} placeholder="Enter Work Email" />
                        </div>
                        <div class="col-12">
                          <label for="TxtPassword" class="form-label">Password<span className="text-danger">*</span></label>
                          <input type="password" class={passwordvalidation} id="TxtPassword" value={password}
                            onChange={(e) => {
                              setPassword(e.target.value)
                              setPasswordValidation("form-control");
                            }} placeholder="Enter Password" />
                        </div>
                        <div class="col-12">
                          <label for="TxtPhoneNumber" class="form-label">Phone Number</label>
                          <input type="text" class={phonenumbervalidation} id="TxtPhoneNumber" placeholder="Enter Phone Number" value={phonenumber}
                            onChange={(e) => {
                              setPhoneNumber(e.target.value)
                              setPhoneNumberValidation("form-control");


                            }} />
                        </div>
                        <div class="col-12">
                          <label for="TxtAlternatePhoneNumber" class="form-label">Alternate Phone Number<span className="text-danger">*</span></label>
                          <input type="text" class={alternatephonenumbervalidation} id="TxtAlternatePhoneNumber" value={alternatephonenumber}
                            onChange={(e) => {
                              setAlternatePhoneNumber(e.target.value)
                              setAlternatePhoneNumberValidation("form-control");
                         }} placeholder="Enter Alternate Phone Number" />
                        </div>
                        <div class="col-12">
                          <label for="DDLDesignation" class="form-label">Designation<span className="text-danger">*</span></label>
                          <select class={designationvalidation} id="DDLDesignation" value={designation}
                            onChange={(e) => {
                              SetDesignation(e.target.value)
                              setDesignationValidation("form-control")
                            }}>
                            <option value="">Select</option>
                            <option value="CEO">CEO</option>
                            <option value="Solution Architect">Solution Architect</option>
                            <option value="Manager">Manager</option>
                            <option value="HR">HR</option>
                            <option value="Trainee">Trainee</option>
                            <option value="Tester">Tester</option>
                            <option value="Jr. Software Developer">Jr. Software Developer</option>
                            <option value="Sr. Software Developer">Sr. Software Developer</option>
                            <option value="Tech Lead">Tech Lead</option>
                          </select>
                        </div>
                        <div class="col-12">
                          <label for="DDLEmployeeType" class="form-label">Employee Type<span className="text-danger">*</span></label>
                          <select class={employeetypevalidation} id="DDlEmployeeType" value={employeetype}
                            onChange={(e) => {
                              SetEmployeeType(e.target.value)
                              setEmployeeTypeValidation("form-control")
                            }}>
                            <option value="">Select</option>
                            <option value="Trainee">Trainee</option>
                            <option value="Confirmed Employee">Confirmed Employee</option>
                          </select>
                        </div>
                        <div class="col-12">
                          <label for="TxtDateOfJoining" class="form-label">Date Of Joining<span className="text-danger">*</span></label>
                          <input type="date" class={dateofjoiningvalidation} id="TxtDateOfJoining" value={dateofjoining}
                            onChange={(e) => {
                              setDateOfJoining(e.target.value)
                              setDateOfJoiningValidation("form-control");
                            }} />
                        </div>

                        <div class="col-12">
                          <label for="TxtInShift" class="form-label">In Shift<span className="text-danger">*</span></label>
                          <input type="time" class={inshiftvalidation} id="TxtInShift" value={inshift}
                            onChange={(e) => {
                              setInshift(e.target.value)
                              setInShiftValidation("form-control")
                            }} />
                        </div>
                        <div class="col-12">
                          <label for="TxtOutShift" class="form-label">Out Shift<span className="text-danger">*</span></label>
                          <input type="time" class={outshiftvalidation} id="TxtOutShift" value={outshift}
                            onChange={(e) => {
                              setOutshift(e.target.value)
                              setOutShiftValidation("form-control")
                            }} />
                        </div>
                        <div class="col-12">
                          <label for="Gender" class="form-label">Gender<span className="text-danger">*</span></label>
                          <select class={gendervalidation} id="gender" value={gender}
                            onChange={(e) => {
                              setGender(e.target.value)
                              setGenderValidation("form-control")
                            }}>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div class="col-12">
                          <label for="TxtWeekoff" class="form-label">Weekoff<span className="text-danger">*</span></label>
                          <input type="text" class={weekoffvalidation} id="TxtWeekoff" value={weekoff}
                            onChange={(e) => {
                              setWeekoff(e.target.value)
                              setWeekOffValidation("form-control");
                            }}
                            placeholder="Enter Week off" />
                        </div>
                        <div class="col-12">
                          <label for="TxtDateOfbirth" class="form-label">Date Of Birth<span className="text-danger">*</span></label>
                          <input type="date" class={dateofbirthvalidation} id="TxtDateOfbirth" placeholder="Enter Date Of birth" value={dateofbirth}
                            onChange={(e) => {
                              setDateofBirth(e.target.value)
                              setDateOfBirthValidation("form-control");
                            }} />
                        </div>
                        <div class="col-12">
                          <label for="DDLDepartment" class="form-label">Department<span className="text-danger">*</span></label>
                          <select class={departmentidvalidation} id="DDLDepartment" value={departmentid}
                            onChange={(e) => {
                              setDepartmentid(e.target.value)
                              setdepartmentIdValidation("form-control")
                            }}>
                            <option value="">Select</option>
                            <option value="1">HR</option>
                            <option value="2">IT</option>
                            <option value="3">Other</option>
                          </select>
                        </div>
                        <div class="col-12">
                          <label for="TxtCurrentAddressHouseNumber" class="form-label">Current Address House No.<span className="text-danger">*</span></label>
                          <input type="text" class={currentaddresshousenumbervalidation} id="TxtCurrentAddressHouseNumber" value={currentaddresshousenumber}
                            onChange={(e) => {
                              SetCurrentAddressHouseNumber(e.target.value)
                              setCurrentAddressHouseNumberValidation("form-control");

                            }} placeholder="Enter Current Address House Number" />
                        </div>

                        <div class="col-12">
                          <label for="TxtcurrentaddressLine" class="form-label">Current Address Line<span className="text-danger">*</span></label>
                          <input type="text" class={currentaddresslinevalidation} id="TxtcurrentaddressLine" value={currentaddressLine}
                            onChange={(e) => {
                              setCurrentAddressLine(e.target.value)
                              setCurrentAddressLineValidation("form-control")
                            }}
                            placeholder="Enter Current Address House Line" />
                        </div>

                        <div class="col-12">
                          <label for="TxtCurrentAddressState" class="form-label">Current Address State<span className="text-danger">*</span></label>
                          <input type="text" class={currentaddressstatevalidation} id="TxtCurrentAddressState" value={currentaddressstate}
                            onChange={(e) => {
                              setCurrentAddressState(e.target.value)
                              setCurrentAddressStateValidation("form-control")
                            }}
                            placeholder="Enter Current Address State" />
                        </div>
                        <div class="col-12">
                          <label for="TxtCurrentAddressCity" class="form-label">Current Address City<span className="text-danger">*</span></label>
                          <input type="text" class={currentaddresscityvalidation} id="TxtCurrentAddressCity" value={currentaddresscity}
                            onChange={(e) => {
                              setCurrentaddressCity(e.target.value)
                              setCurrentAddressCityValidation("form-control")
                            }}
                            placeholder="Enter Current Address City" />
                        </div>
                        <div class="col-12">
                          <label for="TxtCurrentAddressZipCode" class="form-label">Current Address Zip Code<span className="text-danger">*</span></label>
                          <input type="text" class={currentaddresszipcodevalidation} id="TxtCurrentAddressZipCode" value={currentaddresszipcode}
                            onChange={(e) => {
                              setCurrentAddressZipCode(e.target.value)
                              setCurrentAddressZipCodeValidation("form-control")
                            }} placeholder="Enter Current Address Zip Code" />
                        </div>

                        <div class="col-12">
                          <label for="TxtPermanentAddressHouseNumber" class="form-label">Permanent Address House No.<span className="text-danger">*</span></label>
                          <input type="text" class={permanentaddresshousenumbervalidation} id="TxtPermanentAddressHouseNumber" value={permanentaddresshousenumber}
                            onChange={(e) => {
                              setPermanentAddressHouseNumber(e.target.value)
                              setPermanentAddressHouseNumberValidation("form-control")
                            }} placeholder="Enter Permanent Address House Number" />
                        </div>

                        <div class="col-12">
                          <label for="TxtPermanentaddressLine" class="form-label">Permanent Address Line<span className="text-danger">*</span></label>
                          <input type="text" class={permanentaddressLinevalidation} id="TxtPermanentaddressLine" value={permanentaddressLine}
                            onChange={(e) => {
                              setPermanentAddressLine(e.target.value)
                              setPermanentAddressLineValidation("form-control")
                            }}
                            placeholder="Enter Permanent Address House Line" />
                        </div>

                        <div class="col-12">
                          <label for="TxtPermanentAddressState" class="form-label">Permanent Address State<span className="text-danger">*</span></label>
                          <input type="text" class={permanentaddressstatevalidation} id="TxtPermanentAddressState" value={permanentaddressstate}
                            onChange={(e) => {
                              setPermanentAddressState(e.target.value)
                              setPermanentAddressStateValidation("form-control")
                            }} placeholder="Enter Permanent Address State" />
                        </div>
                        <div class="col-12">
                          <label for="TxtPermanentAddressCity" class="form-label">Permanent Address City</label>
                          <input type="text" class={permanentaddresscityvalidation} id="TxtPermanentAddressCity" value={permanentaddresscity}
                            onChange={(e) => {
                              setPermanentAddressCity(e.target.value)
                              setPermanentAddressCityValidation("form-control")
                            }} placeholder="Enter Permanent Address City" />
                        </div>
                        <div class="col-12">
                          <label for="TxtPermanentAddressZipCode" class="form-label">Permanent Address Zip Code<span className="text-danger">*</span></label>
                          <input type="text" class={permanentaddresszipcodevalidation} id="TxtPermanentAddressZipCode" value={permanentaddresszipcode}
                            onChange={(e) => {
                              setPermanentAddressZipCode(e.target.value)
                              setPermanentAddressZipCodeValidation("form-control")
                            }} placeholder="Enter Permanent Address Zip Code" />
                        </div>
                        

                        <div class="text-center">
                          <span>
                            <button style={{ width: "100px" }} type="submit" class="btn btn-primary">Submit</button> {" "}
                            <button style={{ width: "100px" }} type="reset" class="btn btn-secondary">Reset</button>{" "}
                            <button style={{ width: "100px" }} type="Edit" class="btn btn-warning">Edit</button> {" "}
                            <button style={{ width: "100px" }} type="Delete" class="btn btn-danger">Delete</button> {" "}
                          </span>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-2"></div>
          </div>
        </section>
      </main>
  </div>
  );
}

export default AddEmployee;
