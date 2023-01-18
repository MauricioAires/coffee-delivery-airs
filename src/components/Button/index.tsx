import * as S from './styles'

interface ButtonProps {
  label: string
}

export function Button({ label }: ButtonProps) {
  return <S.ButtonWrapper>{label}</S.ButtonWrapper>
}
