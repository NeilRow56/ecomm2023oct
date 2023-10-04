import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      height={48}
      width={48}
      priority
      className="rounded-full"
    />
  )
}
