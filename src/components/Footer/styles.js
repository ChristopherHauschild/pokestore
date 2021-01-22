import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.common.colors.light};
    border-top: 1px solid ${theme.common.border.color};
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

export const MainFooter = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 1280px;
    padding: ${theme.common.spacings.xxsmall} 0;
    width: 100%;

    > strong {
      color: ${theme.common.colors.gray};
      font-size: ${theme.common.font.sizes.medium};
      font-style: italic;

      ${media.lessThan('medium')`
        font-size: ${theme.common.font.sizes.small};
      `}
    }
  `}
`;
