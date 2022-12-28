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

const ZulGurubBosses: Boss[] = [
  {
    name: 'High Priestess Jeklik',
    imageUrl: bossImageUrl('15219'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.ZUL_GURUB,
    gender: Constants.Gender.FEMALE,
    type: Constants.Type.HUMANOID,
    position: 1
  },
  {
    name: 'High Priest Venoxis',
    imageUrl: bossImageUrl('37788'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.ZUL_GURUB,
    gender: Constants.Gender.MALE,
    type: Constants.Type.HUMANOID,
    position: 2
  },
  {
    name: "High Priestess Mar'li (Classic)",
    imageUrl: bossImageUrl('15220'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.ZUL_GURUB,
    gender: Constants.Gender.FEMALE,
    type: Constants.Type.HUMANOID,
    position: 3
  },
  {
    name: 'High Priest Thekal',
    imageUrl: bossImageUrl('15216'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.ZUL_GURUB,
    gender: Constants.Gender.MALE,
    type: Constants.Type.HUMANOID,
    position: 4
  },
  {
    name: 'High Priestess Arlokk',
    imageUrl: bossImageUrl('15218'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.ZUL_GURUB,
    gender: Constants.Gender.FEMALE,
    type: Constants.Type.HUMANOID,
    position: 5
  },
  {
    name: 'Hakkar the Soulflayer',
    imageUrl: bossImageUrl('15295'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.ZUL_GURUB,
    gender: Constants.Gender.MALE,
    type: Constants.Type.BEAST,
    position: 6
  }
]

const NaxxramasBosses: Boss[] = [
  {
    name: "Anub'Rekhan",
    imageUrl: bossImageUrl('15931'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.UNDEAD,
    position: 1
  },
  {
    name: 'Grand Widow Faerlina',
    imageUrl: bossImageUrl('15940'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.FEMALE,
    type: Constants.Type.HUMANOID,
    position: 2
  },
  {
    name: 'Maexxna',
    imageUrl: bossImageUrl('15928'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.FEMALE,
    type: Constants.Type.BEAST,
    position: 3
  },
  {
    name: 'Noth the Plaguebringer',
    imageUrl: bossImageUrl('16590'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.MALE,
    type: Constants.Type.UNDEAD,
    position: 4
  },
  {
    name: 'Heigan the Unclean',
    imageUrl: bossImageUrl('16309'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.MALE,
    type: Constants.Type.UNDEAD,
    position: 5
  },
  {
    name: 'Loatheb',
    imageUrl: bossImageUrl('16110'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.UNDEAD,
    position: 6
  },
  {
    name: 'Instructor Razuvious',
    imageUrl: bossImageUrl('16582'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.MALE,
    type: Constants.Type.UNDEAD,
    position: 7
  },
  {
    name: 'Gothik the Harvester',
    imageUrl: bossImageUrl('16279'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.MALE,
    type: Constants.Type.UNDEAD,
    position: 8
  },
  {
    name: 'The Four Horsemen',
    imageUrl: bossImageUrl('16139'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.MANY,
    type: Constants.Type.UNDEAD,
    position: 9
  },
  {
    name: 'Patchwerk',
    imageUrl: bossImageUrl('16174'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.UNDEAD,
    position: 10
  },
  {
    name: 'Grobbulus',
    imageUrl: bossImageUrl('16035'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.UNDEAD,
    position: 11
  },
  {
    name: 'Gluth',
    imageUrl: bossImageUrl('16064'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.UNDEAD,
    position: 12
  },
  {
    name: 'Thaddius',
    imageUrl: bossImageUrl('16137'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.UNDEAD,
    position: 13
  },
  {
    name: 'Sapphiron',
    imageUrl: bossImageUrl('16033'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.MALE,
    type: Constants.Type.UNDEAD,
    position: 14
  },
  {
    name: "Kel'thuzard",
    imageUrl: bossImageUrl('15945'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.NAXXRAMAS,
    gender: Constants.Gender.MALE,
    type: Constants.Type.UNDEAD,
    position: 15
  }
]

const RuinsOfAhnQirajBosses: Boss[] = [
  {
    name: 'Kurinnaxx',
    imageUrl: bossImageUrl('15742'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.RUINS_OF_AHN_QIRAJ,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.BEAST,
    position: 1
  },
  {
    name: 'General Rajaxx',
    imageUrl: bossImageUrl('15376'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.RUINS_OF_AHN_QIRAJ,
    gender: Constants.Gender.MALE,
    type: Constants.Type.HUMANOID,
    position: 2
  },
  {
    name: 'Moam',
    imageUrl: bossImageUrl('15392'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.RUINS_OF_AHN_QIRAJ,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.ELEMENTAL,
    position: 3
  },
  {
    name: 'Buru the Gorger',
    imageUrl: bossImageUrl('15654'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.RUINS_OF_AHN_QIRAJ,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.BEAST,
    position: 4
  },
  {
    name: 'Ayamiss the Hunter',
    imageUrl: bossImageUrl('15431'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.RUINS_OF_AHN_QIRAJ,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.BEAST,
    position: 5
  },
  {
    name: 'Ossirian the Unscarred',
    imageUrl: bossImageUrl('15432'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.RUINS_OF_AHN_QIRAJ,
    gender: Constants.Gender.MALE,
    type: Constants.Type.GIANT,
    position: 6
  }
]

const TempleOfAhnQirajBosses: Boss[] = []

export const ClassicBosses: Boss[] = [
  ...MoltenCoreBosses,
  ...OnyxiasLairBosses,
  ...BlackwingLairBosses,
  ...ZulGurubBosses,
  ...RuinsOfAhnQirajBosses,
  ...TempleOfAhnQirajBosses,
  ...NaxxramasBosses
]
