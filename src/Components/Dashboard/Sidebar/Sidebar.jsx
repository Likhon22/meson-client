import React from "react";
import { NavLink } from "react-router-dom";
import AdminMenu from "../AdminMenu/AdminMenu";
import useRole from "../../../hooks/useRole";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../assets/logo.jpg";

const Sidebar = () => {
  const [role, isLoading] = useRole();
  const { user } = useAuth();
  return (
    <div className="mt-24 ">
      <div className="flex justify-center items-center mb-12">
        <img className="w-32 h-28" src={logo} alt="" />
      </div>

      <div className="    text-white flex flex-col ">
        {/* upperside */}

        <div className="mb-7   pl-8">
          {user && role === "admin" && <AdminMenu></AdminMenu>}
        </div>

        <div className=" border-b-2"></div>
        {/* lower side */}

        <div className="flex flex-col gap-5 mt-7  pl-8   ">
          <div>
            <NavLink to={"/"}>Home</NavLink>
          </div>

          <div>
            <NavLink to={"/all-courses"}>All Courses</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
