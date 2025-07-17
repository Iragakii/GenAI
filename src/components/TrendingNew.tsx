import React from "react";

const TrendingNew = () => {
  return (
    <div className="flex items-center justify-center w-full">
      {/* Left gradient line - solid to text, fades out at far left end */}
      <svg
        width="210"
        height="1"
        viewBox="0 0 210 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[100px] md:w-[210px] h-1 dark:rotate-180"
      >
        <path
          d="M210 0.5L0 0.5"
          stroke="url(#paint0_linear_trending_left)"
          strokeOpacity="0.6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_trending_left"
            x1="210" // Right end (near text)
            y1="0.5"
            x2="0" // Left end (away from text)
            y2="0.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="white" /> {/* Solid near text */}
            <stop offset="0.2" stopColor="white" /> {/* Start fading */}
            <stop offset="1" stopColor="white" stopOpacity="0" />{" "}
            {/* Fully transparent at far end */}
          </linearGradient>
        </defs>
      </svg>

      {/* Centered text */}
      <div className="mx-4">
        <div className="rounded-full bg-white py-2 px-4">
          <span className="text-lg font-semibold text-black">
            Social Trending
          </span>
        </div>
      </div>

      {/* Right gradient line - solid to text, fades out at far right end */}
      <svg
        width="210"
        height="1"
        viewBox="0 0 210 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[100px] md:w-[210px] h-1 dark:rotate-180"
      >
        <path
          d="M210 0.5L0 0.5"
          stroke="url(#paint0_linear_trending_right)"
          strokeOpacity="0.6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_trending_right"
            x1="0" // Left end (near text)
            y1="0.5"
            x2="210" // Right end (away from text)
            y2="0.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="white" /> {/* Solid near text */}
            <stop offset="0.2" stopColor="white" /> {/* Start fading */}
            <stop offset="1" stopColor="white" stopOpacity="0" />{" "}
            {/* Fully transparent at far end */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TrendingNew;
