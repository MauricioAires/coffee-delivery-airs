import styled, { css, DefaultTheme } from 'styled-components'

import { ShoppingCartButtonProps } from '.'

interface CartProps extends Pick<ShoppingCartButtonProps, 'variant'> {}

const modifiersCart = {
  yellow: (theme: DefaultTheme) => css`
    background: ${theme['yellow-light']};
    color: ${theme.yellow};
  `,
  purple: (theme: DefaultTheme) => css`
    background: ${theme['purple-dark']};
    color: ${theme.white};
  `,
}

export const Cart = styled.button<CartProps>`
  ${({ theme, variant }) => css`
    line-height: ${theme['base-line-height']};
    cursor: pointer;

    padding: 0.5rem;
    border-radius: 6px;
    border: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    ${!!variant && modifiersCart[variant](theme)}
  `}
`

export const Badged = styled.p`
  ${({ theme }) => css`
    font-size: 111px;
    background: ${theme['yellow-dark']};
    line-height: ${theme['base-line-height']};
    font-size: ${theme.xs};
    color: ${theme.white};

    text-decoration: none !important;

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(30%, -30%);
  `}
`
