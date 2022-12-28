/**
 * 
 * @param word 
 * @returns The `word` in uppercase and without starting and ending whitespaces 
 */
export const standarizeString = (word: string) => word.toUpperCase().trim()

/**
 * 
 * @param word1 
 * @param word2 
 * @returns The result of comparing the words, both on uppercase and without starting and ending whitespaces
 */
export const compareStrings = (word1: string, word2: string) => 
  standarizeString(word1) === standarizeString(word2)