import { useQuery } from "@tanstack/react-query";
import React from "react";

import Container from "../../Components/Container/Container";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { getCourses, } from "../../Utils/course";

const MyCourses = () => {
  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      return await getCourses();
    },
  });
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-6 mb-12 min-h-screen">
        {courses?.map((course) => (
          <CourseCard courseInfo={course} link="videos"></CourseCard>
        ))}
      </div>
    </Container>
  );
};

export default MyCourses;
