import styled, { css } from 'styled-components'

export const CheckoutSuccessWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 1rem;
`

export const CheckoutContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    max-width: 1220px;
    width: 100%;
    gap: 6rem;

    > img {
      flex: 1;

      @media (max-width: ${theme['breakpoint-lg']}) {
        display: none;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      flex: 1;
    }

    h1 {
      color: ${theme['yellow-dark']};
      font-family: 'Baloo 2', sans-serif;
      font-size: ${theme['3xl']};
      line-height: ${theme['base-line-height']};
      font-weight: ${theme['font-extra-bold']};
    }

    p {
      color: ${theme['base-subtitle']};
      font-size: ${theme.xl};
      line-height: ${theme['base-line-height']};
    }
  `}
`

export const CheckoutDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;

    border-left: 1px solid ${theme.yellow};
    border-top: 1px solid ${theme.yellow};

    border-right: 1px solid ${theme.purple};
    border-bottom: 1px solid ${theme.purple};

    border-radius: 6px 36px 6px 36px;
  `}
`

export const CheckoutInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    h2 {
      font-size: ${theme.md};
      line-height: ${theme['base-line-height']};
    }
  `}
`
