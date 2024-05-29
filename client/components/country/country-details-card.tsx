import type { ICountry } from '@/types'

import Image from 'next/image'

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { formatNumber } from '@/lib/utils'

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
    maps: { googleMaps, openStreetMaps },
    tld,
    translations,
    unMember,
    car
  }
}: {
  country: ICountry
}) {
  return (
    <div className="mx-auto flex max-w-xl border-gray-300 px-1.5 dark:border-gray-700/20">
      <div className="flex w-full flex-col rounded-2xl border-2">
        <Image
          alt={name.official}
          className="aspect-[4/3] h-80 w-full rounded-b-sm rounded-t-xl object-cover"
          height={100}
          src={flags[0]}
          width={100}
        />
        <CardHeader>
          <CardTitle className="text-3xl">{name.common}</CardTitle>
          <CardDescription className="text-lg">{name.official}</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="flex flex-col p-0 text-[15px] text-gray-600 dark:text-gray-300">
          <CountryMinInfo data={cca3} label="CCA3" />
          <Separator />
          <CountryMinInfo data={capital[0] ?? 'N/A'} label="Capital" />
          <Separator />
          <CountryMinInfo data={region} label="Region" />
          <Separator />
          <CountryMinInfo data={subregion ?? 'N/A'} label="Subregion" />
          <Separator />
          <CountryMinInfo data={formatNumber(population)} label="Population" />
          <Separator />
          <CountryMinInfo data={formatNumber(area)} label="Area" />
          <Separator />
          <CountryComplexInfo
            data={languages ? Object.values(languages) : []}
            label="Languages"
          />
          <Separator />
          <CountryComplexInfo data={borders} label="Borders" />
          <Separator />
          <CountryComplexInfo
            data={
              currencies
                ? Object.values(currencies).map(({ name }) => name)
                : []
            }
            label="Currencies"
          />
          <Separator />
          <CountryComplexInfo data={altSpellings} label="Alt Spellings" />
          <Separator />
          <CountryComplexInfo
            data={timezones.map((timezone) => timezone)}
            label="Timezone"
          />
          <Separator />
          <CountryMinInfo
            data={independent ? 'Yes' : 'No'}
            label="Independent"
          />
          <Separator />
          <CountryMinInfo data={landlocked ? 'Yes' : 'No'} label="Landlocked" />
          <Separator />
          <CountryMinInfo data={status} label="Status" />
          <CountryMinInfo
            data={unMember ? 'Yes' : 'No'}
            label="United Nations Member"
          />
          <Separator />
          <CountryMinInfo data={latlng[0].toString()} label="LAT" />
          <Separator />
          <CountryMinInfo data={latlng[1].toString()} label="LNG" />
          <Separator />
          <CountryLinks label="Google Maps" link={googleMaps} />
          <Separator />
          <CountryLinks label="OpenStreet Maps" link={openStreetMaps} />
          <Separator />
          <CountryMinInfo data={car.side} label="Driving Side" />
          <Separator />
          <CountryComplexInfo
            data={car.signs[0] ? car.signs : []}
            label="Car Signs"
          />
          <Separator />
          <CountryComplexInfo data={tld.map((tld) => tld)} label="TLD" />
          <Separator />
          <CountryComplexInfo
            data={Object.values(translations).map(({ official }) => official)}
            label="Official Translations"
          />
          <Separator />
          <CountryComplexInfo
            className="rounded-b-lg"
            data={Object.values(translations).map(({ common }) => common)}
            label="Common Translations"
          />
        </CardContent>
      </div>
    </div>
  )
}
