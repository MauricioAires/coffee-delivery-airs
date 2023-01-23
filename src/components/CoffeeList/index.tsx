import { useCoffees } from '../../contexts/coffees'
import { CoffeeCard } from '../CoffeCard'

import * as S from './styles'

export function CoffeeList() {
  const { coffees } = useCoffees()

  return (
    <S.CoffeeListWrapper>
      <S.Title>Nossos cafés</S.Title>

      <S.Content>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={1}
            description={coffee.description}
            image={coffee.image}
            price={coffee.price}
            tags={coffee.tags}
            title={coffee.title}
          />
        ))}
      </S.Content>
    </S.CoffeeListWrapper>
  )
}
