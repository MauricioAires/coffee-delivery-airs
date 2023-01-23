import { Plus, Minus } from 'phosphor-react'

import * as S from './styles'

interface CounterProps {
  quantity: number
  changeQuantity: (quantity: number) => void
}

export function Counter({ quantity, changeQuantity }: CounterProps) {
  function handleChangeQuantity(value: number) {
    changeQuantity(value)
  }

  return (
    <S.CounterWrapper>
      <button onClick={() => handleChangeQuantity(quantity + 1)} type="button">
        <Plus weight="bold" size={14} />
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => handleChangeQuantity(quantity - 1)}
        disabled={quantity === 1}
        type="button"
      >
        <Minus weight="bold" size={14} />
      </button>
    </S.CounterWrapper>
  )
}
