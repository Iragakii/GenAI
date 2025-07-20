import React, { useState } from "react";
import Navigation from "../components/Navigation";

const HeaderChatUI = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const agents = ["Marketing AI Agent", "Sales AI Agent", "Support AI Agent"];

  return (
    <header className="bg-black text-white p-3 sticky top-0 z-20 ">
      <div className="container mx-auto flex items-center">
        <div className="z-30">
          {" "}
          <Navigation />
        </div>

        <div className="flex-1 flex justify-center items-center space-x-2">
          <h1 className="text-lg font-medium">Marketing AI Agent</h1>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-sm bg-white/10 px-3 py-1 rounded-lg hover:bg-white/20 transition-colors"
          >
            GPT-4o
          </button>
        </div>

        <div className="w-10"></div>
      </div>

      {isDropdownOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-[#2E2E2E] rounded-lg shadow-lg z-30">
          {agents.map((agent) => (
            <button
              key={agent}
              className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors"
              onClick={() => setIsDropdownOpen(false)}
            >
              {agent}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default HeaderChatUI;
