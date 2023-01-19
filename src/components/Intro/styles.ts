import styled, { css, DefaultTheme } from 'styled-components'

import backgroundImage from '../../assets/intro-background.svg'

export const IntroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`

export const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: 100%;
  filter: blur(20px);
  width: 100%;
  height: 100%;

  position: absolute;
`

export const IntroContent = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  display: flex;
`

export const MainContent = styled.div``

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme['base-title']};
    font-weight: ${theme['font-extra-bold']};
    line-height: ${theme['base-line-height']};

    font-size: ${theme['5xl']};

    font-family: 'Baloo 2', sans-serif;
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme['base-subtitle']};
    font-weight: ${theme['font-regular']};
    line-height: ${theme['base-line-height']};

    font-size: ${theme.xl};
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
  `}
`

const modifiersItemBullet = {
  yellow: (theme: DefaultTheme) => css`
    background: ${theme.yellow};
  `,
  'yellow-dark': (theme: DefaultTheme) => css`
    background: ${theme['yellow-dark']};
  `,
  gray: (theme: DefaultTheme) => css`
    background: ${theme['base-text']};
  `,
  purple: (theme: DefaultTheme) => css`
    background: ${theme.purple};
  `,
}

interface ItemBulletProps {
  color: keyof typeof modifiersItemBullet
}

export const ItemBullet = styled.span<ItemBulletProps>`
  ${({ theme, color }) => css`
    padding: 0.5rem;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.white};
    background: ${theme['yellow-dark']};

    ${color && modifiersItemBullet[color](theme)}
  `}
`
