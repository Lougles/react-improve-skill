import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, remove}) => {
  if(!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>Posts don't founded</h1>
    )
  }
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>List of posts</h1>
      {posts.map(post =>
        <PostItem post={post} remove={remove} key={post.id}/>
      )}
    </div>
  );
};

export default PostList;