import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div
        className="fixed w-[80px] h-screen p-5 z-20 flex flex-col justify-between"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div className="menu">
          <div className="mb-10">
            <Link
              to="#"
              className="flex items-center justify-center leading-[40px] mb-1 relative"
            >
              <div className="icon text-[2.75rem] block text-white flex justify-center items-center">
                <i class="ri-robot-2-line"></i>
              </div>
            </Link>
          </div>

          <div className="">
            <div className="mb-5.5">
              <Link
                to="#"
                className="flex items-center justify-center leading-[40px] mb-1 relative box-border rounded-[8px] group hover:bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out pt-1 pb-1"
              >
                <div className="icon text-2xl block text-white flex justify-center items-center">
                  <i class="ri-home-4-fill group-hover:scale-[1.2] transition-all duration-300 ease-in-out dark:text-white"></i>
                </div>
              </Link>
              <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap">
                Home
              </div>
            </div>

            <div className="mb-5.5 ">
              <Link
                to="#"
                className="flex items-center justify-center leading-[40px] mb-1 relative box-border rounded-[8px] group "
                style={{ backgroundColor: "#313131" }}
              >
                <div className="icon text-2xl block text-white flex justify-center items-center ">
                  <i className="ri-subscript group-hover:scale-[1.2] transition-all duration-300 ease-in-out dark:text-white"></i>
                </div>
              </Link>
              <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap">
                New
              </div>
            </div>

            <div className="">
              <Link
                to="#"
                className="flex items-center justify-center leading-[40px] mb-1 relative box-border rounded-[8px] group hover:bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out pt-1 pb-1"
              >
                <div className="icon text-2xl block text-white flex justify-center items-center">
                  <i class="ri-ghost-line group-hover:scale-[1.2] transition-all duration-300 ease-in-out dark:text-white "></i>
                </div>
              </Link>
              <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap">
                Nothing
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Link
            to="#"
            className="flex items-center justify-center leading-[40px] mb-1 relative box-border rounded-[8px] group hover:bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out pt-1 pb-1"
          >
            <div className="icon text-2xl block text-white flex justify-center items-center">
              <i class="ri-user-3-line  group-hover:scale-[1.2] transition-all duration-300 ease-in-out dark:text-white"></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
