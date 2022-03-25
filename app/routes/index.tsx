import { LoaderFunction, useLoaderData } from 'remix'

import Header from '~/components/header'
import type { Boss } from '~/models/types'
import BossesDB from '~/models/database'

type Data = {
  boss: Boss
}

export const loader: LoaderFunction = async () => {
  const data: Data = {
    boss: BossesDB.getRandomBoss()
  }

  return data
}

export default function Index() {
  const data = useLoaderData<Data>()

  return (
    <>
      <Header />
      <main className="flex flex-col items-center p-8">
        <h1>Welcome to Wordle of Warcraft</h1>
        <p>Boss of the day: {JSON.stringify(data.boss, null, 2)}</p>
      </main>
    </>
  )
}
