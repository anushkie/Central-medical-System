import React from "react";

const TopBar = () => {
  return (
    <>
      <nav
        className="navbarbar navbar-expand-lg navbar-light bg-dark"
        style={{
          top: "0",
          right: "0",
          left: "0",
          position: "fixed",
          height: "30px",
          zIndex: 1029,
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand1">
            <div class=" family w3-cursive">
              <h3>
                <center>CENTRAL MEDICAL SERVICES</center>
              </h3>{" "}
            </div>
          </a>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
