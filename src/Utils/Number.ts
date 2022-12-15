export const isPositiveValue = (num: number) => num >= 0 

export const isPositiveInteger = (num: number): boolean => 
  isPositiveValue(num) && Number.isInteger(num)