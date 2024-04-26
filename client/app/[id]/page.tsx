import CountryDetailsCard from '@/components/country/country-details-card'
import { ICountry } from '@/types'

export async function generateMetadata({
  params: { id }
}: {
  params: { id: string }
}) {
  const country = await fetch(`${process.env.API_URL}/countries/${id}`)
    .then((res) => res.json())
    .then((data) => data as ICountry)

  return {
    title: country.name.official,
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!)
  }
}

export async function generateStaticParams() {
  const countries = await fetch(`${process.env.API_URL}/countries`)
    .then((res) => res.json())
    .then((data) => data as ICountry[])

  return countries.map((country: ICountry) => ({
    id: country._id.toString()
  }))
}

export const dynamicParams = false

export default async function CountryDetail({
  params: { id }
}: {
  params: { id: string }
}) {
  const country = await fetch(`${process.env.API_URL}/countries/${id}`)
    .then((res) => res.json())
    .then((data) => data as ICountry)

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-4">
      <CountryDetailsCard country={country} />
    </div>
  )
}
