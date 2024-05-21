import { useQuery } from "@tanstack/react-query";
import React from "react";

import DashboardContainer from "../../../Components/Dashboard/DashboardContainer/DashboardContainer";
import DashboardHeadingText from "../../../Text/DashboardHeadingText/DashboardHeadingText";
import ManageCourseTable from "../../../Table/ManageCourseTable/ManageCourseTable";
import { getVideoCourses } from "../../../Utils/course";

const ManageCourse = () => {
  const {
    data: courses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => await getVideoCourses(),
  });
  return (
    <DashboardContainer>
      <div className="min-h-screen  ">
        <DashboardHeadingText
          headingText={"Manage courses"}
          subHeadingText={
            "Oversee and manage the courses listed on the platform to maintain quality standards."
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

                <th>Update Course</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {courses?.map((course, index) => (
                <ManageCourseTable
                  courseData={course}
                  refetch={refetch}
                  index={index}
                ></ManageCourseTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default ManageCourse;
