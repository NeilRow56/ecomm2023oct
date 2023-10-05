import AccountProfile from '@/components/forms/AccountProfile'
import { currentUser } from '@clerk/nextjs'
import type { User } from '@clerk/nextjs/api'

const Onboarding = async () => {
  const user: User | null = await currentUser()

  const userInfo = {}

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo ? userInfo?.name || user?.firstName : '',
    bio: userInfo ? userInfo?.bio : '',
    image: userInfo?.image || user?.imageUrl,
  }
  return (
    <main>
      <h1 className="text-2xl font-bold">Onboarding</h1>
      <p className="mt-2">Complete your profile now to use WpFile</p>
      <section className="mt-9 rounded-lg bg-gray-200 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  )
}

export default Onboarding
