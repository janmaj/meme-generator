import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import theme from "../../theme//theme";

const Toolbar = styled.header`
  background-color: ${theme.colors.primary.main};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 1.5rem;
  margin: 0 30px;
  text-decoration: none;
  transition: all 0.2s ease;

  &.active {
    text-decoration: underline;
  }

  &:hover {
    color: #8d8d8d;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
    margin: 0 15px;
  }
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
      <Logo>Meme Generator</Logo>
      <Nav>
        <StyledNavLink to="/" exact>
          Create a new meme
        </StyledNavLink>
        <StyledNavLink to="/memes" exact>
          Browse
        </StyledNavLink>
      </Nav>
    </Toolbar>
  );
};

export default Navbar;
