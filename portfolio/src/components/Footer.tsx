import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk, faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../context/ThemeContext";

const FooterContainer = styled.footer<{ theme: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  background-color: ${({ theme }) => (theme === "light" ? "#DCDCDC" : "#333")};
  border-top: 2px solid ${({ theme }) => (theme === "light" ? "#d0d0d0" : "#444")};
  border-radius: 5px 5px 0 0;
  color: ${({ theme }) => (theme === "light" ? "#808080" : "#e0e0e0")};
`;

const FooterText = styled.p<{ theme: string }>`
  font-size: 1rem;
  font-family: DejaVu Sans Mono, monospace;
  color: ${({ theme }) => (theme === "light" ? "#808080" : "#e0e0e0")};
  margin: 0;
  font-weight: bold;
`;

const IconLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const IconLink = styled.a<{ theme: string }>`
  color: ${({ theme }) => (theme === "light" ? "#808080" : "#e0e0e0")};
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => (theme === "light" ? "#696969" : "#b0b0b0")};
  }
`;

export const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FooterContainer theme={theme}>
      <FooterText theme={theme}>© 2024 LeMelifs</FooterText>
      <IconLinks>
        <IconLink
          theme={theme}
          href="https://vk.com/sweetcoffeewithmilk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="VK"
        >
          <FontAwesomeIcon icon={faVk} />
        </IconLink>
        <IconLink
          theme={theme}
          href="https://t.me/savemefrominsomnia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <FontAwesomeIcon icon={faTelegram} />
        </IconLink>
        <IconLink
          theme={theme}
          href="https://github.com/LeMelifs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </IconLink>
      </IconLinks>
    </FooterContainer>
  );
};
