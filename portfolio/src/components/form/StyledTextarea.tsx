import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  width: 80%;
  padding: 12px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
  font-family: DejaVu Sans Mono, monospace;
  resize: vertical;
  transition: all 0.3s ease;
  min-height: 200px;
  text-align: justify;
  
  &:focus {
    outline: none;
    border-color: #5F9EA0;
  }
`;