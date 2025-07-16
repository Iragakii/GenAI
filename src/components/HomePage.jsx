import React from "react";
import SideBar from "./SideBar";
import Navigation from "./Navigation";
import AiHashName from "./AiHashName";

const HomePage = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <SideBar />
      <div className="ml-0 sm:ml-[80px]">
        <Navigation />
      </div>
      <div className="flex items-center justify-center h-screen w-screen relative lg:-top-50">
        <AiHashName />
      </div>
    </div>
  );
};

export default HomePage;
