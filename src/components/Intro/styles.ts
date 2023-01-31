import styled, { css } from 'styled-components'

import backgroundImage from '../../assets/intro-background.svg'

export const IntroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  padding: 0 1rem;

  margin-bottom: 1.5rem;
`

export const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: 100%;
  filter: blur(20px);

  inset: 0;
  position: absolute;
`

export const IntroContent = styled.div`
  ${({ theme }) => css`
    max-width: 1220px;
    margin: 0 auto;

    display: flex;

    img {
      @media (max-width: ${theme['breakpoint-lg']}) {
        display: none;
      }
    }
  `}
`

export const MainContent = styled.div``

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme['base-title']};
    font-weight: ${theme['font-extra-bold']};
    line-height: ${theme['base-line-height']};

    font-size: ${theme['5xl']};

    font-family: 'Baloo 2', sans-serif;

    @media (max-width: ${theme['breakpoint-md']}) {
      font-size: ${theme['3xl']};
    }
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme['base-subtitle']};
    font-weight: ${theme['font-regular']};
    line-height: ${theme['base-line-height']};

    font-size: ${theme.xl};

    @media (max-width: ${theme['breakpoint-md']}) {
      font-size: ${theme.lg};
    }
  `}
`

export const ListItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.25rem;

  margin-top: 4.125rem;
`

export const Item = styled.div`
  ${({ theme }) => css`
    flex: calc(50% - 1.25rem);

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    color: ${theme['base-text']};
    line-height: ${theme['base-line-height']};
    font-size: ${theme.md};

    @media (max-width: ${theme['breakpoint-md']}) {
      font-size: ${theme.sm};
    }
  `}
`
