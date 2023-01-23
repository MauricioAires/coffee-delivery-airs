import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'
import { Button } from '../../components/Button'

import * as S from './styles'
import { Counter } from '../../components/Counter'
import { Link } from 'react-router-dom'

export function CheckoutPage() {
  return (
    <S.CheckoutWrapper>
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

          <S.AddressForm action="#">
            <S.FormGroup size="medium">
              <label>CEP</label>
              <input placeholder="CEP" />
            </S.FormGroup>
            <S.FormGroup>
              <label>Rua</label>
              <input placeholder="Rua" />
            </S.FormGroup>
            <S.FormRow>
              <S.FormGroup size="medium">
                <label>Número</label>
                <input placeholder="Número" />
              </S.FormGroup>
              <S.FormGroup optional>
                <label>Complemento</label>
                <input placeholder="Complemento" />
                <span>Opcional</span>
              </S.FormGroup>
            </S.FormRow>
            <S.FormRow>
              <S.FormGroup size="medium">
                <label>Bairro</label>
                <input placeholder="Bairro" />
              </S.FormGroup>
              <S.FormGroup>
                <label>Cidade</label>
                <input placeholder="Cidade" />
              </S.FormGroup>
              <S.FormGroup size="small">
                <label>UF</label>
                <input placeholder="UF" />
              </S.FormGroup>
            </S.FormRow>
          </S.AddressForm>
        </S.SessionContent>

        <S.Payment>
          <S.Info variant="purple">
            <span>
              <CurrencyDollar size={22} />
            </span>
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </S.Info>

          <S.PaymentList>
            <S.PaymentOption selected type="button">
              <CreditCard size={16} />
              Cartão de crédito
            </S.PaymentOption>

            <S.PaymentOption type="button">
              <Bank size={16} />
              Cartão de débito
            </S.PaymentOption>

            <S.PaymentOption type="button">
              <Money size={16} />
              Dinheiro
            </S.PaymentOption>
          </S.PaymentList>
        </S.Payment>
      </S.SessionWrapper>

      <S.SessionWrapper>
        <S.SessionTitle>Cafés selecionados</S.SessionTitle>
        <S.SessionContent>
          <S.CoffeeList>
            <S.CoffeeSelected>
              <S.CoffeeInfo>
                <img src="/coffees/expresso.svg" alt="expresso" />

                <div>
                  <h3>Expresso Tradicional</h3>
                  <S.Actions>
                    <Counter />
                    <S.RemoveCoffee>
                      <Trash size={16} />
                      Remover
                    </S.RemoveCoffee>
                  </S.Actions>
                </div>
              </S.CoffeeInfo>

              <S.Price>R$ 9,90</S.Price>
            </S.CoffeeSelected>
            <S.CoffeeSelected>
              <S.CoffeeInfo>
                <img src="/coffees/expresso.svg" alt="expresso" />

                <div>
                  <h3>Expresso Tradicional</h3>
                  <S.Actions>
                    <Counter />
                    <S.RemoveCoffee>
                      <Trash size={16} />
                      Remover
                    </S.RemoveCoffee>
                  </S.Actions>
                </div>
              </S.CoffeeInfo>

              <S.Price>R$ 9,90</S.Price>
            </S.CoffeeSelected>

            <S.CoffeeSelected>
              <S.CoffeeInfo>
                <img src="/coffees/expresso.svg" alt="expresso" />

                <div>
                  <h3>Expresso Tradicional</h3>
                  <S.Actions>
                    <Counter />
                    <S.RemoveCoffee>
                      <Trash size={16} />
                      Remover
                    </S.RemoveCoffee>
                  </S.Actions>
                </div>
              </S.CoffeeInfo>

              <S.Price>R$ 9,90</S.Price>
            </S.CoffeeSelected>
          </S.CoffeeList>

          <S.CheckoutResume>
            <div>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <b>Total</b>
              <b>R$ 29,70</b>
            </div>
          </S.CheckoutResume>

          <Link to="/checkout/success">
            <Button label="Confirmar pedido" />
          </Link>
        </S.SessionContent>
      </S.SessionWrapper>
    </S.CheckoutWrapper>
  )
}
