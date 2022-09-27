import React from 'react';
import '../styles/App.css'

const PostItem = (props) => {
  return (
    <div className={"app"}>
      <div className={"post"}>
        <div className={"post_content"}>
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className={"post_delete_btns"}>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;