import { ICountry, ICountrySimple } from './types'

const { API_URL } = process.env

export async function getCountries() {
  try {
    const response = await fetch(`${API_URL!}/countries`)

    if (!response.ok) throw new Error('Failed to fetch countries')

    return (await response.json()) as ICountrySimple[]
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
  }
}

export async function getCountry(id: string) {
  try {
    const response = await fetch(`${API_URL!}/countries/${id}`)

    if (!response.ok) throw new Error(`Failed to fetch country: ${id}`)

    return (await response.json()) as ICountry
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
  }
}
