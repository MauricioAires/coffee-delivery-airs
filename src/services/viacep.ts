type ViacepData = {
  postal_code: string
  state: string
  city: string
}

export async function findByPostalCode(postalCode: string) {
  const postalCodeFormatted = postalCode.replace(/\D/g, '')

  return fetch(`https://viacep.com.br/ws/${postalCodeFormatted}/json/`)
    .then((res) => res.json())
    .then((data) => {
      const result: ViacepData = {
        city: data.localidade,
        postal_code: data.cep,
        state: data.uf,
      }

      return result
    })
    .catch((err) => {
      console.error(err)
      return null
    })
}

export function calculateDeliveryPrice(totalPrice: number) {
  /**
   * @description Aqui deveria ser a API dos correios
   * para calcular o frete recebendo o CEP de origem e
   * desitino mas está dando erro [press F]
   *
   * Dessa forma para calcular o preço vou cobrar apenas um juros de 15%
   */

  return (totalPrice * 15) / 100
}
