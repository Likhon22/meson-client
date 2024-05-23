import { useQuery } from "@tanstack/react-query";
import React from "react";

import Container from "../../Components/Container/Container";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { getCourses, getQuizCourses } from "../../Utils/course";

import QuizCourseCard from "../../Components/QuizCourseCard/QuizCourseCard";

const MyCourses = () => {
  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      return await getCourses();
    },
  });
  const { data: quizCourses } = useQuery({
    queryKey: ["quizCourses"],
    queryFn: async () => {
      return await getQuizCourses();
    },
  });
  console.log(quizCourses);
  return (
    <Container>
      <div className="min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-6 mb-12 ">
          {courses?.map((course) => (
            <CourseCard courseInfo={course} link="videos"></CourseCard>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-6 mb-12 ">
          {quizCourses?.map((courseInfo) => (
            <QuizCourseCard
              key={courseInfo?._id}
              courseInfo={courseInfo}
            ></QuizCourseCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MyCourses;
