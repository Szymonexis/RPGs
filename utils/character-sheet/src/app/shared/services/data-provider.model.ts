export interface Skill {
  name: string;
  level: null | 'wykupione' | '+10' | '+20';
  related: string;
}

type BasicSkillNames = (typeof BASIC_SKILL_NAMES)[number];

export type BasicSkills = {
  [key in BasicSkillNames]: Omit<Skill, 'name'>;
};

export interface Skills {
  basic: BasicSkills;
  advanced: Skill[];
}

export interface Ability {
  name: string;
  description: string;
}

export interface EquipmentItem {
  name: string;
  weight: number;
  description: string;
}

export interface Money {
  gold: number;
  silver: number;
  bronze: number;
}

export interface ArmourPoints {
  head: number;
  corpus: number;
  rightHand: number;
  leftHand: number;
  rightLeg: number;
  leftLeg: number;
}

export interface Characteristic {
  start: number;
  developementScheme: number;
  actual: number;
}

type MainCharacteristicKeys = (typeof MAIN_CHARACTERISTIC_KEYS)[number];

export type MainCharacteristics = {
  [key in MainCharacteristicKeys]: Characteristic;
};

type SecondaryCharacteristicKeys =
  (typeof SECONDARY_CHARACTERISTIC_KEYS)[number];

export type SecondaryCharacteristics = {
  [key in SecondaryCharacteristicKeys]: Characteristic;
};

export interface Characteristics {
  main: MainCharacteristics;
  secondary: SecondaryCharacteristics;
}

export interface HeroDescription {
  age: string;
  sex: string;
  eyeColor: string;
  weight: number;
  hairColor: string;
  height: string;
  starSign: string;
  siblings: string;
  placeOfBirth: string;
  specialSigns: string;
}

export interface Hero {
  name: string;
  race: string;
  currentProfession: string;
  previousProfession: string;
}

export interface Weapon {
  name: string;
  weight: number;
  category: string;
  damage: string;
  range: string;
  reload: string;
  details: string;
}

export interface SimpleArmour {
  name: string;
  armourType: string;
  armourPoints: string;
}

export interface AdvencedArmourItem {
  armourType: string;
  weight: number;
  location: string;
  healthPoints: number;
}

export interface Armour {
  simpleArmour: SimpleArmour;
  advencedArmour: AdvencedArmourItem[];
}

export interface Player {
  name: string;
  campaign: string;
  gameMaster: string;
  campaignYear: string;
}

export interface ExperiencePoints {
  current: number;
  total: number;
}

export interface MovementInCombat {
  movement: number;
  charge: number;
  sprint: number;
}

export const BASIC_SKILL_NAMES = [
  'Charakteryzacja',
  'Dowodzenie',
  'Hazard',
  'Jezdziectwo',
  'Mocna glowa',
  'Opieka nad zwierzetami',
  'Plotkowanie',
  'Plywanie',
  'Powozenie',
  'Przekonywanie',
  'Przeszukiwanie',
  'Skradanie sie',
  'Spostrzegawczosc',
  'Sztuka przetrwania',
  'Targowanie',
  'Ukrywanie sie',
  'Wioslarstwo',
  'Wspinaczka',
  'Wycena',
  'Zastraszanie',
] as const;

export const MAIN_CHARACTERISTIC_KEYS = [
  'WW',
  'US',
  'K',
  'ODP',
  'ZR',
  'INT',
  'SW',
  'OGD',
] as const;

export const SECONDARY_CHARACTERISTIC_KEYS = [
  'A',
  'ZYW',
  'S',
  'WT',
  'SZ',
  'MAG',
  'PO',
  'PP',
] as const;

export interface SheetData {
  hero: Hero;
  heroDescription: HeroDescription;
  characteristics: Characteristics;
  weapons: Weapon[];
  armour: Armour;
  player: Player;
  experiencePoints: ExperiencePoints;
  movementInCombat: MovementInCombat;
  armourPoints: ArmourPoints;
  skills: Skills;
  abilities: Ability[];
  equipment: EquipmentItem[];
  money: Money;
}
