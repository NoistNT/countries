import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(number: number) {
  return new Intl.NumberFormat('en-US').format(number).replaceAll(',', '.')
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function generateRandomKey() {
  return Math.random().toString(36).slice(2)
}
