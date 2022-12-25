export const standarizeString = (word: string) => word.toUpperCase().trim()

export const compareStrings = (word1: string, word2: string) => 
  standarizeString(word1) === standarizeString(word2)