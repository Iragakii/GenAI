import React from "react";
import ChatField from "./ChatField";
import SideBar from "../HomePage/PageOne/SideBar";

const ScreenChatUI = () => {
  return (
    <>
      <div className="">
        <SideBar />
        <div className="">
          <ChatField />
        </div>
      </div>
    </>
  );
};

export default ScreenChatUI;
