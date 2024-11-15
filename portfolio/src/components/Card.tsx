import styled from "styled-components";


const Card = styled.div<{ width?: string }>`
  height: auto;
  border-radius: 20px;
  width: ${({ width }) => width || '60vw'};;
  background-color: #DCDCDC;
  display: flex;
  border: 2px solid #d0d0d0;
  flex-direction: column;
  padding: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
`

export default Card;