/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const MainHeader = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    margin: 0 auto;
    max-width: 1280px;
    padding: ${theme.common.spacings.xxsmall} 0;
    width: 100%;

    ${media.lessThan('medium')`
      align-items: initial;
      flex-direction: column;
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

export const Cart = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;

    > svg {
      height: 32px;
      width: 32px;
    }

    ${media.lessThan('medium')`
      background-color: ${theme.common.colors.light};
      border-radius: 50%;
      bottom: ${theme.common.spacings.xsmall};
      box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
      height: 60px;
      position: absolute;
      right: ${theme.common.spacings.xsmall};
      width: 60px;

      > svg {
        color: ${theme.common.colors.gray};
      }
    `}
  `}
`;


export const Sinalizer = styled.div`
  border-radius: 50%;
  height: 11.5px;
  position: absolute;
  right: -2px;
  top: 2px;
  width: 11.5px;

  ${media.lessThan('medium')`
    right: 12px;
    top: 16px;
  `}
`;

export const Wrapper = styled.header`
  ${({ theme, store }) => css`
    background-color: ${store === 'aqua' ? theme.aqua.colors.primary : theme.fire.colors.iprimary};
    box-shadow: 0 4px 2px -2px ${theme.common.colors.light};
    display: flex;
    padding: 0 ${theme.common.spacings.medium};
    width: 100%;

    ${media.lessThan('medium')`
      padding: 0 ${theme.common.spacings.small};
    `}

    ${media.lessThan('small')`
      padding: 0 ${theme.common.spacings.xsmall};
    `}

    ${Title} {
      > h1 {
        color: ${store === 'aqua' ? '#ffffff' : theme.fire.colors.primary};
      }
    }

    ${Search} {
      border: ${store === 'aqua' ? 'none' : `1px solid ${theme.common.border.color}`};

      > div {
        background-color: ${store === 'aqua' ? '#ffffff' : theme.fire.colors.primary};

        > svg {
          color:${store === 'aqua' ?  theme.aqua.colors.primary : '#ffffff'};
        }
      }
    }

    ${Cart} {
      > svg {
        color: ${store === 'aqua' ?  '#ffffff' : theme.fire.colors.primary};
      }

      > ${Sinalizer} {
        background-color: ${store === 'aqua' ? theme.fire.colors.primary : '#ffffff'};
      }
    }
  `}
`;
