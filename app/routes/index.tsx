import { useEffect, useState } from 'react'
import { ActionFunction, json, LoaderFunction } from '@remix-run/node'
import { Form, useLoaderData, useTransition } from '@remix-run/react'
import { Autocomplete, TextField } from '@mui/material'
import moment from 'moment'

import Header from '~/components/header'
import type { Boss } from '~/data/types'
import BossesDB from '~/data/database'
import { commitSession, getSession } from '~/lib/sessions'
import { getGuesses, appendGuess } from '~/data/session'
import { GameState, getGameState } from '~/data/game'

type Data = {
  boss: Boss
  options: Boss[]
  guesses: Boss[]
  state: GameState
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  const boss = BossesDB.getDailyBoss()
  const options = BossesDB.getAll()
  const guesses = getGuesses(session)

  const data: Data = {
    boss,
    options,
    guesses,
    state: getGameState(boss, guesses)
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
  const bossName = formData.get('guess') as string
  const guessedBoss = BossesDB.getByName(bossName)

  if (guessedBoss) appendGuess(session, guessedBoss)

  return json(
    {},
    {
      headers: { 'Set-Cookie': await commitSession(session) }
    }
  )
}

export default function Index() {
  // Loeader
  const data = useLoaderData<Data>()
  const transition = useTransition()

  // Form
  const [value, setValue] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState('')

  const isGuessing = data.state === GameState.GUESSING

  useEffect(() => {
    // Clear the guess field after submitting an answer
    if (transition.state === 'submitting') {
      setValue(null)
      setInputValue('')
    }
  }, [transition])

  return (
    <>
      <Header />
      <main className="flex flex-col items-center p-8 space-y-12 mt-6">
        <p className="text-md">Can you find out today's boss?</p>
        <div className="border border-white rounded">
          <img
            src={data.boss.imageUrl}
            alt="boss"
            className={`max-h-[300px] ${isGuessing ? 'blur-md' : ''}`}
          />
        </div>

        {isGuessing && (
          <Form method="post" className="w-[400px]">
            <Autocomplete
              options={data.options.map(boss => boss.name).sort()}
              value={value}
              onChange={(_, newValue) => setValue(newValue)}
              inputValue={inputValue}
              onInputChange={(_, newValue) => setInputValue(newValue)}
              renderInput={params => {
                return (
                  <TextField
                    {...params}
                    label={`Guess ${data.guesses.length + 1}/5`}
                    name="guess"
                    id="guess"
                  />
                )
              }}
            />
          </Form>
        )}

        {data.guesses.length > 0 && (
          <section className="text-center">
            <p>Guesses:</p>
            <ul>
              {data.guesses.map((boss, index) => (
                <li key={index}>{boss.name}</li>
              ))}
            </ul>
          </section>
        )}

        {data.state === GameState.VICTORY && (
          <div className="text-center">
            <p>Victory!</p>
            <p>
              You have won.... But the huntress... is nothing without the hunt.
              You... are nothing... without me!
            </p>
            <p>Come back tomorrow for another challenge</p>
          </div>
        )}
        {data.state === GameState.DEFEAT && (
          <div className="text-center">
            <p>Defeat! You are not prepared!</p>
            <p>
              Today's boss was: {data.boss.name} from {data.boss.location}
            </p>
            <p>Come back tomorrow for another challenge</p>
          </div>
        )}
      </main>
    </>
  )
}
