import { Constructor } from '../utils/types';
import {
  BASIC_SKILL_NAMES,
  MAIN_CHARACTERISTIC_KEYS,
  SECONDARY_CHARACTERISTIC_KEYS,
} from './data-provider.consts';

type InputType = 'text' | 'number';

function createDefaultMappedValue<T, K>(
  keys: K,
  valueConstructor: Constructor
): T {
  return (keys as []).reduce<T>(
    (acc, key) => ({ ...acc, [key]: new valueConstructor() }),
    {} as T
  );
}

export class SheetValue<T> {
  constructor(
    public label: string = '',
    public inputType: InputType = 'text',
    public value: T | null = null
  ) {}
}

abstract class SheetProperty {
  abstract propertyLabel: string;
  abstract getValueString(): string;
  abstract setValue(obj: any): void;
  abstract getKeys(): any;
}

abstract class SheetArrayProperty<T> extends SheetProperty {
  constructor(public values: T[] = []) {
    super();
  }

  override getValueString(): string {
    return JSON.stringify(this.values);
  }

  override setValue({ values }: { values: T[] }): void {
    this.values = values;
  }

  override getKeys() {
    throw new Error("SheetArrayProperty doesn't implement getKeys");
  }
}

export class Characteristic {
  constructor(
    public start = new SheetValue<string>(),
    public developementScheme = new SheetValue<number>(),
    public actual = new SheetValue<number>()
  ) {}
}

export class Skill {
  constructor(
    public name = new SheetValue<string>(),
    public level = new SheetValue<'wykupione' | '+10' | '+20'>(),
    public related = new SheetValue<string>()
  ) {}
}

export class Ability {
  constructor(
    public name = new SheetValue<string>(),
    public description = new SheetValue<string>()
  ) {}
}

export class EquipmentItem {
  constructor(
    public name = new SheetValue<string>(),
    public weight = new SheetValue<number>(),
    public description = new SheetValue<string>()
  ) {}
}

export class Weapon {
  constructor(
    public name = new SheetValue<string>(),
    public weight = new SheetValue<number>(),
    public category = new SheetValue<string>(),
    public damage = new SheetValue<string>(),
    public range = new SheetValue<string>(),
    public reload = new SheetValue<string>(),
    public details = new SheetValue<string>()
  ) {}
}

export class SimpleArmour {
  constructor(
    public name = new SheetValue<string>(),
    public armourType = new SheetValue<string>(),
    public armourPoints = new SheetValue<string>()
  ) {}
}

export class AdvancedArmourItem {
  constructor(
    public armourType = new SheetValue<string>(),
    public weight = new SheetValue<number>(),
    public location = new SheetValue<string>(),
    public healthPoints = new SheetValue<number>()
  ) {}
}

export class AdvancedArmour extends SheetArrayProperty<AdvancedArmourItem> {
  override propertyLabel: string = 'Pancerz Zaawansowany';
}

export class ArmourPoints extends SheetProperty {
  override propertyLabel: string = 'Punkty Pancerza';

  constructor(
    public head = new SheetValue<number>(),
    public corpus = new SheetValue<number>(),
    public rightHand = new SheetValue<number>(),
    public leftHand = new SheetValue<number>(),
    public rightLeg = new SheetValue<number>(),
    public leftLeg = new SheetValue<number>()
  ) {
    super();
  }

  override getKeys() {
    throw new Error('Method not implemented.');
  }

  override getValueString(): string {
    return JSON.stringify({
      head: this.head,
      corpus: this.corpus,
      rightHand: this.rightHand,
      leftHand: this.leftHand,
      rightLeg: this.rightLeg,
      leftLeg: this.leftLeg,
    });
  }

  // TODO
  override setValue({}: any): void {}
}

export class Money extends SheetProperty {
  override propertyLabel: string = 'Pieniądze';

  constructor(
    public gold = new SheetValue<number>(),
    public silver = new SheetValue<number>(),
    public bronze = new SheetValue<number>()
  ) {
    super();
  }

  override getKeys() {
    throw new Error('Method not implemented.');
  }

  override getValueString(): string {
    return JSON.stringify({
      gold: this.gold,
      silver: this.silver,
      bronze: this.bronze,
    });
  }

  // TODO
  override setValue({}: any): void {}
}

export class Hero extends SheetProperty {
  override propertyLabel: string = 'Bohater';

  constructor(
    public name = new SheetValue<string>('Imie'),
    public race = new SheetValue<string>('Rasa'),
    public currentProfession = new SheetValue<string>('Obecna profesja'),
    public previousProfession = new SheetValue<string>('Poprzednia profesja')
  ) {
    super();
  }

  override getKeys() {
    return ['name', 'race', 'currentProfession', 'previousProfession'] as const;
  }

  override getValueString(): string {
    return JSON.stringify({
      name: this.name,
      race: this.race,
      currentProfession: this.currentProfession,
      previousProfession: this.previousProfession,
    });
  }

  // TODO
  override setValue({}: any): void {}
}

export class HeroDescription extends SheetProperty {
  override propertyLabel: string = 'Opis Bohatera';

  constructor(
    public age = new SheetValue<string>('Wiek'),
    public sex = new SheetValue<string>('Plec'),
    public eyeColor = new SheetValue<string>('Kolor oczu'),
    public weight = new SheetValue<number>('Waga'),
    public hairColor = new SheetValue<string>('Kolor wlosow'),
    public height = new SheetValue<string>('Wysokosc'),
    public starSign = new SheetValue<string>('Znak gwiezdny'),
    public siblings = new SheetValue<string>('Rodzenstwo'),
    public placeOfBirth = new SheetValue<string>('Miejsce urodzenia'),
    public specialSigns = new SheetValue<string>('Znaki specjalne')
  ) {
    super();
  }

  override getKeys() {
    return [
      'age',
      'sex',
      'eyeColor',
      'weight',
      'hairColor',
      'height',
      'starSign',
      'siblings',
      'placeOfBirth',
      'specialSigns',
    ] as const;
  }

  override getValueString(): string {
    return JSON.stringify({
      age: this.age,
      sex: this.sex,
      eyeColor: this.eyeColor,
      weight: this.weight,
      hairColor: this.hairColor,
      height: this.height,
      starSign: this.starSign,
      siblings: this.siblings,
      placeOfBirth: this.placeOfBirth,
      specialSigns: this.specialSigns,
    });
  }

  // TODO
  override setValue({}: any): void {}
}

export class Player extends SheetProperty {
  override propertyLabel: string = 'Gracz';

  constructor(
    public name = new SheetValue<string>(),
    public campaign = new SheetValue<string>(),
    public gameMaster = new SheetValue<string>(),
    public campaignYear = new SheetValue<string>()
  ) {
    super();
  }

  override getKeys() {
    throw new Error('Method not implemented.');
  }

  override getValueString(): string {
    return JSON.stringify({
      name: this.name,
      campaign: this.campaign,
      gameMaster: this.gameMaster,
      campaignYear: this.campaignYear,
    });
  }

  // TODO
  override setValue({}: any): void {}
}

export class ExperiencePoints extends SheetProperty {
  override propertyLabel: string = 'Punkty Doświadczenia';

  constructor(
    public current = new SheetValue<number>(),
    public total = new SheetValue<number>()
  ) {
    super();
  }

  override getKeys() {
    throw new Error('Method not implemented.');
  }

  override getValueString(): string {
    return JSON.stringify({
      current: this.current,
      total: this.total,
    });
  }

  // TODO
  override setValue({}: any): void {}
}

export class MovementInCombat extends SheetProperty {
  override propertyLabel: string = 'Ruch w Walce';

  constructor(
    public movement = new SheetValue<number>(),
    public charge = new SheetValue<number>(),
    public sprint = new SheetValue<number>()
  ) {
    super();
  }

  override getKeys() {
    throw new Error('Method not implemented.');
  }

  override getValueString(): string {
    return JSON.stringify({
      movement: this.movement,
      charge: this.charge,
      sprint: this.sprint,
    });
  }

  // TODO
  override setValue({}: any): void {}
}

type BasicSkillsValue = { [key in BasicSkillKeys]: Omit<Skill, 'name'> };

const DEFAULT_BASIC_SKILLS_VALUE = createDefaultMappedValue<
  BasicSkillsValue,
  typeof BASIC_SKILL_NAMES
>(BASIC_SKILL_NAMES, Skill);

export class BasicSkills {
  constructor(public skills: BasicSkillsValue = DEFAULT_BASIC_SKILLS_VALUE) {}
}

export class Skills extends SheetProperty {
  override propertyLabel: string = 'Umiejętności';

  constructor(public basic = new BasicSkills(), public advanced: Skill[] = []) {
    super();
  }

  override getKeys() {
    throw new Error('Method not implemented.');
  }

  override getValueString(): string {
    return JSON.stringify({
      basic: this.basic,
      advanced: this.advanced,
    });
  }

  // TODO
  override setValue({}: any): void {}
}

export type MainCharacteristics = {
  [key in MainCharacteristicKeys]: Characteristic;
};
export type SecondaryCharacteristics = {
  [key in SecondaryCharacteristicKeys]: Characteristic;
};

const DEFAULT_MAIN_CHARACTERICTICS = createDefaultMappedValue<
  MainCharacteristics,
  typeof MAIN_CHARACTERISTIC_KEYS
>(MAIN_CHARACTERISTIC_KEYS, Characteristic);

const DEFAULT_SECONDARY_CHARACTERICTICS = createDefaultMappedValue<
  SecondaryCharacteristics,
  typeof SECONDARY_CHARACTERISTIC_KEYS
>(SECONDARY_CHARACTERISTIC_KEYS, Characteristic);

export class Characteristics extends SheetProperty {
  override propertyLabel: string = 'Cechy';

  constructor(
    public main = DEFAULT_MAIN_CHARACTERICTICS,
    public secondary = DEFAULT_SECONDARY_CHARACTERICTICS
  ) {
    super();
  }

  override getKeys() {
    throw new Error('Method not implemented.');
  }

  override getValueString(): string {
    return JSON.stringify({
      main: this.main,
      secondary: this.secondary,
    });
  }

  // TODO
  override setValue({}: any): void {}
}

export class Abilities extends SheetArrayProperty<Ability> {
  override propertyLabel: string = 'Zdolności';

  constructor() {
    super();
  }
}

export class EquipmentItems extends SheetArrayProperty<EquipmentItem> {
  override propertyLabel: string = 'Ekwipunek';

  constructor() {
    super();
  }
}

export class Weapons extends SheetArrayProperty<Weapon> {
  override propertyLabel: string = 'Bronie';

  constructor() {
    super();
  }
}

export class Armour extends SheetProperty {
  override propertyLabel: string = 'Pancerz';

  constructor(
    public simpleArmour = new SimpleArmour(),
    public advencedArmour = new AdvancedArmour()
  ) {
    super();
  }

  override getKeys() {
    throw new Error('Method not implemented.');
  }

  override getValueString(): string {
    return JSON.stringify({
      simpleArmour: this.simpleArmour,
      advencedArmour: this.advencedArmour,
    });
  }

  // TODO
  override setValue({}: any): void {}
}

export class SheetData {
  constructor(
    public hero = new Hero(),
    public heroDescription = new HeroDescription(),
    public characteristics = new Characteristics(),
    public weapons = new Weapons(),
    public armour = new Armour(),
    public player = new Player(),
    public experiencePoints = new ExperiencePoints(),
    public movementInCombat = new MovementInCombat(),
    public armourPoints = new ArmourPoints(),
    public skills = new Skills(),
    public abilities = new Abilities(),
    public equipment = new EquipmentItems(),
    public money = new Money()
  ) {}
}

export type MainCharacteristicKeys = (typeof MAIN_CHARACTERISTIC_KEYS)[number];

export type SecondaryCharacteristicKeys =
  (typeof SECONDARY_CHARACTERISTIC_KEYS)[number];

export type BasicSkillKeys = (typeof BASIC_SKILL_NAMES)[number];
