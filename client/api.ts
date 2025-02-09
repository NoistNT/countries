import { env } from 'node:process';

import type { ICountry, ICountrySimple } from '@/types';

const API_URL = env.NEXT_PUBLIC_API_URL;
if (!API_URL) throw new Error('API_URL is not defined');

export async function getCountries() {
  try {
    const response = await fetch(`${API_URL}/countries`);

    if (!response.ok) throw new Error('Failed to fetch countries');

    const country = (await response.json()) as ICountrySimple[];

    return country ?? [];
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);

    return [];
  }
}

export async function getCountry(id: string) {
  try {
    const response = await fetch(`${API_URL}/countries/${id}`);

    if (!response.ok) throw new Error(`Failed to fetch country: ${id}`);

    return (await response.json()) as ICountry;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);

    return undefined;
  }
}
