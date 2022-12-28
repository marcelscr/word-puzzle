import { useEffect, useState } from 'react'
import { ActionFunction, json, LoaderFunction } from '@remix-run/node'
import { Form, useLoaderData, useTransition } from '@remix-run/react'
import { Autocomplete, TextField } from '@mui/material'
import moment from 'moment'

import Header from '~/components/header'
import Guess from '~/components/guess'
import type { Boss, BossComparison } from '~/data/types'
import BossesDB from '~/data/database'
import { commitSession, getSession } from '~/lib/sessions'
import { getGuesses, appendGuess } from '~/data/session'
import { GameState, getGameState, compareGuesses } from '~/data/game'

type Data = {
  boss: Boss
  options: Boss[]
  guesses: BossComparison[]
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
    guesses: compareGuesses(boss, guesses),
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
      <main className="flex flex-col items-center p-8 space-y-12 mt-6 text-center">
        <p className="text-md">Can you find out today's raid boss?</p>

        {/* Show the boss image */}
        <div className="border border-white rounded">
          <img
            src={data.boss.imageUrl}
            alt="boss"
            className={`w-full max-w-[350px] max-h-[300px] ${
              isGuessing ? 'blur-md' : ''
            }`}
          />
        </div>

        {/* Only show the textfield is the user is still guessing */}
        {isGuessing && (
          <Form method="post" className="w-full max-w-[350px]">
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

        {/* If the player won, show the victory message */}
        {data.state === GameState.VICTORY && (
          <div className="text-center">
            <p>Victory!</p>
            <p className="mt-2">
              Today's boss was:
              <br />
              <b>{data.boss.name}</b> from <b>{data.boss.location}</b>
            </p>
            <p className="mt-2">Come back tomorrow for another challenge!</p>
          </div>
        )}

        {/* If the player was defeated, show the lose message */}
        {data.state === GameState.DEFEAT && (
          <div className="text-center">
            <p>Defeat! You are not prepared!</p>
            <p className="mt-2">
              Today's boss was:
              <br />
              <b>{data.boss.name}</b> from <b>{data.boss.location}</b>
            </p>
            <p className="mt-2">Come back tomorrow for another challenge!</p>
          </div>
        )}

        {/* Show the guesses when there are guesses */}
        {data.guesses.length > 0 && (
          <section className="text-center space-y-2">
            <p>Guesses: </p>
            {data.guesses.map((guess, index) => (
              <Guess comparison={guess} key={index} />
            ))}
          </section>
        )}
      </main>
    </>
  )
}
