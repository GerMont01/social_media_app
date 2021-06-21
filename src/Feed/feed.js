import React, { useEffect, useState } from "react";
import { Consumer } from "../context";
import Like from '../icons/heart.svg';
import Comment from './Comment/comment';
import uuid from 'react-uuid';
import Close from "../icons/x.svg";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
`;

const Div = styled.div`
  position: relative;
  display: inherit;
  flex-direction:column;
  border: 1px solid rgb(225, 225, 208); 
  border-radius: 5px;
  margin: 20px;
  padding: 20px 10px 20px 10px;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: left;
`;

const Closebtn = styled.img`
  position: absolute;
  height:25px;
  top: 15px;
  right: 0;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Input = styled.input`
  height: 25px;
  padding-left: 10px;
  border: 0.5px solid grey;
  border-radius: 10px;
  outline:none;
  &:focus {
    border-color:black;
  }
`;

const Img = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export default function Feed() {
  const [ toggleLike, setToggleLike ] = useState([]);
  useEffect(() => {
    
  },[])
  const addComment = (id,content,dispatch) => {
    let comment = {
      user: 'User1',
      content: content,
      id: uuid()
    }
    dispatch({ type: "ADD_COMMENT", payload: {id,comment} });
  }
  const addLike = (e,id,num,dispatch) => {
    let likes;
    let toggle = toggleLike;
    if (!toggle[id]){
      e.style.filter= 'invert(23%) sepia(91%) saturate(6331%) hue-rotate(355deg) brightness(96%) contrast(122%)';
      likes = num + 1;
      toggle[id] = true;
      setToggleLike(toggle);
    }else{
      e.style.filter= 'invert(0%) sepia(43%) saturate(7500%) hue-rotate(95deg) brightness(102%) contrast(107%)';
      likes = num - 1;
      toggle[id] = false;
      setToggleLike(toggle)
    }
    dispatch({ type:"ADD_LIKE", payload: {id,likes} })
  }
  const deletePost = (id,dispatch) => {
    console.log(id)
    dispatch({ type:"DELETE_POST", payload: id })
  }
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <Container>
          {value.posts.length !== 0 ? 
          <>
          {value.posts.map((post)=>
            <>
            <Div key={post.id}>
              <Title>{post.title}</Title>
              <img src={post.image} width='300px' height='400px' onClick={()=>addLike(document.getElementById('like'+post.id),post.id,post.likes,dispatch)}/>
              <Closebtn src={Close} onClick={()=>deletePost(post.id,dispatch)}/>
              <div style={{margin:'10px'}}>
                <Img id={'like'+post.id} src={Like} onClick={(e)=>addLike(e.target,post.id,post.likes,dispatch)}/>   
                <span> {post.likes} likes</span>
                <span> {post.comments.length} Comments</span>
              </div>
              <Comment post={post}/>                
              <Input type='text' placeholder='Add a comment' onKeyDown={(e)=>{if(e.key ==='Enter'){addComment(post.id,e.target.value,dispatch);e.target.value='';}}}/>
            </Div>
          </>
          )}
          </>
          :
          <p>Post a Picture!</p>}
          </Container>
        )
      }}
    </Consumer>
  );
}
