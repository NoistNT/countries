import Image from 'next/image';
import Link from 'next/link';

import type { ICountrySimple } from '@/types';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { formatNumber } from '@/lib/utils';

export default function CountryCard({
  country: { _id, name, flags, capital, region, population },
}: {
  country: ICountrySimple;
}) {
  return (
    <Card
      key={_id}
      className="mx-auto w-full max-w-md shadow-gray-300 hover:bg-secondary dark:shadow-gray-500"
    >
      <Link href={`/${_id}`}>
        <Image
          alt={name.official}
          className="aspect-[4/3] h-60 w-full rounded-b-sm rounded-t-xl object-cover"
          height={100}
          src={flags}
          width={100}
        />
        <CardHeader className="py-4">
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger className="w-fit max-w-full truncate text-left text-2xl font-semibold">
                {name.common}
              </TooltipTrigger>
              <TooltipContent>
                <CardDescription className="text-md font-semibold text-secondary">
                  {name.common}
                </CardDescription>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger className="w-fit max-w-full truncate text-left text-sm text-muted-foreground">
                {name.official}
              </TooltipTrigger>
              <TooltipContent>
                <CardDescription className="text-md font-semibold text-secondary">
                  {name.official}
                </CardDescription>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardHeader>
        <Separator className="mx-auto w-11/12 bg-gray-300 dark:bg-gray-700" />
        <CardContent className="flex items-center justify-between py-2 text-left text-sm text-muted-foreground">
          <div className="mx-auto flex flex-col">
            <span className="font-bold text-primary/80">Capital</span>
            <span>{capital ?? 'N/A'}</span>
          </div>
          <Separator
            className="h-12 bg-gray-300 dark:bg-gray-700"
            orientation="vertical"
          />
          <div className="mx-auto flex flex-col">
            <span className="font-bold text-primary/80">Region</span>
            <span>{region}</span>
          </div>
          <Separator
            className="h-12 bg-gray-300 dark:bg-gray-700"
            orientation="vertical"
          />
          <div className="mx-auto flex flex-col">
            <span className="font-bold text-primary/80">Population</span>
            <span>{formatNumber(population)}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
