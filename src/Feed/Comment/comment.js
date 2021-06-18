import React from "react";
import { Consumer } from "../../context";

export default class Comment extends React.Component {
  render() {
    return (
        <Consumer>
            {(value) => (
                <>
                {value.posts[this.props.id].comments.map((comment)=>
                    <div>
                        <h5>{comment.user}</h5>
                        <p>{comment.content}</p>
                    </div>
                )}
                </>
            )}
        </Consumer>
    )}
}