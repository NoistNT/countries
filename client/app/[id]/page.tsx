import { getCountries, getCountry } from '@/api'
import CountryDetailsCard from '@/components/country/country-details-card'

export async function generateMetadata({
  params: { id }
}: {
  params: { id: string }
}) {
  const country = await getCountry(id)

  return {
    title: country?.name.official,
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!)
  }
}

export async function generateStaticParams() {
  const countries = await getCountries()

  return countries?.map((country) => ({
    id: country._id.toString()
  }))
}

export const dynamicParams = false

export default async function CountryDetail({
  params: { id }
}: {
  params: { id: string }
}) {
  const country = await getCountry(id)

  if (!country) return

  return <CountryDetailsCard country={country} />
}
