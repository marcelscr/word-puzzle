import { Session } from '@remix-run/node'
import { Boss } from './types'

const GUESSES = 'guesses'

export const getGuesses = (session: Session): Boss[] => {
  const json = session.get(GUESSES)
  return json ? JSON.parse(json) : []
}

export const appendGuess = (session: Session, boss: Boss) => {
  const guesses = getGuesses(session)
  const newGuesses = [...guesses, boss]
  session.set(GUESSES, JSON.stringify(newGuesses))
}
