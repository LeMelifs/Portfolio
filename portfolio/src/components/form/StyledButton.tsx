import styled from "styled-components";

const StyledButton = styled.button`
  width: 30%;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 18px;
  background-color: #5F9EA0;
  border: solid white 2px;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 1.8rem;
  font-weight: normal;
  letter-spacing: 0.1rem;
  font-family: Brush Script MT, Brush Script Std, cursive;

  &:hover {
    background-color: #008B8B;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default StyledButton;