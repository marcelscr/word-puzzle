import type { Boss } from './types'
import * as Constants from './constants'

const bossImageUrl = (displayId: string) =>
  `https://render.worldofwarcraft.com/us/npcs/zoom/creature-display-${displayId}.jpg`

// Classic

const MoltenCoreBosses: Boss[] = [
  {
    name: 'Lucifron',
    imageUrl: bossImageUrl('13031'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.MOLTEN_CORE,
    gender: Constants.Gender.MALE,
    type: Constants.Type.HUMANOID,
    position: 1
  },
  {
    name: 'Magmadar',
    imageUrl: bossImageUrl('10193'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.MOLTEN_CORE,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.BEAST,
    position: 2
  },
  {
    name: 'Gehennas',
    imageUrl: bossImageUrl('13030'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.MOLTEN_CORE,
    gender: Constants.Gender.MALE,
    type: Constants.Type.HUMANOID,
    position: 3
  },
  {
    name: 'Garr',
    imageUrl: bossImageUrl('12110'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.MOLTEN_CORE,
    gender: Constants.Gender.MALE,
    type: Constants.Type.ELEMENTAL,
    position: 4
  },
  {
    name: 'Shazzrah',
    imageUrl: bossImageUrl('13032'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.MOLTEN_CORE,
    gender: Constants.Gender.MALE,
    type: Constants.Type.HUMANOID,
    position: 5
  },
  {
    name: 'Baron Geddon',
    imageUrl: bossImageUrl('12129'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.MOLTEN_CORE,
    gender: Constants.Gender.MALE,
    type: Constants.Type.ELEMENTAL,
    position: 6
  },
  {
    name: 'Golemagg the Incinerator',
    imageUrl: bossImageUrl('11986'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.MOLTEN_CORE,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.GIANT,
    position: 7
  },
  {
    name: 'Sulfuron Harbinger',
    imageUrl: bossImageUrl('13030'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.MOLTEN_CORE,
    gender: Constants.Gender.MALE,
    type: Constants.Type.HUMANOID,
    position: 8
  },
  {
    name: 'Majordomo Executus',
    imageUrl: bossImageUrl('12029'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.MOLTEN_CORE,
    gender: Constants.Gender.MALE,
    type: Constants.Type.HUMANOID,
    position: 9
  },
  {
    name: 'Ragnaros (Classic)',
    imageUrl: bossImageUrl('11121'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.MOLTEN_CORE,
    gender: Constants.Gender.MALE,
    type: Constants.Type.ELEMENTAL,
    position: 10
  }
]

const OnyxiasLairBosses: Boss[] = [
  {
    name: 'Onyxia (Classic)',
    imageUrl: bossImageUrl('8570'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.ONYXIAS_LAIR,
    gender: Constants.Gender.FEMALE,
    type: Constants.Type.DRAGONKIN,
    position: 1
  }
]

const BlackwingLairBosses: Boss[] = [
  {
    name: 'Razorgore the Untamed',
    imageUrl: bossImageUrl('10115'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.BLACKWING_LAIR,
    gender: Constants.Gender.MALE,
    type: Constants.Type.DRAGONKIN,
    position: 1
  },
  {
    name: 'Vaelastrasz the Corrupt',
    imageUrl: bossImageUrl('13992'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.BLACKWING_LAIR,
    gender: Constants.Gender.MALE,
    type: Constants.Type.DRAGONKIN,
    position: 2
  },
  {
    name: 'Broodlord Lashlayer',
    imageUrl: bossImageUrl('14308'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.BLACKWING_LAIR,
    gender: Constants.Gender.MALE,
    type: Constants.Type.DRAGONKIN,
    position: 3
  },
  {
    name: 'Firemaw',
    imageUrl: bossImageUrl('6377'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.BLACKWING_LAIR,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.DRAGONKIN,
    position: 4
  },
  {
    name: 'Ebonroc',
    imageUrl: bossImageUrl('6377'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.BLACKWING_LAIR,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.DRAGONKIN,
    position: 5
  },
  {
    name: 'Flamegor',
    imageUrl: bossImageUrl('6377'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.BLACKWING_LAIR,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.DRAGONKIN,
    position: 6
  },
  {
    name: 'Chromaggus',
    imageUrl: bossImageUrl('14367'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.BLACKWING_LAIR,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.BEAST,
    position: 7
  },
  {
    name: 'Nefarian',
    imageUrl: bossImageUrl('11380'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.BLACKWING_LAIR,
    gender: Constants.Gender.MALE,
    type: Constants.Type.DRAGONKIN,
    position: 8
  }
]

export const ClassicBosses: Boss[] = [
  ...MoltenCoreBosses,
  ...OnyxiasLairBosses,
  ...BlackwingLairBosses
]
