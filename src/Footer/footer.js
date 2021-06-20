import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 60px;
  width: 100%;
  border-top: 1px solid rgb(225, 225, 208); 
  border-bottom: 1px solid rgb(225, 225, 208);
`;

export default class Footer extends React.Component {
  render() {
    return (
      <FooterDiv>
        <h5>© Gerardo Montero &amp; Sae Mikado</h5>
      </FooterDiv>     
    );
  }
}