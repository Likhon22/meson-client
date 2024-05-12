import Slider from "../../Components/Slider/Slider";
import SuccessStory from "../../Components/SuccessStory/SuccessStory";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import CourseInfo from "./../../Components/CourseInfo/CourseInfo";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <CourseInfo></CourseInfo>
      <WhyChooseUs></WhyChooseUs>
      <SuccessStory></SuccessStory>
    </div>
  );
};

export default Home;
