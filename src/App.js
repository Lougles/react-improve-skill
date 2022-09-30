import React, {useEffect, useState} from "react";
import DynamicPostList from "./components/DynamicPostList";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetch} from "./hooks/useFetch";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isLoading, postErr] = useFetch(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });
  
  useEffect(() => {
    fetchPosts()
  }, [])
  
  
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
      {postErr &&
        <h1>Some mistake: '{postErr}'</h1>
      }
      {isLoading
      ? <Loader />
      : <PostList posts={sortedAndSearchPosts} remove={removePost} title={'Posts about something'}/>
      }
    </div>
  );
}

export default App;
