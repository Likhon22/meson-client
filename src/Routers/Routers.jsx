import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import { getSingleCourse } from "../Utils/course";
import Courses from "../Components/Courses/Courses";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import ManageCourse from "../Pages/Dashboard/ManageCourse/ManageCourse";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course-details/:id",
        element: <CourseDetails></CourseDetails>,
        loader: async ({ params }) => await getSingleCourse(params.id),
      },
      {
        path: "/all-courses",
        element: <Courses></Courses>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "manage-courses",
        element: <ManageCourse />,
      }]
  },
]);
export default routers;
