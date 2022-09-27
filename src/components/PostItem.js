import React from 'react';
import '../styles/App.css'

const PostItem = ({post, remove}) => {
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
          <button onClick={() => remove(post.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;