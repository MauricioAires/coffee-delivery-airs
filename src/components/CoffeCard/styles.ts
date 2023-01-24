import styled, { css } from 'styled-components'

export const CoffeeCard = styled.div`
  ${({ theme }) => css`
    background: ${theme['base-card']};
    /* width: 16rem; */
    border-radius: 6px 36px 6px 36px;

    padding: 0 1.5rem 1.25rem 1.25rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > img {
      margin-top: -1.25rem;
      width: 7.5rem;
      height: 7.5rem;
      flex-shrink: 0;
    }

    > h3 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: ${theme['base-line-height']};
      font-size: ${theme.xl};
      margin-top: 1rem;
    }

    > p {
      font-size: ${theme.sm};
      line-height: ${theme['base-line-height']};
      color: ${theme['base-label']};
      text-align: center;
      margin-top: 0.5rem;
    }
  `}
`

export const Tags = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    > span {
      text-transform: uppercase;
      color: ${theme['yellow-dark']};
      background: ${theme['yellow-light']};

      font-weight: ${theme['base-line-height']};
      font-size: ${theme.xs};
      font-weight: ${theme['font-bold']};

      padding: 0.25rem 0.5rem;
      border-radius: 14px;

      margin-top: 1rem;
    }
  `}
`

export const CoffeeCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  margin-top: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Price = styled.h4`
  ${({ theme }) => css`
    font-family: 'Baloo 2', sans-serif;
    font-weight: ${theme['font-extra-bold']};
    font-size: ${theme['2xl']};
    line-height: ${theme['base-line-height']};

    > span {
      font-family: 'Roboto', sans-serif;
      font-weight: ${theme['font-regular']};
      font-size: ${theme.sm};
      margin-right: 0.25rem;
    }
  `}
`
