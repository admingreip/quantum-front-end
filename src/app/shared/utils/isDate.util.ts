export function UtlIsDate(value: any): value is Date {
  return value instanceof Date && !isNaN(+value);
}