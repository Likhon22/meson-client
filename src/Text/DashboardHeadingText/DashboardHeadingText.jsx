import React from "react";

const DashboardHeadingText = ({ headingText, subHeadingText }) => {
  return (
    <div className="flex  flex-col justify-center items-center  gap-5 mb-12 w-9/12 mx-auto">
      <h3 className="font-bold   bg-gradient-to-r from-[#3E1B99C7] to-[#3E1B99] bg-clip-text text-transparent text-4xl">
        {headingText}
      </h3>

      <p className="text-2xl font-mono font-medium text-black text-center">
        {subHeadingText}
      </p>
    </div>
  );
};

export default DashboardHeadingText;
