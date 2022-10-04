import React, {useEffect, useRef, useState} from 'react';
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
import {useObserver} from "../hooks/useObserver";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();
  
  const [fetchPosts, isLoading, postErr] = useFetch(async () => {
    const res = await PostService.getAll(limit, page);
    setPosts([...posts, ...res.data]);
    const totalCount = res.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });
  useObserver(lastElement, page < totalPages, isLoading, () => {
    setPage(page + 1);
  })
  // useEffect(() => {
  //   if (isLoading) return;
  //   if(observer.current) observer.current.disconnect();
  //   let callback = function(entries, observer){
  //     if(entries[0].isIntersecting && page < totalPages){
  //       setPage(page + 1);
  //     }
  //   }
  //   observer.current = new IntersectionObserver(callback);
  //   observer.current.observe(lastElement.current);
  // }, [isLoading])
  
  useEffect(() => {
    fetchPosts(limit, page)
  }, [page])
  
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);
  }
  
  const removePost = (id) => {
    setPosts(posts.filter(item => item.id !== id))
  }
  
  const changePage = (p) => {
    setPage(p)
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
      <PostList posts={sortedAndSearchPosts} remove={removePost} title='Posts about something'/>
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
      <div ref={lastElement} style={{height: 1, background: 'red'}}/>
      {isLoading && <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>}
    </div>
  );
};

export default Post;