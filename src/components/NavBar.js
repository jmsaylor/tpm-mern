import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='NavBar'>
      <h1>
        <Link to='/projects'>Projects</Link>
      </h1>
      <h1>
        <Link to='/members'>Members</Link>
      </h1>
      <h1>
        <Link to='/statistics'>Statistics</Link>
      </h1>
      <h1>
        <Link to='/info'>Info</Link>
      </h1>
    </div>
  );
};

export default NavBar;
