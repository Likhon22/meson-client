import React, { useState } from "react";
import toast from "react-hot-toast";

import { uploadImage } from "../../../Utils/uploadFile";
import Loader from "../../../Components/Loader/Loader";
import { addCourse } from "../../../Utils/course";

const AddCourse = () => {
  const categories = [
    "gk",
    "physics",
    "chemistry",
    "math",
    "english",
    "bangla",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[1]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const title = form.course_name.value;
    const imageData = form.image.files[0];
    const image = await uploadImage("image", imageData);
    const description = form.description.value;
    const fee = form.fee.value;
    const type = form.type.value;
    const category = selectedCategory;
    let content = [];
    const version = "paid";
    const courseInfo = {
      title,
      image,
      description,
      fee,
      type,
      category,
      content,
      version,
    };
    console.log(courseInfo);
    try {
      const response = await addCourse(courseInfo);
      setLoading(false);

      setSelectedCategory(categories[1]); // Reset selectedCategory to default
      form.reset();
      toast.success("Added Successfully");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen py-20">
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-gradient-to-r from-[#3E1B99C7] to-[#3E1B99] w-11/12 lg:w-1/2 mx-auto py-20 rounded-lg">
          <h2 className="text-center text-white text-4xl font-bold mb-4">
            Add Your Course
          </h2>
          <form onSubmit={handleSubmit} className="w-9/12 lg:w-1/2 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="text-white">Course Title</span>
              </label>
              <input
                type="text"
                placeholder="Course Name"
                name="course_name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Course Cover</span>
              </label>
              <input
                type="file"
                placeholder="photo"
                name="image"
                required
                id="image"
                accept="image/*"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Course Category</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category} className="uppercase">
                    {category.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Type</span>
              </label>
              <input
                type="text"
                placeholder="Type"
                name="type"
                defaultValue={"Master class"}
                readOnly
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
                placeholder="Fee"
                name="fee"
                min={0}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-36"
                placeholder="Description"
                name="description"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary bg-gray-900 text-white border-none"
              >
                Add course
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddCourse;
