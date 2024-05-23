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

export const editExamById = async (id, payload) => {
  try {
    const response = await axiosSecure.put(
      `/api/exams/edit-exam-by-id/${id}`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// delete exam by id

export const deleteExamById = async (id) => {
  try {
    const response = await axiosSecure.delete(
      `/api/exams/delete-exam-by-id/${id}`
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

export const deleteQuestionById = async (questionId, examId) => {
  console.log(questionId, examId);
  try {
    const response = await axiosSecure.delete(
      `/api/exams/delete-question-in-exam/${questionId}/${examId}`
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const getQuestionByExamId = async (id) => {
  try {
    const response = await axiosSecure.get(
      `/api/exams/get-question-by-exam-id/${id}`
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteQuestionByIds = async (ids) => {
  console.log(ids);
  try {
    const response = await axiosSecure.delete(
      "/questions/deletedAfterSubmitted",
      {
        data: { ids: ids }, // Send the IDs array under the key 'ids'
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
