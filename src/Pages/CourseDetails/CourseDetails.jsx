import React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../Components/Container/Container";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

const CourseDetails = () => {
  const detail = useLoaderData();

  return (
    <Container>
      <div className="my-28 md:min-h-screen ">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-16 md:gap-10  justify-center items-center">
          <div className=" flex-1 md:h-[500px] ">
            <img className="w-full h-full " src={detail.image} alt="" />
          </div>
          <div className=" mt-6 flex-1  md:h-[500px]">
            <div className="h-full">
              <h3 className="text-3xl font-bold text-[#3E1B99]">
                Course Name: <span>{detail.title}</span>
              </h3>
              <div className="border mt-5 border-[#3E1B99] p-5 border-dotted rounded-xl ">
                <p className="text-[#3E1B99] ">
                  <span className="font-bold">Details: </span>
                  <span className="text-black">{detail.description}</span>
                </p>
              </div>
              <div className="flex justify-between lg:mt-7 mt-3 items-center">
                <p className="text-2xl font-semibold text-[#3E1B99]">
                  Fee: <span className="font-extrabold">{detail.fee} tk</span>
                </p>
                <PrimaryButton text={"Enroll"}></PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CourseDetails;
