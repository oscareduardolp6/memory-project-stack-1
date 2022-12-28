import { wordsRemember } from '../WordRemember/store'
import { wordsResults } from './State'

/**
 * Reset the data of the memory project, resets to void the remembered words 
 */
export const reset = () => {
  wordsRemember.rememberedWords = []
  wordsResults.wordsData = []
}