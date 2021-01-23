import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${theme.common.spacings.xxsmall} 0;
    width: 100%;

    > span {
      font-size: ${theme.common.font.sizes.medium};

      ${media.lessThan('medium')`
        font-size: ${theme.common.font.sizes.small};
      `}
    }

    > svg {
      height: 28px;
      margin-bottom: ${theme.common.spacings.xxsmall};
      width: 28px;

      ${media.lessThan('medium')`
        height: 22px;
        width: 22px;
      `}
    }
  `}
`;
