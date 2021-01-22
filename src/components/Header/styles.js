import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.aqua.colors.primary};
    display: flex;
    padding: 0 ${theme.common.spacings.medium};
    width: 100%;

    ${media.lessThan('medium')`
      padding: 0 ${theme.common.spacings.small};
    `}

    ${media.lessThan('small')`
      padding: 0 ${theme.common.spacings.xsmall};
    `}
  `}
`;

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
      color: #ffffff;
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
    margin: 0 ${theme.common.spacings.medium};
    padding: ${theme.common.spacings.xxxsmall};

    > input {
      color: ${theme.common.colors.gray};
      border: 0;
      border-radius: ${theme.common.border.radius.small};
      outline: 0;
      padding: 0 ${theme.common.spacings.xxsmall};
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

    > svg {
      color: ${theme.aqua.colors.primary};
      height: 24px;
      width: 24px;
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

    > svg {
      color: #ffffff;
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
