import React from "react";

const TrendingNew = () => {
  return (
    <div className="f-postion flex items-center justify-center w-full px-[5px] sm:px-[11px] mb-[5px] iphone-se:gap-2">
      <svg
        width="140"
        height="1"
        viewBox="0 0 140 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[40px] sm:w-[67px] md:w-[140px] h-1 dark:rotate-180"
      >
        <path
          d="M140 0.5L0 0.5"
          stroke="url(#paint0_linear_trending_left)"
          strokeOpacity="0.6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_trending_left"
            x1="140"
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

      <div className="mx-[5px] sm:mx-[11px]">
        <div className="rounded-full bg-white py-[3px] sm:py-[5px] px-2 sm:px-3">
          <span className="text-xs sm:text-base font-semibold text-black whitespace-nowrap">
            Social Trending
          </span>
        </div>
      </div>

      <svg
        width="140"
        height="1"
        viewBox="0 0 140 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[40px] sm:w-[67px] md:w-[140px] h-1 dark:rotate-180"
      >
        <path
          d="M140 0.5L0 0.5"
          stroke="url(#paint0_linear_trending_right)"
          strokeOpacity="0.6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_trending_right"
            x1="0"
            y1="0.5"
            x2="140"
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
