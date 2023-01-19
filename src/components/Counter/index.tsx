import { Plus, Minus } from 'phosphor-react'

import * as S from './styles'
export function Counter() {
  return (
    <S.CounterWrapper>
      <button type="button">
        <Plus weight="bold" size={14} />
      </button>
      <span>1</span>
      <button disabled type="button">
        <Minus weight="bold" size={14} />
      </button>
    </S.CounterWrapper>
  )
}
