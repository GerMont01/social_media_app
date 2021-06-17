import React from "react";
import { Consumer } from "../context";

export default class Post extends React.Component {
//   deleteUser = (id, dispatch) => {
//     dispatch({ type: "DELETE_CONTACT", payload: id });
//   };7

state = {
  url:"",
  title:""
}

onChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onSubmit = (dispatch, e) => {
  e.preventDefault();
  const { url, title } = this.state;
  const newPost = {
    url,
    title
  };
  dispatch({ type: "NEW_POST", payload: newPost });
};

 readURL(e){
   var file = document.getElementById("files").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
        localStorage.setItem('background',reader.result);      
   }
   if(file){
        reader.readAsDataURL(file);
    }else{
    }
}


  render() {
    return (
      <Consumer>
        {(value) => (
          <>
            <h1>Post New Picture</h1>
            <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
            <input
                  type="text"
                  value={this.state.title}
                  name="title"
                  placeholder=" Enter your name... "
                  onChange={this.onChange}
                />
            <h4>Select pictures to upload</h4>
            
            <input type="file" id="files" 
            onChange={(e) => this.readURL(e)}
            />
            <div id="list">
            {/* {URIScheme && (
                <img
                  className="thumb"
                  src={URIScheme}
                  style={{ width: "600px" }}
                />
              )} */}
            </div>
            <input type="submit" value="Add Contact" />
            </form>
            <p>{value.posts}</p>
          </>
        )}
      </Consumer>
    );
  }
}