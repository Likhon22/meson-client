import { axiosSecure } from ".";

export const saveQuizForQuizCourse = async (payload) => {
  return await axiosSecure.post("/api/quiz/saveQuizForQuizCourse", payload);
};
