import React from "react";
import uuid from "react-uuid";

const Context = React.createContext();
export const Consumer = Context.Consumer;
let done = false;
const reducer = (state, action) => {
  if (done === false){
    done = true;
    switch (action.type) {
      case "NEW_POST":
        const newPost = {
          id: uuid(),
          title: action.payload.title,
          image: action.payload.url,
          likes: 0,
          comments: []
        }
        return {
          ...state,
          posts: [newPost, ...state.posts]
        }
      case "ADD_COMMENT":
        for (let post of state.posts) {
          if (post.id === action.payload.id){
            post.comments = [action.payload.comment, ...post.comments];
          }
        }
        // state.posts[action.payload.id].comments = [action.payload.comment, ...state.posts[action.payload.id].comments];
        return {
          ...state
        };
      case "ADD_LIKE":
        for (let post of state.posts) {
          if (post.id === action.payload.id){
            post.likes = action.payload.likes;
          }
        }
        // state.posts[action.payload.id].likes = action.payload.likes;
        return {
          ...state
        };
      case "DELETE_COMMENT":
        for (let post of state.posts) {
          if (post.id === action.payload.postid){
            let newComments = post.comments.filter((comment)=>comment.id !== action.payload.commentid);
            post.comments = newComments
          }
        }
        return {
          ...state
        };
      default:
        return state;
    }
  }
};
export class Provider extends React.Component {
  state = {
    posts: [],
    dispatch: (action) => {
        this.setState((state) => reducer(state, action));
    }
  };
  componentWillMount() {
    this.getLocalStorage('posts') == null ? this.setState({posts: []}) : 
    this.setState({posts: this.getLocalStorage('posts')});
  }
  componentDidUpdate() {
    done = false;
    this.setLocalStorage('posts',this.state.posts);
  }
  setLocalStorage = (key,value) => {
    try {
      let storeValue = JSON.stringify(value)
      localStorage.setItem(key,storeValue);
    }
    catch(err) {
      alert(err);
    }
    
  }
  getLocalStorage = (key)=> {
    return JSON.parse(localStorage.getItem(key));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}