import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[600px]">
        <Outlet></Outlet>,
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
