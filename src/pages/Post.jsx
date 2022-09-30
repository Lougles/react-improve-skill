import React, {useEffect, useState} from 'react';
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import DynamicPostList from "../components/DynamicPostList";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import {usePosts} from "../hooks/usePosts";
import {useFetch} from "../hooks/useFetch";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  
  const [fetchPosts, isLoading, postErr] = useFetch(async () => {
    const res = await PostService.getAll(limit, page);
    setPosts(res.data);
    const totalCount = res.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });
  
  useEffect(() => {
    fetchPosts()
  }, [page])
  
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);
  }
  
  const removePost = (id) => {
    setPosts(posts.filter(item => item.id !== id))
  }
  
  const changePage = (page) => {
    setPage(page)
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
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
};

export default Post;