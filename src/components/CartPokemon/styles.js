import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    padding: ${theme.common.spacings.xsmall} 0;
    width: 100%;

    > div {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 0 ${theme.common.spacings.xsmall};
    }

    &:first-of-type {
      margin-top: ${theme.common.spacings.xsmall};
    }

    &:last-of-type {
      margin-bottom: ${theme.common.spacings.xsmall};
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid ${theme.common.border.color};
    }
  `}
`;

export const Picture = styled.picture`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100px;

  > img {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }

  ${media.lessThan('medium')`
    height: 90px;
    width: 90px;
  `}

  ${media.lessThan('small')`
    height: 70px;
    width: 70px;
  `}
`;

export const Name = styled.strong`
  ${({ theme }) => css`
    color: ${theme.common.colors.dark};
    font-size: ${theme.common.font.sizes.xlarge};

    ${media.lessThan('medium')`
      font-size: ${theme.common.font.sizes.large};
    `}

    ${media.lessThan('small')`
      font-size: ${theme.common.font.sizes.medium};
    `}
  `}
`;

export const Price = styled.span`
  ${({ theme }) => css`
    color: ${theme.common.colors.xgray};

    ${media.lessThan('medium')`
      font-size: ${theme.common.font.sizes.small};
    `}

    ${media.lessThan('small')`
      font-size: ${theme.common.font.sizes.xsmall};
    `}
  `}
`;

export const ButtonRemove = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;

    > svg {
      color: ${theme.fire.colors.primary};
      height: 24px;
      width: 24px;

      ${media.lessThan('medium')`
        height: 22px;
        width: 22px;
      `}

      ${media.lessThan('small')`
        height: 20px;
        width: 20px;
      `}
    }

    &:hover {
      opacity: 0.6;
    }
  `}
`;
