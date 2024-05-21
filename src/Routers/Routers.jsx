import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";

import Courses from "../Components/Courses/Courses";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import ManageCourse from "../Pages/Dashboard/ManageCourse/ManageCourse";
import AddCourse from "../Pages/Dashboard/AddCourse/AddCourse";
import AddVideos from "../Pages/Dashboard/AddVideos/AddVideos";
import VideoForm from "../Components/Dashboard/VideoForm.jsx/VideoForm";
import MyCourses from "./../Pages/MyCourses/MyCourses";
import CourseVideo from "../Pages/CourseVideo/CourseVideo";
import { getSingleCourse } from "../Utils/course";
import AddQuiz from "./../Pages/Dashboard/AddQuiz/AddQuiz";
import QuizForm from "../Pages/Dashboard/QuizForm/QuizForm";
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
        path: "/my-courses",
        element: <MyCourses></MyCourses>,
      },
      {
        path: "/videos/:id",
        element: <CourseVideo></CourseVideo>,
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
      },
      {
        path: "add-videos/add-courses",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "add-videos",
        element: <AddVideos></AddVideos>,
      },
      {
        path: "add-videos/:id",
        element: <VideoForm></VideoForm>,
        loader: async ({ params }) => await getSingleCourse(params.id),
      },
      {
        path: "add-quiz",
        element: <AddQuiz></AddQuiz>,
      },
      {
        path: "add-quiz/exam/add",
        element: <QuizForm></QuizForm>,
      },
    ],
  },
]);
export default routers;
