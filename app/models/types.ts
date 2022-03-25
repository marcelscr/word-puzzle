import {
  Expansion,
  Instance,
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
  instance: Instance
  location: Location
  gender: Gender
  type: Type
}
