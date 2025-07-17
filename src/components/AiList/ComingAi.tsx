import React from "react";
import { Link } from "react-router-dom";

const ComingAi = () => {
  return (
    <>
      <div>
        <div className="flex gap-15">
          <Link to="#" className="flex flex-col items-center gap-2">
            <div className="s-color-ai-list rounded-full p-3 w-17 h-17 flex items-center justify-center relative box-border group hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
              <i className="ri-search-line text-white text-4xl"></i>
            </div>
            <span className="text-white text-center font-medium">
              Research Agent
            </span>
          </Link>
          <Link to="#" className="flex flex-col items-center gap-2">
            <div className="f-color-ai-list rounded-full p-3 w-17 h-17 flex items-center justify-center relative box-border group hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
              <i className="ri-facebook-fill text-white text-4xl"></i>
            </div>
            <span className="text-white text-center font-medium">
              Facebook Agent
            </span>
          </Link>
          <Link to="#" className="flex flex-col items-center gap-2">
            <div className="img-color-ai-list rounded-full p-3 w-17 h-17 flex items-center justify-center relative box-border group hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
              <i className="ri-image-line text-white text-4xl"></i>
            </div>
            <span className="text-white text-center font-medium">
              Image AI Tool
            </span>
          </Link>
          <Link to="#" className="flex flex-col items-center gap-2">
            <div className="video-color-ai-list rounded-full p-3 w-17 h-17 flex items-center justify-center relative box-border group hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
              <i className="ri-movie-ai-line text-white text-4xl"></i>
            </div>
            <span className="text-white text-center font-medium">
              Short Video AI
            </span>
          </Link>
        </div>
        <div className="mt-10 flex justify-center">
          <button className="text-white">Sắp ra mắt</button>
        </div>
      </div>
    </>
  );
};

export default ComingAi;
