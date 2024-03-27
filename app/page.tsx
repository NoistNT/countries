import CountryCards from '@/components/country-cards'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { ICountrySimple } from '@/types'

export default async function Home() {
  const { API_URL } = process.env
  const countries = await fetch(`${API_URL}/countries`)
    .then((res) => res.json())
    .then((data) => data as ICountrySimple[])

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="fixed right-4 top-4">
        <ModeToggle />
      </div>
      <CountryCards countries={countries} />
    </main>
  )
}
