import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import Container from "../Container/Container";
import CourseCard from "../CourseCard/CourseCard";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import { getCourses } from "../../Utils/course";

const CourseInfo = () => {
  const { data: courses = [] } = useQuery({
    queryKey: ["courseInfo"],
    queryFn: async () => {
      return await getCourses();
    },
  });
  console.log(courses);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-6 mb-12 ">
        {courses.slice(0, 3).map((course) => (
          <CourseCard courseInfo={course}></CourseCard>
        ))}
      </div>
      <Link to={"/all-courses"}>
        <div className="flex justify-center ">
          <PrimaryButton text={"See all"}></PrimaryButton>
        </div>
      </Link>
    </Container>
  );
};

export default CourseInfo;
