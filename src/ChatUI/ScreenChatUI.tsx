import React from "react";
import ChatField from "./ChatField";

import Navigation from "../components/Navigation";
import SideBarChat from "./SideBarChat";

const ScreenChatUI = () => {
  return (
    <div className="flex h-screen">
      <div className="flex">
        <div>
          <SideBarChat />
        </div>
        <Navigation />
      </div>

      <div className="flex-1 overflow-auto">
        <ChatField />
      </div>
    </div>
  );
};

export default ScreenChatUI;
