import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { formatNumber } from '@/lib/utils'
import { ICountry } from '@/types'

import CountryComplexInfo from './country-complex-info'
import CountryLinks from './country-links'
import CountryMinInfo from './country-min-info'

export default function CountryDetailsCard({
  country: {
    cca3,
    name,
    flags,
    capital,
    region,
    population,
    subregion,
    area,
    borders,
    currencies,
    altSpellings,
    independent,
    landlocked,
    languages,
    timezones,
    status,
    latlng,
    maps,
    tld,
    translations,
    unMember,
    car
  }
}: {
  country: ICountry
}) {
  return (
    <Card className="w-full max-w-xl">
      <Image
        alt={name.official}
        className="aspect-[4/3] h-80 w-full rounded-b-sm rounded-t-lg object-cover"
        height={100}
        src={flags[0]}
        width={100}
      />
      <CardHeader>
        <CardTitle className="text-3xl">{name.common}</CardTitle>
        <CardDescription className="text-lg">{name.official}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 text-sm text-gray-600 dark:text-gray-300">
        <CountryMinInfo data={cca3} label="CCA" />
        <CountryMinInfo data={capital[0] ?? 'N/A'} label="Capital" />
        <CountryMinInfo data={region} label="Region" />
        <CountryMinInfo data={subregion ?? 'N/A'} label="Subregion" />
        <CountryMinInfo data={formatNumber(population)} label="Population" />
        <CountryComplexInfo
          data={languages ? Object.values(languages) : []}
          label="Languages"
        />
        <CountryMinInfo data={formatNumber(area)} label="Area" />
        <CountryComplexInfo data={borders} label="Borders" />
        <CountryComplexInfo
          data={
            currencies ? Object.values(currencies).map(({ name }) => name) : []
          }
          label="Currencies"
        />
        <CountryComplexInfo data={altSpellings} label="Alt Spellings" />
        <CountryComplexInfo
          data={timezones.map((timezone) => timezone)}
          label="Timezone"
        />
        <CountryMinInfo data={independent ? 'Yes' : 'No'} label="Independent" />
        <CountryMinInfo data={landlocked ? 'Yes' : 'No'} label="Landlocked" />
        <CountryMinInfo data={status} label="Status" />
        <CountryMinInfo
          data={unMember ? 'Yes' : 'No'}
          label="United Nations Member"
        />
        <CountryMinInfo data={latlng[0].toString()} label="LAT" />
        <CountryMinInfo data={latlng[1].toString()} label="LNG" />
        <CountryLinks label="Google Maps" link={maps.googleMaps} />
        <CountryLinks label="OpenStreet Maps" link={maps.openStreetMaps} />
        <CountryMinInfo data={car.side} label="Driving Side" />
        <CountryComplexInfo
          data={car.signs[0] ? car.signs : []}
          label="Car Signs"
        />
        <CountryComplexInfo data={tld.map((tld) => tld)} label="TLD" />
        <CountryComplexInfo
          data={Object.values(translations).map(({ official }) => official)}
          label="Official Translations"
        />
        <CountryComplexInfo
          data={Object.values(translations).map(({ common }) => common)}
          label="Common Translations"
        />
      </CardContent>
    </Card>
  )
}
