import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ScreenHomePageOne from "./HomePage/PageOne/ScreenHomePageOne";
import ScreenHomePageTwo from "./HomePage/PageTwo/ScreenHomePageTwo";
import ChatField from "./ChatUI/ChatField";
import ScreenChatUI from "./ChatUI/ScreenChatUI";

const App: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <ScreenHomePageOne />
            <ScreenHomePageTwo />
          </>
        }
      />
      <Route path="/chat" element={<ScreenChatUI />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
