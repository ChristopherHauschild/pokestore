import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)`
  ${({ theme, type }) => css`
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    color: ${theme.common.colors[type]};
    display: flex;
    padding: 16px 30px 16px 16px;
    position: relative;
    width: 360px;

    & + div {
      margin-top: ${theme.common.spacings.xxsmall};
    }

    > svg {
      height: 24px;
      margin: 4px 12px 0 0;
      width: 24px;

      ${media.lessThan('600px')`
        height: 18px;
        margin: 4px 10px 0 0;
        width: 18px;
      `}
    }

    div {
      flex: 1;

      > strong {
        font-size: ${theme.common.font.sizes.medium};

        ${media.lessThan('600px')`
          font-size: ${theme.common.font.sizes.small};
        `}
      }

      > p {
        font-size: ${theme.common.font.sizes.small};
        margin-top: ${theme.common.spacings.xxxsmall};
        opacity: 0.8;
        line-height: 20px;

        ${media.lessThan('600px')`
          font-size: ${theme.common.font.sizes.xsmall};
        `}
      }
    }

    ${media.lessThan('600px')`
      width: 330px;
    `}
  `}
`;

export const ButtonClose = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;
    position: absolute;
    right: 16px;
    top: 18px;

    > svg {
      color: ${theme.common.colors.dark};
    }

    &:hover {
      opacity: 0.6;
    }
  `}
`;
