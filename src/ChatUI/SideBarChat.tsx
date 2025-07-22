import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import NotLoginForm from "../components/NotLoginForm";

const homeIconSide = "/icon-home-side.png";
const brandLogoMain = "/brand-logo-main.png";
const contactIconSide = "/icon-contact-side.png";
const aboutIconSide = "/icon-about-side.png";
const agenticIconSide = "/icon-agentic.png";
const assistantIconSide = "/icon-assistant.png";
const setupIconSide = "/icon-setup.png";
const SideBarChat: FC = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div
        className="fixed left-0 top-0 h-full w-[54px] p-[13px] flex flex-col z-20 hidden sidebar-visible"
        style={{ backgroundColor: "#1D1D1D" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <div className="mb-[27px]">
              <Link
                to="http://localhost:5173/"
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
              <div className="mb-[20px] mt-[35px]">
                <Link
                  to="#"
                  className="flex items-center justify-center leading-[27px] mb-1 relative box-border rounded-[5px] group hover:bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out pt-0 pb-0"
                >
                  <div className="icon text-[16px] block text-white flex justify-center items-center">
                    <img
                      className="transform transition-transform duration-300 ease-in-out group-hover:scale-[1]"
                      src={homeIconSide}
                      alt="iconHome"
                    />
                  </div>
                </Link>
                <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap text-[10px]">
                  Home
                </div>
              </div>

              <div className="mb-[20px]">
                <Link
                  to="#"
                  className="flex items-center justify-center leading-[27px] mb-1 relative box-border rounded-[5px] group hover:bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out pt-0 pb-0"
                >
                  <div className="icon py-1  block text-white flex justify-center items-center">
                    <img
                      className="w-5  h-5 line group-hover:scale-[1.2] transition-all duration-300 ease-in-out dark:text-white"
                      src={aboutIconSide}
                      alt="iconHome"
                    />
                  </div>
                </Link>
                <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap text-[10px]">
                  About us
                </div>
              </div>

              <div>
                <Link
                  to="#"
                  className="flex items-center py-0 justify-center leading-[27px] mb-1 relative box-border rounded-[5px] group hover:bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <div className="icon block text-white flex justify-center items-center">
                    <img
                      src={contactIconSide}
                      alt="logo-company"
                      className="w-7 h-7 transform transition-transform duration-300 ease-in-out group-hover:scale-[1.2]"
                    />
                  </div>
                </Link>
                <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap text-[10px]">
                  Contact
                </div>
              </div>
            </div>
            <div className="text-gray-500 dark:text-gray-700">
              <hr className="h-px my-5 bg-[#656262] border-0 w-[calc(100%+15px)] -mx-[8px]" />
            </div>
            <div className="mb-[20px] mt-[20px]">
              <Link
                to="#"
                className="flex  items-center justify-center leading-[27px] mb-1 relative box-border rounded-[5px] group hover:bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out pt-0 pb-0"
              >
                <div className="icon py-1  block text-white flex justify-center items-center">
                  <img
                    className="transform w-7 h-5 transition-transform duration-300 ease-in-out group-hover:scale-[1]"
                    src={agenticIconSide}
                    alt="iconHome"
                  />
                </div>
              </Link>
              <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap text-[10px]">
                Agentic
              </div>
            </div>

            <div className="mb-[20px]">
              <Link
                to="#"
                className="flex items-center justify-center leading-[27px] mb-1 relative box-border rounded-[5px] group bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out pt-0 pb-0"
              >
                <div className="icon py-1  block text-white flex justify-center items-center">
                  <img
                    className="w-5  h-5 line group-hover:scale-[1.2] transition-all duration-300 ease-in-out dark:text-white"
                    src={assistantIconSide}
                    alt="iconHome"
                  />
                </div>
              </Link>
              <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap text-[10px]">
                List Agent
              </div>
            </div>

            <div>
              <Link
                to="#"
                className="flex items-center py-0 justify-center leading-[27px] mb-1 relative box-border rounded-[5px] group hover:bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="p-1 icon block text-white flex justify-center items-center">
                  <img
                    src={setupIconSide}
                    alt="logo-company"
                    className="w-5 h-5 transform transition-transform duration-300 ease-in-out group-hover:scale-[1.2]"
                  />
                </div>
              </Link>
              <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap text-[10px]">
                Data
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <button
              onClick={toggleForm}
              className="flex items-center justify-center leading-[27px] mb-1 relative box-border rounded-[34px] group bg-[#DB2777] hover:scale-105 transition-transform duration-300 ease-in-out px-1"
            >
              <div className="icon text-[16px] block text-white flex justify-center items-center">
                <i className="ri-user-3-line group-hover:scale-[1.2] transition-all duration-300 ease-in-out dark:text-white"></i>
              </div>
            </button>
          </div>
        </div>
      </div>

      {showForm && <NotLoginForm />}
    </>
  );
};

export default SideBarChat;
