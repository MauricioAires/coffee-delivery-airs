import { Counter } from '../Counter'
import { ShoppingCartButton } from '../ShoppingCartButton'

import * as S from './styles'

interface CoffeeCardProps {
  image: string
  tags: string[]
  title: string
  description: string
  price: number
}

export function CoffeeCard({
  image,
  tags,
  title,
  description,
  price,
}: CoffeeCardProps) {
  function formatCurrency(value: number) {
    const result = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      currencyDisplay: 'code',
    }).format(value)

    return result.replace(/[a-z]{3}/i, '').trim()
  }
  return (
    <S.CoffeeCard>
      <img src={image} alt="café tradicional" />

      <S.Tags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </S.Tags>

      <h3>{title}</h3>
      <p>{description}</p>
      <S.CoffeeCardFooter>
        <S.Price>
          <span>R$</span>
          {formatCurrency(price)}
        </S.Price>

        <div>
          <Counter />
          <ShoppingCartButton />
        </div>
      </S.CoffeeCardFooter>
    </S.CoffeeCard>
  )
}
