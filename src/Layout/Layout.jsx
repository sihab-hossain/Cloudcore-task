import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[550px]">
        <Outlet></Outlet>,
      </div>
      
    </div>
  );
};

export default Layout;
