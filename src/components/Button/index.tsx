import { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from 'react'

import * as S from './styles'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: 'yellow' | 'purple'
  minimal?: boolean
}

const BaseButton: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { label, minimal = false, variant = 'yellow', ...rest },
  ref,
) => {
  return (
    <S.ButtonWrapper ref={ref} minimal={minimal} variant={variant} {...rest}>
      {label}
    </S.ButtonWrapper>
  )
}

export const Button = forwardRef(BaseButton)
