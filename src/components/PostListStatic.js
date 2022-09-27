import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import PostItem from "./PostItem";

const PostListStatic = ({posts,setPosts}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      description
    }
    setPosts([...posts, newPost]);
    setTitle('');
    setDescription('');
  }
  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type={"text"}
          placeholder={'post name'}
        />
        <MyInput
          value={description}
          onChange={e => setDescription(e.target.value)}
          type={"text"}
          placeholder={'description name'}
        />
        < MyButton onClick ={addNewPost}>Create Post</MyButton>
      </form>
      <h1 style={{textAlign: 'center'}}>List of posts</h1>
      {posts.map(post =>
        <PostItem post={post} key={post.id}/>
      )}
    </div>
  );
};

export default PostListStatic;