import styled from "styled-components";

export const Title = styled.p<{ theme: string }>`
  font-size: 2.5rem;
  text-align: center;
  text-decoration: underline 2px #5F9EA0;
  letter-spacing: 0.1rem;
  margin-top: 5px;
  font-weight: normal;
  color: ${({ theme }) => (theme === "light" ? "#808080" : "#e0e0e0")};
  font-family: "Brush Script MT", Brush Script Std, cursive;
  
  @media (max-width: 1100px) {
    font-size: 2rem;
  }
  
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;
