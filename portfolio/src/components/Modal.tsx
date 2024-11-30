import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div<{ background?: string }>`
  background-color: ${({ background }) => background || "#fff"};
  padding: 20px;
  border-radius: 10px;
  min-width: 450px;
  max-width: 600px;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #333;
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
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} background={background}>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
