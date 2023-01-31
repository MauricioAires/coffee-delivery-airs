import React, { createContext, useCallback, useContext, useState } from 'react'

import { defaultCoffeesList } from './coffees-list'

export type Coffee = {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: number
  quantityPurchased: number
}

interface CoffeesContextProps {
  coffees: Coffee[]
  addWishlist: (id: number, quantity: number) => void
  updateQuantityPurchased: (id: number, quantity: number) => void
  resetWishlist: () => void
}

export const CoffeesContext = createContext({} as CoffeesContextProps)

interface CoffeesProviderProps {
  children: React.ReactNode
}

export const KEY_LOCAL_STORAGE_WISHLIST_COFFEES =
  '@coffee-delivery:wishlist-coffees'

export function CoffeesProvider({ children }: CoffeesProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>(() => {
    const storage = localStorage.getItem(KEY_LOCAL_STORAGE_WISHLIST_COFFEES)

    if (storage) {
      return JSON.parse(storage)
    }

    return defaultCoffeesList
  })

  const addWishlist = useCallback((id: number, quantity: number) => {
    setCoffees((state) => {
      const newState = state.map((coffee) => {
        if (coffee.id === id) {
          return {
            ...coffee,
            quantityPurchased: coffee.quantityPurchased
              ? coffee.quantityPurchased + quantity
              : quantity,
          }
        }

        return coffee
      })

      saveWishlistToLocalStorage(newState)
      return newState
    })
  }, [])

  const updateQuantityPurchased = useCallback(
    (id: number, quantity: number) => {
      setCoffees((state) => {
        const newState = state.map((coffee) => {
          if (coffee.id === id) {
            return {
              ...coffee,
              quantityPurchased: quantity,
            }
          }

          return coffee
        })

        saveWishlistToLocalStorage(newState)
        return newState
      })
    },
    [],
  )

  function saveWishlistToLocalStorage(wishlist: Coffee[]) {
    localStorage.setItem(
      KEY_LOCAL_STORAGE_WISHLIST_COFFEES,
      JSON.stringify(wishlist),
    )
  }

  function resetWishlist() {
    setCoffees(defaultCoffeesList)
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        updateQuantityPurchased,
        addWishlist,
        resetWishlist,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}

export const useCoffees = () => useContext(CoffeesContext)
