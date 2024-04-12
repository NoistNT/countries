import { CardDescription, CardFooter } from './ui/card'

export default function Footer() {
  return (
    <CardFooter className="flex justify-center py-6 leading-[3rem] text-muted-foreground opacity-80">
      <CardDescription>
        Made with ❤️ by{' '}
        <a
          className="text-align-center text-cyan-500 hover:underline dark:text-cyan-400"
          href="https://github.com/NoistNT"
        >
          Ariel Piazzano
        </a>
      </CardDescription>
    </CardFooter>
  )
}
