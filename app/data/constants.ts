// Expansion

export enum Expansion {
  CLASSIC = 'Classic',
  BURNING_CRUSADE = 'The Burning Crusade',
  WRATH_OF_THE_LICH_KING = 'Wrath of the Lich King',
  CATACLYSM = 'Cataclysm',
  MISTS_OF_PANDARIA = 'Mists of Pandaria',
  WARLORDS_OF_DRAENOR = 'Warlords of Draenor',
  LEGION = 'Legion',
  BATTLE_FOR_AZEROTH = 'Battle for Azeroth',
  SHADOWLANDS = 'Shadowlands',
  DRAGONFLIGHT = 'Dragonflight'
}

// LocationType

export enum LocationType {
  DUNGEON = 'Dungeon',
  RAID = 'Raid',
  WORLD = 'World'
}

// Gender

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  AGENDER = 'Agender',
  MANY = 'Many'
}

// Type

export enum Type {
  ABERRATION = 'Aberration',
  BEAST = 'Beast',
  DEMON = 'Demon',
  DRAGONKIN = 'Dragonkin',
  ELEMENTAL = 'Elemental',
  GIANT = 'Giant',
  HUMANOID = 'Humanoid',
  UNDEAD = 'Undead'
}

export enum SubType {
  ABOMINATION = 'Abomination',
  BLACK_DRAGON = 'Black dragon',
  BLACK_DRAKE = 'Black drake',
  BLACK_WYRM = 'Black wyrm',
  CORE_HOUND = 'Core hound',
  CRYPT_LORD = 'Crypt lord',
  DRAGONSPAWN = 'Dragonspawn',
  DRAKEADON = 'Drakeadon',
  DRAKONID = 'Drakonid',
  FIRE_ELEMENTAL = 'Fire elemental',
  FLAMEWALKER = 'Flamewalker',
  FLESH_GIANT = 'Flesh giant',
  FLESH_TITAN = 'Flesh titan',
  FROST_WYRM = 'Frost wyrm',
  FUNGAL_MONSTER = 'Fungal monster',
  GIANT_SPIDER = 'Giant spider',
  HORUSATH = 'Horusath',
  HUMAN = 'Human',
  JUNGLE_TROLL = 'Jungle troll',
  LAVA_ELEMENTAL = 'Lava elemental',
  LICH = 'Lich',
  LOA = 'Loa',
  MOLTEN_GIANT = 'Molten giant',
  OBISIDIAN_DESTROYER = 'Obsidian destroyer',
  OLD_GOD = 'Old god',
  OOZE = 'Ooze',
  PLAGUE_DOG = 'Plague-dog',
  QIRAJI = 'Qiraji',
  RED_DRAGON = 'Red dragon',
  SAND_REAVER = 'Sand reaver',
  SAND_WORM = 'Sand worm',
  SILITHID_COLOSSUS = 'Silithid colossus',
  SILITHID_WASP = 'Silithid wasp',
  ZANDALARI_TROLL = 'Zandalari troll'
}

// Classic

export enum ClassicRaids {
  MOLTEN_CORE = 'Molten Core',
  ONYXIAS_LAIR = "Onyxias's Lair (Classic)",
  BLACKWING_LAIR = 'Blackwing Lair',
  ZUL_GURUB = "Zul'gurub",
  TEMPLE_OF_AHN_QIRAJ = "Temple of Ahn'qiraj",
  RUINS_OF_AHN_QIRAJ = "Ruins of Ahn'qiraj",
  NAXXRAMAS = 'Naxxramas (Classic)'
}

export enum ClassicDungeons {
  RAGEFIRE_CHASM = 'RAGEFIRE_CHASM',
  WAILING_CAVERNS = 'WAILING_CAVERNS',
  THE_DEADMINES = 'THE_DEADMINES',
  SHADOWFANG_KEEP = 'SHADOWFANG_KEEP',
  THE_STOCKADE = 'THE_STOCKADE',
  BLACKFATHOM_DEEPS = 'BLACKFATHOM_DEEPS',
  GNOMEREGAN = 'GNOMEREGAN',
  RAZORFEN_KRAUL = 'RAZORFEN_KRAUL',
  SCARLET_MONASTERY_GRAVEYARD = 'SCARLET_MONASTERY_GRAVEYARD',
  SCARLET_MONASTERY_LIBRARY = 'SCARLET_MONASTERY_LIBRARY',
  SCARLET_MONASTERY_ARMORY = 'SCARLET_MONASTERY_ARMORY',
  SCARLET_MONASTERY_CATHEDRAL = 'SCARLET_MONASTERY_CATHEDRAL',
  RAZORFEN_DOWNS = 'RAZORFEN_DOWNS',
  ULDAMAN = 'ULDAMAN',
  ZUL_FARRAK = 'ZUL_FARRAK',
  MARAUDON_WICKED_GROTTO = 'MARAUDON_WICKED_GROTTO',
  MARAUDON_FOULSPORE_CAVERN = 'MARAUDON_FOULSPORE_CAVERN',
  MARAUDON_EARTH_SONG_FALLS = 'MARAUDON_EARTH_SONG_FALLS',
  THE_TEMPLE_OF_ATAL_HAKKAR = 'THE_TEMPLE_OF_ATAL_HAKKAR',
  BLACKROCK_DEPTHS = 'BLACKROCK_DEPTHS',
  LOWER_BLACKROCK_SPIRE = 'LOWER_BLACKROCK_SPIRE',
  UPPER_BLACKROCK_SPIRE = 'UPPER_BLACKROCK_SPIRE',
  SCHOLOMANCE = 'SCHOLOMANCE',
  STRATHOLME = 'STRATHOLME',
  DIRE_MAUL = 'DIRE_MAUL'
}

// Burning Crusade

export enum BurningCrusadeRaids {
  KARAZHAN = 'KARAZHAN',
  GRUULS_LAIR = 'GRUULS_LAIR',
  MAGTHERIDONS_LAIR = 'MAGTHERIDONS_LAIR',
  SERPENTSHRINE_CAVERN = 'SERPENTSHRINE_CAVERN',
  THE_EYE = 'THE_EYE',
  MOUNT_HYJAL = 'MOUNT_HYJAL',
  BLACK_TEMPLE = 'BLACK_TEMPLE',
  ZUL_AMAN = 'ZUL_AMAN',
  SUNWELL_PLATEAU = 'SUNWELL_PLATEAU'
}

export enum BurningCrusadeDungeons {
  HELLFIRE_RAMPARTS = 'HELLFIRE_RAMPARTS',
  THE_BLOOD_FURNACE = 'THE_BLOOD_FURNACE',
  THE_SLAVE_PENS = 'THE_SLAVE_PENS',
  THE_UNDERBOG = 'THE_UNDERBOG',
  MANA_TOMBS = 'MANA_TOMBS',
  AUCHENAI_CRYPTS = 'AUCHENAI_CRYPTS',
  OLD_HILLSBRAD_FOOTHILLS = 'OLD_HILLSBRAD_FOOTHILLS',
  SETHEKK_HALLS = 'SETHEKK_HALLS',
  THE_STEAMVAULT = 'THE_STEAMVAULT',
  SHADOW_LABYRINTH = 'SHADOW_LABYRINTH',
  THE_SHATTERED_HALLS = 'THE_SHATTERED_HALLS',
  THE_BLACK_MORASS = 'THE_BLACK_MORASS',
  THE_BOTANICA = 'THE_BOTANICA',
  THE_MECHANAR = 'THE_MECHANAR',
  THE_ARCATRAZ = 'THE_ARCATRAZ',
  MAGISTERS_TERRACE = 'MAGISTERS_TERRACE'
}

// Wrath of the Lick Ling

export enum LichKingRaids {
  VAULT_OF_ARCHAVON = 'VAULT_OF_ARCHAVON',
  NAXXRAMAS = 'NAXXRAMAS',
  THE_OBSIDIAN_SANCTUM = 'THE_OBSIDIAN_SANCTUM',
  THE_EYE_OF_ETERNITY = 'THE_EYE_OF_ETERNITY',
  ULDUAR = 'ULDUAR',
  TRIAL_OF_THE_CRUSADER = 'TRIAL_OF_THE_CRUSADER',
  ONYXIA_S_LAIR = 'ONYXIA_S_LAIR',
  ICECROWN_CITADEL = 'ICECROWN_CITADEL',
  THE_RUBY_SANCTUM = 'THE_RUBY_SANCTUM'
}

export enum LichKingDungeons {
  AHN_KAHET_THE_OLD_KINGDOM = 'AHN_KAHET_THE_OLD_KINGDOM',
  AZJOL_NERUB = 'AZJOL_NERUB',
  DRAK_THARON_KEEP = 'DRAK_THARON_KEEP',
  GUNDRAK = 'GUNDRAK',
  HALLS_OF_LIGHTNING = 'HALLS_OF_LIGHTNING',
  HALLS_OF_REFLECTION = 'HALLS_OF_REFLECTION',
  HALLS_OF_STONE = 'HALLS_OF_STONE',
  PIT_OF_SARON = 'PIT_OF_SARON',
  THE_CULLING_OF_STRATHOLME = 'THE_CULLING_OF_STRATHOLME',
  THE_FORGE_OF_SOULS = 'THE_FORGE_OF_SOULS',
  THE_NEXUS = 'THE_NEXUS',
  THE_OCULUS = 'THE_OCULUS',
  THE_VIOLET_HOLD = 'THE_VIOLET_HOLD',
  TRIAL_OF_THE_CHAMPION = 'TRIAL_OF_THE_CHAMPION',
  UTGARDE_KEEP = 'UTGARDE_KEEP',
  UTGARDE_PINNACLE = 'UTGARDE_PINNACLE'
}

export enum CataclysmRaids {
  BARADIN_HOLD = 'BARADIN_HOLD',
  BLACKWING_DESCENT = 'BLACKWING_DESCENT',
  THE_BASTION_OF_TWILIGHT = 'THE_BASTION_OF_TWILIGHT',
  THRONE_OF_THE_FOUR_WINDS = 'THRONE_OF_THE_FOUR_WINDS',
  FIRELANDS = 'FIRELANDS',
  DRAGON_SOUL = 'DRAGON_SOUL'
}

export enum CataclysmDungeons {
  BLACKROCK_CAVERNS = 'BLACKROCK_CAVERNS',
  DEADMINES = 'DEADMINES',
  END_TIME = 'END_TIME',
  GRIM_BATOL = 'GRIM_BATOL',
  HALLS_OF_ORIGINATION = 'HALLS_OF_ORIGINATION',
  HOUR_OF_TWILIGHT = 'HOUR_OF_TWILIGHT',
  LOST_CITY_OF_THE_TOL_VIR = 'LOST_CITY_OF_THE_TOL_VIR',
  SHADOWFANG_KEEP = 'SHADOWFANG_KEEP',
  THE_STONECORE = 'THE_STONECORE',
  THE_VORTEX_PINNACLE = 'THE_VORTEX_PINNACLE',
  THRONE_OF_THE_TIDES = 'THRONE_OF_THE_TIDES',
  WELL_OF_ETERNITY = 'WELL_OF_ETERNITY',
  ZUL_AMAN = 'ZUL_AMAN',
  ZUL_GURUB = 'ZUL_GURUB'
}

export enum PandariaRaids {
  MOGU_SHAN_VAULTS = 'MOGUSHAN_VAULTS',
  HEART_OF_FEAR = 'HEART_OF_FEAR',
  TERRACE_OF_ENDLESS_SPRING = 'TERRACE_OF_ENDLESS_SPRING',
  THRONE_OF_THUNDER = 'THRONE_OF_THUNDER',
  SIEGE_OF_ORGRIMMAR = 'SIEGE_OF_ORGRIMMAR'
}

export enum PandariaDungeons {
  GATE_OF_THE_SETTING_SUN = 'GATE_OF_THE_SETTING_SUN',
  TEMPLE_OF_THE_JADE_SERPENT = 'TEMPLE_OF_THE_JADE_SERPENT',
  STORMSTOUT_BREWERY = 'STORMSTOUT_BREWERY',
  MOGU_SHAN_PALACE = 'MOGU_SHAN_PALACE',
  SHADO_PAN_MONASTERY = 'SHADO_PAN_MONASTERY',
  SIEGE_OF_NIUZAO_TEMPLE = 'SIEGE_OF_NIUZAO_TEMPLE'
}

export enum WarlordsRaids {
  HIGHMAUL = 'HIGHMAUL',
  BLACKROOK_FOUNDRY = 'BLACKROOK_FOUNDRY',
  HELLFIRE_CITADEL = 'HELLFIRE_CITADEL'
}

export enum WarlordsDungeons {
  AUCHINDOUN = 'AUCHINDOUN',
  BLOODMAUL_SLAG_MINES = 'BLOODMAUL_SLAG_MINES',
  THE_EVERBLOOM = 'THE_EVERBLOOM',
  GRIMRAIL_DEPOT = 'GRIMRAIL_DEPOT',
  IRON_DOCKS = 'IRON_DOCKS',
  SHADOWMOON_BURIAL_GROUNDS = 'SHADOWMOON_BURIAL_GROUNDS',
  SKYREACH = 'SKYREACH',
  UPPER_BLACKROCK_SPIRE = 'UPPER_BLACKROCK_SPIRE'
}

export enum LegionRaids {
  THE_EMERALD_NIGHTMARE = 'THE_EMERALD_NIGHTMARE',
  TRIAL_OF_VALOR = 'TRIAL_OF_VALOR',
  THE_NIGHTHOLD = 'THE_NIGHTHOLD',
  TOMB_OF_SARGERAS = 'TOMB_OF_SARGERAS',
  ANTORUS_THE_BURNING_THRONE = 'ANTORUS_THE_BURNING_THRONE'
}

export enum LegionDungeons {
  ASSAULT_ON_VIOLET_HOLD = 'ASSAULT_ON_VIOLET_HOLD',
  BLACK_ROOK_HOLD = 'BLACK_ROOK_HOLD',
  CATHEDRAL_OF_ETERNAL_NIGHT = 'CATHEDRAL_OF_ETERNAL_NIGHT',
  COURT_OF_STARS = 'COURT_OF_STARS',
  DARKHEART_THICKET = 'DARKHEART_THICKET',
  EYE_OF_AZSHARA = 'EYE_OF_AZSHARA',
  HALLS_OF_VALOR = 'HALLS_OF_VALOR',
  MAW_OF_SOULS = 'MAW_OF_SOULS',
  NELTHARIONS_LAIR = 'NELTHARIONS_LAIR',
  RETURN_TO_KARAZHAN = 'RETURN_TO_KARAZHAN',
  SEAT_OF_THE_TRIUMVIRATE = 'SEAT_OF_THE_TRIUMVIRATE',
  THE_ARCWAY = 'THE_ARCWAY',
  VAULT_OF_THE_WARDENS = 'VAULT_OF_THE_WARDENS'
}

export enum BattleForAzerothRaids {
  ULDIR = 'ULDIR',
  BATTLE_OF_DAZAR_ALOR = 'BATTLE_OF_DAZAR_ALOR',
  CRUCIBLE_OF_STORMS = 'CRUCIBLE_OF_STORMS',
  THE_ETERNAL_PALACE = 'THE_ETERNAL_PALACE',
  NY_ALOTHA_THE_WAKING_CITY = 'NY_ALOTHA_THE_WAKING_CITY'
}

export enum BattleForAzerothDungeons {
  ATAL_DAZAR = 'ATAL_DAZAR',
  FREEHOLD = 'FREEHOLD',
  KINGS_REST = 'KINGS_REST',
  OPERATION_MECHAGON = 'OPERATION_MECHAGON',
  SHRINE_OF_THE_STORM = 'SHRINE_OF_THE_STORM',
  SIEGE_OF_BORALUS = 'SIEGE_OF_BORALUS',
  TEMPLE_OF_SETHRALISS = 'TEMPLE_OF_SETHRALISS',
  THE_MOTHERLODE = 'THE_MOTHERLODE',
  THE_UNDERROT = 'THE_UNDERROT',
  TOL_DAGOR = 'TOL_DAGOR',
  WAYCREST_MANOR = 'WAYCREST_MANOR'
}

export enum ShadowlandsRaids {
  CASTLE_NATHRIA = 'CASTLE_NATHRIA',
  SANCTUM_OF_DOMINATION = 'SANCTUM_OF_DOMINATION',
  SEPULCHER_OF_THE_FIRST_ONES = 'SEPULCHER_OF_THE_FIRST_ONES'
}

export enum ShadowlandsDungeons {
  THE_NECROTIC_WAKE = 'THE_NECROTIC_WAKE',
  PLAGUEFALL = 'PLAGUEFALL',
  MISTS_OF_TIRNA_SCITHE = 'MISTS_OF_TIRNA_SCITHE',
  HALLS_OF_ATONEMENT = 'HALLS_OF_ATONEMENT',
  DE_OTHER_SIDE = 'DE_OTHER_SIDE',
  SANGUINE_DEPTHS = 'SANGUINE_DEPTHS',
  SPIRES_OF_ASCENSION = 'SPIRES_OF_ASCENSION',
  THEATER_OF_PAIN = 'THEATER_OF_PAIN'
}

export enum DragonflightRaids {
  VAULT_OF_THE_INCARNATES = 'VAULT_OF_THE_INCARNATES'
}

export enum DragonflightDungeons {
  ALGETHAR_ACADEMY = 'ALGETHAR_ACADEMY',
  BRACKENHIDE_HOLLOW = 'BRACKENHIDE_HOLLOW',
  HALLS_OF_INFUSION = 'HALLS_OF_INFUSION',
  NELTHARUS = 'NELTHARUS',
  RUBY_LIFE_POOLS = 'RUBY_LIFE_POOLS',
  THE_AZURE_VAULT = 'THE_AZURE_VAULT',
  THE_NOKHUD_OFFENSIVE = 'THE_NOKHUD_OFFENSIVE',
  ULDAMAN_LEGACY_OF_TYR = 'ULDAMAN_LEGACY_OF_TYR'
}
