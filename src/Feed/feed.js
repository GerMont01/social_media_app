import { addComment } from "@babel/types";
import React from "react";
import { Consumer } from "../context";
import Like from '../icons/heart.svg';
import Comment from './Comment/comment'

export default class Feed extends React.Component {
  state= {
    toggleLike: true,
    likes: 0
  }
  addComment = (id,content,dispatch) => {
    let comment = {
      user: 'Juan',
      content: content
    }
    dispatch({ type: "ADD_COMMENT", payload: {id,comment} });
  }
  addLike = (e,id,num,dispatch) => {
    if (this.state.toggleLike){
      e.target.style.filter= 'invert(23%) sepia(91%) saturate(6331%) hue-rotate(355deg) brightness(96%) contrast(122%)';
      this.state.likes = num + 1;
      this.setState({toggleLike:false})
    }else{
      e.target.style.filter= 'invert(0%) sepia(43%) saturate(7500%) hue-rotate(95deg) brightness(102%) contrast(107%)';
      this.state.likes = num - 1;
      this.setState({toggleLike:true})
    }
    let likes = this.state.likes
    dispatch({ type:"ADD_LIKE", payload: {id,likes} })
  }
  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <>
            {value.posts.map((post)=>
              <>
              <div>
                  <h1>{post.title}</h1>
                  <img src={post.image} width='200px'/>
                  <img src={Like} onClick={(e)=>this.addLike(e,post.id,post.likes,dispatch)}/>   
                  <p>{post.likes} likes</p>
                  <Comment id={post.id}/>                
                  <input type='text' placeholder='Add a comment' onKeyDown={(e)=>{if(e.key ==='Enter'){this.addComment(post.id,e.target.value,dispatch)}}}/>
              </div>
            </>
            )}
            </>
          )
        }}
      </Consumer>
    );
  }
}
