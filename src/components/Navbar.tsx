'use client'

import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

import { UserButton } from '@clerk/nextjs'
import { Logo } from './Logo'

const Navbar = () => {
  return (
    <nav className="border-gra-200 sticky inset-x-0 top-0 z-30 h-24 w-full border-b bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="border-zinz-200 flex h-24 items-center justify-between border-b">
          <div className="flex items-center">
            <Link
              href="/"
              className="z-40 flex items-center justify-between font-semibold"
            >
              <Logo />
              <p className="ml-4 h-full items-center">Working papers </p>
            </Link>
          </div>
          {/* To do - Add Mobile Nav*/}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link href="/onboarding" className="z-40 flex font-semibold">
                <span>Onboarding</span>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
