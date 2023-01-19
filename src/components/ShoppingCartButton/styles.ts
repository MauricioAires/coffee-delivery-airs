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

    ${!!variant && modifiersCart[variant](theme)}
  `}
`
