import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { IoIosMenu } from "react-icons/io";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";
const Dashboard = () => {
  const { logout } = useAuth();
  const [toggleValue, setToggleValue] = useState(true);
  return (
    <div className="flex flex-col ">
      <div>
        <IoIosMenu
          className={`lg:hidden absolute cursor-pointer  font-bold text-2xl m-8 ${
            toggleValue ? "text-white" : "text-black"
          }  z-50 `}
          onClick={() => setToggleValue(!toggleValue)}
        >
          toggle
        </IoIosMenu>
      </div>
      <div className="flex">
        <div
          className={`min-h-screen flex  flex-col justify-between duration-200 w-80 md:relative z-30 fixed bg-[#3E1B99] ${
            toggleValue
              ? "translate-x-0 "
              : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <Sidebar></Sidebar>
          <div className="py-12 flex justify-center">
            <button className=" btn   " onClick={() => logout()}>
              Logout
            </button>
          </div>
        </div>

        <div className="flex-1 ">
          <div className="min-h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
