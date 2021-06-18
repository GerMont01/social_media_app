import React from "react";

const Context = React.createContext();
export const Consumer = Context.Consumer;
let done = false;
const reducer = (state, action) => {
  if (done === false){
    done = true;
    switch (action.type) {
      case "ADD_POST":

      return {
          ...state
        };
      case "ADD_COMMENT":
        state.posts[action.payload.id].comments = [action.payload.comment, ...state.posts[action.payload.id].comments];
        return {
          ...state
        };
      case "ADD_LIKE":
        state.posts[action.payload.id].likes = action.payload.likes;
        return {
          ...state
        };
      case "DELETE_COMMENT":
        let newComments = state.posts[action.payload.postid].comments.filter((comment)=>comment.id !== action.payload.commentid);
        state.posts[action.payload.postid].comments = newComments
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
    // let test = [{
    //       id: 0,
    //       title: 'Post 1',
    //       image: 'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340',
    //       likes: 10,
    //       comments: [{
    //         user:'Gerardo',
    //         content:'I like your picture!',
    //         id: 0
    //       }]
    //     },{
    //       id: 1,
    //       title: 'Post 2',
    //       image: 'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340',
    //       likes: 15,
    //       comments: [{
    //         user:'Carlos',
    //         content:'I dont like your picture!',
    //         id: 0
    //       }]
    //     }
    // ]
    // this.setLocalStorage('posts',test);
    this.setState({posts: this.getLocalStorage('posts')})
  }
  componentDidUpdate() {
    done = false;
    this.setLocalStorage('posts',this.state.posts);
  }
  setLocalStorage = (key,value) => {
    let storeValue = JSON.stringify(value)
    localStorage.setItem(key,storeValue);
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