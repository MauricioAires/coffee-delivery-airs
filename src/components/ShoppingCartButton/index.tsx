import { ShoppingCart } from 'phosphor-react'

import * as S from './styles'

export interface ShoppingCartButtonProps {
  variant?: 'yellow' | 'purple'
}

export function ShoppingCartButton({
  variant = 'purple',
}: ShoppingCartButtonProps) {
  return (
    <S.Cart variant={variant}>
      <ShoppingCart size={22} weight="fill" />
    </S.Cart>
  )
}
