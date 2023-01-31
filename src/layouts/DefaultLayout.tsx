import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { CoffeeShopProvider } from '../contexts/coffee-shop'
import { CoffeesProvider } from '../contexts/coffees'
import { DeliveryAddressProvider } from '../contexts/delivery-address'

import * as S from './DefaultLayout.styles'

export function DefaultLayout() {
  return (
    <S.DefaultLayoutWrapper>
      <CoffeeShopProvider>
        <DeliveryAddressProvider>
          <CoffeesProvider>
            <Header />
            <Outlet />
            <Footer />
          </CoffeesProvider>
        </DeliveryAddressProvider>
      </CoffeeShopProvider>
    </S.DefaultLayoutWrapper>
  )
}
