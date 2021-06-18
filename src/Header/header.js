import React from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import home from '../icons/home.svg'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";

export default class Header extends React.Component {
  render() {
    return (
      <Consumer>
       {(value) => (
          <>
            <Link to="/"><img src={home} height="30px"/></Link>
            <Link to="/post">Post</Link>
          </>
        )}
      </Consumer>
    );
  }
}