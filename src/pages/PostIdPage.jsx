import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useFetch} from "../hooks/useFetch";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetch(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  })
  
  useEffect(() => {
    fetchPostById(params.id)
  }, [])
  console.log(params);
  return (
    <div>
      <h1>Page {params.id} </h1>
      {isLoading ?
      <Loader />
      :
      <div>{post.id}. {post.title}</div>
      }
    </div>
  );
};

export default PostIdPage;