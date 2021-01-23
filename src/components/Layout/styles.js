import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const MainContent = styled.main`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 1280px;
    padding: ${theme.common.spacings.medium} 0;
    width: 100%;
  `}
`;
