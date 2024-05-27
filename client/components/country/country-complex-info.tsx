import { capitalizeFirstLetter, cn, generateRandomKey } from '@/lib/utils'

interface Props {
  label: string
  data: string[]
  className?: string | undefined
}

export default function CountryComplexInfo({ label, data, className }: Props) {
  return (
    <div
      className={cn(
        'flex justify-between border-b p-4 transition-colors hover:bg-muted/50',
        className
      )}
    >
      <span className="font-bold">{capitalizeFirstLetter(label)}: </span>
      <div className="flex flex-col">
        {data.length === 0 ? (
          <span>N/A</span>
        ) : (
          data.map((item) => (
            <span key={generateRandomKey()} className="font-extrabold">
              {item}
            </span>
          ))
        )}
      </div>
    </div>
  )
}
