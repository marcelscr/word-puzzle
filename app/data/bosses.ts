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
    subType: Constants.SubType.FLAMEWALKER,
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
    subType: Constants.SubType.CORE_HOUND,
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
    subType: Constants.SubType.FLAMEWALKER,
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
    subType: Constants.SubType.LAVA_ELEMENTAL,
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
    subType: Constants.SubType.FLAMEWALKER,
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
    subType: Constants.SubType.FIRE_ELEMENTAL,
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
    subType: Constants.SubType.MOLTEN_GIANT,
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
    subType: Constants.SubType.FLAMEWALKER,
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
    subType: Constants.SubType.FLAMEWALKER,
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
    subType: Constants.SubType.FIRE_ELEMENTAL,
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
    subType: Constants.SubType.BLACK_WYRM,
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
    subType: Constants.SubType.DRAGONSPAWN,
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
    subType: Constants.SubType.RED_DRAGON,
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
    subType: Constants.SubType.DRAKONID,
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
    subType: Constants.SubType.BLACK_DRAKE,
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
    subType: Constants.SubType.BLACK_DRAKE,
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
    subType: Constants.SubType.BLACK_DRAKE,
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
    subType: Constants.SubType.DRAKEADON,
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
    subType: Constants.SubType.BLACK_DRAGON,
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
    subType: Constants.SubType.ZANDALARI_TROLL,
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
    subType: Constants.SubType.ZANDALARI_TROLL,
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
    subType: Constants.SubType.JUNGLE_TROLL,
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
    subType: Constants.SubType.ZANDALARI_TROLL,
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
    subType: Constants.SubType.ZANDALARI_TROLL,
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
    subType: Constants.SubType.LOA,
    position: 6
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
    subType: Constants.SubType.SAND_REAVER,
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
    subType: Constants.SubType.QIRAJI,
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
    subType: Constants.SubType.OBISIDIAN_DESTROYER,
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
    subType: Constants.SubType.SILITHID_COLOSSUS,
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
    subType: Constants.SubType.SILITHID_WASP,
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
    subType: Constants.SubType.HORUSATH,
    position: 6
  }
]

const TempleOfAhnQirajBosses: Boss[] = [
  {
    name: 'The Prophet Skeram',
    imageUrl: bossImageUrl('15345'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.TEMPLE_OF_AHN_QIRAJ,
    gender: Constants.Gender.MALE,
    type: Constants.Type.HUMANOID,
    subType: Constants.SubType.QIRAJI,
    position: 1
  },
  {
    name: 'Silithid Royalty',
    imageUrl: bossImageUrl('15657'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.TEMPLE_OF_AHN_QIRAJ,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.BEAST,
    subType: Constants.SubType.SILITHID_COLOSSUS,
    position: 2
  },
  {
    name: 'Battleguard Sartura',
    imageUrl: bossImageUrl('15583'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.TEMPLE_OF_AHN_QIRAJ,
    gender: Constants.Gender.FEMALE,
    type: Constants.Type.HUMANOID,
    subType: Constants.SubType.QIRAJI,
    position: 3
  },
  {
    name: 'Fankriss the Unyielding',
    imageUrl: bossImageUrl('15743'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.TEMPLE_OF_AHN_QIRAJ,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.BEAST,
    subType: Constants.SubType.SAND_REAVER,
    position: 4
  },
  {
    name: 'Viscidus',
    imageUrl: bossImageUrl('15686'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.TEMPLE_OF_AHN_QIRAJ,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.ABERRATION,
    subType: Constants.SubType.OOZE,
    position: 5
  },
  {
    name: 'Princess Huhuran',
    imageUrl: bossImageUrl('15686'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.TEMPLE_OF_AHN_QIRAJ,
    gender: Constants.Gender.FEMALE,
    type: Constants.Type.BEAST,
    subType: Constants.SubType.SILITHID_WASP,
    position: 6
  },
  {
    name: 'Twin Emperors',
    imageUrl: bossImageUrl('15778'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.TEMPLE_OF_AHN_QIRAJ,
    gender: Constants.Gender.MALE,
    type: Constants.Type.HUMANOID,
    subType: Constants.SubType.QIRAJI,
    position: 7
  },
  {
    name: 'Ouro',
    imageUrl: bossImageUrl('15509'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.TEMPLE_OF_AHN_QIRAJ,
    gender: Constants.Gender.MALE,
    type: Constants.Type.BEAST,
    subType: Constants.SubType.SAND_WORM,
    position: 8
  },
  {
    name: "C'thun",
    imageUrl: bossImageUrl('15787'),
    expansion: Constants.Expansion.CLASSIC,
    locationType: Constants.LocationType.RAID,
    location: Constants.ClassicRaids.TEMPLE_OF_AHN_QIRAJ,
    gender: Constants.Gender.AGENDER,
    type: Constants.Type.ABERRATION,
    subType: Constants.SubType.OLD_GOD,
    position: 9
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
    subType: Constants.SubType.CRYPT_LORD,
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
    subType: Constants.SubType.HUMAN,
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
    subType: Constants.SubType.GIANT_SPIDER,
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
    subType: Constants.SubType.HUMAN,
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
    subType: Constants.SubType.HUMAN,
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
    subType: Constants.SubType.FUNGAL_MONSTER,
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
    subType: Constants.SubType.HUMAN,
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
    subType: Constants.SubType.HUMAN,
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
    subType: Constants.SubType.HUMAN,
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
    subType: Constants.SubType.ABOMINATION,
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
    subType: Constants.SubType.FLESH_GIANT,
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
    subType: Constants.SubType.PLAGUE_DOG,
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
    subType: Constants.SubType.FLESH_TITAN,
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
    subType: Constants.SubType.FROST_WYRM,
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
    subType: Constants.SubType.LICH,
    position: 15
  }
]

export const ClassicBosses: Boss[] = [
  ...MoltenCoreBosses,
  ...OnyxiasLairBosses,
  ...BlackwingLairBosses,
  ...ZulGurubBosses,
  ...RuinsOfAhnQirajBosses,
  ...TempleOfAhnQirajBosses,
  ...NaxxramasBosses
]
