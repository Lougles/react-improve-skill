import React, { useState} from "react";
import DynamicPostList from "./components/DynamicPostList";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
      {id: 1, title: "JS 1", body: "description"},
      {id: 2, title: "JS 2", body: "description"},
      {id: 3, title: "JS 3", body: "description"}
    ]);
    
    const createPost = (newPost) => {
      setPosts([...posts, newPost])
  }
    
  return (
    <div>
      <DynamicPostList create={createPost}/>
      {/*<DynamicPostList posts={posts} setPosts={setPosts}/>*/}
      <PostList posts={posts} />
    </div>
  );
}

export default App;
