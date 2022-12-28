import type { Boss } from '~/data/types'

export enum GameState {
  GUESSING,
  VICTORY,
  DEFEAT
}

export const getGameState = (boss: Boss, guesses: Boss[]) => {
  if (guesses.map(boss => boss.name).includes(boss.name))
    return GameState.VICTORY
  if (guesses.length >= 5) return GameState.DEFEAT
  return GameState.GUESSING
}
