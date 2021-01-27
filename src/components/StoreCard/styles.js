import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme, store }) => css`
    background-color: ${theme[store].colors.iprimary};
    border-radius: ${theme.common.border.radius.medium};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    overflow: hidden;
    width: 400px;

    > a {
      align-items: center;
      color: inherit;
      display: flex;
      padding: ${theme.common.spacings.xsmall};
      text-decoration: none;
    }

    ${media.lessThan('medium')`
      width: 90%;
    `}

    &:last-of-type {
      margin-left: ${theme.common.spacings.small};

      ${media.lessThan('900px')`
        margin-left: 0;
        margin-top: ${theme.common.spacings.small};
      `}
    }
  `}
`;

export const Picture = styled.picture`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100px;
    margin-right: ${theme.common.spacings.xsmall};
    padding: ${theme.common.spacings.xxxsmall};
    width: 100px;

    > img {
      height: 100%;
      object-fit: contain;
      width: 100%;
    }

    ${media.lessThan('900px')`
      height: 90px;
      width: 90px;
    `}
  `}
`;

export const StoreDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > strong {
      color: ${theme.common.colors.dark};
      font-size: ${theme.common.font.sizes.xlarge};

      ${media.lessThan('small')`
        font-size: ${theme.common.font.sizes.large};
      `}
    }

    > span {
      color: ${theme.common.colors.xgray};
      margin-top: ${theme.common.spacings.xxxsmall};

      ${media.lessThan('small')`
        font-size: ${theme.common.font.sizes.small};
      `}
    }
  `}
`;
