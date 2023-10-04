import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'

import { currentUser } from '@clerk/nextjs'
import type { User } from '@clerk/nextjs/api'
import { UserButton, auth } from '@clerk/nextjs'

const Topbar = async () => {
  const user: User | null = await currentUser()
  const { userId } = auth()

  return (
    <nav className="border-gra-200 sticky inset-x-0 top-0 z-30 h-14 w-full border-b bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="border-zinz-200 flex h-14 items-center justify-between border-b">
          <Link href="/" className="z-40 flex font-semibold">
            <span>quill.</span>
          </Link>

          {/* To do - Add Mobile Nav*/}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              {!user ? (
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Sign in
                </Link>
              ) : (
                <>
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                  >
                    dashboard
                  </Link>
                  <div className="flex w-fit flex-col p-2">
                    <h3 className="text-sm font-bold text-blue-800">
                      Signed in:
                    </h3>
                    <h3 className="capitalize text-gray-500">
                      {' '}
                      {user?.username}
                    </h3>
                  </div>
                </>
              )}
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Topbar
