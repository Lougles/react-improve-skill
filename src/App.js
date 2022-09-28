import React, {useMemo, useState} from "react";
import DynamicPostList from "./components/DynamicPostList";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "About 1", body: "Hello World"},
    {id: 2, title: "Zebra 2", body: "Its Description"},
    {id: 3, title: "Honda 3", body: "Awesome"}
  ]);
  
  const [filter, setFilter] = useState({sort: '', query: ''})
  
  const sortedPost = useMemo(() => {
    if(filter.sort){
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])
  
  const sortedAndSearchPosts = useMemo( () => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPost])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const removePost = (id) => {
    setPosts(posts.filter(item => item.id !== id))
  }
  
  return (
    <div>
      <DynamicPostList create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList posts={sortedAndSearchPosts} remove={removePost} title={'Posts about something'}/>
    </div>
  );
}

export default App;
