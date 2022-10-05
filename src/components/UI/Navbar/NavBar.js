import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {useContext} from "react";
import {AuthContext} from "../../../context";

const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
  return (
    <div className='navbar'>
      {isAuth ?
        <MyButton onClick={logout}>Exit</MyButton>
        :
        <></>
      }
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/about">About site</Link>
        <Link to="/posts">Post List</Link>
      </div>
    </div>
  );
};

export default NavBar;