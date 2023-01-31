import { Coffee, CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import checkoutSuccess from '../../assets/checkout-success.svg'
import { BulletPoint } from '../../components/BulletPoint'
import { useDeliveryAddress } from '../../contexts/delivery-address'

import * as S from './styles'

export function CheckoutSuccessPage() {
  const { getPaymentMethodText, paymentMethod, fullDeliveryAddress } =
    useDeliveryAddress()
  return (
    <S.CheckoutSuccessWrapper>
      <S.CheckoutContent>
        <div>
          <div>
            <h1>Uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>
          </div>

          <S.CheckoutDetails>
            <S.CheckoutInfo>
              <BulletPoint color="purple">
                <MapPin size={16} weight="fill" />
              </BulletPoint>

              <div>
                <h2>Endereço de entrega</h2>
                <span>{fullDeliveryAddress()}</span>
              </div>
            </S.CheckoutInfo>

            <S.CheckoutInfo>
              <BulletPoint color="yellow-dark">
                <CurrencyDollar size={16} weight="fill" />
              </BulletPoint>
              <div>
                <h2>Pagamento na entrega</h2>
                <span>{getPaymentMethodText(paymentMethod)}</span>
              </div>
            </S.CheckoutInfo>

            <S.CheckoutInfo>
              <BulletPoint color="yellow">
                <Timer size={16} weight="fill" />
              </BulletPoint>
              <div>
                <h2>Previsão de entrega</h2>
                <span>20 min - 30 min </span>
              </div>
            </S.CheckoutInfo>
          </S.CheckoutDetails>
        </div>

        <img src={checkoutSuccess} alt="" />
      </S.CheckoutContent>
    </S.CheckoutSuccessWrapper>
  )
}
