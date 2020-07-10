import React from "react";
import NavBar from "./sideNav/NavBar";
import MainBody from "../../components/MainBody/MainBody";

const Navigation = () => {
  return (
    <div className="app">
      <div className="flex">
        <NavBar />
        <div className="content">
          <div className="m-6 mt-10">
            <MainBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
