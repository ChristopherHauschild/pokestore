import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: ${theme.common.spacings.medium};
    width: 100%;

    > span {
      font-size: ${theme.common.font.sizes.medium};

      ${media.lessThan('medium')`
        font-size: ${theme.common.font.sizes.small};
      `}
    }

    > svg {
      animation: rotate 2s linear infinite;
      height: 28px;
      margin-bottom: ${theme.common.spacings.xxsmall};
      width: 28px;

      @keyframes rotate {
        to {
          transform: rotate(360deg);
        }
      }

      ${media.lessThan('medium')`
        height: 22px;
        width: 22px;
      `}
    }
  `}
`;
