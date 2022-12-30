import styled from "styled-components";

export const AppStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  justify-content: space-between;
  padding: ${({ theme: { spacing } }) => spacing(2)};
  gap: ${({ theme: { spacing } }) => spacing(2)};
  background-color: ${({ theme: { palette } }) => palette.background.default};

  & * {
    font-family: ${({ theme: { fontFamilies } }) =>
      fontFamilies[0] + ", " + fontFamilies[1]};
  }
`;
