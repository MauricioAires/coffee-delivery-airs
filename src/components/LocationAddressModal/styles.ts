import styled, { css } from 'styled-components'

export const ModalContent = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: 100;

    height: 500px;

    width: 600px;
    max-width: min(90%, 600px);

    box-shadow: 0px 4px 16px rgb(5 0 56 / 12%);
    background: ${theme.background};

    border-radius: 6px;

    padding: 3rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    flex-direction: column;

    gap: 2rem;

    position: absolute;
    animation: bobbingAnim ease-in-out 0.3s;

    @keyframes bobbingAnim {
      0% {
        transform: translateY(-1rem);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      width: 100%;

      > p {
        line-height: ${theme['base-line-height']};

        font-size: ${theme.lg};
      }

      input {
        width: 100%;
        background: ${theme['base-input']};
        color: ${theme['base-text']};
        border: 0;
        height: 2.625rem;
        padding: 0.875rem;

        border-radius: 0.25rem;

        border: 1px solid ${theme['base-button']};
        line-height: ${theme['base-line-height']};

        &::placeholder {
          color: ${theme['base-label']};
        }

        &:focus {
          box-shadow: none;
          outline-color: ${theme['yellow-dark']};
          outline-width: 1px;
          outline-style: solid;
        }
      }
    }

    > img {
      width: 100px;
    }
  `}
`

export const LoadingAutocomplete = styled.div`
  padding: 1rem;
`

export const AutocompleteOption = styled.div`
  padding: 1rem;
`

interface LocationAddressModalWrapperProps {
  isOpen: boolean
}

const modifiersLocationAddressModalWrapper = {
  isOpen: () => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

export const LocationAddressModalWrapper = styled.div<LocationAddressModalWrapperProps>`
  ${({ isOpen }) => css`
    display: none;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    min-height: 100vh;
    z-index: 90;

    ${isOpen && modifiersLocationAddressModalWrapper.isOpen()}
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: ${theme.white};

    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.35);

    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
  `}
`
