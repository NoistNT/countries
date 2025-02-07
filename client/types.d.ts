export interface Name {
  common: string;
  official: string;
  nativeName?: Record<string, { official: string; common: string }>;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Translation {
  official: string;
  common: string;
}

export interface Demonyms {
  f: string;
  m: string;
}

export interface Car {
  signs: string[];
  side: 'left' | 'right';
}

export interface ICountry {
  _id: string;
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, Currency>;
  idd: { root: string; suffixes: string[] };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  translations: Record<string, Translation>;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Record<string, Demonyms>;
  flag: string;
  maps: { googleMaps: string; openStreetMaps: string };
  population: number;
  gini: Record<string, number>;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: string[];
}

export interface ICountrySimple {
  _id: string;
  name: { common: string; official: string };
  flags: string;
  region: string;
  population: number;
  capital: string[];
}

export interface Query {
  region?: { $regex: string; $options: 'i' };
  subregion?: { $regex: string; $options: 'i' };
  capital?: { $regex: string; $options: 'i' };
}
