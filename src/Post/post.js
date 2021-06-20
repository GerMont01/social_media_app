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
  dispatch({ type: "NEW_POST", payload: this.state });
  // localStorage.setItem('newPost', JSON.stringify(newPost)); //this is a object. He needs to convert to json when he fetch the data from local storage
};

 readURL(e){
   var file = document.getElementById("files").files[0];
   var reader = new FileReader();
   reader.onloadend = () => {
        this.setState({url: reader.result})
        // localStorage.setItem('post',reader.result);  // save title to tttle, url to url and when you click "Post", save to the state in local storage    
   }
   if(file){
        reader.readAsDataURL(file);
  }
}


  render() {
    return (
      <Consumer>
        {(value) => (
          <>
          <h1>Post New Picture</h1>
          <div className="postContainer">
          
            <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>

            <div className="imgContainer">
               <h4>Select pictures to upload</h4>
               <input type="file" id="files" 
               onChange={(e) => this.readURL(e)}
               />
               {/* <label for="file" >choose a file</label> */}
            </div>

            <div className="cp_iptxt titleContainer">
               <input className="ef"
                   type="text"
                   value={this.state.title}
                   name="title"
                   placeholder=""
                   onChange={this.onChange}
                 />
                 <label>Title</label>
                 <span className="focus_line"></span>
                 <br/>
               <input className="postButton" type="submit" value="POST" />
            </div>
            
            {/* <div id="list">
            {URIScheme && (
                <img
                  className="thumb"
                  src={URIScheme}
                  style={{ width: "600px" }}
                />
              )}
            </div> */}
            
            </form>
            {/* <p>{value.posts}</p> */}
            </div>
          </>
        )}
      </Consumer>
    );
  }
}