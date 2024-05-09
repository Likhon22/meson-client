import Lottie from "lottie-react";
import teacher from "../../assets/TigqMOPTIu.json";
import exam from "../../assets/eI3tOM2RzB.json";
// import lecture from '../../assets/ApM2n5KdUh.json';
import guideline from "../../assets/UHJaxspau1.json";
import Container from "../Container/Container";

const WhyChooseUs = () => {
  return (
    <Container>
      <div className="my-20">
        <div className="text-center my-10">
          <h2 className="md:text-3xl text-2xl font-bold text-[#3E1B99]">
            Why Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 ">
          <div className=" border p-4 ">
            <Lottie
              className="h-[200px] "
              animationData={teacher}
              loop={true}
            ></Lottie>
            <div className="my-5 px-5">
              <h3 className="text-2xl mb-3 font-semibold text-[#3E1B99]">
                Experienced Teacher
              </h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt reprehenderit rem ex inventore consequuntur sit
                obcaecati magni optio ipsam? Error hic quos iste, tempora magni
                beatae modi asperiores iure totam!
              </p>
            </div>
          </div>
          <div className=" border p-4 ">
            <Lottie
              className="h-[200px] "
              animationData={exam}
              loop={true}
            ></Lottie>
            <div className="my-5 px-5">
              <h3 className="text-2xl mb-3 font-semibold text-[#3E1B99]">
                Exam Facility
              </h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt reprehenderit rem ex inventore consequuntur sit
                obcaecati magni optio ipsam? Error hic quos iste, tempora magni
                beatae modi asperiores iure totam!
              </p>
            </div>
          </div>
          <div className="border p-4">
            <Lottie
              className="h-[200px] "
              animationData={guideline}
              loop={true}
            ></Lottie>
            <div className="my-5 px-5">
              <h3 className="text-2xl mb-3 font-semibold text-[#3E1B99]">
                Proper Guideline
              </h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt reprehenderit rem ex inventore consequuntur sit
                obcaecati magni optio ipsam? Error hic quos iste, tempora magni
                beatae modi asperiores iure totam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
