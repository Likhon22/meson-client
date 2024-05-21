import { useQuery } from "@tanstack/react-query";
import React from "react";

import Container from "../Container/Container";
import CourseCard from "../CourseCard/CourseCard";
import Loader from "../Loader/Loader";
import { getCourses } from "../../Utils/course";

const Courses = () => {
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["courseInfo"],
    queryFn: async () => {
      return await getCourses();
    },
  });
  return (
    <div className="min-h-screen my-16 md:my-32 ">
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <Container>
          <h2 className="mt-16  text-center text-2xl font-bold">All Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-6 ">
            {courses.map((course) => (
              <CourseCard courseInfo={course}></CourseCard>
            ))}
          </div>
        </Container>
      )}
    </div>
  );
};

export default Courses;
