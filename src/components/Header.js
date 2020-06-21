import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link className='title' to='/'>
      Tech Project Mix
    </Link>
  );
}

export default Header;
