import * as React from "react";
import styled from "styled-components";

const Toolbar = styled.header`
  background-color: #00243f;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-family: "Impact";
  font-size: 4rem;
  color: #cfcfcf;
  @media (max-width: 960px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
  @media (max-width: 450px) {
    font-size: 2rem;
  }
`;

const Navbar = () => {
  return (
    <Toolbar>
      <Logo>MayMay Generator !!!1!!11</Logo>
    </Toolbar>
  );
};

export default Navbar;
