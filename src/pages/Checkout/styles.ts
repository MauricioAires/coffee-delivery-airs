import styled, { css, DefaultTheme } from 'styled-components'

export const CheckoutWrapper = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  gap: 2rem;

  flex-wrap: wrap;
`

export const SessionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  flex: 1;
`

export const SessionTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: ${theme.lg};
    font-weight: ${theme['base-line-height']};
  `}
`

export const SessionContent = styled.div`
  ${({ theme }) => css`
    background: ${theme['base-card']};

    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 6px;

    padding: 2.5rem;
  `}
`

interface InfoProps {
  variant?: 'yellow' | 'purple'
}

export const Info = styled.div<InfoProps>`
  ${({ theme, variant = 'yellow' }) => css`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    > span {
      color: ${variant === 'yellow' ? theme['yellow-dark'] : theme.purple};
    }

    > div {
      display: flex;
      flex-direction: column;

      > p {
        font-size: ${theme.md};
        font-weight: ${theme['base-line-height']};
        color: ${theme['base-subtitle']};
      }

      > span {
        font-size: ${theme.sm};
        font-weight: ${theme['base-line-height']};
        color: ${theme['base-text']};
      }
    }
  `}
`

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  flex-wrap: wrap;
`

interface FormGroupProps {
  optional?: boolean
  size?: 'medium' | 'full' | 'small'
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
  ${({ theme, optional = false, size = 'full' }) => css`
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

      &:focus {
        box-shadow: none;
        outline-color: ${theme['yellow-dark']};
        outline-width: 1px;
        outline-style: solid;
      }
    }
  `}
`

export const Payment = styled.div`
  ${({ theme }) => css`
    background: ${theme['base-card']};

    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 6px;

    padding: 2.5rem;
  `}
`

export const PaymentList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`

interface PaymentOptionProps {
  selected?: boolean
}

const modifiersPaymentOption = {
  selected: (theme: DefaultTheme) => css`
    color: ${theme.purple};
    background: ${theme['purple-light']};
    border: 1px solid ${theme.purple};

    &:hover {
      filter: opacity(0.9);
    }

    > svg {
      color: ${theme.purple};
    }
  `,
}

export const PaymentOption = styled.button<PaymentOptionProps>`
  ${({ theme, selected }) => css`
    flex: 1;

    padding: 1rem 0.5rem;
    border-radius: 6px;

    border: 0;
    border: 1px solid transparent;

    color: ${theme['base-text']};
    background: ${theme['base-button']};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    line-height: ${theme['base-line-height']};
    font-weight: ${theme['font-regular']};
    text-transform: uppercase;

    font-size: ${theme.xs};

    cursor: pointer;

    transition: background ease-in-out 0.3ms;

    ${selected && modifiersPaymentOption.selected(theme)}

    > svg {
      color: ${theme.purple};
    }

    ${!selected &&
    css`
      &:hover {
        background: ${theme['base-hover']};
      }
    `}
  `}
`

export const CoffeeSelected = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    padding-bottom: 2rem;

    border-bottom: 1px solid ${theme['base-button']};
  `}
`

export const CoffeeInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;

    > img {
      width: 4rem;
      height: 4rem;
      flex-shrink: 0;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > h3 {
        line-height: ${theme['base-line-height']};
        font-weight: ${theme['font-regular']};
        font-size: ${theme.md};
        color: ${theme['base-subtitle']};
      }
    }
  `}
`

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const Price = styled.p`
  ${({ theme }) => css`
    line-height: ${theme['base-line-height']};
    font-weight: ${theme['font-bold']};
    font-size: ${theme.md};
  `}
`

export const RemoveCoffee = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    border: 0;
    background: ${theme['base-button']};
    color: ${theme['base-text']};
    line-height: ${theme['base-line-height']};
    border-radius: 6px;

    text-transform: uppercase;

    font-size: ${theme.xs};

    padding: 0.5rem;

    > svg {
      color: ${theme.purple};
    }

    &:hover {
      background: ${theme['base-hover']};
    }
  `}
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const CheckoutResume = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      b {
        font-size: ${theme.lg};
        line-height: ${theme['base-line-height']};
        color: ${theme['base-subtitle']};
      }

      > p {
        line-height: ${theme['base-line-height']};
        font-size: ${theme.sm};

        & + p {
          font-size: ${theme.md};
        }
      }
    }
  `}
`
