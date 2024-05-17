import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import Container from "../Container/Container";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [role] = useRole();
  console.log(role);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-courses"}>Courses</NavLink>
      </li>
      {role === "admin" && (
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
      )}

      <li>
        <NavLink to={"/my-courses"}>My Courses</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#3E1B99] text-white">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                id="menu"
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black  rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Meson</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-2 gap-4 " id="menu">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            {!user ? (
              <Link to={"/login"}>
                {" "}
                <button className="btn">Login</button>
              </Link>
            ) : (
              <button onClick={() => logout()} className="btn">
                Logout
              </button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
