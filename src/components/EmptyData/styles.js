/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme, type }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${type === 'empty-cart' ? 'auto' : `${theme.common.spacings.xxsmall} 0`};
    width: 100%;

    > span {
      font-size: ${type === 'empty-cart' ? theme.common.font.sizes.xxlarge : theme.common.font.sizes.medium};

      ${media.lessThan('medium')`
        font-size: ${type === 'empty-cart' ? theme.common.font.sizes.large : theme.common.font.sizes.small};
      `}
    }

    > svg {
      height: ${type === 'empty-cart' ? '38px' : '28px'};
      margin-bottom: ${theme.common.spacings.xxsmall};
      width: ${type === 'empty-cart' ? '38px' : '28px'};

      ${media.lessThan('medium')`
        height: ${type === 'empty-cart' ? '32px' : '22px'};
        width: ${type === 'empty-cart' ? '32px' : '22px'};
      `}
    }
  `}
`;
