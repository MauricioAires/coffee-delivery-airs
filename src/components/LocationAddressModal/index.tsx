import { useEffect, useState } from 'react'
import checkoutSuccess from '../../assets/coffee-delivery-logo.svg'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

import { useCoffeeShop } from '../../contexts/coffee-shop'

import * as S from './styles'

interface LocationAddressModalProps {
  isOpen: boolean
  onClose: (state: boolean) => void
}

export function LocationAddressModal({
  isOpen = false,
  onClose,
}: LocationAddressModalProps) {
  const { changeCoffeeShopAddress, coffeeShopAddress } = useCoffeeShop()

  const [address, setAddress] = useState('')

  useEffect(() => {
    if (!!coffeeShopAddress?.city && !!coffeeShopAddress?.state) {
      setAddress(`${coffeeShopAddress.city}, ${coffeeShopAddress.state}`)
    }
  }, [coffeeShopAddress])

  const handleChange = (address: any) => {
    setAddress(address)
  }

  const handleSelect = (address: any) => {
    geocodeByAddress(address)
      .then((results) => {
        results[0].address_components.forEach((component) => {
          if (component.types.includes('postal_code')) {
            const postalCodeArray = component.long_name.split('')

            postalCodeArray.splice(4, 0, '-')

            changeCoffeeShopAddress({
              postal_code: postalCodeArray.join(''),
            })
          }
          if (component.types.includes('administrative_area_level_2')) {
            changeCoffeeShopAddress({
              city: component.long_name,
            })
          }
          if (component.types.includes('administrative_area_level_1')) {
            changeCoffeeShopAddress({
              state: component.short_name,
            })
          }

          onClose(false)
        })
      })
      .catch((error) => console.error('Error', error))
  }

  return (
    <S.LocationAddressModalWrapper isOpen={isOpen}>
      <S.Overlay onClick={() => onClose(false)} />
      <S.ModalContent>
        <img src={checkoutSuccess} alt="" />
        <div>
          <p>Consulte a disponibilidade dos nossos serviços na sua região.</p>

          <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div
                style={{
                  width: '100%',
                }}
              >
                <input
                  {...getInputProps({
                    placeholder: 'Digite seu endereço de entrega',
                    className: 'location-search-input',
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && (
                    <S.LoadingAutocomplete>Carregando...</S.LoadingAutocomplete>
                  )}

                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item'
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' }
                    return (
                      <S.AutocompleteOption
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                        key={suggestion.id}
                      >
                        <span>{suggestion.description}</span>
                      </S.AutocompleteOption>
                    )
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      </S.ModalContent>
    </S.LocationAddressModalWrapper>
  )
}
