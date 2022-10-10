import React,{useeffect} from "react";
import axios from "axios";



const ViewAttendence =()=>{




    return(
        <div>
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">View Attendance</h5>

              
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">EmployeeId</th>
                    <th scope="col">Name</th>
                    <th scope="col">Department</th>
                    <th scope="col">Designation</th>
                    <th scope="col">view</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Anamika</td>
                    <td>IT</td>
                    <td>Developer</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Nisha</td>
                    <td>IT</td>
                    <td>Developer</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Nishu</td>
                    <td>Tester</td>
                    <td>Tester</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Akash</td>
                    <td>Sales</td>
                    <td>sales</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Sunny</td>
                    <td>Sales </td>
                    <td>sales</td>
                    <td>View</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>


    )
}

export default ViewAttendence;