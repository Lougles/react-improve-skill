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
  
  const removePost = (id) => {
    setPosts(posts.filter(item => item.id !== id))
  }
    
  return (
    <div>
      <DynamicPostList create={createPost}/>
      {posts.length ?
        <PostList posts={posts} remove={removePost} title={'Posts about something'}/>
        :
        <h1 style={{textAlign: 'center'}}>There is no posts. Add the first</h1>
      }
    </div>
  );
}

export default App;
