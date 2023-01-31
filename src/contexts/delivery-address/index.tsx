import React, { createContext, useContext } from 'react'

export const DeliveryAddressContext = createContext({})

interface DeliveryAddressProviderProps {
  children: React.ReactNode
}

export function DeliveryAddressProvider({
  children,
}: DeliveryAddressProviderProps) {
  return (
    <DeliveryAddressContext.Provider value={{}}>
      {children}
    </DeliveryAddressContext.Provider>
  )
}

export const useDeliveryAddress = () => useContext(DeliveryAddressContext)
