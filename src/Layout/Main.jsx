import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../Components/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
};

export default Main;
