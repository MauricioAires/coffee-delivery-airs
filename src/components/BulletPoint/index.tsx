import React from 'react'
import * as S from './styles'

interface BulletPointProps {
  children: React.ReactNode
  color: 'yellow' | 'yellow-dark' | 'gray' | 'purple'
}

export function BulletPoint({ children, color }: BulletPointProps) {
  return <S.BulletPointWrapper color={color}>{children}</S.BulletPointWrapper>
}
