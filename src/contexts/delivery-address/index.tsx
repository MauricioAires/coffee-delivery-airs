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

export enum PAYMENT_METHOD {
  'CREDIT_CARD' = 'CREDIT_CARD',
  'DEBIT_CARD' = 'DEBIT_CARD',
  'MONEY' = 'MONEY',
}

export type PaymentMethod = keyof typeof PAYMENT_METHOD

interface DeliveryAddressContextProps {
  deliveryAddress: DeliveryAddress
  paymentMethod: PaymentMethod
  changeDeliveryAddress: (address: Partial<DeliveryAddress>) => void
  changePaymentMethod: (method: PaymentMethod) => void
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

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>('CREDIT_CARD')

  function changePaymentMethod(method: PaymentMethod) {
    setPaymentMethod(method)
  }

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
        paymentMethod,
        deliveryAddress,
        changePaymentMethod,
        changeDeliveryAddress,
        fullDeliveryAddress,
      }}
    >
      {children}
    </DeliveryAddressContext.Provider>
  )
}

export const useDeliveryAddress = () => useContext(DeliveryAddressContext)
