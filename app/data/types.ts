import * as Constants from './constants'

type RaidLocations =
  | Constants.ClassicRaids
  | Constants.BurningCrusadeRaids
  | Constants.LichKingRaids
  | Constants.CataclysmRaids
  | Constants.PandariaRaids
  | Constants.WarlordsRaids
  | Constants.LegionRaids
  | Constants.BattleForAzerothRaids
  | Constants.ShadowlandsRaids
  | Constants.DragonflightRaids

type DungeonLocations =
  | Constants.ClassicDungeons
  | Constants.BurningCrusadeDungeons
  | Constants.LichKingDungeons
  | Constants.CataclysmDungeons
  | Constants.PandariaDungeons
  | Constants.WarlordsDungeons
  | Constants.LegionDungeons
  | Constants.BattleForAzerothDungeons
  | Constants.ShadowlandsDungeons
  | Constants.DragonflightDungeons

export type Location = DungeonLocations | RaidLocations

export type Boss = {
  name: string
  imageUrl: string
  expansion: Constants.Expansion
  locationType: Constants.LocationType
  location: Location
  gender: Constants.Gender
  type: Constants.Type
  subType: Constants.SubType
  position: number
}
