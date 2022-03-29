import _ from 'lodash'

import type { Boss } from './types'
import {
  Expansion,
  BurningCrusadeDungeons,
  ClassicRaids,
  LocationType,
  Gender,
  Type
} from './constants'

const BOSSES: { [key: string]: Boss } = {
  CLASSIC_RAID_MOLTEN_CORE_RAGNAROS: {
    name: 'Ragnaros (Classic)',
    expansion: Expansion.CLASSIC,
    locationType: LocationType.RAID,
    location: ClassicRaids.MOLTEN_CORE,
    gender: Gender.AGENDER,
    type: Type.ELEMENTAL
  },
  BURNING_CRUSADE_DUNGEON_HELLFIRE_RAMPARTS_OMOR: {
    name: 'Omor the Unscarred',
    expansion: Expansion.BURNING_CRUSADE,
    locationType: LocationType.DUNGEON,
    location: BurningCrusadeDungeons.HELLFIRE_RAMPARTS,
    gender: Gender.MALE,
    type: Type.DEMON
  }
}

export class BossesDB {
  // We will later evolve to get a random boss based on the current day
  getRandom(): Boss {
    const keys = _.keys(BOSSES)
    const randomKey = _.sample(keys)!

    return BOSSES[randomKey]
  }

  // Returns all the bosses. We will use to filter the values on the dropdown
  getAll(): Boss[] {
    return _.values(BOSSES)
  }
}

const bossesDB = new BossesDB()

export default bossesDB
