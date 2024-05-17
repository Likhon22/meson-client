import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../Components/Container/Container";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

const CourseDetails = () => {
  const detail = useLoaderData();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <div className="my-16 md:my-28 lg:my-36 ">
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
                  <span className="text-black">
                    {detail.description} Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Qui harum eius soluta aut cumque
                    aspernatur. Temporibus, impedit maxime reprehenderit
                    veritatis eligendi quibusdam sequi similique libero, culpa,
                    facere dolor quisquam laborum. Eius laborum consectetur
                    voluptates voluptatum dignissimos quasi ducimus eveniet a?
                    Voluptatum iste ipsa debitis quod officia voluptatibus
                    magnam sint, obcaecati architecto, doloremque natus, optio
                    tenetur molestias praesentium sit voluptates nam. Deserunt
                    ea quas, ipsam error, molestias est sequi laborum omnis
                    nesciunt nihil harum ratione quaerat ab cumque? Suscipit
                    reprehenderit aliquid numquam, voluptas debitis labore
                    molestias voluptates vitae explicabo veniam consectetur!
                  </span>
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
