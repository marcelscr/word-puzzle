import { ActionFunction, json, LoaderFunction } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import moment from 'moment'
import { Autocomplete, TextField } from '@mui/material'

import Header from '~/components/header'
import type { Boss } from '~/data/types'
import BossesDB from '~/data/database'
import { commitSession, getSession } from '~/lib/sessions'
import { getGuesses, appendGuess } from '~/data/session'

enum GameState {
  GUESSING,
  VICTORY,
  DEFEAT
}

type Data = {
  boss: Boss
  options: Boss[]
  guesses: Boss[]
  state: GameState
}

const getGameState = (boss: Boss, guesses: Boss[]) => {
  if (guesses.map(boss => boss.name).includes(boss.name))
    return GameState.VICTORY
  if (guesses.length >= 5) return GameState.DEFEAT
  return GameState.GUESSING
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  const dailyBoss = BossesDB.getDailyBoss()
  const guesses = getGuesses(session)

  const data: Data = {
    boss: BossesDB.getDailyBoss(),
    options: BossesDB.getAll(),
    guesses: getGuesses(session),
    state: getGameState(dailyBoss, guesses)
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

  const formData = await request.formData()
  const guess = formData.get('guess')
  const boss = BossesDB.getByName(guess as string)

  if (boss) {
    appendGuess(session, boss)
  } else {
    // Error
  }

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
        <section>
          <img
            src={data.boss.imageUrl}
            alt="boss"
            className="max-h-[400px] blur-md"
          />
        </section>

        {data.state === GameState.GUESSING && (
          <section className="text-center">
            <Form method="post" className="w-[500px]">
              <Autocomplete
                id="boss-complete"
                options={data.options.map(boss => boss.name)}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Boss guess:"
                    name="guess"
                    id="guess"
                  />
                )}
              />
            </Form>
          </section>
        )}

        {data.guesses.length > 0 && (
          <section className="text-center">
            <p>Guesses until now:</p>
            <ul>
              {data.guesses.map(boss => (
                <li>{boss.name}</li>
              ))}
            </ul>
          </section>
        )}

        {data.state === GameState.VICTORY && <p>Victory!</p>}
        {data.state === GameState.DEFEAT && <p>Defeat!</p>}
      </main>
    </>
  )
}
