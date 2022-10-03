import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/about">About site</Link>
        <Link to="/posts">Post List</Link>
      </div>
    </div>
  );
};

export default NavBar;