export interface InputConfig {
  type: 'text' | 'number';
  required: boolean;
  key: string;
  onchange?: (event: Event) => void;
}

const bohater: InputConfig[] = [
  {
    key: 'Imie',
    required: true,
    type: 'text',
  },
  {
    key: 'Rasa',
    required: true,
    type: 'text',
  },
  {
    key: 'Obecna profesja',
    required: true,
    type: 'text',
  },
  {
    key: 'Poprzednia profesja',
    required: false,
    type: 'text',
  },
];

const opisBohatera: InputConfig[] = [
  {
    key: 'Wiek',
    required: true,
    type: 'text',
  },
  {
    key: 'Plec',
    required: true,
    type: 'text',
  },
  {
    key: 'Kolor oczu',
    required: true,
    type: 'text',
  },
  {
    key: 'Waga',
    required: true,
    type: 'text',
  },
  {
    key: 'Kolor wlosow',
    required: true,
    type: 'text',
  },
  {
    key: 'Wzrost',
    required: true,
    type: 'text',
  },
  {
    key: 'Znak gwiezdny',
    required: true,
    type: 'text',
  },
  {
    key: 'Rodzenstwo',
    required: true,
    type: 'text',
  },
  {
    key: 'Miejsce urodzenia',
    required: true,
    type: 'text',
  },
  {
    key: 'Znaki szczegolne',
    required: true,
    type: 'text',
  },
];

export const SECTION_CONFIGS = {
  bohater,
  opisBohatera,
};
