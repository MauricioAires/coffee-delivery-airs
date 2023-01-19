import expresso from '../../assets/coffees/expresso.svg'

import { CoffeeCard } from '../CoffeCard'

import * as S from './styles'

type Coffee = {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: number
}

export function CoffeeList() {
  const coffees: Coffee[] = [
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: expresso,
      tags: ['Tradicional', 'Com Leite'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
  ]

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
