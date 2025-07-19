import React, { FC } from "react";
import { Link } from "react-router-dom";

const brandLogoMain = "/brand-logo-main.png";
const aboutUs = "/about-us.png";
const SideBar: FC = () => {
  return (
    <>
      <div
        className="fixed w-[54px] h-screen p-[13px] z-20 hidden flex-col justify-between sidebar-visible"
        style={{ backgroundColor: "#0C0C0C" }} //#31363F  // screen responsive ipad khong bi loi , khi check tren man hinh lap sidebar can theo sc ipad nen k thay , co the doi h- de check
      >
        <div className="menu">
          <div className="mb-[27px]">
            <Link
              to="#"
              className="flex items-center justify-center leading-[27px] mb-1 relative group"
            >
              <div className="icon text-[29px] block text-white flex justify-center items-center">
                <img
                  className="transform transition-transform duration-300 ease-in-out group-hover:scale-[1.2] animate-scalePulse"
                  src={brandLogoMain}
                  alt="logo-company"
                />
              </div>
            </Link>
          </div>

          <div className="">
            <div className="mb-[15px]">
              <Link
                to="#"
                className="flex items-center justify-center leading-[27px] mb-1 relative box-border rounded-[5px] group hover:bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out pt-0 pb-0"
              >
                <div className="icon text-[16px] block text-white flex justify-center items-center">
                  <i className="ri-home-4-fill group-hover:scale-[1.2] transition-all duration-300 ease-in-out dark:text-white"></i>
                </div>
              </Link>
              <div className=" text-gray-300 flex items-center justify-center h-full whitespace-nowrap text-[10px]">
                Home
              </div>
            </div>

            <div className="mb-[15px]">
              <Link
                to="#"
                className="flex items-center justify-center leading-[27px] mb-1 relative box-border rounded-[5px] group bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out pt-0 pb-0"
              >
                <div className="icon text-[16px] block text-white flex justify-center items-center">
                  <i className="ri-customer-service-2-line group-hover:scale-[1.2] transition-all duration-300 ease-in-out dark:text-white "></i>
                </div>
              </Link>
              <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap text-[10px]">
                Contact
              </div>
            </div>
            <div className="">
              <Link
                to="#"
                className="flex items-center justify-center leading-[27px] mb-1 relative box-border rounded-[5px] group hover:bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="icon text-[16px] block text-white flex justify-center items-center">
                  <img
                    src={aboutUs}
                    alt="logo-company"
                    className="transform transition-transform duration-300 ease-in-out group-hover:scale-[1.2]"
                  />
                </div>
              </Link>
              <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap text-[10px]">
                About us
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Link
            to="#"
            className="flex items-center justify-center leading-[27px] mb-1 relative box-border rounded-[34px] group bg-[#DB2777] hover:scale-105 transition-transform duration-300 ease-in-out pt-1 pb-1"
          >
            <div className=" icon text-[16px] block text-white flex justify-center items-center">
              <i className="ri-user-3-line  group-hover:scale-[1.2] transition-all duration-300 ease-in-out dark:text-white"></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
