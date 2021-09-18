import React from "react";
import { TheSidebar, TheFooter, TheHeader, TopBar } from "./index";

const TheLayout = ({ children }) => {
  return (
    <div className="app-header-fixed">
      {" "}
      <TopBar />
      <div className="app sidebar-compact">
        <TheSidebar />
        <div className="c-wrapper">
          <TheHeader />
          <div className="c-body">{children}</div>
          <TheFooter />
        </div>
      </div>
    </div>
  );
};

export default TheLayout;
