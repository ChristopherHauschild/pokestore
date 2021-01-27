import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.common.colors.light};
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${theme.common.spacings.medium};
    width: 100%;

    > a {
      color: ${theme.common.colors.xgray};
      font-size: ${theme.common.font.sizes.large};
      margin-top: ${theme.common.spacings.medium};
      text-align: center;
      text-decoration: none;

      ${media.lessThan('medium')`
        font-size: ${theme.common.font.sizes.medium};
      `}
    }
  `}
`;

export const PageHeader = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    > div {
      align-items: center;
      display: flex;
      justify-content: center;
      width: 100%;

      > h1 {
        color: ${theme.common.colors.dark};
        line-height: 34px;
        text-align: center;

        ${media.lessThan('medium')`
          font-size: ${theme.common.font.sizes.xxlarge};
        `}
      }

      ${media.lessThan('medium')`
        flex-direction: column;
      `}
    }

    > strong {
      color: ${theme.common.colors.xgray};
      font-size: ${theme.common.font.sizes.large};
      margin-top: ${theme.common.spacings.xxxsmall};

      ${media.lessThan('medium')`
        font-size: ${theme.common.font.sizes.medium};
      `}
    }
  `}
`;

export const Picture = styled.picture`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: center;
    margin-right: ${theme.common.spacings.small};
    width: 50px;

    > img {
      height: 100%;
      object-fit: contain;
      width: 100%;
    }

    ${media.lessThan('medium')`
      margin-bottom: ${theme.common.spacings.xxsmall};
      margin-right: 0;
    `}
  `}
`;

export const StoreList = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.common.spacings.large};

    ${media.lessThan('900px')`
      flex-direction: column;
    `}
  `}
`;
