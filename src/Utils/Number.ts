/**
 * 
 * @param num The number to be checked 
 * @returns The result of checking if the value is positive 
 */
export const isPositiveValue = (num: number) => num >= 0 

/**
 * 
 * @param num The number to be checked 
 * @returns The result of checking if the value is positive & integer 
 */
export const isPositiveInteger = (num: number): boolean => 
  isPositiveValue(num) && Number.isInteger(num)