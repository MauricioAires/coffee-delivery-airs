import { MapPin } from 'phosphor-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { useCoffees } from '../../contexts/coffees'
import { ShoppingCartButton } from '../ShoppingCartButton'

import * as S from './styles'

export function Header() {
  const { coffees } = useCoffees()

  const coffeesPurchased = coffees.filter((coffee) => coffee.quantityPurchased)

  const total = coffeesPurchased.reduce((total, coffee) => {
    return (total += coffee.quantityPurchased as number)
  }, 0)

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
            <ShoppingCartButton amountItems={total} variant="yellow" />
          </Link>
        </S.Actions>
      </S.Content>
    </S.HeaderWrapper>
  )
}
