import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

import * as S from './styles'

import { useCallback, useEffect, useState } from 'react'
import { Button } from '../Button'
import { findByPostalCode } from '../../services/viacep'
import { FormGroup } from '../FormGroup'
import { Check, HouseLine } from 'phosphor-react'

const KEY_LOCAL_STORAGE_DELIVERY_ADDRESS = '@coffee-delivery:delivery-address'

const deliveryAddressFormValidationSchema = zod.object({
  postal_code: zod
    .string({
      required_error: 'Campo obrigatório',
    })
    .regex(/^\d{5}-?\d{3}$/, 'O formato do CEP não é válido'), // Regex to allow only 9 digit zip code with or without dashes
  street: zod
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(3, 'A cidade é um campo obrigátorio'),
  number: zod
    .number({
      invalid_type_error: 'O numero da residência é um campo obrigatório',
    })
    .min(1, 'O numero da residência é um campo obrigatório')
    .positive('Informe um número inteiro')
    .nullable(),
  complement: zod.string().optional(),

  neighborhood: zod
    .string({
      required_error: 'O bairro é um campo obrigatório',
    })
    .min(1, 'O bairro é um campo obrigatório'),
  city: zod.string({
    required_error: 'A cidade é um campo obrigatório',
  }),
  state: zod.string({
    required_error: 'O Estado é um campo obrigatório',
  }),
})

type DeliveryAddressFormData = zod.infer<
  typeof deliveryAddressFormValidationSchema
>

export function FormDeliveryAddress() {
  const [showFormDeliveryAddress, setShowdeliveryAddress] = useState(false)

  const [deliveryAddress, setdeliveryAddress] = useState(() => {
    const storage = localStorage.getItem(KEY_LOCAL_STORAGE_DELIVERY_ADDRESS)

    if (storage) {
      return JSON.parse(storage)
    }

    return {}
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<DeliveryAddressFormData>({
    resolver: zodResolver(deliveryAddressFormValidationSchema.passthrough()),
    defaultValues: deliveryAddress,
  })

  const onSubmit = async (data: DeliveryAddressFormData) => {
    setdeliveryAddress(data)
    setShowdeliveryAddress(false)

    localStorage.setItem(
      KEY_LOCAL_STORAGE_DELIVERY_ADDRESS,
      JSON.stringify(data),
    )
  }

  const postalCode = watch('postal_code')

  const handleChangePostalCode = useCallback(async () => {
    const result = await findByPostalCode(postalCode)

    setValue('city', result!.city)
    setValue('postal_code', result!.postal_code)
    setValue('state', result!.state)
  }, [postalCode, setValue])

  useEffect(() => {
    if (!!postalCode && postalCode.length > 7) {
      handleChangePostalCode()
    }
  }, [postalCode, handleChangePostalCode])

  return (
    <>
      {!showFormDeliveryAddress && !!deliveryAddress.city && (
        <S.SelectedAddress>
          <S.SelectedAddressContent>
            <HouseLine weight="bold" size={22} />
            <span>
              {`
              ${deliveryAddress.street} ${deliveryAddress.number},
              ${deliveryAddress.complement} ${deliveryAddress.neighborhood}, ${deliveryAddress.city}, ${deliveryAddress.state} ${deliveryAddress.postal_code}
             `}
            </span>
          </S.SelectedAddressContent>

          <S.Badge>
            <Check />
          </S.Badge>

          <Button
            variant="purple"
            minimal
            onClick={() => setShowdeliveryAddress(true)}
            label="Editar endereço"
          />
        </S.SelectedAddress>
      )}

      {(showFormDeliveryAddress || !deliveryAddress.city) && (
        <S.FormDeliveryAddressWrapper
          onSubmit={handleSubmit(onSubmit)}
          action="#"
        >
          <FormGroup
            size="medium"
            label="CEP"
            inputName="postal_code"
            errors={errors}
            {...register('postal_code')}
          />

          <FormGroup
            label="Rua"
            inputName="street"
            errors={errors}
            {...register('street')}
          />

          <S.FormRow>
            <FormGroup
              size="medium"
              label="Número"
              inputName="number"
              errors={errors}
              {...register('number', {
                valueAsNumber: true,
              })}
            />

            <FormGroup
              label="Complemento"
              inputName="complement"
              helpText="Apartamento/Bloco/Casa"
              isOptional
              errors={errors}
              {...register('complement')}
            />
          </S.FormRow>
          <S.FormRow>
            <FormGroup
              size="medium"
              label="Bairro"
              inputName="neighborhood"
              errors={errors}
              {...register('neighborhood')}
            />

            <FormGroup
              label="Cidade"
              inputName="city"
              errors={errors}
              disabled
              {...register('city')}
            />
            <FormGroup
              size="small"
              label="UF"
              inputName="state"
              errors={errors}
              disabled
              {...register('state')}
            />
          </S.FormRow>
          <Button variant="purple" label="Salvar endereço" />
        </S.FormDeliveryAddressWrapper>
      )}
    </>
  )
}
