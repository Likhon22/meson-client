import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const CourseCard = ({ courseInfo, link = "course-details" }) => {
  console.log(courseInfo);

  return (
    <div className="border border-[#6d6b69] bg-[#FBC25112] border-dotted p-5 rounded-lg mt-16 ">
      <div className=" flex overflow-hidden h-[200px] md:h-[250px] justify-center rounded-lg">
        <img
          className="w-full h-full rounded-lg "
          src={courseInfo.image}
          alt=""
        />
      </div>
      <h3 className="mt-5 md:text-2xl text-xl text-[#3E1B99] font-bold">
        {courseInfo.title}
      </h3>

      <div className="my-5">
        <Link to={`/${link}/${courseInfo._id}`}>
          <PrimaryButton text={"See Details"}></PrimaryButton>
        </Link>
      </div>
    </div>
  );
};
export default CourseCard;
