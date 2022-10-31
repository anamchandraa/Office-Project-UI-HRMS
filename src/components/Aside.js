const Aside = () => {

  var userData = localStorage.getItem("token");

  const t = JSON.parse(userData);

  if (t.UserType == "SubAdmin") {
    return (
    
      <div>
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <a className="nav-link collapsed" href="dashbaord">
                <i className="bi bi-grid" />
                <span>Sub Admin Dashboard</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="profile">
                <i className="bi bi-grid" />
                <span>Profile</span>
              </a>
            </li>


            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-menu-button-wide" />
                <span>Employee</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul
                id="components-nav"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="add-employee">
                    <i className="bi bi-circle" />
                    <span>Add Employee</span>
                  </a>
                </li>

                <li>
                  <a href="remove-employee">
                    <i className="bi bi-circle" />
                    <span> Remove Employee</span>
                  </a>
                </li>


                <li>
                  <a href="all-employee">
                    <i className="bi bi-circle" />
                    <span> All Employee</span>
                  </a>
                </li>
               

                <li>
                  <a href="all-employees-attendence">
                    <i className="bi bi-circle" />
                    <span> All Employee Attendance</span>
                  </a>
                </li>




              </ul>
            </li>




























            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-menu-button-wide" />
                <span>Attendance</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul
                id="components-nav"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="view-attendence">
                    <i className="bi bi-circle" />
                    <span>View User Attendence</span>
                  </a>
                </li>

                <li>
                  <a href="components-alerts.html">
                    <i className="bi bi-circle" />
                    <span> User Attendance Request</span>
                  </a>
                </li>







              </ul>
            </li>




            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-menu-button-wide" />
                <span>Leave</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul
                id="components-nav"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="components-alerts.html">
                    <i className="bi bi-circle" />
                    <span>View User LeaveRequest</span>
                  </a>
                </li>

                <li>
                  <a href="all-leaves-requests">
                    <i className="bi bi-circle" />
                    <span>All Leaves Requests</span>
                  </a>
                </li>






              </ul>
            </li>


            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-menu-button-wide" />
                <span>Salary Management</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul
                id="components-nav"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="components-alerts.html">
                    <i className="bi bi-circle" />
                    <span>Run Payroll</span>
                  </a>
                </li>

                <li>
                  <a href="components-alerts.html">
                    <i className="bi bi-circle" />
                    <span>FNF</span>
                  </a>
                </li>

                <li>
                  <a href="components-alerts.html">
                    <i className="bi bi-circle" />
                    <span>One Time Salary</span>
                  </a>
                </li>




              </ul>
            </li>











          </ul>
        </aside>
      </div>
    );



}

  if (t.UserType == "Employee") {
    return (
      <div>
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <a className="nav-link collapsed" href="dashbaord">
                <i className="bi bi-grid" />
                <span>Employee Dashboard</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link collapsed" href="check-in-out">
                <i className="bi bi-grid" />
                <span>Check In/Check Out</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-menu-button-wide" />
                <span>Attendance</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul
                id="components-nav"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="components-alerts.html">
                    <i className="bi bi-circle" />
                    <span>Attendance Log</span>
                  </a>
                </li>
                <li>
                  <a href="components-accordion.html">
                    <i className="bi bi-circle" />
                    <span>Attendance Rules</span>
                  </a>
                </li>
                <li>
                  <a href="calender">
                    <i className="bi bi-circle" />
                    <span>Calendar</span>
                  </a>
                </li>

              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#forms-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-journal-text" />
                <span>Leave</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul
                id="forms-nav"
                className="nav-content collapse "
                data-bs-parent="#sidebar-nav"
              >
                <li>
                  <a href="leave-log">
                    <i className="bi bi-circle" />
                    <span>Leave Log</span>
                  </a>
                </li>
                <li>
                  <a href="leave-rules">
                    <i className="bi bi-circle" />
                    <span>Leave Rules</span>
                  </a>
                </li>
                <li>
                  <a href="leave-request">
                    <i className="bi bi-circle" />
                    <span>Leave Request</span>
                  </a>
                </li>

              </ul>
            </li>
          </ul>

        </aside>
      </div>
    );
  }


};
export default Aside;
