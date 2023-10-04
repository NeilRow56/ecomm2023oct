import Topbar from '@/components/Topbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SignOutButton, SignedIn } from '@clerk/nextjs'

export default function Home() {
  return (
    <>
      <Topbar />
      <main className="flex h-screen flex-grow items-center justify-center bg-blue-50 ">
        <div className=" text-center ">
          <Button asChild variant="sky">
            <Link href="/">Home Page</Link>
          </Button>
        </div>
      </main>
    </>
  )
}
