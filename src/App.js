import React, {useEffect, useState} from "react";
import './styles/App.css'
import {
  BrowserRouter,
  Routes,
  Route, Link,
} from "react-router-dom";
import About from "./pages/About";
import Post from "./pages/Post";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className='navbar'>
        <div className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/about">About site</Link>
          <Link to="/posts">Post List</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
