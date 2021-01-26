import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const List = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    margin: -${theme.common.spacings.xsmall};

    ${media.lessThan('medium')`
      justify-content: center;
    `}
  `}
`;
