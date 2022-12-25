import { wordsRemember } from '../WordRemember/store'
import { wordsResults } from './State'

export const reset = () => {
  wordsRemember.rememberedWords = []
  wordsResults.wordsData = []
}