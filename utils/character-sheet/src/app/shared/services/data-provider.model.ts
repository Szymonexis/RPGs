export interface Skill {
  name: string;
  level: null | 'wykupione' | '+10' | '+20';
  related: string;
}

export interface Skills {
  basic: Skill[];
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

export interface SheetData {
  hero: {};
  heroDescription: {};
  characteristics: {};
  weapons: {};
  armour: {
    simpleArmour: {
      name: string;
      armourType: string;
      armourPoints: string;
    };
    advencedArmour: {
      armourType: string;
      weight: number;
      location: string;
      healthPoints: number;
    }[];
  };
  player: {
    name: string;
    campaign: string;
    gameMaster: string;
    campaignYear: string;
  };
  experiencePoints: {
    current: number;
    total: number;
  };
  movementInCombat: {
    movement: number;
    charge: number;
    sprint: number;
  };
  armourPoints: ArmourPoints;
  skills: Skills;
  abilities: Ability[];
  equipment: EquipmentItem[];
  money: Money;
}

export const BASIC_SKILLS_NAMES = [
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
].sort();
