import Link from 'next/link'

export default function CountryLinks({
  link,
  label
}: {
  link: string
  label: string
}) {
  return (
    <div className="flex justify-between border-b p-4 transition-colors hover:bg-muted/50">
      <span className="font-bold">{label}: </span>
      <Link
        className="text-sky-700 hover:underline dark:text-cyan-500"
        href={link}
        target="_blank"
      >
        <span>View on {label}</span>
      </Link>
    </div>
  )
}
