import React from "react";

const TrendingNew = () => {
  return (
    <div className="f-postion flex items-center justify-center w-full px-2 sm:px-4 mb-2 iphone-se:gap-3">
      <svg
        width="210"
        height="1"
        viewBox="0 0 210 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[60px] sm:w-[100px] md:w-[210px] h-1 dark:rotate-180"
      >
        <path
          d="M210 0.5L0 0.5"
          stroke="url(#paint0_linear_trending_left)"
          strokeOpacity="0.6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_trending_left"
            x1="210"
            y1="0.5"
            x2="0"
            y2="0.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="white" />
            <stop offset="0.2" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mx-2 sm:mx-4">
        <div className="rounded-full bg-white py-1 sm:py-2 px-3 sm:px-4">
          <span className="text-sm sm:text-lg font-semibold text-black whitespace-nowrap">
            Social Trending
          </span>
        </div>
      </div>

      <svg
        width="210"
        height="1"
        viewBox="0 0 210 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[60px] sm:w-[100px] md:w-[210px] h-1 dark:rotate-180"
      >
        <path
          d="M210 0.5L0 0.5"
          stroke="url(#paint0_linear_trending_right)"
          strokeOpacity="0.6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_trending_right"
            x1="0"
            y1="0.5"
            x2="210"
            y2="0.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="white" />
            <stop offset="0.2" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TrendingNew;
