import { useState } from 'react'
import { Coffee, useCoffees } from '../../contexts/coffees'
import { Counter } from '../Counter'
import { ShoppingCartButton } from '../ShoppingCartButton'

import * as S from './styles'

interface CoffeeCardProps extends Omit<Coffee, 'quantityPurchased'> {}

export function CoffeeCard({
  id,
  image,
  tags,
  title,
  description,
  price,
}: CoffeeCardProps) {
  const [quantitySelected, setQuantitySelected] = useState(1)
  const { addWishlist } = useCoffees()

  function formatCurrency(value: number) {
    const result = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      currencyDisplay: 'code',
    }).format(value)

    return result.replace(/[a-z]{3}/i, '').trim()
  }

  function handleAddWishlist() {
    addWishlist(id, quantitySelected)
    setQuantitySelected(1)
  }

  return (
    <S.CoffeeCard>
      <img src={image} alt={title} />

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
          <Counter
            quantity={quantitySelected}
            changeQuantity={(e) => setQuantitySelected(e)}
          />
          <ShoppingCartButton onClick={handleAddWishlist} />
        </div>
      </S.CoffeeCardFooter>
    </S.CoffeeCard>
  )
}
