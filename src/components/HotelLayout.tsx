import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import Footer from "./Footer";

function HotelLayout() {
  return (
    <>
      <MainNavBar />
      <Outlet />
    </>
  );
}

export default HotelLayout;
