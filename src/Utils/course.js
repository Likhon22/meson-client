import { axiosSecure } from ".";

//add course

export const addCourse = async (courseInfo) => {
  const data = await axiosSecure.post(`/courses`, courseInfo);
  console.log(data);
  return data.data;
};
// add video to the course

export const addVideo = async (videoInfo, id) => {
  const data = await axiosSecure.post(`/courses/add-video/${id}`, videoInfo);
  console.log(data);
  return data.data;
};
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
export const getVideoCourses = async () => {
  const data = await axiosSecure.get(`/courses/video/onlyVideo`);
  console.log(data);
  return data.data;
};
export const getQuizCourses = async () => {
  const data = await axiosSecure.get(`/api/exams/get-all-exams`);
  console.log(data);
  return data.data;
};
