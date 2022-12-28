import _ from 'lodash'
import seedrandom from 'seedrandom'
import moment from 'moment'

import type { Boss } from './types'
import * as Bosses from './bosses'

const BOSSES: Boss[] = [...Bosses.ClassicBosses]

export class BossesDB {
  getDailyBoss(): Boss {
    // Select a fixed value based on the current date
    const rng = seedrandom(moment().format('YYYY-MM-DD'))
    const randomIndex = Math.ceil(rng.double() * BOSSES.length)
    return BOSSES[randomIndex]
  }

  // Returns all the bosses. We will use to filter the values on the dropdown
  getAll(): Boss[] {
    return _.values(BOSSES)
  }

  // Returns the boss that has the choses name
  getByName(name: string): Boss | undefined {
    return _.find(BOSSES, { name })
  }
}

const bossesDB = new BossesDB()

export default bossesDB
