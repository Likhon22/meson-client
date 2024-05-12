import Lottie from "lottie-react";
import about from "../../assets/about_animation.json";
import { useState } from "react";
import Container from "../../Components/Container/Container";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleBtn = () => {
    setShowMore(!showMore);
  };

  return (
    <Container>
      <div className="my-16 md:my-32  ">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="md:w-[49%]">
            <h3 className="md:text-5xl text-3xl tracking-wider text-[#3E1B99] font-extrabold mt-10">
              About Us
            </h3>
            <p className="text-black mt-7">
              {" "}
              মেসন তোমদের SSC , HSC এবং এডমিশন প্রস্তুতিকে সহজতর করতে আমরা আছি
              মেসন টিম। Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maiores earum molestias dolorum iure repellat inventore odio
              dignissimos nesciunt beatae eveniet totam, tempore eos. Facilis
              dignissimos ea debitis, modi nisi consequatur.
              {showMore && (
                <>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat quisquam debitis alias, obcaecati laborum, hic
                  incidunt totam cum deleniti quasi beatae, quam eum fugiat
                  maiores sunt exercitationem eligendi ullam quo.
                </>
              )}
            </p>

            <div className="mt-5">
              {!showMore && (
                <button
                  className="btn bg-gradient-to-r from-[#3E1B99C7] to-[#3E1B99] text-white"
                  onClick={handleBtn}
                >
                  {showMore ? "Show Less" : "Learn More"}
                </button>
              )}
            </div>
          </div>
          <div className="md:w-[49%]">
            <Lottie className="" animationData={about} loop={true}></Lottie>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
