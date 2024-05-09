import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <button className="capitalize btn w-1/2 bg-gradient-to-r from-[#3E1B99C7] to-[#3E1B99] text-white ">
      {text}
    </button>
  );
};

export default PrimaryButton;
