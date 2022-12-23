import _ from 'lodash'
import seedrandom from 'seedrandom'
import moment from 'moment'

import type { Boss } from './types'
import * as Constants from './constants'

const BOSSES: { [key: string]: Boss } = {
  CLASSIC_RAID_MOLTEN_CORE_RAGNAROS: {
    name: 'Ragnaros (Classic)',
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.MOLTEN_CORE,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.ELEMENTAL
  },
  TBC_DUNGEON_HELLFIRE_RAMPARTS_OMOR: {
    name: 'Omor the Unscarred',
    expansion: Constants.Expansion.BURNING_CRUSADE,
    locationType: Constants.LocationType.DUNGEON,
    location: Constants.BurningCrusadeDungeons.HELLFIRE_RAMPARTS,
    gender: Constants.Gender.MALE,
    type: Constants.Type.DEMON
  },
  WOTLK_RAID_ULDUAR_YOGG_SARON: {
    name: 'Yogg-Saron',
    expansion: Constants.Expansion.WRATH_OF_THE_LICH_KING,
    locationType: Constants.LocationType.RAID,
    location: Constants.LichKingRaids.ULDUAR,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.ABERRATION
  }
}

export class BossesDB {
  getRandom(): Boss {
    // Select a fixed value based on the current date
    const rng = seedrandom(moment().format('YYYY-MM-DD'))
    const keys = _.keys(BOSSES)
    const randomKey = keys[rng.int32() % keys.length]

    return BOSSES[randomKey]
  }

  // Returns all the bosses. We will use to filter the values on the dropdown
  getAll(): Boss[] {
    return _.values(BOSSES)
  }
}

const bossesDB = new BossesDB()

export default bossesDB
