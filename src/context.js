import React from "react";

const Context = React.createContext();
export const Consumer = Context.Consumer;

const reducer = (state, action) => {
    switch (action.type) {
      case "":
        return {
          ...state
        };
      case "":
        return {
          ...state
        };
      default:
        return state;
    }
  };
  
  export class Provider extends React.Component {
    state = {
      posts: 'hi',
      dispatch: (action) => {
        this.setState((state) => reducer(state, action));
      }
    };
render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}