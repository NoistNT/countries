import type { ICountrySimple } from '@/types'

import CountryCard from './country-card'

export default async function CountryCards({
  countries
}: {
  countries: ICountrySimple[]
}) {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
      {countries.map((country) => (
        <CountryCard key={country._id} country={country} />
      ))}
    </div>
  )
}
