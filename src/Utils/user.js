import { axiosSecure } from ".";

// save the user info
export const saveUser = async (userEmail, userName, userPhoto) => {
  const userInfo = {
    email: userEmail,
    userName: userName,
    userPhoto: userPhoto,
    role: "user",
    status: "verified",
  };
  const data = await axiosSecure.post("/users", userInfo);
  return data;
};

// getting user role
export const getRole = async (email) => {
  const data = await axiosSecure.get(`/users/${email}`);
  return data;
};
