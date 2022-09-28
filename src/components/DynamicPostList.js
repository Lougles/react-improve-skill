import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const DynamicPostList = ({create}) => {
  
  const [post, setPost] = useState({title: '', body: ''});
  
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }
  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type={"text"}
          placeholder={'post name'}
        />
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type={"text"}
          placeholder={'description name'}
        />
        < MyButton onClick ={addNewPost}>Create Post</MyButton>
      </form>
    </div>
  );
};

export default DynamicPostList;