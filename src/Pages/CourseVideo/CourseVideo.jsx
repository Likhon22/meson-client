import { useLoaderData } from "react-router-dom";

const CourseVideo = () => {
  const courses = useLoaderData();
  return (
    <div>
      {courses?.content?.map((course, index) => (
        <div>
          <p>
            {index + 1}.{courses?.title}
          </p>
          <div className="w-1/2 h-[400px]">
            <video
              className="h-full w-full"
              src={course?.video}
              controls
            ></video>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseVideo;
