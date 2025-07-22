import React from "react";
const ideaIconSide = "/icon-idea.png";
const PickTool = () => {
  return (
    <>
      <div>
        <button
          type="button"
          className="flex gap-1 text-white items-center justify-center leading-5 sm:leading-[27px] p-1 sm:p-[8px] py-1 sm:py-[5px] relative box-border rounded-[15px] bg-[#FFFFFF0D] group hover:bg-[#FFFFFF1A] transition-all duration-300 ease-in-out outline-none cursor-pointer"
        >
          <img
            className="h-4 w-4 group-hover:scale-[1.2] transition-all duration-300 ease-in-out"
            src={ideaIconSide}
            alt="idea"
          />
          <span className="text-xs">Công cụ</span>
        </button>
      </div>
    </>
  );
};

export default PickTool;
