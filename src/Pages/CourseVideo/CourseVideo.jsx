import { useLoaderData } from "react-router-dom";
import { GrCaretPrevious } from "react-icons/gr";
import { BsBookmarks } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiVideoLight } from "react-icons/pi";
import { FiMinusCircle } from "react-icons/fi";
import { useState } from "react";
import Container from "../../Components/Container/Container";

const CourseVideo = () => {
  const courses = useLoaderData();
  const [showMore, setShowMore] = useState(true);
  return (
    <Container>
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GrCaretPrevious className="text-xl text-purple-700"></GrCaretPrevious>
            <h3 className="text-2xl ml-2 font-bold text-purple-900">Videos</h3>
          </div>
          <div>
            <BsBookmarks className="text-xl text-purple-600 font-semibold"></BsBookmarks>
          </div>
        </div>
        <div className="border-t border-purple-800 my-3"></div>
        {courses?.content?.map((course) => (
          <div className="flex flex-col lg:flex-row justify-between mt-5 md:p-5">
            <div className="lg:w-[65%] md:h-[560px] h-[300px] ">
              <div className="md:h-[500px] h-[250px] overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={course?.video}
                  controls
                ></video>
              </div>
              <div className="flex mt-5 justify-end space-x-3">
                <button className="btn btn-sm btn-outline btn-primary px-4">
                  Previous
                </button>
                <button className="btn btn-sm btn-outline btn-primary px-7">
                  Next
                </button>
              </div>
            </div>
            <div className="lg:w-[34%] md:h-[560px] h-[400px] overflow-y-scroll mt-3">
              <div className="mt-5 w-[95%] mx-auto">
                <div className=" rounded-xl bg-purple-200 p-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-purple-800">
                      {courses?.title} Classes
                    </h2>
                    <div onClick={() => setShowMore(!showMore)}>
                      {showMore ? (
                        <FiMinusCircle className="text-2xl text-purple-800 cursor-pointer"></FiMinusCircle>
                      ) : (
                        <IoIosAddCircleOutline className="text-2xl text-purple-800 cursor-pointer"></IoIosAddCircleOutline>
                      )}
                    </div>
                  </div>
                  <div>
                    {showMore && (
                      <div className="flex items-center space-x-2 mt-4 bg-purple-100 p-3 rounded-xl">
                        <PiVideoLight className="text-xl font-bold text-purple-800"></PiVideoLight>
                        <h3 className=" text-purple-700 font-semibold">
                          {course?.title}
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CourseVideo;
