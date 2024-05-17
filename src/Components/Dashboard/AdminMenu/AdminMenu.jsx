import { NavLink } from "react-router-dom";
import "../dashboard.css";
const AdminMenu = () => {
  return (
    <div className="flex flex-col gap-5" id="menu-dashboard">
      <div>
        <NavLink to={"/dashboard/admin-profile"}>Admin Profile</NavLink>
      </div>
      <div>
        <NavLink to={"/dashboard/add-courses"}>Add Course</NavLink>
      </div>
      <div>
        <NavLink to={"/dashboard/add-videos"}>Add Videos</NavLink>
      </div>
      <div>
        <NavLink to={"/dashboard/manage-courses"}>Manage Courses</NavLink>
      </div>
      <div>
        <NavLink to={"/dashboard/manage-users"}>Manage Users</NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
