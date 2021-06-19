import React from "react";
import { Consumer } from "../../context";
import Close from "../../icons/x.svg";
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  border-top: 1px solid rgb(225, 225, 208);
  border-bottom: 1px solid rgb(225, 225, 208); 
  margin: 0;
  align-items: center;
  justify-content: space-between;
`;


export default class Comment extends React.Component {
    deleteComment = (postid,commentid,dispatch) => {
        dispatch({ type: "DELETE_COMMENT", payload: {postid,commentid} });
        };
    render() {
        return (
            <Consumer>
                {(value) => (
                    <>
                    {this.props.post.comments.map((comment)=>
                        <Div key={comment.id} id={comment.id}>
                            <div style={{display: 'flex',alignItems:'center'}}>
                                <h5 style={{marginRight:'5px'}}>{comment.user}</h5>
                                <p>{comment.content}</p>
                            </div>
                            <img src={Close} onClick={()=>this.deleteComment(this.props.post.id,comment.id,value.dispatch)}/>
                        </Div>
                    )}
                    </>
                )}
            </Consumer>
        )}
}