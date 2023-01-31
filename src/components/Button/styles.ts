import styled, { css, DefaultTheme } from 'styled-components'

const modifiersButtonWrapper = {
  purple: (theme: DefaultTheme, minimal: boolean) => css`
    background: ${minimal ? 'transparent' : theme.purple};

    border: 1px solid ${theme.purple};

    ${minimal &&
    css`
      color: ${theme.purple};
    `}

    &:hover {
      background: ${minimal ? theme.purple : theme['purple-dark']};
      color: ${theme.white};
    }
  `,
  yellow: (theme: DefaultTheme, minimal: boolean) => css`
    background: ${minimal ? 'transparent' : theme.yellow};

    border: 1px solid ${theme.yellow};

    ${minimal &&
    css`
      color: ${theme.yellow};
    `}

    &:hover {
      background: ${theme['yellow-dark']};
    }
  `,
}

interface ButtonWrapperProps {
  variant: keyof typeof modifiersButtonWrapper
  minimal: boolean
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${({ theme, variant, minimal }) => css`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;
    cursor: pointer;
    padding: 0.75rem;

    border-radius: 6px;

    color: ${theme.white};

    font-weight: ${theme['font-bold']};
    font-size: ${theme.sm};

    text-transform: uppercase;
    line-height: ${theme['large-line-height']};

    transition: background ease-in-out 0.2s, color ease-in-out 0.2s;

    ${!!variant && modifiersButtonWrapper[variant](theme, minimal)}
  `}
`
