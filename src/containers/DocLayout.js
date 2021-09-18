import React from "react";
import {
  TheContent,
  DoctorSidebar,
  TheFooter,
  TheHeader2,
  TopBar,
} from "./IndexDoctor";

const DocLayout = ({ children }) => {
  return (
    <div className="app-header-fixed">
      {" "}
      <TopBar />
      <div className="app sidebar-compact">
        <DoctorSidebar />
        <div className="c-wrapper">
          <TheHeader2 />
          <div className="c-body">{children}</div>
          <TheFooter />
        </div>
      </div>
    </div>
  );
};

export default DocLayout;
