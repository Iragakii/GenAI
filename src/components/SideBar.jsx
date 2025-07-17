import React from "react";
import { Link } from "react-router-dom";
import brandLogoMain from "../../public/brand-logo-main.png";
import aboutUs from "../assets/icon/about-us.png";
const SideBar = () => {
  return (
    <>
      <div
        className="fixed w-[80px] h-screen p-5 z-20 flex flex-col justify-between hidden lg:flex"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div className="menu">
          <div className="mb-10">
            <Link
              to="#"
              className="flex items-center justify-center leading-[40px] mb-1 relative group"
            >
              <div className="icon text-[2.75rem] block text-white flex justify-center items-center">
                <img
                  className="transform transition-transform duration-300 ease-in-out group-hover:scale-[1.2]"
                  src={brandLogoMain}
                  alt="logo-company"
                />
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

            <div className="mb-5.5">
              <Link
                to="#"
                className="flex items-center justify-center leading-[40px] mb-1 relative box-border rounded-[8px] group bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out pt-1 pb-1"
              >
                <div className="icon text-2xl block text-white flex justify-center items-center">
                  <i class="ri-customer-service-2-line group-hover:scale-[1.2] transition-all duration-300 ease-in-out dark:text-white "></i>
                </div>
              </Link>
              <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap">
                Contact
              </div>
            </div>
            <div className="">
              <Link
                to="#"
                className="flex items-center justify-center leading-[40px] mb-1 relative box-border rounded-[8px] group hover:bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="icon text-2xl block text-white flex justify-center items-center">
                  <img
                    src={aboutUs}
                    alt="logo-company"
                    className="transform transition-transform duration-300 ease-in-out group-hover:scale-[1.2]"
                  />
                </div>
              </Link>
              <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap">
                About us
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Link
            to="#"
            className="flex items-center justify-center leading-[40px] mb-1 relative box-border rounded-[50px] group bg-[#DB2777] hover:scale-105 transition-transform duration-300 ease-in-out pt-1 pb-1"
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
