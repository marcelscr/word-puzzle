import _ from 'lodash'

import type { Boss } from './types'
import {
  Expansion,
  BurningCrusadeDungeons,
  ClassicRaids,
  Instance,
  Gender
} from './constants'

const BOSSES: { [key: string]: Boss } = {
  CLASSIC_RAID_MOLTEN_CORE_RAGNAROS: {
    name: 'Ragnaros (Classic)',
    expansion: Expansion.CLASSIC,
    instance: Instance.RAID,
    location: ClassicRaids.MOLTEN_CORE,
    gender: Gender.AGENDER
  },
  BURNING_CRUSADE_DUNGEON_HELLFIRE_RAMPARTS_OMOR: {
    name: 'Omor the Unscarred',
    expansion: Expansion.BURNING_CRUSADE,
    instance: Instance.DUNGEON,
    location: BurningCrusadeDungeons.HELLFIRE_RAMPARTS,
    gender: Gender.MALE
  }
}

export class BossesDB {
  getRandomBoss(): Boss {
    const keys = _.keys(BOSSES)
    const randomKey = _.sample(keys)!

    return BOSSES[randomKey]
  }
}

const bossesDB = new BossesDB()

export default bossesDB
