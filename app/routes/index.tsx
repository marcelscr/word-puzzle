import { ActionFunction, json, LoaderFunction } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import _ from 'lodash'
import moment from 'moment'

import Header from '~/components/header'
import type { Boss } from '~/data/types'
import BossesDB from '~/data/database'
import { commitSession, getSession } from '~/lib/sessions'
import { getGuesses, incrementGuesses } from '~/data/session'

type Data = {
  boss: Boss
  options: Boss[]
  guesses: number
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  const data: Data = {
    boss: BossesDB.getRandom(),
    options: BossesDB.getAll(),
    guesses: getGuesses(session)
  }

  return json(data, {
    headers: {
      'Set-Cookie': await commitSession(session, {
        expires: new Date(moment().endOf('day').toString())
      })
    }
  })
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  incrementGuesses(session)

  return json(
    {},
    {
      headers: { 'Set-Cookie': await commitSession(session) }
    }
  )
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

        <section className="text-center">
          <p>Guesses: {data.guesses}</p>
          <Form method="post">
            <button>Guess</button>
          </Form>
        </section>

        <section className="text-center">
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
