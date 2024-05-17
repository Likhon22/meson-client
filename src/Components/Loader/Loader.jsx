import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen gap-2">
      <span className="loading loading-dots loading-xs"></span>
      <span className="loading loading-dots loading-sm"></span>
      <span className="loading loading-dots loading-md"></span>
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
};

export default Loader;
