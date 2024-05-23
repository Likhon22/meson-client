import { axiosSecure } from ".";

export const addReport = async (payload) => {
  try {
    const response = await axiosSecure.post("/api/reports/add-report", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
