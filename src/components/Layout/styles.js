import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  height: 100%;
`;

export const MainContent = styled.main`
  ${({ theme }) => css`
    min-height: calc(100% - 100px);
    padding: ${theme.common.spacings.small} ${theme.common.spacings.medium};
    width: 100%;

    ${media.lessThan('medium')`
      min-height: calc(100% - 132px);
      padding: ${theme.common.spacings.small};
    `}

    ${media.lessThan('small')`
      padding: ${theme.common.spacings.small} ${theme.common.spacings.xsmall};
    `}

    > div {
      margin: 0 auto;
      max-width: 1280px;
      width: 100%;
    }
  `}
`;
