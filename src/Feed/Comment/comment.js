import React from "react";
import { Consumer } from "../../context";
import Close from "../../icons/x.svg";


export default class Comment extends React.Component {
    deleteComment = (postid,commentid,dispatch) => {
        alert('deleted')
        dispatch({ type: "DELETE_COMMENT", payload: {postid,commentid} });
        };
    render() {
        return (
            <Consumer>
                {(value) => (
                    <>
                    {value.posts[this.props.id].comments.map((comment)=>
                        <div key={comment.id} id={comment.id}>
                            <h5>{comment.user}</h5>
                            <p>{comment.content}</p>
                            <img src={Close} onClick={()=>this.deleteComment(this.props.id,comment.id,value.dispatch)}/>
                        </div>
                    )}
                    </>
                )}
            </Consumer>
        )}
}