import React, { createContext, useContext, useState } from 'react'

type CoffeeShopAddress = {
  postal_code: string
  state: string
  city: string
  number: number
  street: string
  complement: string
  neighborhood: string
}

interface CoffeeShopContextProps {
  coffeeShopAddress: CoffeeShopAddress
  changeCoffeeShopAddress: (address: Partial<CoffeeShopAddress>) => void
}

export const CoffeeShopContext = createContext({} as CoffeeShopContextProps)

interface CoffeeShopProviderProps {
  children: React.ReactNode
}

export function CoffeeShopProvider({ children }: CoffeeShopProviderProps) {
  const [coffeeShopAddress, setCoffeeShopAddress] = useState(
    {} as CoffeeShopAddress,
  )

  function changeCoffeeShopAddress(address: Partial<CoffeeShopAddress>) {
    setCoffeeShopAddress((state) => ({
      ...state,
      ...address,
    }))
  }

  return (
    <CoffeeShopContext.Provider
      value={{
        changeCoffeeShopAddress,
        coffeeShopAddress,
      }}
    >
      {children}
    </CoffeeShopContext.Provider>
  )
}

export const useCoffeeShop = () => useContext(CoffeeShopContext)
