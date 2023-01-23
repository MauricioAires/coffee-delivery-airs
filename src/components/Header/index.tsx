import { MapPin } from 'phosphor-react'
import { Link } from 'react-router-dom'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { ShoppingCartButton } from '../ShoppingCartButton'

import * as S from './styles'

export function Header() {
  return (
    <S.HeaderWrapper>
      <S.Content>
        <Link to="/">
          <img
            src={coffeeDeliveryLogo}
            alt="um copo de café com o texto 'coffee delivery'"
          />
        </Link>

        <S.Actions>
          <S.Location>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </S.Location>

          <Link to="/checkout">
            <ShoppingCartButton variant="yellow" />
          </Link>
        </S.Actions>
      </S.Content>
    </S.HeaderWrapper>
  )
}
