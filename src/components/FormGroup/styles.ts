import styled, { css } from 'styled-components'

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.red};
    line-height: ${theme['base-line-height']};
    font-size: ${theme.xs};
  `}
`

interface FormGroupProps {
  optional?: boolean
  size?: 'medium' | 'full' | 'small'
  hasError?: boolean
}

const modifiersFormGroup = {
  full: () => css`
    flex: 1;
  `,

  medium: () =>
    css`
      width: 35%;
    `,

  small: () =>
    css`
      width: calc(calc(100% / 5) - 0.75rem);
    `,
}

export const FormGroup = styled.div<FormGroupProps>`
  ${({ theme, optional = false, size = 'full', hasError = false }) => css`
    ${size && modifiersFormGroup[size]}

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.25rem;

    position: relative;

    > span {
      position: absolute;
      color: ${theme['base-label']};
      line-height: ${theme['base-line-height']};
      font-size: ${theme.xs};
      bottom: 0.75rem;
      right: 1rem;
      pointer-events: none;
      font-style: italic;
    }

    > label {
      color: ${theme['base-title']};
      font-size: ${theme.sm};
      line-height: ${theme['base-line-height']};

      > span {
        color: ${theme['base-label']};
        line-height: ${theme['base-line-height']};
        font-size: ${theme.xxs};
        margin-left: 0.25rem;
      }
    }

    > input {
      background: ${theme['base-input']};
      color: ${theme['base-text']};
      border: 0;
      height: 4;
      height: 2.625rem;
      padding: 0.875rem;

      ${optional &&
      css`
        padding-right: 4rem;
      `}

      border-radius: 0.25rem;

      border: 1px solid ${theme['base-button']};
      line-height: ${theme['base-line-height']};

      &::placeholder {
        color: ${theme['base-label']};
      }

      &:disabled {
        background: ${theme['base-hover']};
      }

      &:focus {
        box-shadow: none;
        outline-color: ${theme['yellow-dark']};
        outline-width: 1px;
        outline-style: solid;
      }

      ${hasError &&
      css`
        border-color: ${theme.red};
      `}
    }
  `}
`
