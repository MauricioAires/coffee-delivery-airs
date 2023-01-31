import { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from 'react'

import * as S from './styles'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: 'yellow' | 'purple'
  minimal?: boolean
  disabled?: boolean
}

const BaseButton: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { label, minimal = false, disabled = false, variant = 'yellow', ...rest },
  ref,
) => {
  return (
    <S.ButtonWrapper
      minimal={minimal}
      variant={variant}
      disabled={disabled}
      {...rest}
      ref={ref}
    >
      {label}
    </S.ButtonWrapper>
  )
}

export const Button = forwardRef(BaseButton)
