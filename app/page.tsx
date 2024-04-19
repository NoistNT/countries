import CountryCards from '@/components/country/country-cards'
import { ICountrySimple } from '@/types'

export default async function Home() {
  const countries = await fetch(`${process.env.API_URL}/countries`)
    .then((res) => res.json())
    .then((data) => data as ICountrySimple[])

  return (
    <main className="min-h-screen w-full">
      <CountryCards countries={countries} />
    </main>
  )
}
