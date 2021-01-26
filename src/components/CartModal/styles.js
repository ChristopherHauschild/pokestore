/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const ButtonClose = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;
    position: absolute;
    right: 12px;
    top: 12px;

    > svg {
      color: ${theme.common.colors.dark};
      height: 28px;
      width: 28px;

      ${media.lessThan('medium')`
        height: 26px;
        width: 26px;
      `}
    }

    &:hover {
      opacity: 0.6;
    }
  `}
`;

export const ModalTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.common.colors.dark};

    ${media.lessThan('medium')`
      font-size: ${theme.common.font.sizes.xlarge};
    `}
  `}
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const TotalPrice = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${theme.common.spacings.small};

    > strong {
      color: ${theme.common.colors.dark};
      font-size: ${theme.common.font.sizes.xxlarge};

      ${media.lessThan('medium')`
        font-size: ${theme.common.font.sizes.xlarge};
      `}

      ${media.lessThan('small')`
        font-size: ${theme.common.font.sizes.large};
      `}
    }
  `}
`

export const ButtonFinish = styled.button`
  ${({ theme, disabled }) => css`
    align-items: center;
    border: none;
    border-radius: ${theme.common.border.radius.small};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    display: flex;
    justify-content: center;
    opacity: ${disabled ? 0.3 : '1'};
    padding: ${theme.common.spacings.xxsmall} 0;
    width: 100%;

    > strong {
      font-size: ${theme.common.font.sizes.xxlarge};

      ${media.lessThan('medium')`
        font-size: ${theme.common.font.sizes.xlarge};
      `}

      ${media.lessThan('small')`
        font-size: ${theme.common.font.sizes.large};
      `}
    }

    &:hover {
      opacity: ${disabled ? 0.3 : 0.6};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme, store, show }) => css`
    background-color: rgba(0, 0, 0, 0.22);
    display: ${show ? 'flex' : 'none'};
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 998;

    > div {
      background-color: #ffffff;
      border-radius: ${theme.common.border.radius.medium};
      box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 6px, rgba(0, 0, 0, 0.22) 0px 4px 6px;
      display: flex;
      flex-direction: column;
      margin: auto;
      max-height: 90vh;
      min-height: 600px;
      overflow-y: scroll;
      padding: ${theme.common.spacings.small};
      position: relative;
      width: 600px;

      ${media.lessThan('medium')`
        min-height: 400px;
        padding: ${theme.common.spacings.xsmall};
        width: 400px;
      `}

      ${media.lessThan('small')`
        width: 80%;
      `}

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: ${theme.common.border.radius.medium};
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
        background-color: ${theme.common.border.color};
      }
    }

    ${ButtonFinish} {
      background-color: ${store === 'water' ? theme.water.colors.primary : '#ffffff'};
      border: ${store === 'water' ? 'none' : `1px solid ${theme.fire.colors.primary}`};

      > strong {
        color: ${store === 'water' ? '#ffffff' : theme.fire.colors.primary};
      }
    }
  `}
`;
