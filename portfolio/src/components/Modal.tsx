import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)<{ background?: string; theme: string }>`
  background-color: ${({ theme, background }) =>
    background || (theme === "light" ? "#DCDCDC" : "#333")};
  padding: 20px;
  border-radius: 10px;
  min-width: 450px;
  max-width: 600px;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  
  @media (max-width: 530px) {
    min-width: 280px;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#fff")};
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  background?: string;
}

export const Modal: React.FC<ModalProps> = ({ onClose, children, background }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <ModalContent
        theme={theme}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        background={background}
      >
        <ModalCloseButton theme={theme} onClick={onClose}>
          &times;
        </ModalCloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
