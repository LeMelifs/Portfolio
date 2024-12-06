import styled from "styled-components";

export const StyledInput = styled.input<{ theme: string }>`
  width: 80%;
  padding: 12px;
  border: 1px solid ${({ theme }) => (theme === "dark" ? "#444" : "#d0d0d0")};
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
  font-family: DejaVu Sans Mono, monospace;
  background-color: ${({ theme }) => (theme === "dark" ? "#222" : "#fff")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #5f9ea0;
  }
  
  @media(max-width: 700px) {
    font-size: 0.8rem;
  }
`;
