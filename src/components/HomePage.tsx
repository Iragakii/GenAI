import React, { FC } from "react";
import SideBar from "./SideBar";
import AiHashName from "./AiHashName";
import InputFeild from "./InputFeild";
import BrandName from "./BrandName";
import NewAi from "./AiList/NewAi";

const HomePage: FC = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <SideBar />
      <div className="flex flex-col items-center justify-center h-screen w-screen relative lg:-top-40 ">
        <div className="mb-1">
          <BrandName />
        </div>
        <div className="mb-20">
          <AiHashName />
        </div>

        <InputFeild />

        <div className="mt-10">
          <NewAi />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
