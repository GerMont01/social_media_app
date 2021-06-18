import React from "react";
import { Consumer } from "../context";

export default class Footer extends React.Component {
//   deleteUser = (id, dispatch) => {
//     dispatch({ type: "DELETE_CONTACT", payload: id });
//   };
  render() {
    return (
      <Consumer>
        {(value) => (
          <>
          <h1>This is Footer</h1>
          </>
        )}
      </Consumer>
    );
  }
}