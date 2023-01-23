import { ShoppingCart } from 'phosphor-react'

import * as S from './styles'

export interface ShoppingCartButtonProps {
  variant?: 'yellow' | 'purple'
  amountItems?: number
  onClick?: () => void
}

export function ShoppingCartButton({
  variant = 'purple',
  onClick,
  amountItems = 0,
}: ShoppingCartButtonProps) {
  return (
    <S.Cart onClick={onClick} variant={variant}>
      {!!amountItems && <S.Badged>{amountItems}</S.Badged>}
      <ShoppingCart size={22} weight="fill" />
    </S.Cart>
  )
}
