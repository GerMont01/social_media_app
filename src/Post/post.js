import React from "react";
import { Consumer } from "../context";

export default class Post extends React.Component {
  render() {
    return (
      <Consumer>
        {(value) => (
          <>
            <h1>This is Post</h1>
          </>
        )}
      </Consumer>
    );
  }
}