/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Picture = styled.picture`
  align-items: center;
  display: flex;
  height: 220px;
  width: 100%;
`;

export const Name = styled.span`
  ${({ theme }) => css`
    color: ${theme.common.colors.xgray};
    display: -webkit-box;
    font-size: ${theme.common.font.sizes.medium};
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `}
`;

export const Price = styled.strong`
  ${({ theme }) => css`
    color: ${theme.common.colors.dark};
    font-size: ${theme.common.font.sizes.xlarge};
    margin-top: ${theme.common.spacings.xxsmall};
  `}
`;

export const Plots = styled.span`
  ${({ theme }) => css`
    color: ${theme.common.colors.xgray};
    font-size: ${theme.common.font.sizes.small};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    align-items: center;
    border-radius: ${theme.common.border.radius.small};
    display: flex;
    justify-content: center;
    margin-top: ${theme.common.spacings.xsmall};
    padding: ${theme.common.spacings.xxxsmall} 0;

    > svg {
      margin-right: ${theme.common.spacings.xxxsmall};
    }

    > span {
      font-weight: ${theme.common.font.medium};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme, store }) => css`
    width: 25%;

    ${media.lessThan('1280px')`
      width: 33.3%;
    `}

    ${media.lessThan('900px')`
      width: 50%;
    `}

    ${media.lessThan('600px')`
      width: 100%;
    `}

    > div {
      background-color: #ffffff;
      border-radius: ${theme.common.border.radius.small};
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      flex-direction: column;
      display: flex;
      margin: ${theme.common.spacings.xsmall};
      padding: ${theme.common.spacings.xsmall};
    }

    ${Button} {
      background-color: ${store === 'aqua' ? theme.aqua.colors.primary : '#ffffff'};
      border: ${store === 'aqua' ? 'none' : `1px solid ${theme.fire.colors.primary}`};
      color: ${store === 'aqua' ? '#ffffff' : theme.fire.colors.primary};
    }
  `}
`;
