import { Session } from '@remix-run/node'

const GUESSES = 'guesses'

export const getGuesses = (session: Session) => session.get(GUESSES) ?? 0

export const incrementGuesses = (session: Session) =>
  session.set(GUESSES, getGuesses(session) + 1)
