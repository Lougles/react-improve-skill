import React, {useMemo, useState} from "react";
import DynamicPostList from "./components/DynamicPostList";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "About 1", body: "Hello World"},
    {id: 2, title: "Zebra 2", body: "Its Description"},
    {id: 3, title: "Honda 3", body: "Awesome"}
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  
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
    setModal(false);
  }
  
  const removePost = (id) => {
    setPosts(posts.filter(item => item.id !== id))
  }
  
  return (
    <div>
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)} >Create Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <DynamicPostList create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList posts={sortedAndSearchPosts} remove={removePost} title={'Posts about something'}/>
    </div>
  );
}

export default App;
