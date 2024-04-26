import { capitalizeFirstLetter } from '@/lib/utils'

export default function CountryMinInfo({
  label,
  data
}: {
  label: string
  data: string
}) {
  return (
    <div className="flex justify-between border-b p-4 transition-colors hover:bg-muted/50">
      <span className="font-bold">{label}: </span>
      <span>{capitalizeFirstLetter(data)}</span>
    </div>
  )
}
