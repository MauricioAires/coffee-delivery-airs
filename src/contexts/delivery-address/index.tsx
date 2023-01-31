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
  getPaymentMethodText: (method: PaymentMethod) => string
  fullDeliveryAddress: string
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

  const fullDeliveryAddress = `${deliveryAddress.street} ${deliveryAddress.number}, ${deliveryAddress.complement} ${deliveryAddress.neighborhood}, ${deliveryAddress.city}, ${deliveryAddress.state} ${deliveryAddress.postal_code}`

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>('CREDIT_CARD')

  function changePaymentMethod(method: PaymentMethod) {
    setPaymentMethod(method)
  }

  function getPaymentMethodText(method: PaymentMethod) {
    const methods = {
      [PAYMENT_METHOD.CREDIT_CARD]: 'Cartão de crédito',
      [PAYMENT_METHOD.DEBIT_CARD]: 'Cartão de débito',
      [PAYMENT_METHOD.MONEY]: 'Dinheiro',
    }

    return methods[method]
  }

  function changeDeliveryAddress(address: Partial<DeliveryAddress>) {
    setDeliveryAddress((state) => {
      const updatedDeliveryAddress = { ...state, ...address }

      localStorage.setItem(
        KEY_LOCAL_STORAGE_DELIVERY_ADDRESS,
        JSON.stringify(updatedDeliveryAddress),
      )

      return updatedDeliveryAddress
    })
  }

  return (
    <DeliveryAddressContext.Provider
      value={{
        paymentMethod,
        deliveryAddress,
        fullDeliveryAddress,
        getPaymentMethodText,
        changePaymentMethod,
        changeDeliveryAddress,
      }}
    >
      {children}
    </DeliveryAddressContext.Provider>
  )
}

export const useDeliveryAddress = () => useContext(DeliveryAddressContext)
