import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-9xl font-extrabold text-primary font-headline">404</h1>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Page Not Found</h2>
      <p className="mt-6 text-base leading-7 text-foreground/80">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10">
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  )
}
