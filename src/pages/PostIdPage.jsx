import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useFetch} from "../hooks/useFetch";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComment] = useState([])
  const [fetchPostById, isLoadingPost, errorPost] = useFetch(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  })
  const [fetchComment, isLoadingComment, errorComment] = useFetch(async () => {
    const response = await PostService.getComments(params.id);
    setComment(response.data);
  })
  useEffect(() => {
    fetchPostById();
    fetchComment();
  }, [])
  return (
    <div>
      <h2>Page {params.id} </h2>
      {isLoadingPost ?
      <Loader />
      :
        <div>
          <h3>{post.id}. {post.title}</h3>
          <div>{post.body}</div>
        </div>
      }
      <h2 style={{marginTop: 15}}> Comments </h2>
      {isLoadingComment ?
      <Loader />
      :
        <div>
          {comments.map(com =>
            <div key={com.id} style={{marginTop: 15}}>
              <h5>{com.email}</h5>
              <div>{com.body}</div>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default PostIdPage;