import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import LoginLayout from "./pages/LoginLayout";
import Dashboard from "./pages/Dashboard";
import CheckInOut from "./pages/CheckInOut";
import MyCalendar from "./pages/MyCalendar";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import LeaveRequest from "./pages/LeaveRequest";
import Profile from "./pages/Profile";
import ViewAttendence from "./pages/ViewAttendence";
import AddEmployee from "./pages/AddEmployee";
import RemoveEmployee from "./components/RemoveEmployee";
import AllEmployees from "./pages/SubAdmin/AllEmployees";
import EmployeeInOutDetails from "./pages/SubAdmin/EmployeeInOutDetails";
import AllEmployeeAttendence from "./pages/SubAdmin/AllEmployeeAttendence";
import LeaveApproval from "./pages/LeaveApproval";
import AllLeaveRequests from "./pages/SubAdmin/AllLeaveRequests";



function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Login setUser={setUser} />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<Error />} />
        </Route>

        <Route element={<SharedLayout user={user} />}>
          <Route path='dashboard' element={
            // <ProtectedRoute user={user}>
            <Dashboard />
            // </ProtectedRoute>
          } />

          <Route path='check-in-out' element={
            // <ProtectedRoute user={user}>
            <CheckInOut />
            // </ProtectedRoute>
          } />

          <Route path='calendar' element={
            // <ProtectedRoute user={user}>
            <MyCalendar />
            // </ProtectedRoute>
          } />

          <Route path='leave-request' element={
            // <ProtectedRoute user={user}>
            <LeaveRequest />
            // </ProtectedRoute>
          } />
          
          <Route path='leave-request' element={
            // <ProtectedRoute user={user}>
            <LeaveApproval />
            // </ProtectedRoute>
          } />








          <Route path='profile' element={
            // <ProtectedRoute user={user}>
            <Profile />
            // </ProtectedRoute>
          } />

        <Route path='add-Employee' element={
            // <ProtectedRoute user={user}>
            <AddEmployee/>
            // </ProtectedRoute>
          } >

        </Route>

        <Route path='remove-Employee' element={
            // <ProtectedRoute user={user}>
            <RemoveEmployee/>
            // </ProtectedRoute>
          } >

        </Route>

        <Route path='all-Employee' element={
            // <ProtectedRoute user={user}>
            <AllEmployees/>
            // </ProtectedRoute>
          } >

        </Route> 

        <Route path='in-out-details' element={
            // <ProtectedRoute user={user}>
            <EmployeeInOutDetails/>
            // </ProtectedRoute>
          } >

        </Route>  

        <Route path='all-employees-attendence' element={
            // <ProtectedRoute user={user}>
            <AllEmployeeAttendence/>
            // </ProtectedRoute>
          } >

        </Route> 

        <Route path='all-leaves-requests' element={
            // <ProtectedRoute user={user}>
            <AllLeaveRequests/>
            // </ProtectedRoute>
          } >

        </Route>  

       

        </Route>

        

        <Route path='view-Attendence' element={
            // <ProtectedRoute user={user}>
            <ViewAttendence/>
            // </ProtectedRoute>
          } >

        </Route>










      </Routes>
    </BrowserRouter>
  );
}

export default App;
