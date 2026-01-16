export const isNumber = (value: unknown, defaultValue: number = 0): number => {
  const num = Number(value)
  return Number.isFinite(num) ? num : defaultValue
}
