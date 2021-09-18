import React from "react";
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader,
  TopBar,
  Home,
  Home2,
} from "./index";

const TheLayout = ({ children }) => {
  return (
    <div className="app-header-fixed">
      {" "}
      <TopBar />
      {/* <div className="app sidebar-compact">
        <TheSidebar /> */}
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          {/* <Route exact path="/test" render={() => <Redirect to="/home" />} /> */}
          {children}
        </div>

        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
