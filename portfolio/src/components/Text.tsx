import styled from "styled-components";

export const Text = styled.p<{ theme: string }>`
  font-size: 1.1rem;
  text-align: justify;
  margin-top: -20px;
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 25px;
  font-family: "Courier New", monospace;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#e0e0e0")};
  
  @media (max-width: 1100px) {
    font-size: 0.8rem;
    line-height: 25px;
  }
  
  @media (max-width: 700px) {
    font-size: 0.6rem;
  }
`;
