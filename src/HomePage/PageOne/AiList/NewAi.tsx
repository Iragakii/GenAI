import React from "react";
import { Link } from "react-router-dom";

const NewAi = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12">
        {/* Research Agent */}
        <Link
          to="#"
          className="flex flex-col items-center gap-2 w-[calc(50%-1rem)] sm:w-auto group"
        >
          <div className="s-color-ai-list rounded-full p-2 sm:p-3 w-14 h-14 sm:w-17 sm:h-17 flex items-center justify-center relative box-border hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <i className="ri-search-line text-white text-2xl sm:text-4xl group-hover:scale-125 transition-all duration-300 ease-in-out"></i>
          </div>
          <span className="text-white text-center font-medium text-sm sm:text-base">
            Research Agent
          </span>
        </Link>

        {/* Facebook Agent */}
        <Link
          to="#"
          className="flex flex-col items-center gap-2 w-[calc(50%-1rem)] sm:w-auto group"
        >
          <div className="f-color-ai-list rounded-full p-2 sm:p-3 w-14 h-14 sm:w-17 sm:h-17 flex items-center justify-center relative box-border hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <i className="ri-facebook-fill text-white text-2xl sm:text-4xl group-hover:scale-125 transition-all duration-300 ease-in-out"></i>
          </div>
          <span className="text-white text-center font-medium text-sm sm:text-base">
            Facebook Agent
          </span>
        </Link>

        {/* Image AI Tool */}
        <Link
          to="#"
          className="flex flex-col items-center gap-2 w-[calc(50%-1rem)] sm:w-auto group"
        >
          <div className="img-color-ai-list rounded-full p-2 sm:p-3 w-14 h-14 sm:w-17 sm:h-17 flex items-center justify-center relative box-border hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <i className="ri-image-line text-white text-2xl sm:text-4xl group-hover:scale-125 transition-all duration-300 ease-in-out"></i>
          </div>
          <span className="text-white text-center font-medium text-sm sm:text-base">
            Image AI Tool
          </span>
        </Link>

        {/* Short Video AI */}
        <Link
          to="#"
          className="flex flex-col items-center gap-2 w-[calc(50%-1rem)] sm:w-auto group"
        >
          <div className="video-color-ai-list rounded-full p-2 sm:p-3 w-14 h-14 sm:w-17 sm:h-17 flex items-center justify-center relative box-border hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <i className="ri-movie-ai-line text-white text-2xl sm:text-4xl group-hover:scale-125 transition-all duration-300 ease-in-out"></i>
          </div>
          <span className="text-white text-center font-medium text-sm sm:text-base">
            Short Video AI
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NewAi;
