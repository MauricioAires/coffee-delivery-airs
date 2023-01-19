import { MapPin } from 'phosphor-react'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { ShoppingCartButton } from '../ShoppingCartButton'

import * as S from './styles'

export function Header() {
  return (
    <S.HeaderWrapper>
      <S.Content>
        <img
          src={coffeeDeliveryLogo}
          alt="um copo de café com o texto 'coffee delivery'"
        />

        <S.Actions>
          <S.Location>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </S.Location>

          <ShoppingCartButton variant="yellow" />
        </S.Actions>
      </S.Content>
    </S.HeaderWrapper>
  )
}
