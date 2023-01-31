import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { CoffeesProvider } from '../contexts/coffees'

import * as S from './DefaultLayout.styles'

export function DefaultLayout() {
  return (
    <S.DefaultLayoutWrapper>
      <CoffeesProvider>
        <Header />
        <Outlet />
        <Footer />
      </CoffeesProvider>
    </S.DefaultLayoutWrapper>
  )
}
