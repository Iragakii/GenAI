import React from "react";
import { Link } from "react-router-dom";

const NewAi = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-[11px] sm:gap-[21px] md:gap-[32px]">
        {/* Research Agent */}
        <Link
          to="#"
          className="flex flex-col items-center gap-[5px] w-[calc(50%-1rem)] sm:w-auto group"
        >
          <div className="s-color-ai-list rounded-full p-[5px] sm:p-[8px] w-[37px] h-[37px] sm:w-[45px] sm:h-[45px] flex items-center justify-center relative box-border hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <i className="ri-search-line text-white text-[16px] sm:text-[27px] group-hover:scale-125 transition-all duration-300 ease-in-out"></i>
          </div>
          <span className="text-white text-center font-medium text-[9px] sm:text-[11px]">
            Research Agent
          </span>
        </Link>

        {/* Facebook Agent */}
        <Link
          to="#"
          className="flex flex-col items-center gap-[5px] w-[calc(50%-1rem)] sm:w-auto group"
        >
          <div className="f-color-ai-list rounded-full p-[5px] sm:p-[8px] w-[37px] h-[37px] sm:w-[45px] sm:h-[45px] flex items-center justify-center relative box-border hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <i className="ri-facebook-fill text-white text-[16px] sm:text-[27px] group-hover:scale-125 transition-all duration-300 ease-in-out"></i>
          </div>
          <span className="text-white text-center font-medium text-[9px] sm:text-[11px]">
            Facebook Agent
          </span>
        </Link>

        {/* Image AI Tool */}
        <Link
          to="#"
          className="flex flex-col items-center gap-[5px] w-[calc(50%-1rem)] sm:w-auto group"
        >
          <div className="img-color-ai-list rounded-full p-[5px] sm:p-[8px] w-[37px] h-[37px] sm:w-[45px] sm:h-[45px] flex items-center justify-center relative box-border hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <i className="ri-image-line text-white text-[16px] sm:text-[27px] group-hover:scale-125 transition-all duration-300 ease-in-out"></i>
          </div>
          <span className="text-white text-center font-medium text-[9px] sm:text-[11px]">
            Image AI Tool
          </span>
        </Link>

        {/* Short Video AI */}
        <Link
          to="#"
          className="flex flex-col items-center gap-[5px] w-[calc(50%-1rem)] sm:w-auto group"
        >
          <div className="video-color-ai-list rounded-full p-[5px] sm:p-[8px] w-[37px] h-[37px] sm:w-[45px] sm:h-[45px] flex items-center justify-center relative box-border hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <i className="ri-movie-ai-line text-white text-[16px] sm:text-[27px] group-hover:scale-125 transition-all duration-300 ease-in-out"></i>
          </div>
          <span className="text-white text-center font-medium text-[9px] sm:text-[11px]">
            Short Video AI
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NewAi;
