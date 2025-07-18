import React, { FC } from "react";
import SideBar from "./SideBar";
import AiHashName from "./AiHashName";
import InputFeild from "./InputFeild";
import BrandName from "./BrandName";
import NewAi from "./AiList/NewAi";
import ComingAi from "./AiList/ComingAi";
import TrendingNew from "./TrendingNew";
import "../../styles/resesPonsive.css";
const ScreenHomePageOne: FC = () => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      <SideBar />
      <div className="flex flex-col items-center justify-start px-4 pt-16 sm:pt-0 sm:justify-center min-h-screen flex-1 relative">
        <div className="mb-1">
          <BrandName />
        </div>
        <div className="mb-10 sm:mb-20 text-center">
          <AiHashName />
        </div>

        <InputFeild />

        <div className="mt-8 sm:mt-10 w-full px-2">
          <NewAi />
        </div>
        <div className="mt-10 sm:mt-20 w-full flex justify-center">
          <ComingAi />
        </div>
        <div className="mt-10 sm:mt-20 w-full mb-10">
          <TrendingNew />
        </div>
      </div>
    </div>
  );
};

export default ScreenHomePageOne;
