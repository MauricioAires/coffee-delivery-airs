import React, { createContext, useContext, useEffect, useState } from 'react'

type DeliveryAddress = {
  postal_code: string
  state: string
  city: string
  number: number
  street: string
  complement?: string
  neighborhood: string
}

interface DeliveryAddressContextProps {
  deliveryAddress: DeliveryAddress
  changeDeliveryAddress: (address: Partial<DeliveryAddress>) => void
  fullDeliveryAddress: () => string
}

export const DeliveryAddressContext = createContext(
  {} as DeliveryAddressContextProps,
)

interface DeliveryAddressProviderProps {
  children: React.ReactNode
}

export const KEY_LOCAL_STORAGE_DELIVERY_ADDRESS =
  '@coffee-delivery:delivery-address'

export function DeliveryAddressProvider({
  children,
}: DeliveryAddressProviderProps) {
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>(
    () => {
      const storage = localStorage.getItem(KEY_LOCAL_STORAGE_DELIVERY_ADDRESS)

      if (storage) {
        return JSON.parse(storage)
      }

      return {}
    },
  )

  function changeDeliveryAddress(address: Partial<DeliveryAddress>) {
    setDeliveryAddress((state) => ({
      ...state,
      ...address,
    }))
  }

  function fullDeliveryAddress() {
    return `${deliveryAddress.street} ${deliveryAddress.number}, ${deliveryAddress.complement} ${deliveryAddress.neighborhood}, ${deliveryAddress.city}, ${deliveryAddress.state} ${deliveryAddress.postal_code}`
  }

  return (
    <DeliveryAddressContext.Provider
      value={{
        deliveryAddress,
        changeDeliveryAddress,
        fullDeliveryAddress,
      }}
    >
      {children}
    </DeliveryAddressContext.Provider>
  )
}

export const useDeliveryAddress = () => useContext(DeliveryAddressContext)
