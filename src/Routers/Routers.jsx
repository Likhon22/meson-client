import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import { getSingleCourse } from "../Utils/course";
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
    ],
  },
]);
export default routers;
