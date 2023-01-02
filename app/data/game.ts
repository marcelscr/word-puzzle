import type { Boss, BossComparison } from '~/data/types'
import { NumberCompareEnum } from '~/data/constants'

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

export const compareGuesses = (boss: Boss, guesses: Boss[]): BossComparison[] =>
  guesses.map(guessedBoss => ({
    guessedBoss,
    expansion: boss.expansion === guessedBoss.expansion,
    locationType: boss.locationType === guessedBoss.locationType,
    location: boss.location === guessedBoss.location,
    gender: boss.gender === guessedBoss.gender,
    type: boss.type === guessedBoss.type,
    position:
      boss.position === guessedBoss.position
        ? NumberCompareEnum.EQUAL
        : boss.position > guessedBoss.position
        ? NumberCompareEnum.HIGHER
        : NumberCompareEnum.LOWER
  }))
