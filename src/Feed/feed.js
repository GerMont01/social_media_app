import { addComment } from "@babel/types";
import React, { useEffect, useState } from "react";
import { Consumer } from "../context";
import Like from '../icons/heart.svg';
import Comment from './Comment/comment';
import uuid from 'react-uuid';
import Close from "../icons/x.svg";


export default function Feed() {
  const [ toggleLike, setToggleLike ] = useState([]);
  useEffect(() => {
    
  },[])
  const addComment = (id,content,dispatch) => {
    let comment = {
      user: 'Juan',
      content: content,
      id: uuid()
    }
    dispatch({ type: "ADD_COMMENT", payload: {id,comment} });
  }
  const addLike = (e,id,num,dispatch) => {
    let likes;
    let toggle = toggleLike;
    if (!toggle[id]){
      e.target.style.filter= 'invert(23%) sepia(91%) saturate(6331%) hue-rotate(355deg) brightness(96%) contrast(122%)';
      likes = num + 1;
      toggle[id] = true;
      setToggleLike(toggle);
    }else{
      e.target.style.filter= 'invert(0%) sepia(43%) saturate(7500%) hue-rotate(95deg) brightness(102%) contrast(107%)';
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
          value.posts.length !== 0 ? 
          <>
          {value.posts.map((post)=>
            <>
            <div key={post.id}>
                <h1>{post.title}</h1>
                <img src={post.image} width='200px'/>
                <img src={Close} onClick={()=>deletePost(post.id,dispatch)}/>
                <img src={Like} onClick={(e)=>addLike(e,post.id,post.likes,dispatch)}/>   
                <p>{post.likes} likes</p>
                <Comment post={post}/>                
                <input type='text' placeholder='Add a comment' onKeyDown={(e)=>{if(e.key ==='Enter'){addComment(post.id,e.target.value,dispatch)}}}/>
            </div>
          </>
          )}
          </>
          :
          <p>Post a Picture!</p>
        )
      }}
    </Consumer>
  );
}
