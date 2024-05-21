import { useState, useRef } from "react";
import { FiMinusCircle } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiVideoLight } from "react-icons/pi";
import { GrCaretPrevious } from "react-icons/gr";
import { BsBookmarks } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import Container from "../../Components/Container/Container";

const CourseVideo = () => {
  const courses = useLoaderData();
  const [showMore, setShowMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(
    courses?.content[0]?.video || ""
  );
  const videoRef = useRef(null);

  const handleTitleClick = (videoUrl, index) => {
    setCurrentIndex(index);
    setCurrentVideo(videoUrl);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  return (
    <Container>
      <div className="container mx-auto mt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GrCaretPrevious className="text-xl text-purple-700" />
            <h3 className="text-2xl ml-2 font-bold text-purple-900">Videos</h3>
          </div>
          <BsBookmarks className="text-xl text-purple-600 font-semibold" />
        </div>
        <div className="border-t border-purple-800 my-3"></div>
        <div className="flex flex-col lg:flex-row md:p-5 gap-12">
          <div className="lg:w-2/3 w-full mb-5 lg:mb-0">
            <video
              className="w-full h-[300px] lg:h-[560px] object-cover"
              ref={videoRef}
              src={currentVideo}
              controls
            ></video>
          </div>
          <div className="lg:w-1/3 w-full">
            {courses?.content?.map((course, index) => (
              <div
                key={course.id}
                className="rounded-xl bg-purple-200 p-4 mb-2"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-purple-800">
                    {courses?.title} Classes
                  </h2>
                  <div onClick={() => setShowMore(!showMore)}>
                    {showMore ? (
                      <FiMinusCircle className="text-2xl text-purple-800 cursor-pointer" />
                    ) : (
                      <IoIosAddCircleOutline className="text-2xl text-purple-800 cursor-pointer" />
                    )}
                  </div>
                </div>
                {showMore && (
                  <div className="flex items-center space-x-2 mt-4 bg-purple-100 p-3 rounded-xl">
                    <PiVideoLight className="text-xl font-bold text-purple-800" />
                    <h3
                      onClick={() => handleTitleClick(course?.video, index)}
                      className={`text-purple-700 font-semibold cursor-pointer ${
                        currentIndex === index
                          ? "text-purple-800 border-b border-purple-300"
                          : ""
                      }`}
                    >
                      {course?.title}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CourseVideo;
