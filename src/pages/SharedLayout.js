import { Link, Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";
const SharedLayout = ({ user }) => {
  
  return (
    <div>
      <Header user={user}/>
      <Aside />
        <Outlet />
      <Footer />
    </div>
  );
};
export default SharedLayout;
