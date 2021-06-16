import React from "react";
import { Consumer } from "../context";

export default class Post extends React.Component {
//   deleteUser = (id, dispatch) => {
//     dispatch({ type: "DELETE_CONTACT", payload: id });
//   };
  render() {
    return (
      <Consumer>
        {(value) => (
          <>
            <h1>This is Post</h1>
            <p>{value.posts}</p>
          </>
        )}
      </Consumer>
    );
  }
}