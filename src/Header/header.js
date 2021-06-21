import React from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import home from '../icons/home.svg';
import Add from '../icons/add.png';
import styled from 'styled-components';
const HeaderDiv = styled.header`
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content:space-between;
  width:100%;
  border-top: 1px solid rgb(225, 225, 208); 
  border-bottom: 1px solid rgb(225, 225, 208); 
`;
const Nav = styled.nav`
  display:flex;
  align-items:center;
`;
const Logo = styled.h1`
  font-size:30px;
  font-family:cursive;
  padding-right: 70px;
  margin: auto;
`;

export default class Header extends React.Component {
  render() {
    return (
      <Consumer>
       {(value) => (
          <>
          <HeaderDiv>
            <Logo>Social Media App</Logo>
            <Nav>
              <Link style={{margin: '15px'}} to="/"><img src={home} height="30px"/></Link>
              <Link style={{margin: '15px',marginTop:'21px'}} to="/post"><img src={Add} height="30px"/></Link>
            </Nav>
          </HeaderDiv>
          </>
        )}
      </Consumer>
    );
  }
}