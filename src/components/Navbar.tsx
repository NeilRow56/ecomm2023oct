'use client'

import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
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
              <UserButton afterSignOutUrl="/" />
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
