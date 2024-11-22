import styled from "styled-components";

const StyledInput = styled.input`
  width: 80%;
  padding: 12px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
  font-family: DejaVu Sans Mono, monospace;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #5F9EA0;
  }
`;

export default StyledInput;