import React, { FC } from "react";
import SideBar from "./SideBar";
import AiHashName from "./AiHashName";
import InputFeild from "./InputFeild";
import BrandName from "./BrandName";
import NewAi from "./AiList/NewAi";
import ComingAi from "./AiList/ComingAi";
import TrendingNew from "./TrendingNew";

const ScreenHomePageOne: FC = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <SideBar />
      <div className="flex flex-col items-center justify-center min-h-screen flex-1 relative">
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
        <div className="mt-20 left-3 relative">
          <ComingAi />
        </div>
        <div className="mt-20 left-3 relative">
          <TrendingNew />
        </div>
      </div>
    </div>
  );
};

export default ScreenHomePageOne;
