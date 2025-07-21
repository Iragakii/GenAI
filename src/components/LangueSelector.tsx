import React, { useState, useEffect, useRef } from "react";
const imgLangue = "/icon-langue.png ";
const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("vietnamese");
  const flagRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (flagRef.current) {
      flagRef.current.src =
        selectedLanguage === "vietnamese"
          ? "https://flagcdn.com/w20/vn.png"
          : "https://flagcdn.com/w20/us.png";
    }
  }, [selectedLanguage]);

  return (
    <div className="mb-4 ">
      <div className="flex items-center gap-6 whitespace-nowrap">
        <div className="flex gap-2">
          <img className="w-5 h-5  flex-shrink-0" src={imgLangue} alt="" />
          <span className="text-sm flex-shrink-0">Ngôn ngữ</span>
        </div>
        <div className="relative flex-shrink-0">
          <select
            className="appearance-none bg-[#313131] text-white text-sm rounded-md pl-10 pr-8 py-2 w-34 border-none focus:ring-2 focus:ring-pink-500"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="vietnamese">Tiếng Việt</option>
            <option value="english">English</option>
          </select>
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <img
              ref={flagRef}
              src="https://flagcdn.com/w20/vn.png"
              alt="Current Flag"
              className="w-4 h-4 rounded-full"
            />
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <i className="ri-arrow-down-s-line text-white text-xs"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
