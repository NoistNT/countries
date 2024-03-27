import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { ICountrySimple } from '@/types'

export default function CountryCard({ country }: { country: ICountrySimple }) {
  return (
    <Card key={country._id} className="w-full max-w-sm hover:bg-secondary">
      <Image
        alt={country.name.official}
        className="h-60 w-full rounded-b-sm rounded-t-lg object-cover"
        height={100}
        src={country.flags}
        width={100}
      />
      <CardHeader>
        <CardTitle className="text-2xl">{country.name.common}</CardTitle>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger className="mx-auto w-[250px] truncate text-gray-500 hover:cursor-default">
              {country.name.official}
            </TooltipTrigger>
            <TooltipContent>
              <CardDescription className="text-md font-semibold text-secondary">
                {country.name.official}
              </CardDescription>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent className="flex items-center justify-between text-left text-sm text-gray-600 dark:text-gray-300">
        <div className="mx-auto flex flex-col">
          <span className="font-bold">Capital</span>
          <span>{country.capital}</span>
        </div>
        <div className="mx-auto flex flex-col">
          <span className="font-bold">Region</span>
          <span>{country.region}</span>
        </div>
        <div className="mx-auto flex flex-col">
          <span className="font-bold">Subregion</span>
          <span>{country.subregion}</span>
        </div>
      </CardContent>
    </Card>
  )
}
