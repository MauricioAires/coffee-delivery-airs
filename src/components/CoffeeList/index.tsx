import { ShoppingCart } from 'phosphor-react'

import expresso from '../../assets/coffees/expresso.svg'
import { Counter } from '../Counter'
import { ShoppingCartButton } from '../ShoppingCartButton'

import * as S from './styles'

export function CoffeeList() {
  return (
    <S.CoffeeListWrapper>
      <S.Title>Nossos cafés</S.Title>

      <S.Content>
        <S.CoffeeCard>
          <img src={expresso} alt="café tradicional" />

          <S.Tags>
            <span>Tradicional</span>
            <span>com leite</span>
          </S.Tags>

          <h3>Expresso Tradicional</h3>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <S.CoffeeCardFooter>
            <S.Price>
              <span>R$</span> 9,90
            </S.Price>

            <div>
              <Counter />
              <ShoppingCartButton />
            </div>
          </S.CoffeeCardFooter>
        </S.CoffeeCard>
      </S.Content>
    </S.CoffeeListWrapper>
  )
}
