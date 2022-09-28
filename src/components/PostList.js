import React from 'react';
import PostItem from "./PostItem";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
const PostList = ({posts, remove}) => {
  if(!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>Posts don't founded</h1>
    )
  }
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>List of posts</h1>
      <TransitionGroup>
        {posts.map(post =>
          <CSSTransition
            key={post.id}
            classNames='post'
            timeout={500}
          >
            <PostItem post={post} remove={remove} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;