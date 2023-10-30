import React from 'react';
import bgHeader from "./images/bg-header-desktop.svg";

const Navbar = () => {
  return (
    <div className="bg-LightGrayishCyan">
      <div className="container mx-auto py-4">
        <img className="mx-auto" src={bgHeader} alt="Header Background" />
      </div>
    </div>
  );
};

export default Navbar;
