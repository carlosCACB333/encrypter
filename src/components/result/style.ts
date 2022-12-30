import styled from "styled-components";

export const ResultStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: ${({ theme }) => theme.spacing(2)};
  box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.08);
`;
