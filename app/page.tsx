import CountryCards from '@/components/country/country-cards'
import { ICountrySimple } from '@/types'

export default async function Home() {
  const { API_URL } = process.env
  const countries = await fetch(`${API_URL}/countries`)
    .then((res) => res.json())
    .then((data) => data as ICountrySimple[])

  return (
    <main className="min-h-screen w-full">
      <CountryCards countries={countries} />
    </main>
  )
}
