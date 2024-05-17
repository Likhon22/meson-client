import React from "react";
import DashboardContainer from "../../../Components/Dashboard/DashboardContainer/DashboardContainer";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../../Utils/course";
import ManageCourseTable from "./../../../Table/ManageCourseTable/ManageCourseTable";
import DashboardHeadingText from "./../../../Text/DashboardHeadingText/DashboardHeadingText";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const AddVideos = () => {
  const {
    data: courses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: () => getCourses(),
  });
  return (
    <DashboardContainer>
      <div className="min-h-screen  ">
        <DashboardHeadingText
          headingText={"Add Videos"}
          subHeadingText={
            "Oversee and Add the courses on the platform to maintain quality standards."
          }
        ></DashboardHeadingText>
        <h3 className="mt-6 mb-8 font-bold text-lg">
          Total courses:{courses?.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className=" text-center bg-[#3E1B99] text-white text-[16px]">
                <th></th>
                <th>Course Image</th>
                <th>Course Title</th>
                <th>Type</th>

                <th>Add Videos</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {courses?.map((course, index) => (
                <tr className="text-center">
                  <th>{index + 1}</th>
                  <th>
                    <img
                      className="w-24 rounded h-24"
                      src={course?.image}
                      alt=""
                    />
                  </th>
                  <th className="capitalize">{course?.title}</th>

                  <th className="capitalize">{course?.type}</th>
                  <th>
                    <Link to={`/dashboard/add-videos/${course?._id}`}>
                      {" "}
                      <button className="btn btn-sm bg-gray-900 text-white border-none hover:bg-gray-700">
                        Add
                      </button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default AddVideos;
