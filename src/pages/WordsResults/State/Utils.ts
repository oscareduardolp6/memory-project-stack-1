import { WordState } from "./Types";

/**
 * 
 * @param word A remembered word
 * @returns An object representing the state of the remembered word and the 
 * actual input word 
 */
export const wordToState = (word: string): WordState => ({
  actualWord: '',
  backgroundColor: 'white',
  color: 'black',
  correctWord: word,
})