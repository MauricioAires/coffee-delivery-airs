import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'

import { calculateDeliveryPrice } from '../../services/viacep'

import { Button } from '../../components/Button'
import { Counter } from '../../components/Counter'
import { useCoffees } from '../../contexts/coffees'
import { FormDeliveryAddress } from '../../components/FormDeliveryAddress'

import * as S from './styles'
import {
  PaymentMethod,
  PAYMENT_METHOD,
  useDeliveryAddress,
} from '../../contexts/delivery-address'

export function CheckoutPage() {
  const navigate = useNavigate()
  const { coffees, updateQuantityPurchased } = useCoffees()
  const { changePaymentMethod, getPaymentMethodText, paymentMethod } =
    useDeliveryAddress()

  const coffeesPurchased = coffees.filter((coffee) => coffee.quantityPurchased)

  const totalPurchased = coffeesPurchased.reduce((total, coffee) => {
    return (total = total + coffee.quantityPurchased * coffee.price)
  }, 0)

  const deliveryPrice = calculateDeliveryPrice(totalPurchased)

  function handleUpdateQuantityPurchased(coffeeId: number, quantity: number) {
    updateQuantityPurchased(coffeeId, quantity)
  }

  function handleChangePaymentMethod(method: PaymentMethod) {
    changePaymentMethod(method)
  }

  function handleCheckout() {
    navigate('/checkout/success')
    toast.success('Compra realizada com sucesso!')
  }

  return (
    <S.CheckoutWrapper>
      <S.CheckoutContent>
        <S.SessionWrapper>
          <S.SessionTitle>Complete seu pedido</S.SessionTitle>

          <S.SessionContent>
            <S.Info>
              <span>
                <MapPin size={22} />
              </span>
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </S.Info>

            <FormDeliveryAddress />
          </S.SessionContent>

          <S.Payment>
            <S.Info variant="purple">
              <span>
                <CurrencyDollar size={22} />
              </span>
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </S.Info>

            <S.PaymentList>
              <S.PaymentOption
                selected={PAYMENT_METHOD.CREDIT_CARD === paymentMethod}
                onClick={() =>
                  handleChangePaymentMethod(PAYMENT_METHOD.CREDIT_CARD)
                }
                type="button"
              >
                <CreditCard size={16} />
                {getPaymentMethodText(PAYMENT_METHOD.CREDIT_CARD)}
              </S.PaymentOption>

              <S.PaymentOption
                selected={PAYMENT_METHOD.DEBIT_CARD === paymentMethod}
                onClick={() =>
                  handleChangePaymentMethod(PAYMENT_METHOD.DEBIT_CARD)
                }
                type="button"
              >
                <Bank size={16} />
                {getPaymentMethodText(PAYMENT_METHOD.DEBIT_CARD)}
              </S.PaymentOption>

              <S.PaymentOption
                selected={PAYMENT_METHOD.MONEY === paymentMethod}
                onClick={() => handleChangePaymentMethod(PAYMENT_METHOD.MONEY)}
                type="button"
              >
                <Money size={16} />
                {getPaymentMethodText(PAYMENT_METHOD.MONEY)}
              </S.PaymentOption>
            </S.PaymentList>
          </S.Payment>
        </S.SessionWrapper>

        <S.SessionWrapper>
          <S.SessionTitle>Cafés selecionados</S.SessionTitle>
          <S.SessionContent>
            {!coffeesPurchased.length && (
              <S.CoffeeListEmpty>
                <p>Você ainda não adicionou cafés no carrinho.</p>
                <Link to="/">
                  <Button label="Escolher meus cafés" />
                </Link>
              </S.CoffeeListEmpty>
            )}

            {!!coffeesPurchased.length && (
              <>
                <S.CoffeeList>
                  {coffeesPurchased.map((coffee) => (
                    <S.CoffeeSelected key={coffee.id}>
                      <S.CoffeeInfo>
                        <img src={coffee.image} alt={coffee.title} />

                        <div>
                          <h3>{coffee.title}</h3>
                          <S.Actions>
                            <Counter
                              quantity={coffee.quantityPurchased}
                              changeQuantity={(e) =>
                                handleUpdateQuantityPurchased(coffee.id, e)
                              }
                            />
                            <S.RemoveCoffee
                              onClick={() =>
                                handleUpdateQuantityPurchased(coffee.id, 0)
                              }
                            >
                              <Trash size={16} />
                              Remover
                            </S.RemoveCoffee>
                          </S.Actions>
                        </div>
                      </S.CoffeeInfo>

                      <S.Price>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(coffee.price * coffee.quantityPurchased)}
                      </S.Price>
                    </S.CoffeeSelected>
                  ))}
                </S.CoffeeList>

                <S.CheckoutResume>
                  <div>
                    <p>Total de itens</p>
                    <p>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(totalPurchased)}
                    </p>
                  </div>
                  <div>
                    <p>Entrega</p>
                    <p>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(deliveryPrice)}
                    </p>
                  </div>
                  <div>
                    <b>Total</b>
                    <b>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(deliveryPrice + totalPurchased)}
                    </b>
                  </div>
                </S.CheckoutResume>

                <Button onClick={handleCheckout} label="Confirmar pedido" />
              </>
            )}
          </S.SessionContent>
        </S.SessionWrapper>
      </S.CheckoutContent>
    </S.CheckoutWrapper>
  )
}
