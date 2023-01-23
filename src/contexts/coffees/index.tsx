import React, { createContext, useContext, useState } from 'react'

export type Coffee = {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: number
  quantityPurchased?: number
}

interface CoffeesContextProps {
  coffees: Coffee[]
}

export const CoffeesContext = createContext({} as CoffeesContextProps)

interface CoffeesProviderProps {
  children: React.ReactNode
}

export function CoffeesProvider({ children }: CoffeesProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([
    {
      id: 1,
      image: '/coffees/expresso.svg',
      tags: ['Tradicional'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 2,
      image: '/coffees/americano.svg',
      tags: ['Tradicional'],
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
    },
    {
      id: 3,
      image: '/coffees/expresso-cremoso.svg',
      tags: ['Tradicional'],
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
    },
    {
      id: 4,
      image: '/coffees/cafe-gelado.svg',
      tags: ['Tradicional', 'Gelado'],
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
    },
    {
      id: 5,
      image: '/coffees/cafe-com-leite.svg',
      tags: ['Tradicional', 'Com Leite'],
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
    },
    {
      id: 6,
      image: '/coffees/latte.svg',
      tags: ['Tradicional', 'Com Leite'],
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
    },
    {
      id: 7,
      image: '/coffees/capuccino.svg',
      tags: ['Tradicional', 'Com Leite'],
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
    },
    {
      id: 8,
      image: '/coffees/macchiato.svg',
      tags: ['Tradicional', 'Com Leite'],
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
    },
    {
      id: 9,
      image: '/coffees/mocaccino.svg',
      tags: ['Tradicional', 'Com Leite'],
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
    },
    {
      id: 10,
      image: '/coffees/chocolate-quente.svg',
      tags: ['Tradicional', 'Com Leite'],
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
    },
    {
      id: 11,
      image: '/coffees/cubano.svg',
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
    },
    {
      id: 12,
      image: '/coffees/havaiano.svg',
      tags: ['Especial'],
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
    },
    {
      id: 13,
      image: '/coffees/arabe.svg',
      tags: ['Especial'],
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
    },
    {
      id: 14,
      image: '/coffees/irlandes.svg',
      tags: ['Especial', 'Alcoólico'],
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
    },
  ])

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}

export const useCoffees = () => useContext(CoffeesContext)
