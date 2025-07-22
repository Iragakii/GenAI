import React, { useState } from "react";
import PickAgentList from "./PickAgentList";

const assistantIconSide = "/icon-assistant.png";

const AgentList = () => {
  const [showAgentList, setShowAgentList] = useState(false);

  const toggleAgentList = () => {
    setShowAgentList(!showAgentList);
  };

  return (
    <>
      <div>
        <button
          onClick={toggleAgentList}
          className="flex items-center justify-center leading-[27px] mb-1 relative box-border rounded-[5px] group bg-[#313131] hover:scale-105 transition-transform duration-300 ease-in-out pt-0 pb-0"
        >
          <div className="icon p-1 block text-white flex justify-center items-center">
            <img
              className="w-5 h-5 line group-hover:scale-[1.2] transition-all duration-300 ease-in-out"
              src={assistantIconSide}
              alt="Agent Icon"
            />
          </div>
        </button>
        <div className="text-gray-300 flex items-center justify-center h-full whitespace-nowrap text-[10px]">
          List Agent
        </div>
      </div>
      {showAgentList && <PickAgentList />}
    </>
  );
};

export default AgentList;
