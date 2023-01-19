import { Button } from '../../components/Button'
import { CoffeeList } from '../../components/CoffeeList'
import { Intro } from '../../components/Intro'

import * as S from './styles'

export function HomePage() {
  return (
    <S.HomeWrapper>
      <Intro />
      <CoffeeList />
    </S.HomeWrapper>
  )
}
