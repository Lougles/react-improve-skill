import React from 'react';
import '../styles/App.css'
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = ({post, remove}) => {
  const navigate = useNavigate();
  return (
    <div className={"app"}>
      <div className={"post"}>
        <div className={"post_content"}>
          <strong>{post.id}. {post.title}</strong>
          <div>
            {post.body}
          </div>
        </div>
        <div className={"post_delete_btns"}>
          <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Open</MyButton>
          <MyButton onClick={() => remove(post.id)}>Delete</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;