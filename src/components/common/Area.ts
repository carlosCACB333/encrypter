import styled from "styled-components";

export const Area = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  outline: none;
  font-size: 1.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => theme.spacing(2)};
  &::placeholder {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;
