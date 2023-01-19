import styled, { css } from 'styled-components'

export const CoffeeListWrapper = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  margin-bottom: 4rem;
  padding: 0 1rem;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme['base-title']};
    line-height: ${theme['base-line-height']};
    font-size: ${theme['3xl']};

    font-family: 'Baloo 2', sans-serif;
  `}
`

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1.875rem 0;
`
