import React from "react";
import ChatField from "./ChatField";
import SideBarChat from "./SideBarChat";
import HeaderChatUI from "./HeaderChatUI";

const ScreenChatUI = () => {
  return (
    <div>
      <HeaderChatUI></HeaderChatUI>
      <div className="flex h-screen">
        <div className="flex">
          <div className="">
            <SideBarChat />
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <ChatField />
        </div>
      </div>
    </div>
  );
};

export default ScreenChatUI;
