import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.common.border.color};
    display: flex;
    margin-bottom: ${theme.common.spacings.small};
    padding-bottom: ${theme.common.spacings.xxsmall};
    width: 100%;

    > h2 {
      color: ${theme.common.colors.dark};
      font-size: ${theme.common.font.sizes.xlarge};

      ${media.lessThan('medium')`
        font-size: ${theme.common.font.sizes.large};
      `}

      ${media.lessThan('small')`
        font-size: ${theme.common.font.sizes.medium};
      `}
    }
  `}
`;
