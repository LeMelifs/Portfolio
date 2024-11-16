import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk, faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  background-color: #DCDCDC;
  border-top: 2px solid #d0d0d0;
  border-radius: 5px 5px 0 0;
  color: #808080;
`;

const FooterText = styled.p`
  font-size: 1rem;
  font-family: DejaVu Sans Mono, monospace;
  color: #808080;
  margin: 0;
  font-weight: bold;
`;

const IconLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const IconLink = styled.a`
  color: #808080;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #696969;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 LeMelifs</FooterText>
      <IconLinks>
        <IconLink href="https://vk.com/sweetcoffeewithmilk" target="_blank" rel="noopener noreferrer" aria-label="VK">
          <FontAwesomeIcon icon={faVk} />
        </IconLink>
        <IconLink href="https://t.me/savemefrominsomnia" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FontAwesomeIcon icon={faTelegram} />
        </IconLink>
        <IconLink href="https://github.com/LeMelifs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </IconLink>
      </IconLinks>
    </FooterContainer>
  );
};

export default Footer;
