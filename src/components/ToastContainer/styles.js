import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    padding: ${theme.common.spacings.medium};
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;

    ${media.lessThan('600px')`
      right: 50%;
      transform: translateX(50%);
    `}
  `}
`;
