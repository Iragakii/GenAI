import React from "react";
import LanguageSelector from "./LangueSelector";
const NotLoginForm: React.FC = () => {
  return (
    <div className="fixed left-[54px] bottom-[13px] w-[280px] h-[255px] bg-[#1E1E1E] text-white p-4 shadow-lg z-10 animate-slideRight rounded-[20px]">
      <div className="flex flex-col space-y-4 h-full">
        <LanguageSelector />

        <div className="flex items-center space-x-2 cursor-pointer hover:text-pink-400 transition-colors">
          <i className="ri-login-box-line text-lg"></i>
          <span className="text-sm">Đăng nhập</span>
        </div>

        <button className="bg-[#2563EB] text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-pink-700 transition-colors w-full">
          Đăng ký miễn phí
        </button>

        <button className="bg-white flex items-center justify-center space-x-2 border  text-black font-bold py-2 px-4 rounded-md text-sm hover:bg-pink-700 transition-colors w-full">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-4 h-4"
          />
          <span>Đăng ký bằng Google</span>
        </button>
      </div>
    </div>
  );
};

export default NotLoginForm;
