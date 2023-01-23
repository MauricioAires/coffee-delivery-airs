import styled, { css, DefaultTheme } from 'styled-components'

const modifiersBulletPoint = {
  yellow: (theme: DefaultTheme) => css`
    background: ${theme.yellow};
  `,
  'yellow-dark': (theme: DefaultTheme) => css`
    background: ${theme['yellow-dark']};
  `,
  gray: (theme: DefaultTheme) => css`
    background: ${theme['base-text']};
  `,
  purple: (theme: DefaultTheme) => css`
    background: ${theme.purple};
  `,
}

interface BulletPointProps {
  color: keyof typeof modifiersBulletPoint
}

export const BulletPointWrapper = styled.span<BulletPointProps>`
  ${({ theme, color }) => css`
    padding: 0.5rem;
    border-radius: 100%;

    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.white};
    background: ${theme['yellow-dark']};

    ${color && modifiersBulletPoint[color](theme)}
  `}
`
