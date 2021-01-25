/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const MainHeader = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    height: 60px;
    margin: 0 auto;
    max-width: 1280px;
    padding: ${theme.common.spacings.xxsmall} 0;
    width: 100%;

    ${media.lessThan('medium')`
      align-items: initial;
      flex-direction: column;
      height: 92px;
    `}
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;

    > h1 {
      font-size: ${theme.common.font.sizes.xxxlarge};

      ${media.lessThan('medium')`
        font-size: ${theme.common.font.sizes.xxlarge};
      `}
    }
  `}
`;

export const Search = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border-radius: ${theme.common.border.radius.small};
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    flex: 1;
    height: 34px;
    margin: 0 ${theme.common.spacings.medium};
    max-height: 34px;
    padding-bottom: ${theme.common.spacings.xxxsmall};
    padding-left: ${theme.common.spacings.xxxsmall};
    padding-top: ${theme.common.spacings.xxxsmall};

    > input {
      color: ${theme.common.colors.gray};
      border: none;
      border-radius: ${theme.common.border.radius.small};
      outline: 0;
      overflow: hidden;
      padding: 0 ${theme.common.spacings.xxsmall};
      text-overflow: ellipsis;
      width: 100%;

      ::-webkit-input-placeholder {
        color: ${theme.common.colors.xgray};
      }

      :-moz-placeholder {
        color: ${theme.common.colors.xgray};
      }

      ::-moz-placeholder {
        color: ${theme.common.colors.xgray};
      }

      :-ms-input-placeholder {
        color: ${theme.common.colors.xgray};
      }

      ${media.lessThan('medium')`
        font-size: ${theme.common.font.sizes.small};
      `}
    }

    > div {
      align-items: center;
      border-bottom-right-radius: ${theme.common.border.radius.small};
      border-top-right-radius: ${theme.common.border.radius.small};
      display: flex;
      height: 34px;
      justify-content: center;
      max-height: 34px;
      padding: 0 ${theme.common.spacings.xxxsmall};

      > svg {
        height: 24px;
        width: 24px;
      }
    }

    ${media.lessThan('medium')`
      margin: ${theme.common.spacings.xxsmall} 0 0;
    `}
  `}
`;

export const ButtonCart = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    position: relative;

    > svg {
      height: 34px;
      width: 34px;
    }

    ${media.lessThan('medium')`
      background-color: ${theme.common.colors.light};
      border-radius: 50%;
      box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
      height: 60px;
      position: fixed;
      right: ${theme.common.spacings.xsmall};
      top: 88vh;
      width: 60px;
    `}

    &:hover {
      opacity: 0.8;
    }
  `}
`;


export const Sinalizer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 12px;
    justify-content: center;
    padding: ${theme.common.spacings.xxsmall};
    position: absolute;
    right: -2px;
    top: 2px;
    width: 12px;

    > span {
      font-size: ${theme.common.font.sizes.xsmall};
    }

    ${media.lessThan('medium')`
      right: 12px;
      top: 16px;
    `}
  `}
`;

export const Wrapper = styled.header`
  ${({ theme, store }) => css`
    background-color: ${store === 'water' ? theme.water.colors.primary : theme.fire.colors.iprimary};
    box-shadow: 0 2px 2px -2px ${theme.common.border.color};
    display: flex;
    padding: 0 ${theme.common.spacings.medium};
    position: relative;
    width: 100%;

    ${media.lessThan('medium')`
      padding: 0 ${theme.common.spacings.small};
    `}

    ${media.lessThan('small')`
      padding: 0 ${theme.common.spacings.xsmall};
    `}

    ${Title} {
      > h1 {
        color: ${store === 'water' ? '#ffffff' : theme.fire.colors.primary};
      }
    }

    ${Search} {
      border: ${store === 'water' ? 'none' : `1px solid ${theme.common.border.color}`};

      > div {
        background-color: ${store === 'water' ? '#ffffff' : theme.fire.colors.primary};

        > svg {
          color:${store === 'water' ?  theme.water.colors.primary : '#ffffff'};
        }
      }
    }

    ${ButtonCart} {
      > svg {
        color: ${store === 'water' ? '#ffffff' : theme.fire.colors.primary};

        ${media.lessThan('medium')`
          color: ${theme.common.colors.gray};
        `}
      }

      > ${Sinalizer} {
        background-color: ${store === 'water' ? theme.fire.colors.primary : '#ffffff'};

        > span {
          color: ${store === 'water' ? '#ffffff' : theme.fire.colors.primary};
        }

        ${media.lessThan('medium')`
          background-color: ${theme.fire.colors.primary};

          > span {
            color: #ffffff;
          }
        `}
      }
    }
  `}
`;
