import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import LoginLayout from "./pages/LoginLayout";
import Dashboard from "./pages/Dashboard";
import MyCalendar from "./pages/MyCalendar";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import LeaveRequest from "./pages/LeaveRequest";


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
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
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



        </Route>





      </Routes>
    </BrowserRouter>
  );
}

export default App;
