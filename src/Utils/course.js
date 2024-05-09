import { axiosSecure } from ".";

// getting the course data
export const getCourses = async () => {
  const data = await axiosSecure.get(`/courses`);
  console.log(data.data);
  return data.data;
};
export const getSingleCourse = async (id) => {
  const data = await axiosSecure.get(`/courses/${id}`);
  console.log(data);
  return data.data;
};
