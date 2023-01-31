import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import React from 'react'

import * as S from './styles'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <Link to="/">
          <img src={CoffeeDeliveryLogo} alt="" />
        </Link>
        <ul>
          <li>Cookies </li>
          <li> Política de Privacidade </li>
          <li> Termos e Condições de Uso </li>
          <li> Regulamento das Promoções </li>
          <li> FAQs</li>
        </ul>

        <ul>
          <li>
            <a
              target="_blank"
              href="https://github.com/MauricioAires"
              rel="noreferrer"
            >
              <GithubLogo size={22} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://linkedin.com/in/mauricioairs"
              rel="noreferrer"
            >
              <LinkedinLogo size={22} />
            </a>
          </li>
        </ul>
      </S.FooterContent>
    </S.FooterWrapper>
  )
}
