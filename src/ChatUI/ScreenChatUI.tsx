import React from "react";
import ChatField from "./ChatField";
import SideBar from "../HomePage/PageOne/SideBar";

const ScreenChatUI = () => {
  return (
    <>
      <div className="">
        <SideBar></SideBar>
        <div className="">
          <ChatField></ChatField>
        </div>
      </div>
    </>
  );
};

export default ScreenChatUI;
