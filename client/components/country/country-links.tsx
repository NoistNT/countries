import Link from 'next/link';

interface Props {
  link: string;
  label: string;
}

export default function CountryLinks({ link, label }: Props) {
  return (
    <div className="flex justify-between border-b p-4 transition-colors hover:bg-muted/50">
      <span className="font-extrabold">{label}: </span>
      <Link
        className="font-bold text-sky-700 hover:underline dark:text-cyan-500"
        href={link}
        target="_blank"
      >
        <span>View on {label}</span>
      </Link>
    </div>
  );
}
