import styled, { css } from 'styled-components'

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    padding: 2rem 1rem;

    position: sticky;
    top: 0;
    background: ${theme.background};

    z-index: 10;
  `}
`

export const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 0.75rem;
`

export const Location = styled.button`
  ${({ theme }) => css`
    padding: 0.5rem;
    border-radius: 6px;

    border: 0;

    color: ${theme['purple-dark']};
    background: ${theme['purple-light']};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    line-height: ${theme['base-line-height']};
    font-weight: ${theme['font-regular']};

    font-size: ${theme.sm};

    > svg {
      color: ${theme.purple};
    }
  `}
`
