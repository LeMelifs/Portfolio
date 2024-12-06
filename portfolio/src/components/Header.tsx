import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const HeaderContainer = styled.header<{ theme: string }>` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => (theme === "light" ? "#DCDCDC" : "#333")};
  border-bottom: 2px solid #d0d0d0;

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled(Link)<{ theme: string }>`
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  font-family: "Brush Script MT", Brush Script Std, cursive;
  color: ${({ theme }) => (theme === "light" ? "#808080" : "#e0e0e0")};
  text-decoration: none;
  margin: 0;
  transition: 0.3s color ease-in-out;

  &:hover {
    color: ${({ theme }) => (theme === "light" ? "#696969" : "#b0b0b0")};
  }

  @media (max-width: 647px) {
    font-size: 1.3rem; 
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 2.2rem;

  @media (max-width: 600px) {
    gap: 0.1rem;
    justify-content: center;
    row-gap: 0.3rem;
  }
`;

const StyledLink = styled(Link)<{ theme: string }>`
  color: ${({ theme }) => (theme === "light" ? "#808080" : "#e0e0e0")};
  font-family: DejaVu Sans Mono, monospace;
  font-weight: bold;
  transition: color 0.3s;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: ${({ theme }) => (theme === "light" ? "#696969" : "#b0b0b0")}; 
  }

  @media (max-width: 600px) {
    flex-basis: 45%;
    font-size: 0.8rem;
    text-align: center;
  }
`;


const ThemeSwitcher = styled(motion.div)<{ theme: string }>`
  width: 41px;
  height: 21px;
  border-radius: 15px;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
  display: flex;
  align-items: center;
  padding: 2px;
  position: relative;
  cursor: pointer;
  box-shadow: ${({ theme }) =>
    theme === "light" ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "0 2px 4px rgba(255, 255, 255, 0.1)"};
`;

const SwitchCircle = styled(motion.div)<{ theme: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => (theme === "light" ? "#808080" : "#e0e0e0")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 2px;
  left: ${({ theme }) => (theme === "light" ? "1px" : "23px")};
`;

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer theme={theme}>
      <Logo theme={theme} to={{ pathname: "/" }}>
        LeMelifs
      </Logo>
      <Nav>
        <StyledLink theme={theme} to={{ pathname: "/about" }}>
          Обо мне
        </StyledLink>
        <StyledLink theme={theme} to={{ pathname: "/contact" }}>
          Связь
        </StyledLink>
        <StyledLink theme={theme} to={{ pathname: "/projects" }}>
          Проекты
        </StyledLink>
        <StyledLink theme={theme} to={{ pathname: "/skills" }}>
          Навыки
        </StyledLink>
      </Nav>
      <ThemeSwitcher
        theme={theme}
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <SwitchCircle
          theme={theme}
          animate={{
            left: theme === "light" ? "2px" : "23px",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </ThemeSwitcher>
    </HeaderContainer>
  );
};
