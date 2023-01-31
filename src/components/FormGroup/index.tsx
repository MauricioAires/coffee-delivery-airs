import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import * as S from './styles'

interface FormGroupProps {
  isOptional?: boolean
  label: string
  inputName: string
  errors: any
  helpText?: string
  size?: 'medium' | 'full' | 'small'
}

const FormGroupBase: ForwardRefRenderFunction<
  HTMLInputElement,
  FormGroupProps
> = (
  {
    inputName,
    label,
    size = 'full',
    isOptional = false,
    errors,
    helpText,
    ...rest
  },
  ref,
) => {
  return (
    <S.FormGroup
      size={size}
      hasError={!!errors[inputName]}
      optional={isOptional}
    >
      <label>
        {label}
        {!!helpText && <span>({helpText})</span>}
      </label>
      <input
        id={inputName}
        placeholder={label}
        autoComplete="off"
        ref={ref}
        {...rest}
      />
      {isOptional && <span>Opcional</span>}

      {!!errors[inputName] && (
        <S.ErrorMessage>{errors[inputName].message}</S.ErrorMessage>
      )}
    </S.FormGroup>
  )
}

export const FormGroup = forwardRef(FormGroupBase)
