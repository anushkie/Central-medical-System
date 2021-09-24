import React from "react";
import {
  TheContent,
  TheSidebar,
  TheFooter,
  GenericHeader,
  TopBar,
  Home,
  Home2,
} from "./GenericIndex";

const TheLayout = ({ children }) => {
  return (
    <div className="app-header-fixed">
      {" "}
      <TopBar />
      {/* <div className="app sidebar-compact">
        <TheSidebar /> */}
      <div className="c-wrapper">
        <GenericHeader />
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
