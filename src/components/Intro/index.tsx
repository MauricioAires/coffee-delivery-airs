import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import introWallpaper from '../../assets/intro-wallpaper.svg'

import * as S from './styles'

export function Intro() {
  return (
    <S.IntroWrapper>
      <S.Background />
      <S.IntroContent>
        <S.MainContent>
          <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>
          <S.Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </S.Subtitle>

          <S.ListItems>
            <S.Item>
              <S.ItemBullet color="yellow-dark">
                <ShoppingCart size={16} weight="bold" />
              </S.ItemBullet>
              Compra simples e segura
            </S.Item>

            <S.Item>
              <S.ItemBullet color="gray">
                <Package size={16} weight="bold" />
              </S.ItemBullet>
              Embalagem mantém o café intacto
            </S.Item>

            <S.Item>
              <S.ItemBullet color="yellow">
                <Timer size={16} weight="bold" />
              </S.ItemBullet>
              Entrega rápida e rastreada
            </S.Item>

            <S.Item>
              <S.ItemBullet color="purple">
                <Coffee size={16} weight="bold" />
              </S.ItemBullet>
              O café chega fresquinho até você
            </S.Item>
          </S.ListItems>
        </S.MainContent>

        <img src={introWallpaper} alt="" />
      </S.IntroContent>
    </S.IntroWrapper>
  )
}
