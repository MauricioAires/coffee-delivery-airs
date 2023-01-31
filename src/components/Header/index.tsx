import { MapPin } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { useCoffeeShop } from '../../contexts/coffee-shop'
import { useCoffees } from '../../contexts/coffees'
import { LocationAddressModal } from '../LocationAddressModal'
import { ShoppingCartButton } from '../ShoppingCartButton'

import * as S from './styles'

export function Header() {
  const { coffees } = useCoffees()
  const { coffeeShopAddress } = useCoffeeShop()

  const [openLocationAddressModal, setOpenLocationAddressModal] =
    useState(false)

  const coffeesPurchased = coffees.filter((coffee) => coffee.quantityPurchased)

  const total = coffeesPurchased.reduce((total, coffee) => {
    return (total += coffee.quantityPurchased as number)
  }, 0)

  return (
    <>
      <S.HeaderWrapper>
        <S.Content>
          <Link to="/">
            <img
              src={coffeeDeliveryLogo}
              alt="um copo de café com o texto 'coffee delivery'"
            />
          </Link>

          <S.Actions>
            <S.Location onClick={() => setOpenLocationAddressModal(true)}>
              <MapPin size={22} weight="fill" />
              <span>
                {!!coffeeShopAddress?.city && !!coffeeShopAddress?.state
                  ? `${coffeeShopAddress.city}, ${coffeeShopAddress.state}`
                  : 'Escolha um endereço'}
              </span>
            </S.Location>

            <Link to="/checkout">
              <ShoppingCartButton amountItems={total} variant="yellow" />
            </Link>
          </S.Actions>
        </S.Content>
      </S.HeaderWrapper>
      <LocationAddressModal
        onClose={setOpenLocationAddressModal}
        isOpen={openLocationAddressModal}
      />
    </>
  )
}
