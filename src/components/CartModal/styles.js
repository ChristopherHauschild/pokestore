/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme, show }) => css`
    background-color: transparent;
    display: ${show ? 'flex' : 'none'};
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;

    > div {
      background-color: #ffffff;
      border-radius: ${theme.common.border.radius.medium};
      box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 6px, rgba(0, 0, 0, 0.22) 0px 4px 6px;
      margin: auto;
      height: 600px;
      position: relative;
      width: 60%;

      ${media.lessThan('medium')`
        height: 400px;
        width: 80%;
      `}
    }
  `}
`;

export const ButtonClose = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;

    > svg {
      color: ${theme.common.colors.dark};
    }
  `}
`;
