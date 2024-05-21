import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { uploadVideo } from "../../../Utils/uploadFile";
import videJson from "../../../assets/video.json";
import Lottie from "lottie-react";
import { addVideo } from "../../../Utils/course";
import toast from "react-hot-toast";
import Loader from "../../Loader/Loader";

const VideoForm = () => {
  const course = useLoaderData();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    setLoading(true);
    const video_title = form.video_title.value;
    const videoData = form.videos.files[0];
    const video = await uploadVideo("video", videoData);
    const videoInfo = {
      title: video_title,
      video: video,
    };
    try {
      const response = await addVideo(videoInfo, course?._id);
      setLoading(false);
      navigate("/dashboard/add-videos");
      toast.success("Video added successfully");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div className=" min-h-screen p-6 md:p-16 lg:p-24  flex justify-center items-center">
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="bg-gradient-to-r from-[#3E1B99C7] to-[#3E1B99] w-11/12 lg:w-1/2 mx-auto py-20 rounded-lg">
          <h2 className="text-center text-white text-4xl font-bold mb-4">
            {" "}
            Add Videos
          </h2>

          <form onSubmit={handleSubmit} className="w-9/12 lg:w-1/2 mx-auto  ">
            <div className="form-control">
              <label className="label">
                <span className="text-white">Course Title</span>
              </label>
              <input
                type="text"
                placeholder=" Course Name"
                name="course_name"
                value={course?.title}
                readOnly
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-white">Course Category</span>
              </label>
              <input
                type="text"
                placeholder="Category"
                name="category"
                value={course?.category}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Type</span>
              </label>
              <input
                type="text"
                placeholder="Type"
                name="type"
                value={course?.type}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Upload Video</span>
              </label>
              <input
                type="file"
                placeholder="Upload Video"
                name="videos"
                accept="video/*"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Video Title</span>
              </label>
              <input
                type="text"
                placeholder=" Video Title"
                name="video_title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Course Fee</span>
              </label>
              <input
                type="number"
                placeholder=" Fee"
                name="fee"
                min={0}
                value={course?.fee}
                readOnly
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary bg-gray-900 text-white border-none"
              >
                Add Video
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default VideoForm;
