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

export const KEY_LOCAL_STORAGE_COFFEE_SHOP_ADDRESS =
  '@coffee-delivery:coffee-shop-address'
export function CoffeeShopProvider({ children }: CoffeeShopProviderProps) {
  const [coffeeShopAddress, setCoffeeShopAddress] = useState<CoffeeShopAddress>(
    () => {
      const storage = localStorage.getItem(
        KEY_LOCAL_STORAGE_COFFEE_SHOP_ADDRESS,
      )

      if (storage) {
        return JSON.parse(storage)
      }

      return {}
    },
  )

  function changeCoffeeShopAddress(address: Partial<CoffeeShopAddress>) {
    setCoffeeShopAddress((state) => {
      const updatedCoffeeShopAddress = { ...state, ...address }

      localStorage.setItem(
        KEY_LOCAL_STORAGE_COFFEE_SHOP_ADDRESS,
        JSON.stringify(updatedCoffeeShopAddress),
      )
      return updatedCoffeeShopAddress
    })
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
