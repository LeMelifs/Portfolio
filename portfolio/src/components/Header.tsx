import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  border-radius: 5px;
  background-color: #DCDCDC;
  border-bottom: 2px solid #d0d0d0;
  color: #fff;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  font-family: Brush Script MT, Brush Script Std, cursive;
  color: #808080;
  text-decoration: none;
  margin: 0;
  
  &:hover {
    color: #696969;
  }
`;


const Nav = styled.nav`
  display: flex;
  gap: 2.2rem;
`;


const StyledLink = styled(Link)`
  color: #808080;
  font-family: DejaVu Sans Mono, monospace;
  font-weight: bold;
  transition: color 0.3s;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #696969;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo to={{ pathname: "/" }}>LeMelifs</Logo>
      <Nav>
        <StyledLink to={{ pathname: "/about" }}>Обо мне</StyledLink>
        <StyledLink to={{ pathname: "/contact" }}>Обратная связь</StyledLink>
        <StyledLink to={{ pathname: "/projects" }}>Проекты</StyledLink>
        <StyledLink to={{ pathname: "/skills" }}>Навыки</StyledLink>
      </Nav>
    </HeaderContainer>
  );
};


export default Header;