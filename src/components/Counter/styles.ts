import styled, { css } from 'styled-components'

export const CounterWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0.5rem 0.75rem;

    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    background: ${theme['base-button']};
    border-radius: 6px;

    > button {
      border: 0;
      height: auto;
      cursor: pointer;
      color: ${theme.purple};
      line-height: ${theme['base-line-height']};
      background: ${theme['base-button']};

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        color: ${theme['purple-dark']};
      }

      &:disabled {
        color: ${theme['base-label']};
      }
    }

    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 22px;
      font-size: ${theme.md};
      color: ${theme['base-title']};
      line-height: ${theme['base-line-height']};
    }
  `}
`
