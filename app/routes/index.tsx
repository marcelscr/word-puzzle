import { LoaderFunction, useLoaderData } from 'remix'
import _ from 'lodash'

import Header from '~/components/header'
import type { Boss } from '~/models/types'
import BossesDB from '~/models/database'

type Data = {
  boss: Boss
  options: Boss[]
}

export const loader: LoaderFunction = async () => {
  const data: Data = {
    boss: BossesDB.getRandom(),
    options: BossesDB.getAll()
  }

  return data
}

export default function Index() {
  const data = useLoaderData<Data>()

  return (
    <>
      <Header />
      <main className="flex flex-col items-center p-8 space-y-16">
        <h1>Welcome to Wordle of Warcraft</h1>

        <section>
          <p>Boss of the day: {JSON.stringify(data.boss, null, 2)}</p>
        </section>

        <section>
          <p>All bosses:</p>
          <ul>
            {_.map(data.options, boss => {
              return <li key={boss.name}>{boss.name}</li>
            })}
          </ul>
        </section>
      </main>
    </>
  )
}
