import { ICountrySimple } from '@/types'

import CountryCard from './country-card'

export default async function CountryCards({
  countries
}: {
  countries: ICountrySimple[]
}) {
  return (
    <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 xl:grid-cols-3">
      {countries.map((country) => (
        <CountryCard key={country._id} country={country} />
      ))}
    </div>
  )
}
