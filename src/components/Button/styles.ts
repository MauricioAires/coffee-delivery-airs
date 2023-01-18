import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.button`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;
    cursor: pointer;
    padding: 0.75rem;

    border-radius: 6px;

    background: ${theme.yellow};
    color: ${theme.white};
    font-weight: ${theme['font-bold']};
    font-size: ${theme.sm};

    text-transform: uppercase;
    line-height: ${theme['large-line-height']};

    transition: background ease-in-out 0.2s;

    &:hover {
      background: ${theme['yellow-dark']};
    }
  `}
`
