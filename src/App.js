import React, { useState} from "react";
import DynamicPostList from "./components/DynamicPostList";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "About 1", body: "Hello World"},
    {id: 2, title: "Zebra 2", body: "Its Description"},
    {id: 3, title: "Honda 3", body: "Awesome"}
  ]);
  
  const [selectSort, setSelectSort] = useState('');
  const [search, setSearch] = useState('');
  
  function getSortedPosts() {
    console.log('Working!')
    if(selectSort){
      return [...posts].sort((a,b) => a[selectSort].localeCompare(b[selectSort]))
    }
    return posts;
  }
  const sortedPost = getSortedPosts();
  
  
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const removePost = (id) => {
    setPosts(posts.filter(item => item.id !== id))
  }
  
  const sortPosts = (sort) => {
    setSelectSort(sort);
  }
    
  return (
    <div>
      <DynamicPostList create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={'Search...'}
        />
        <MySelect
          value={selectSort}
          onChange={sortPosts}
          defaultValue='Sort by:'
          options={[
            {value: 'title', name: 'Header'},
            {value: 'body', name: 'Description'}
          ]}/>
      </div>
      {posts.length ?
        <PostList posts={sortedPost} remove={removePost} title={'Posts about something'}/>
        :
        <h1 style={{textAlign: 'center'}}>There is no posts. Add the first</h1>
      }
    </div>
  );
}

export default App;
