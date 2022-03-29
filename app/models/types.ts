import {
  Expansion,
  LocationType,
  ClassicDungeons,
  ClassicRaids,
  BurningCrusadeDungeons,
  BurningCrusadeRaids,
  Gender,
  Type
} from './constants'

export type Location =
  | ClassicDungeons
  | ClassicRaids
  | BurningCrusadeDungeons
  | BurningCrusadeRaids

export type Boss = {
  name: string
  expansion: Expansion
  locationType: LocationType
  location: Location
  gender: Gender
  type: Type
}
