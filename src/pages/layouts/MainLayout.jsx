import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
const MainLayout = () => {
  return (
    <>
      <TopNavbar />
      <div className="container my-3">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
