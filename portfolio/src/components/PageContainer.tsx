import styled from "styled-components";

export const PageContainer = styled.div<{ theme: string }>`
  display: flex;
  min-height: 90vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => (theme === "light" ? "#FFFFFF" : "#262626")};
  color: ${({ theme }) => (theme === "light" ? "#333333" : "#FFFFFF")};
  transition: background-color 0.3s, color 0.3s;
`;
