import styled from "styled-components";

export const SuccessMessage = styled.p<{ theme: string }>`
  color: ${({ theme }) => (theme === "dark" ? "#e0e0e0" : "#696969")};
  font-size: 0.8rem;
  width: 100%;
  text-align: center;
  font-family: DejaVu Sans Mono, monospace;
  transition: color 0.3s ease;
  
  @media (max-width: 530px) {
    font-size: 0.6rem;
  }
`;
