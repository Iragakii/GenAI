import React from "react";
import ChatField from "./ChatField";
import SideBarChat from "./SideBarChat";
import HeaderChatUI from "./HeaderChatUI";

const ScreenChatUI = () => {
  return (
    <div className=" w-screen bg-black text-white relative overflow-hidden">
      <SideBarChat />

      <div className="pl-0 lg:pl-[54px] h-full flex flex-col relative">
        <HeaderChatUI />

        <div className="flex-1 overflow-hidden">
          <ChatField />
        </div>
      </div>
    </div>
  );
};

export default ScreenChatUI;
