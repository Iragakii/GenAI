// SideBar.tsx
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import NotLoginForm from "../../components/NotLoginForm";

const homeIconSide = "/icon-home-side.png";
const brandLogoMain = "/brand-logo-main.png";
const contactIconSide = "/icon-contact-side.png";
const aboutIconSide = "/icon-about-side.png";

const SideBar: FC = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div
        className="fixed w-[54px] h-screen p-[13px] z-20 hidden flex-col sidebar-visible"
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

            <div>
              <div className="mb-[15px]">
                <Link
                  to="#"
                  className="flex items-center justify-center leading-[27px] mb-1 relative box-border rounded-[5px] group hover:bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out"
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
                  className="flex items-center justify-center leading-[27px] mb-1 relative box-border rounded-[5px] group bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out pt-0 pb-0"
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
                      className="w-8 h-8 transform transition-transform duration-300 ease-in-out group-hover:scale-[1.2]"
                    />
                  </div>
                </Link>
                <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap text-[10px]">
                  Contact
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <button
              type="button"
              onClick={toggleForm}
              className="flex items-center justify-center leading-[27px] mb-1 relative box-border rounded-[34px] group bg-[#DB2777] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer  px-1"
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

export default SideBar;
