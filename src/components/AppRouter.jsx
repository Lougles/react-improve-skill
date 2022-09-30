import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Post from "../pages/Post";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Post />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="*" element={<Navigate to='/posts' replace />} />
    </Routes>
  );
};

export default AppRouter;