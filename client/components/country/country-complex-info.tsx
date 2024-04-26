import { capitalizeFirstLetter } from '@/lib/utils'

export default function CountryComplexInfo({
  label,
  data
}: {
  label: string
  data: string[]
}) {
  return (
    <div className="flex justify-around">
      <span className="font-bold">{capitalizeFirstLetter(label)}: </span>
      <div className="flex flex-col">
        {data.length === 0 ? (
          <span>N/A</span>
        ) : (
          data.map((item) => <span key={item}>{item}</span>)
        )}
      </div>
    </div>
  )
}
