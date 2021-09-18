import React from "react";
import { TheFooter, TopBar, TheHeader2 } from "./IndexUser";

const TheLayout = ({ children }) => {
  // const childs = [];
  // React.Children.map(children, (child) => {
  //   console.log(child);
  //   childs.push(React.cloneElement(child, { btncolor }));
  // });
  return (
    <div className="app-header-fixed">
      {" "}
      <TopBar />
      {/* <div className="app sidebar-compact">
        <TheSidebar /> */}
      <div className="c-wrapper">
        <TheHeader2 />
        <div className="c-body">{children}</div>

        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
