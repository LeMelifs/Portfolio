import styled from "styled-components";

export const Subtitle = styled.p<{ theme: string }>`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  margin-top: -10px;
  margin-bottom: 25px;
  margin-left: 15px;
  font-weight: normal;
  color: ${({ theme }) => (theme === "light" ? "#808080" : "#e0e0e0")};
  font-family: "Brush Script MT", Brush Script Std, cursive;
  
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;
