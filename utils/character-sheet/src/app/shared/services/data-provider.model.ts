abstract class SheetProperty {
  abstract propertyLabel: string;
  abstract getValueString(): string;
  abstract setValue(obj: any): void;
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
}

export class Characteristic {
  constructor(
    public start: number | null = null,
    public developementScheme: number | null = null,
    public actual: number | null = null
  ) {}
}

export class Skill {
  constructor(
    public name: string | null = null,
    public level: null | 'wykupione' | '+10' | '+20' = null,
    public related: string | null = null
  ) {}
}

export class Ability {
  constructor(
    public name: string | null = null,
    public description: string | null = null
  ) {}
}

export class EquipmentItem {
  constructor(
    public name: string | null = null,
    public weight: number | null = null,
    public description: string | null = null
  ) {}
}

export class Weapon {
  constructor(
    public name: string | null = null,
    public weight: number | null = null,
    public category: string | null = null,
    public damage: string | null = null,
    public range: string | null = null,
    public reload: string | null = null,
    public details: string | null = null
  ) {}
}

export class SimpleArmour {
  constructor(
    public name: string | null = null,
    public armourType: string | null = null,
    public armourPoints: string | null = null
  ) {}
}

export class AdvencedArmourItem {
  constructor(
    public armourType: string | null = null,
    public weight: number | null = null,
    public location: string | null = null,
    public healthPoints: number | null = null
  ) {}
}

export class ArmourPoints extends SheetProperty {
  override propertyLabel: string = 'Punkty Pancerza';

  constructor(
    public head: number | null = null,
    public corpus: number | null = null,
    public rightHand: number | null = null,
    public leftHand: number | null = null,
    public rightLeg: number | null = null,
    public leftLeg: number | null = null
  ) {
    super();
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

  override setValue(): void {
  }
}

export class Money extends SheetProperty {
  override propertyLabel: string = 'Pieniądze';

  constructor(
    public gold: number | null = null,
    public silver: number | null = null,
    public bronze: number | null = null
  ) {
    super();
  }

  override getValueString(): string {
    return JSON.stringify({
      gold: this.gold,
      silver: this.silver,
      bronze: this.bronze,
    });
  }

  override setValue({}: any): void {
  }
}

export class Hero extends SheetProperty {
  override propertyLabel: string = 'Bohater';

  constructor(
    public name: string | null = null,
    public race: string | null = null,
    public currentProfession: string | null = null,
    public previousProfession: string | null = null
  ) {
    super();
  }

  override getValueString(): string {
    return JSON.stringify({
      name: this.name,
      race: this.race,
      currentProfession: this.currentProfession,
      previousProfession: this.previousProfession,
    });
  }

  override setValue({}: any): void {
  }
}

export class HeroDescription extends SheetProperty {
  override propertyLabel: string = 'Opis Bohatera';

  constructor(
    public age: string | null = null,
    public sex: string | null = null,
    public eyeColor: string | null = null,
    public weight: number | null = null,
    public hairColor: string | null = null,
    public height: string | null = null,
    public starSign: string | null = null,
    public siblings: string | null = null,
    public placeOfBirth: string | null = null,
    public specialSigns: string | null = null
  ) {
    super();
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

  override setValue({}: any): void {
  }
}

export class Player extends SheetProperty {
  override propertyLabel: string = 'Gracz';

  constructor(
    public name: string | null = null,
    public campaign: string | null = null,
    public gameMaster: string | null = null,
    public campaignYear: string | null = null
  ) {
    super();
  }

  override getValueString(): string {
    return JSON.stringify({
      name: this.name,
      campaign: this.campaign,
      gameMaster: this.gameMaster,
      campaignYear: this.campaignYear,
    });
  }

  override setValue({}: any): void {
  }
}

export class ExperiencePoints extends SheetProperty {
  override propertyLabel: string = 'Punkty Doświadczenia';

  constructor(
    public current: number | null = null,
    public total: number | null = null
  ) {
    super();
  }

  override getValueString(): string {
    return JSON.stringify({
      current: this.current,
      total: this.total,
    });
  }

  override setValue({}: any): void {
  }
}

export class MovementInCombat extends SheetProperty {
  override propertyLabel: string = 'Ruch w Walce';

  constructor(
    public movement: number | null = null,
    public charge: number | null = null,
    public sprint: number | null = null
  ) {
    super();
  }

  override getValueString(): string {
    return JSON.stringify({
      movement: this.movement,
      charge: this.charge,
      sprint: this.sprint,
    });
  }

  override setValue({}: any): void {
  }
}

export class BasicSkills {
  [key: string]: Omit<Skill, 'name'>;

  constructor() {
    BASIC_SKILL_NAMES.forEach((skillName) => {
      this[skillName] = new Skill(null, null, null);
    });
  }
}

export class Skills extends SheetProperty {
  override propertyLabel: string = 'Umiejętności';

  constructor(
    public basic: BasicSkills = new BasicSkills(),
    public advanced: Skill[] = []
  ) {
    super();
  }

  override getValueString(): string {
    return JSON.stringify({
      basic: this.basic,
      advanced: this.advanced,
    });
  }

  override setValue(obj: any): void {}
}

export class Characteristics extends SheetProperty {
  override propertyLabel: string = 'Cechy';

  constructor(
    public main: { [key in MainCharacteristicKeys]: Characteristic } = {
      WW: new Characteristic(),
      US: new Characteristic(),
      K: new Characteristic(),
      ODP: new Characteristic(),
      ZR: new Characteristic(),
      INT: new Characteristic(),
      SW: new Characteristic(),
      OGD: new Characteristic(),
    },
    public secondary: {
      [key in SecondaryCharacteristicKeys]: Characteristic;
    } = {
      A: new Characteristic(),
      ZYW: new Characteristic(),
      S: new Characteristic(),
      WT: new Characteristic(),
      SZ: new Characteristic(),
      MAG: new Characteristic(),
      PO: new Characteristic(),
      PP: new Characteristic(),
    }
  ) {
    super();
  }

  override getValueString(): string {
    return JSON.stringify({
      main: this.main,
      secondary: this.secondary,
    });
  }

  override setValue(obj: any): void {}
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
    public simpleArmour: SimpleArmour = new SimpleArmour(),
    public advencedArmour: AdvencedArmourItem[] = []
  ) {
    super();
  }

  override getValueString(): string {
    return JSON.stringify({
      simpleArmour: this.simpleArmour,
      advencedArmour: this.advencedArmour,
    });
  }

  override setValue({}: any): void {
  }
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

export const DEFAULT_SHEET_DATA: SheetData = new SheetData();

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

type MainCharacteristicKeys = (typeof MAIN_CHARACTERISTIC_KEYS)[number];

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

type SecondaryCharacteristicKeys =
  (typeof SECONDARY_CHARACTERISTIC_KEYS)[number];
