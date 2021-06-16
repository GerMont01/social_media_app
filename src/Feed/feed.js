import React from "react";
import { Consumer } from "../context";

export default class Feed extends React.Component {
//   deleteUser = (id, dispatch) => {
//     dispatch({ type: "DELETE_CONTACT", payload: id });
//   };
  render() {
    return (
      <Consumer>
        {(value) => (
          <>
          <h1>This is Feed</h1>
            <p>{value.posts}</p>
          </>
        )}
      </Consumer>
    );
  }
}
