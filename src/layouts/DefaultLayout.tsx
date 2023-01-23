import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { CoffeesProvider } from '../contexts/coffees'

export function DefaultLayout() {
  return (
    <CoffeesProvider>
      <Header />
      <Outlet />
    </CoffeesProvider>
  )
}
