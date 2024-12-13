import styled from "styled-components";

export const Card = styled.div<{ theme: string; width?: string }>`
  height: auto;
  border-radius: 20px;
  width: ${({ width }) => width || "60vw"};
  background-color: ${({ theme }) => (theme === "light" ? "#DCDCDC" : "#333")};
  display: flex;
  border: 2px solid ${({ theme }) => (theme === "light" ? "#d0d0d0" : "#555")};
  flex-direction: column;
  padding: 10px;
  box-shadow: ${({ theme }) =>
    theme === "light"
      ? "2px 2px 8px rgba(0, 0, 0, 0.1)"
      : "2px 2px 8px rgba(255, 255, 255, 0.1)"};
  
  @media (max-width: 1100px) {
    width: 600px;
  }
  
  @media(max-width: 700px) {
    width: 450px;
    padding: 5px;
  }
  
  @media(max-width: 530px) {
    width: 300px;
  }
`;
