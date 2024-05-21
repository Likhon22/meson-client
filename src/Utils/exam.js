// add exam

import { axiosSecure } from ".";

export const addExam = async (payload) => {
  try {
    const response = await axiosSecure.post("/api/exams/add", payload);
    return response.data; // Ensure this returns the created exam data
  } catch (error) {
    return error.response.data;
  }
};

// get all exams
export const getAllExams = async () => {
  try {
    const response = await axiosSecure.get("/api/exams/get-all-exams");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// get exam by id

export const getExamById = async (id) => {
  try {
    const response = await axiosSecure.get(`/api/exams/get-exam-by-id/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// edit exam by id

export const editExamById = async (payload) => {
  try {
    const response = await axiosSecure.post(
      "/api/exams/edit-exam-by-id",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// delete exam by id

export const deleteExamById = async (payload) => {
  try {
    const response = await axiosSecure.post(
      "/api/exams/delete-exam-by-id",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// add question to exam

export const addQuestionToExam = async (payload) => {
  try {
    const response = await axiosSecure.post(
      "/api/exams/add-question-to-exam",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const editQuestionById = async (payload) => {
  try {
    const response = await axiosSecure.post(
      "/api/exams/edit-question-in-exam",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteQuestionById = async (payload) => {
  try {
    const response = await axiosSecure.post(
      "/api/exams/delete-question-in-exam",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
