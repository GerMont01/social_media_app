import React from "react";
import { Consumer } from "../context";


export default class Post extends React.Component {

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
  alert("You posted ")
  dispatch({ type: "NEW_POST", payload: this.state });
};

 readURL(){
   const file = document.getElementById("files").files[0];
   const reader = new FileReader();
   reader.onloadend = () => {
        this.setState({url: reader.result})
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
          
            <form className="postContainer" onSubmit={this.onSubmit.bind(this, value.dispatch)}>

            <div className="imgContainer">
               <h4>Select pictures to upload</h4>
               <p>{this.state.title}</p>
            <img src={this.state.url}
                    style={{ width:"300px" }}/>
                    <br/>
               <input type="file" id="files" 
               onChange={() => this.readURL()}
               />
            </div>

            <div className="cp_iptxt titleContainer">
              <div>
               <input className="ef"
                   type="text"
                   value={this.state.title}
                   name="title"
                   placeholder=""
                   onChange={this.onChange}
                 />
                 <label>Title</label>
                 <span className="focus_line"></span>
                 </div>
                 <div>
               <input className="postButton" type="submit" value="POST" />
               </div>
            </div>
            </form>
            </div>
          </>
        )}
      </Consumer>
    );
  }
}