import Image from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { formatNumber } from '@/lib/utils'
import { ICountrySimple } from '@/types'

export default function CountryCard({ country }: { country: ICountrySimple }) {
  return (
    <Card
      key={country._id}
      className="mx-auto w-full max-w-md shadow-gray-300 hover:bg-secondary dark:shadow-gray-500"
    >
      <Link href={`/${country._id}`}>
        <Image
          alt={country.name.official}
          className="aspect-[4/3] h-60 w-full rounded-b-sm rounded-t-xl object-cover"
          height={100}
          src={country.flags}
          width={100}
        />
        <CardHeader className="py-3">
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger className="w-fit max-w-full truncate text-left text-2xl font-semibold">
                {country.name.common}
              </TooltipTrigger>
              <TooltipContent>
                <CardDescription className="text-md font-semibold text-secondary">
                  {country.name.common}
                </CardDescription>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger className="w-fit max-w-full truncate text-left text-sm text-muted-foreground">
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
        <Separator className="mx-auto w-11/12 bg-gray-300 dark:bg-gray-700" />
        <CardContent className="flex items-center justify-between py-2 text-left text-sm text-gray-600 dark:text-gray-300">
          <div className="mx-auto flex flex-col">
            <span className="font-bold">Capital</span>
            <span>{country.capital}</span>
          </div>
          <Separator
            className="h-12 bg-gray-300 dark:bg-gray-700"
            orientation="vertical"
          />
          <div className="mx-auto flex flex-col">
            <span className="font-bold">Region</span>
            <span>{country.region}</span>
          </div>
          <Separator
            className="h-12 bg-gray-300 dark:bg-gray-700"
            orientation="vertical"
          />
          <div className="mx-auto flex flex-col">
            <span className="font-bold">Population</span>
            <span>{formatNumber(country.population)}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
