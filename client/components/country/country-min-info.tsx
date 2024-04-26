import { capitalizeFirstLetter } from '@/lib/utils'

export default function CountryMinInfo({
  label,
  data
}: {
  label: string
  data: string
}) {
  return (
    <div className="flex justify-around">
      <span className="font-bold">{label}: </span>
      <span>{capitalizeFirstLetter(data)}</span>
    </div>
  )
}
