import React from "react";
import { Link } from "react-router-dom";

const facebIconIconSide = "/icon-facebook.png";
const researchIconSide = "/icon-research.png";
const renderIconSide = "/icon-render-img.png";
const agentIconSide = "/icon-assistant.png";
const videoIconSide = "/video-camera-icon.png";
const whiteBrandIconSide = "/white-brand-logo-main.png";

const PickAgentList = () => {
  const agents = [
    { icon: facebIconIconSide, name: "Facebook Lead Agent" },
    { icon: researchIconSide, name: "Research Agent" },
    { icon: renderIconSide, name: "Images AI Tools" },
    { icon: agentIconSide, name: "Marketing Assistant Agent" },
    { icon: videoIconSide, name: "Short Video Ai Tools" },
  ];

  return (
    <div className="fixed left-[54px] bottom-[130px] w-[254px] bg-[#3D3939] text-white p-4 shadow-lg z-10 animate-slideRightAgent rounded-[20px]">
      <div className="flex items-center space-x-2 mb-4">
        <img src={whiteBrandIconSide} alt="Brand Logo" className="w-6 h-6 " />
        <span className="text-sm font-medium">Agent List</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {agents.map((agent, index) => (
          <div key={index} className="aspect-square">
            <Link
              to="#"
              className="flex flex-col items-center justify-center w-full h-full p-2 rounded-3xl bg-[#313131] hover:bg-[#3d3d3d] transition-colors duration-300 group min-h-[100px]"
            >
              <img
                src={agent.icon}
                alt={agent.name}
                className="w-8 h-8 mb-1 group-hover:scale-[1.2] transition-transform duration-300"
              />
              <span className="text-[10px] text-gray-300 text-center leading-tight line-clamp-2">
                {agent.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PickAgentList;
