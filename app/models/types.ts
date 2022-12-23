import * as Constants from './constants'

export type Location =
  | Constants.ClassicDungeons
  | Constants.ClassicRaids
  | Constants.BurningCrusadeDungeons
  | Constants.BurningCrusadeRaids
  | Constants.LichKingDungeons
  | Constants.LichKingRaids

export type Boss = {
  name: string
  expansion: Constants.Expansion
  locationType: Constants.LocationType
  location: Location
  gender: Constants.Gender
  type: Constants.Type
}
