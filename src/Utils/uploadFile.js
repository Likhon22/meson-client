import axios from "axios";

export const uploadImage = async (type, img) => {
  const data = new FormData();
  if (type === "image" && img) {
    data.append("file", img);
    data.append("upload_preset", "imagePreset");
    try {
      const cloudName = "dcfmfuihb";
      const resourceType = "image";
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
};
export const uploadVideo = async (type, video) => {
  const data = new FormData();
  if (type === "video" && video) {
    data.append("file", video);
    data.append("upload_preset", "imagePreset");
    try {
      const cloudName = "dcfmfuihb";
      const resourceType = "video";
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
};
