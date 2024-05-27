import { capitalizeFirstLetter } from '@/lib/utils'

interface Props {
  label: string
  data: string
}

export default function CountryMinInfo({ label, data }: Props) {
  return (
    <div className="flex justify-between border-b p-4 transition-colors hover:bg-muted/50">
      <span className="font-extrabold">{label}: </span>
      <span className="font-extrabold">{capitalizeFirstLetter(data)}</span>
    </div>
  )
}
