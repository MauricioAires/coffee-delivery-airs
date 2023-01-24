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
  padding: 1.875rem 0;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
`
