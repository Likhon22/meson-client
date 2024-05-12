const DashboardContainer = ({ children }) => {
  return (
    <div className=" min-h-screen py-32 px-12  flex flex-col w-11/12 mx-auto items-center ">
      {children}
    </div>
  );
};

export default DashboardContainer;
